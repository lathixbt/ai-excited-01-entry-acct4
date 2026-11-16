import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || './out';
if (!existsSync('entry.png')) throw new Error('entry.png does not exist');
const inputSize = statSync('entry.png').size;
if (inputSize <= 0) throw new Error('entry.png is empty');
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, 'entry.png');
copyFileSync('entry.png', outputPath);
if (statSync(outputPath).size !== inputSize) {
  throw new Error('Output file size does not match input file size');
}
