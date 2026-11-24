// Eval set for the writing reviewer: runs it on cases with known right answers
// and scores it. Exits 1 if any case fails, so a change to the prompt, the model
// or the guide version that makes the reviewer worse fails its own check.
//
// A case passes when:
//   - the result (pass / fix) matches what's expected,
//   - every must_catch phrase appears in a "Fix before publishing" quote, and
//   - no must_not_flag phrase appears in one.

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { review } from './review.mjs';

const DIR = 'evals/writing';
const { cases } = JSON.parse(await readFile(path.join(DIR, 'cases.json'), 'utf8'));
const norm = (s) => s.toLowerCase().replace(/[’']/g, "'");

const rows = [];
let failed = 0;

for (const c of cases) {
  const text = await readFile(path.join(DIR, 'cases', c.file), 'utf8');
  let r;
  try {
    r = await review([{ file: c.file, text, changed: null }]);
  } catch (e) {
    console.log(`::error title=${c.file}::${String(e.stack || e.message).replace(/\n/g, ' ').slice(0, 900)}`);
    rows.push({ file: c.file, ok: false, notes: [`error: ${e.message}`] });
    failed++;
    continue;
  }
  r.must_fix ??= [];
  const quotes = r.must_fix.map((f) => norm(f.quote)).join(' | ');
  const notes = [];
  if (r.result !== c.expect) notes.push(`expected ${c.expect}, got ${r.result}`);
  for (const p of c.must_catch) if (!quotes.includes(norm(p))) notes.push(`missed "${p}"`);
  for (const p of c.must_not_flag) if (quotes.includes(norm(p))) notes.push(`wrongly flagged "${p}"`);
  const ok = notes.length === 0;
  const found = r.must_fix.map((f) => `"${f.quote}" (${f.pattern})`).join(' / ') || 'no must-fix findings';
  console.log(`::${ok ? 'notice' : 'error'} title=${c.file} ${ok ? 'passed' : 'failed'}::${notes.join('; ') || 'as expected'}. Found: ${found}`.replace(/\n/g, ' ').slice(0, 1500));
  if (!ok) failed++;
  rows.push({ file: c.file, ok, expect: c.expect, got: r.result, mustFix: r.must_fix.length, notes, findings: r.must_fix });
}

const md = [
  '## Writing reviewer eval',
  `**${cases.length - failed} of ${cases.length} cases passed**`,
  '',
  '| Case | Expected | Got | Must-fix findings | Result |',
  '|---|---|---|---|---|',
  ...rows.map((x) => `| ${x.file} | ${x.expect ?? ''} | ${x.got ?? ''} | ${x.mustFix ?? ''} | ${x.ok ? 'Pass' : 'Fail: ' + x.notes.join('; ')} |`),
  '',
  '<details><summary>Findings per case</summary>',
  '',
  ...rows.flatMap((x) => [
    `**${x.file}**`,
    ...(x.findings?.length ? x.findings.map((f) => `- "${f.quote}" (${f.pattern})`) : ['- none']),
    '',
  ]),
  '</details>',
].join('\n');

await writeFile('writing-eval.md', md);
console.log(md);
process.exit(failed === 0 ? 0 : 1);
