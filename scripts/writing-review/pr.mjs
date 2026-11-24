// Pull request check: reviews prose changed between BASE_SHA and HEAD_SHA.
// Writes writing-review.md (the PR comment) and exits 1 if anything must be fixed.

import { execFileSync } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { review, toMarkdown } from './review.mjs';

const { BASE_SHA, HEAD_SHA } = process.env;
const git = (...args) => execFileSync('git', args, { encoding: 'utf8', maxBuffer: 50e6 });

const PROSE = [/^src\/content\/.+\.mdx?$/, /^src\/pages\/.+\.astro$/, /^public\/.+\.html$/];

const files = git('diff', '--name-only', '--diff-filter=AM', `${BASE_SHA}...${HEAD_SHA}`)
  .split('\n')
  .filter((f) => PROSE.some((re) => re.test(f)));

if (files.length === 0) {
  await writeFile('writing-review.md', '## Writing review\n**Result: Pass**\n\nNo prose changed in this pull request.\n');
  console.log('No prose files changed.');
  process.exit(0);
}

const items = [];
for (const file of files) {
  const added = git('diff', '--name-only', '--diff-filter=A', `${BASE_SHA}...${HEAD_SHA}`, '--', file).trim();
  items.push({
    file,
    text: await readFile(file, 'utf8'),
    changed: added ? null : git('diff', '-U2', `${BASE_SHA}...${HEAD_SHA}`, '--', file),
  });
}

console.log(`Reviewing ${files.length} file(s): ${files.join(', ')}`);
const result = await review(items);
await writeFile('writing-review.md', toMarkdown(result));
console.log(toMarkdown(result));
console.log(`\nTokens: ${JSON.stringify(result.usage)}`);
process.exit(result.result === 'pass' ? 0 : 1);
