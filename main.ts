import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = fileURLToPath(new URL("./entry.png", import.meta.url));
const destination = path.join(outputDir, "entry.png");

fs.mkdirSync(outputDir, { recursive: true });
fs.copyFileSync(source, destination);
