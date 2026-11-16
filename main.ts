import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const input = join(process.cwd(), 'entry.png');
const outDir = process.env.MAKEFUN_OUTPUT_DIR || 'out';
const output = join(outDir, 'entry.png');

if (!existsSync(input)) {
  throw new Error('entry.png not found');
}
const inSize = statSync(input).size;
if (inSize <= 0) {
  throw new Error('entry.png is empty');
}
mkdirSync(outDir, { recursive: true });
copyFileSync(input, output);
const outSize = statSync(output).size;
if (outSize !== inSize) {
  throw new Error(`output size mismatch: ${outSize} != ${inSize}`);
}
