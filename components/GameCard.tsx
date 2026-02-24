import Image from "next/image";
import Link from "next/link";
import type { Game } from "./types";

export function GameCard({ game }: { game: Game }) {
  return (
    <Link href={`/game/${game.slug}`} className="card" aria-label={`Open ${game.title}`}>
      <Image src={game.thumbnail} alt={game.title} className="thumb" width={640} height={360} priority={false} />
    <Link href={`/game/${game.slug}`} className="card">
      <img src={game.thumbnail} alt={game.title} className="thumb" loading="lazy" />
      <div className="body">
        <h3>{game.title}</h3>
        <p>{game.description}</p>
        <small>{game.category}</small>
        <div>
          {game.tags.map((tag) => (
            <span key={tag} className="badge">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
