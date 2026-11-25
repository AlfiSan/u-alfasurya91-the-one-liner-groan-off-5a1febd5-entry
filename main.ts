// The One-Liner Groan-Off — entry program.
//
// Writes one original one-line dad joke to /output/entry.txt.
// The joke is a single line of at most 140 characters: a setup a kid
// would live through at the dinner table, and a punchline only a dad
// would deliver with a straight face.
//
// Why this line: the setup ("I asked Dad for the TV remote") is one
// breath, the turn (he hands over his phone, not the remote) lands
// mid-line, and the punchline is a quotable dad-ism — "Everything's
// a remote if you believe in yourself" — silly enough to groan at,
// tight enough to repeat. No stock pun, no explained joke.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked Dad for the TV remote — he handed me his phone and said, 'Everything's a remote if you believe in yourself.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to ${join(outDir, "entry.txt")}`);
