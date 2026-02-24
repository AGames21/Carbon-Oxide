import Link from "next/link";
import { notFound } from "next/navigation";
import games from "@/data/games.json";
import type { Game } from "@/components/types";

export function generateStaticParams() {
  return (games as Game[]).map((game) => ({ slug: game.slug }));
}

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = (games as Game[]).find((g) => g.slug === params.slug);

  if (!game) notFound();
  if (!game) {
    notFound();
  }

  return (
    <main className="container">
      <Link href="/">← Back to all games</Link>
      <h1>{game.title}</h1>
      <p>{game.description}</p>
      <p>
        Category: <strong>{game.category}</strong>
      </p>
      <p>
        Source: <a href={game.sourceUrl} target="_blank" rel="noreferrer">{game.sourceUrl}</a>
        Source: <a href={game.sourceUrl}>{game.sourceUrl}</a>
      </p>
      <p>License/Terms: {game.license}</p>

      {game.mode === "embed" && game.embedUrl ? (
        <div className="embedWrap">
          <iframe
            src={game.embedUrl}
            title={game.title}
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        <div style={{ aspectRatio: "16/9", width: "100%", border: "1px solid #334155", borderRadius: "14px", overflow: "hidden" }}>
          <iframe src={game.embedUrl} title={game.title} width="100%" height="100%" allowFullScreen />
        </div>
      ) : (
        <a className="playBtn" href={game.playUrl} target="_blank" rel="noreferrer">
          Play on source site
        </a>
      )}
    </main>
  );
}
