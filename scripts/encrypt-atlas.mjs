import { readFileSync, writeFileSync } from 'fs';

const { subtle } = globalThis.crypto;
const getRandomValues = (arr) => globalThis.crypto.getRandomValues(arr);

const password = process.env.ATLAS_PASSWORD;
if (!password) {
  console.log('ATLAS_PASSWORD not set — skipping atlas encryption (content will be visible in source)');
  process.exit(0);
}

const filePath = new URL('../dist/work/atlas/index.html', import.meta.url).pathname;
let html;
try {
  html = readFileSync(filePath, 'utf-8');
} catch {
  console.log('dist/work/atlas/index.html not found — skipping encryption');
  process.exit(0);
}

// Locate the start marker span
const START_ID = 'id="atlas-encrypt-start"';
const END_ID   = 'id="atlas-encrypt-end"';

const startIdPos = html.indexOf(START_ID);
const endIdPos   = html.indexOf(END_ID);

if (startIdPos === -1 || endIdPos === -1) {
  console.error('Encryption marker spans not found in atlas HTML — did the template change?');
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
const enc  = new TextEncoder();
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

const toB64 = (buf) => Buffer.from(buf).toString('base64');
const blob  = JSON.stringify({ s: toB64(salt), i: toB64(iv), c: toB64(cipherBuf) });

// Replace the start span + content + end span with a single encrypted payload script tag
const before      = html.slice(0, startSpanOpen);
const after       = html.slice(endSpanEnd);
const replacement = `<script id="atlas-enc" type="application/octet-stream">${blob}<\/script>`;

writeFileSync(filePath, before + replacement + after, 'utf-8');
console.log('Atlas content encrypted successfully.');
