import { readdir, readFile, writeFile, mkdir, createWriteStream } from 'fs';
import { existsSync } from 'fs';
import { promisify } from 'util';
import { basename, join } from 'path';
import https from 'https';
import http from 'http';
import { URL } from 'url';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname   = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, '../src/content/projects');
const PUBLIC_DIR  = join(__dirname, '../public/images');
const PUBLIC_PATH = '/images/';
const readdirP    = promisify(readdir);
const readFileP   = promisify(readFile);
const writeFileP  = promisify(writeFile);
const mkdirP      = promisify(mkdir);

const URL_RE = /https?:\/\/[^\s"')>]+\.(?:png|jpg|jpeg|gif|webp|svg|avif)/gi;

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = createWriteStream(dest);
    const mod  = url.startsWith('https') ? https : http;
    const req  = mod.get(url, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        download(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    });
    req.on('error', err => { file.close(); reject(err); });
  });
}

function safeFilename(url) {
  try {
    const u = new URL(url);
    return basename(u.pathname).replace(/[^a-zA-Z0-9._-]/g, '_');
  } catch {
    return basename(url).replace(/[^a-zA-Z0-9._-]/g, '_');
  }
}

async function run() {
  await mkdirP(PUBLIC_DIR, { recursive: true });

  const files  = (await readdirP(CONTENT_DIR)).filter(f => f.endsWith('.md'));
  const urlMap = new Map();

  for (const file of files) {
    const content = await readFileP(join(CONTENT_DIR, file), 'utf8');
    for (const url of (content.match(URL_RE) || [])) {
      if (!urlMap.has(url)) urlMap.set(url, null);
    }
  }

  console.log(`Found ${urlMap.size} unique image URLs.\n`);

  const counts = { ok: 0, skip: 0, fail: 0 };
  for (const url of urlMap.keys()) {
    const filename = safeFilename(url);
    const dest     = join(PUBLIC_DIR, filename);
    urlMap.set(url, PUBLIC_PATH + filename);

    if (existsSync(dest)) {
      console.log(`  skip   ${filename}`);
      counts.skip++;
      continue;
    }
    try {
      await download(url, dest);
      console.log(`  ok     ${filename}`);
      counts.ok++;
    } catch (err) {
      console.warn(`  FAIL   ${url}  (${err.message})`);
      urlMap.set(url, url);
      counts.fail++;
    }
  }

  let rewrites = 0;
  for (const file of files) {
    let content = await readFileP(join(CONTENT_DIR, file), 'utf8');
    let changed = false;
    for (const [original, local] of urlMap.entries()) {
      if (local !== original && content.includes(original)) {
        content = content.split(original).join(local);
        changed = true;
      }
    }
    if (changed) {
      await writeFileP(join(CONTENT_DIR, file), content, 'utf8');
      console.log(`  updated  ${file}`);
      rewrites++;
    }
  }

  console.log(`\nDone. Downloaded: ${counts.ok}  Skipped: ${counts.skip}  Failed: ${counts.fail}  Files rewritten: ${rewrites}`);
}

run().catch(console.error);
