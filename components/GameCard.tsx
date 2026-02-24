import Link from "next/link";
import Image from "next/image";
import type { Game } from "./types";

export function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/game/${game.slug}`} className="card" aria-label={`Open ${game.title}`}>
      <Image
        src={game.thumbnail}
        alt={game.title}
        className="thumb"
        width={640}
        height={360}
        priority={false}
      />

      <div className="cardBody">
        <h3>{game.title}</h3>
        <p>{game.description}</p>
        <div className="meta">
          <span>{game.category}</span>
        </div>
      </div>
    </Link>
  );
}
