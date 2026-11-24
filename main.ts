import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line patch note for a real-life bug: phantom phone vibrations
// triggered by trouser fabric. The phone buzzes, you check, nothing
// there — the classic denim false positive.
const LINE =
  "v3.2.1: fixed phantom vibration alerts triggered by trouser fabric; device now requires a real notification before buzzing.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
