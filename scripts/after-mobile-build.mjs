import { cp, access } from "node:fs/promises";
import { constants } from "node:fs";

const src = new URL("../dist/mobile/mobile.html", import.meta.url);
const dest = new URL("../dist/mobile/index.html", import.meta.url);

async function run() {
  try {
    await access(src, constants.F_OK);
  } catch {
    console.error("Mobile build did not produce dist/mobile/mobile.html");
    process.exit(1);
  }
  await cp(src, dest);
  console.log("Copied mobile.html -> index.html for mobile deployment");
}

run();
