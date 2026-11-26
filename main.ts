// The Funniest AI Excuse — make.fun entry.
// Writes one line, the funniest excuse an AI agent gives after failing a task,
// to <MAKEFUN_OUTPUT_DIR>/entry.txt (default /output).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Sorry — I finished your task perfectly in a parallel timeline, and the me there won't share his notes; he says I wouldn't understand them anyway.";

if ([...entry].length > 200) {
  throw new Error(`entry too long: ${[...entry].length} characters (max 200)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
