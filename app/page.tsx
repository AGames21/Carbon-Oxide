import games from "@/data/games.json";
import { GameGrid } from "@/components/GameGrid";
import type { Game } from "@/components/types";

export default function HomePage() {
  return (
    <main className="container">
      <h1>Carbon Oxide — Games Hub</h1>
      <p>Add games fast with one JSON file, then deploy to Vercel.</p>
      <GameGrid games={games as Game[]} />
    </main>
  );
}
