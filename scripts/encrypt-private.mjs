import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';

const { subtle } = globalThis.crypto;
const getRandomValues = (arr) => globalThis.crypto.getRandomValues(arr);

// Encrypts every case study page built with visibility: private or password: true.
// The password secret is still named ATLAS_PASSWORD.
const password = process.env.ATLAS_PASSWORD;

const workDir = new URL('../dist/work/', import.meta.url).pathname;
if (!existsSync(workDir)) {
  console.log('dist/work not found — skipping encryption');
  process.exit(0);
}

const START_ID = 'id="encrypt-start"';
const END_ID   = 'id="encrypt-end"';

const lockedPages = readdirSync(workDir).filter(slug => {
  const filePath = `${workDir}${slug}/index.html`;
  return existsSync(filePath) && readFileSync(filePath, 'utf-8').includes(START_ID);
});
if (!password) {
  if (process.env.PUBLIC_BUILD === 'true' && lockedPages.length > 0) {
    // Never publish locked pages unencrypted on the public site.
    console.error(`ATLAS_PASSWORD not set but these pages need it: ${lockedPages.join(', ')}`);
    process.exit(1);
  }
  console.log('ATLAS_PASSWORD not set — skipping encryption (locked content will be visible in source)');
  process.exit(0);
}

const enc   = new TextEncoder();
const toB64 = (buf) => Buffer.from(buf).toString('base64');

for (const slug of readdirSync(workDir)) {
  const filePath = `${workDir}${slug}/index.html`;
  if (!existsSync(filePath)) continue;

  const html = readFileSync(filePath, 'utf-8');
  const startIdPos = html.indexOf(START_ID);
  const endIdPos   = html.indexOf(END_ID);
  if (startIdPos === -1 && endIdPos === -1) continue; // not a private page
  if (startIdPos === -1 || endIdPos === -1) {
    console.error(`Only one encryption marker found in work/${slug} — did the template change?`);
    process.exit(1);
  }

  // Find the full start span element: from its opening '<' to the end of '</span>'
  const startSpanOpen  = html.lastIndexOf('<', startIdPos);
  const startSpanClose = html.indexOf('</span>', startIdPos) + '</span>'.length;

  // Content to encrypt: everything from end of start span to opening of end span
  const contentStart = startSpanClose;
  const contentEnd   = html.lastIndexOf('<', endIdPos);

  // Find the end of the end span element
  const endSpanEnd = html.indexOf('</span>', endIdPos) + '</span>'.length;

  const plaintext = html.slice(contentStart, contentEnd);

  // Encrypt with AES-GCM + PBKDF2
  const salt = getRandomValues(new Uint8Array(16));
  const iv   = getRandomValues(new Uint8Array(12));

  const keyMaterial = await subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey']);
  const key = await subtle.deriveKey(
    { name: 'PBKDF2', salt, iterations: 200000, hash: 'SHA-256' },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt']
  );
  const cipherBuf = await subtle.encrypt({ name: 'AES-GCM', iv }, key, enc.encode(plaintext));

  const blob = JSON.stringify({ s: toB64(salt), i: toB64(iv), c: toB64(cipherBuf) });

  // Replace the start span + content + end span with a single encrypted payload script tag
  const before      = html.slice(0, startSpanOpen);
  const after       = html.slice(endSpanEnd);
  const replacement = `<script id="encrypted-content" type="application/octet-stream">${blob}<\/script>`;

  writeFileSync(filePath, before + replacement + after, 'utf-8');
  console.log(`work/${slug} encrypted successfully.`);
}
