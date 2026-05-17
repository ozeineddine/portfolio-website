import "./globals.css";
import type { Metadata } from "next";
import Header from "@components/Header";
import Footer from "@components/Footer";

export const metadata: Metadata = {
  title: "Omar Zeineddine — Founder of Vlogit",
  description:
    "Omar Zeineddine is building Vlogit, a social video app launching May 2026. 200K+ followers. 1,700+ beta testers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@900&family=Epilogue:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-page text-ink">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
