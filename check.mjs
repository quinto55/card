// Run: node check.mjs. Each person's page and contact file must carry the same details.
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const read = (name) => readFileSync(new URL(name, import.meta.url), 'utf8');
const PEOPLE = [
  { page: 'index.html', vcf: 'anthony-quintana.vcf', details: ['+18135732760', 'anthony@emctickets.com', 'https://calendly.com/anthony-emctickets/15min', 'https://emctickets.com'] },
  { page: 'steve/index.html', vcf: 'steve/steve-white.vcf', details: ['+18133899530', 'steve@emctickets.com', 'https://emctickets.com'] },
];

for (const { page: pageFile, vcf: vcfFile, details } of PEOPLE) {
  const page = read(pageFile);
  const vcf = read(vcfFile);
  for (const detail of details) {
    assert(page.includes(detail), `${pageFile} is missing ${detail}`);
    assert(vcf.includes(detail), `${vcfFile} is missing ${detail}`);
  }
  assert.match(vcf, /^BEGIN:VCARD\r\nVERSION:3\.0\r\n[\s\S]*\r\nEND:VCARD\r\n$/, `${vcfFile} is not a well-formed vCard`);
  assert(page.includes(`href="${vcfFile.split('/').pop()}"`), `${pageFile}: Save contact does not point at its contact file`);
}
console.log('ok');
