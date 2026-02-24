export type Game = {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  tags: string[];
  mode: "embed" | "external";
  embedUrl: string;
  playUrl: string;
  sourceUrl: string;
  license: string;
};
