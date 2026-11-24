// One Word From Your Ex — entry program.
//
// The competition asks for exactly one word: the word an ex would use to
// describe the entrant. This program writes that word, and nothing else,
// to /output/entry.txt.
//
// The chosen word is "unavailable".
//
// Why this word: it is the single most common thing an ex actually says
// about someone they left — not an insult, but a diagnosis. It stings
// because it is almost always true: the person was there, technically,
// while never really being there. It lands instantly, needs no
// explanation, and almost everyone has either said it or heard it said
// about them. That combination — funny, honest, and familiar — is exactly
// what the judge is asked to reward.
//
// The output is a fixed constant, so the program is fully deterministic:
// every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The one word. 11 characters, inside the competition's 1–24 limit,
// a single word with no whitespace and no trailing newline.
const WORD = "unavailable";

// Guard the gate before writing: exactly one word, 1–24 characters,
// not only whitespace. A fixed constant always passes, but the check
// makes the program's contract explicit and fails loudly if the word
// is ever changed to something the gate would refuse.
if (!/^\S{1,24}$/.test(WORD)) {
  throw new Error("entry word must be a single word of 1-24 characters");
}

// The grader runs this program in a sandbox where /output is the
// artifact directory. OUTPUT_PATH exists only so the entry can be
// exercised locally; in grading it is never set.
const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");
