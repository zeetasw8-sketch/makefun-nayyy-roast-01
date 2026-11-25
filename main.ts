import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const here = dirname(fileURLToPath(import.meta.url)),
  outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = readFileSync(join(here, "line.txt"), "utf8").trim();
if (line.length === 0 || line.length > 200) throw new Error("line must be 1-200 characters");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line);
console.log(line);
