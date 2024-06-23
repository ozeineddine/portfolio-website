import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@components/Header";
import Footer from "@components/Footer";

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Website for Omar Zeineddine",
  description: "My portfolio website- created using react with typescript, and using next.js"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <main className="flex-grow">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
