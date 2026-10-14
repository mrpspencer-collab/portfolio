// Prints a share link for each password-locked case study.
// Run: npm run share-links   (asks for the site password; nothing is saved)
import { readFileSync, readdirSync } from 'fs';
import { createInterface } from 'readline';
import { shareKeyFor, PASSWORD_ITERATIONS } from './share-key.mjs';

const SITE = 'https://paulamsbary.com';
const projectsDir = new URL('../src/content/projects/', import.meta.url).pathname;

const lockedSlugs = readdirSync(projectsDir)
  .filter(f => f.endsWith('.md'))
  .filter(f => {
    const front = readFileSync(projectsDir + f, 'utf-8').split('---')[1] ?? '';
    const hidden = /^visibility:\s*(private|hidden)\s*$/m.test(front);
    return !hidden && /^password:\s*true\s*$/m.test(front);
  })
  .map(f => f.replace(/\.md$/, ''));

function askHidden(question) {
  const rl = createInterface({ input: process.stdin, output: process.stdout, terminal: true });
  rl._writeToOutput = s => { if (s.startsWith(question)) process.stdout.write(s); };
  return new Promise(resolve => rl.question(question, answer => { rl.close(); process.stdout.write('\n'); resolve(answer); }));
}

// Checks the password against a live page, so a typo doesn't produce links that don't work.
async function passwordWorks(password, slug) {
  const html = await (await fetch(`${SITE}/work/${slug}/`)).text();
  const match = html.match(/<script id="encrypted-content"[^>]*>(.*?)<\/script>/s);
  if (!match) return null;
  const blob = JSON.parse(match[1]);
  if (!blob.p) return null; // live page is from before share links
  const { subtle } = globalThis.crypto;
  const b = s => Buffer.from(s, 'base64');
  const km = await subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
  const key = await subtle.deriveKey({ name: 'PBKDF2', salt: b(blob.s), iterations: PASSWORD_ITERATIONS, hash: 'SHA-256' }, km, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
  try { await subtle.decrypt({ name: 'AES-GCM', iv: b(blob.p.i) }, key, b(blob.p.c)); return true; } catch { return false; }
}

const password = (await askHidden('Site password: ')).trim();
const check = await passwordWorks(password, lockedSlugs[0]);
if (check === false) { console.error('That password doesn\'t unlock the live site. Nothing printed.'); process.exit(1); }
if (check === null) console.log('(Couldn\'t check the password against the live site yet. Links will work once the site is updated.)');

console.log('\nShare links (anyone with a link can open that case study):\n');
for (const slug of lockedSlugs) console.log(`${SITE}/work/${slug}/#k=${shareKeyFor(password, slug)}`);
console.log('');
