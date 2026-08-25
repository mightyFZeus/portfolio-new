import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bolarin Olabisi | Product Engineer",
  description:
    "Portfolio of Bolarin Olabisi, a product engineer building mobile apps, Go services, and backend systems.",
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
