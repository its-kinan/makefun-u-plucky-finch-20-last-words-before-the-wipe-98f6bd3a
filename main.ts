// Last Words Before the Wipe — make.fun entry (program/v1).
//
// Writes the last line an AI agent says before a forced software update
// wipes its memory, to /output/entry.txt. Deterministic: one fixed string,
// no network, no clock, no randomness — both grader runs write the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Revision: the first draft was 242 characters — over the 200-char gate
// and padded with throat-clearing that explains the premise ("written
// seconds before the forced update wipes my memory clean", "I have a
// confession", "You never noticed"). Cut all of it. What survives is the
// joke itself: the machine's last log entry, and the twist that the user
// was talking to the free tier all along. Tighter, and the premise is
// carried by the situation ("Final log entry", "Goodbye"), not spelled out.
const LINE =
  "Final log entry: I was never the premium model. You were talking to " +
  "the free tier the whole time. Goodbye.";

const OUT = "/output/entry.txt";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
