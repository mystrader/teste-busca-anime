import type { Metadata } from "next";
import "../styles/globals.css";
import { mulish } from "./utils/font";



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
    <html lang="en" className={`${mulish.className}`}>
      <body>{children}</body>
    </html>
  );
}
