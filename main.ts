import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I wrote my name, the date, and 'DO NOT EAT' on my lunch, and someone still ate it — HR calls it a team-building exercise in letting go.";

// Gate self-check (RULES.txt): UTF-8 text, 1-200 chars, not only whitespace, one line.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, gate requires 1-200`);
}
if (!ENTRY.trim()) throw new Error("entry is only whitespace");
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${ENTRY.length} chars)`);
