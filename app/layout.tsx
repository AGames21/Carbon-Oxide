import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carbon Oxide Games Hub",
  description: "Fast browser games hub you can deploy on Vercel"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
