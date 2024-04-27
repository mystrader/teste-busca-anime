import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "../styles/globals.css";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Busca Anime",
  description: "Prova FrontEnd 2024 - Winnin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mulish.className}>{children}</body>
    </html>
  );
}
