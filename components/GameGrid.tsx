"use client";

import { useMemo, useState } from "react";
import type { Game } from "./types";
import { GameCard } from "./GameCard";

export function GameGrid({ games }: { games: Game[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => ["All", ...new Set(games.map((g) => g.category))], [games]);

  const filtered = useMemo(
    () =>
      games.filter((game) => {
        const matchesCategory = category === "All" || game.category === category;
        const q = search.toLowerCase();
        const matchesSearch =
          game.title.toLowerCase().includes(q) ||
          game.description.toLowerCase().includes(q) ||
          game.tags.some((t) => t.toLowerCase().includes(q));
        return matchesCategory && matchesSearch;
      }),
    [games, category, search]
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search games, tags, genres..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="filters">
        {categories.map((c) => (
          <button key={c} onClick={() => setCategory(c)} className={category === c ? "active" : ""}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid">
        {filtered.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </>
  );
}
