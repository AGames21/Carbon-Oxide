import { readFileSync } from "node:fs";

const filesToCheck = [
  "app/game/[slug]/page.tsx",
  "components/GameGrid.tsx",
  "components/GameCard.tsx",
  "app/page.tsx",
  "data/games.json"
];

for (const file of filesToCheck) {
  const source = readFileSync(file, "utf8");
  if (/<<<<<<<|=======|>>>>>>>/.test(source)) {
    console.error(`Merge conflict markers found in ${file}`);
    process.exit(1);
  }
}

JSON.parse(readFileSync("data/games.json", "utf8"));
console.log("verify-repo passed");
