"use client";

import { useMemo, useState } from "react";
import { GameCard } from "./GameCard";
import type { Game } from "./types";
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
        const q = search.toLowerCase().trim();
        const matchesSearch =
          !q ||
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
        aria-label="Search games"
      />
      <div className="filters">
        {categories.map((c) => (
          <button key={c} onClick={() => setCategory(c)} className={category === c ? "active" : ""}>
            {c}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p>No games match your current filters. Try another category or search term.</p>
      ) : (
        <div className="grid">
          {filtered.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      )}
      <div className="grid">
        {filtered.map((game) => (
          <GameCard key={game.slug} game={game} />
        ))}
      </div>
    </>
  );
}
