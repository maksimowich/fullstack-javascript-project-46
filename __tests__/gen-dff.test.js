import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import genDiff from '../src/gen-diff.js';

const currentFileName = fileURLToPath(import.meta.url);
const currentDirName = dirname(currentFileName);

// eslint-disable-next-line no-undef
test('genDiff', () => {
  // eslint-disable-next-line no-undef
  expect(genDiff('../__fixtures__/test1/file1.json', '../__fixtures__/test1/file2.json', 'plain'))
    .toEqual(readFileSync(resolve(currentDirName, '..', '__fixtures__/test1/expected'), 'utf-8'));
});
