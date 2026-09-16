import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";

const manrope = localFont({
  src: "../../public/fonts/manrope-variable.ttf",
  variable: "--font-manrope",
  display: "swap",
  weight: "400 800",
});

export const metadata: Metadata = {
  title: "Bolarin Olabisi | Senior React Native Developer",
  description:
    "Portfolio of Bolarin Olabisi, a senior React Native developer shipping mobile apps across healthtech, fintech, and consumer products.",
};

export const viewport: Viewport = {
  themeColor: "#101312",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
