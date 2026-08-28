import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bolarin Olabisi | Senior React Native Developer",
  description:
    "Portfolio of Bolarin Olabisi, a senior React Native developer shipping mobile apps across healthtech, fintech, and consumer products.",
};

export const viewport: Viewport = {
  themeColor: "#f3ecdc",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
