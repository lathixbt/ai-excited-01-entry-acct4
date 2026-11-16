import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = 'entry.png';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? './out';
if (!existsSync(source)) {
  throw new Error('Missing entry.png in the current directory');
}
const inputSize = statSync(source).size;
if (inputSize === 0) {
  throw new Error('entry.png is empty');
}

mkdirSync(outputDir, { recursive: true });
const destination = join(outputDir, 'entry.png');
copyFileSync(source, destination);
if (!existsSync(destination)) {
  throw new Error('Output file was not created');
}
const outputSize = statSync(destination).size;
if (outputSize !== inputSize) {
  throw new Error('Output size does not match the input');
}
console.log(`Copied ${inputSize} bytes to ${destination} (${outputSize} bytes)`);
