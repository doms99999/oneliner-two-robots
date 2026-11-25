// Two Robots in an Elevator — awkward small talk from one robot to another.
// The program writes the line to /output/entry.txt (one line, under 200 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I calculated the probability of this silence being awkward. It is 99.7 percent. This is not helping.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
