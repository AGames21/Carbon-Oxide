"use client";

import { useMemo, useState } from "react";
import { GameCard } from "./GameCard";
import type { Game } from "./types";

export function GameGrid({ games }: { games: Game[] }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => ["All", ...new Set(games.map((game) => game.category))], [games]);

  const filtered = useMemo(() => {
    const normalizedQuery = search.toLowerCase().trim();

    return games.filter((game) => {
      const matchesCategory = category === "All" || game.category === category;
      const matchesSearch =
        normalizedQuery.length === 0 ||
        game.title.toLowerCase().includes(normalizedQuery) ||
        game.description.toLowerCase().includes(normalizedQuery) ||
        game.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      return matchesCategory && matchesSearch;
    });
  }, [games, category, search]);

  return (
    <>
      <input
        type="text"
        placeholder="Search games, tags, genres..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        aria-label="Search games"
      />
      <div className="filters">
        {categories.map((option) => (
          <button
            key={option}
            onClick={() => setCategory(option)}
            className={category === option ? "active" : ""}
          >
            {option}
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
    </>
  );
}
