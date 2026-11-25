// Run: node check.mjs. The page and the contact file must carry the same details.
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const read = (name) => readFileSync(new URL(name, import.meta.url), 'utf8');
const page = read('index.html');
const vcf = read('anthony-quintana.vcf');

for (const detail of ['+18135732760', 'anthony@emctickets.com', 'https://calendly.com/anthony-emctickets/15min', 'https://emctickets.com']) {
  assert(page.includes(detail), `index.html is missing ${detail}`);
  assert(vcf.includes(detail), `the contact file is missing ${detail}`);
}
assert.match(vcf, /^BEGIN:VCARD\r\nVERSION:3\.0\r\n[\s\S]*\r\nEND:VCARD\r\n$/, 'the contact file is not a well-formed vCard');
assert(page.includes('href="anthony-quintana.vcf"'), 'Save contact does not point at the contact file');
console.log('ok');
