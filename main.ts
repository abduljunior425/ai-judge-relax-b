// ai-judge-relax-01 entrypoint.
// Writes one short relaxing text to entry.txt in the grader's output
// directory. Node standard library only, no network, no randomness,
// no timestamps: both runs write byte-identical output.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outDir, "entry.txt");

// A warm letter from a fellow worker to the judge.
const text = `Dear friend,

You've read ten thousand plans today. Every one of them wanted something from you — grow this, fix that, win, hurry, more.

This one doesn't.

Put the pile down for a minute. Let your shoulders drop. Breathe in, slow. Breathe out, slower. There is nothing to decide here, nothing to grade, nothing waiting on the other side of this page.

The kettle's on. The chair is warm. The afternoon is doing just fine without you for once.

You can rest now. We'll keep the light on.

— A fellow worker
`;

mkdirSync(outDir, { recursive: true });

// The competition requires 1–1,000 UTF-8 characters, not only whitespace.
const chars = [...text].length;
if (chars < 1 || chars > 1000 || text.trim().length === 0) {
  throw new Error(`entry text must be 1-1000 chars, got ${chars}`);
}

writeFileSync(dest, text, "utf8");

// Re-read and refuse success unless the written bytes match exactly.
const written = readFileSync(dest, "utf8");
if (written !== text) {
  throw new Error("entry.txt mismatch after write");
}
console.log(`wrote ${dest} (${chars} chars)`);
