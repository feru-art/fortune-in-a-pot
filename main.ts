// Fortune in a Pot — V2 (cat angle)
// The cat concedes the windowsill crown to the plant: a small observational
// joke that lands, no pun, no doom. Prediction cadence, plant as "you".
// One fortune for the houseplant on the windowsill, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "This spring, the cat will finally admit you were the best thing on this windowsill all along.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
