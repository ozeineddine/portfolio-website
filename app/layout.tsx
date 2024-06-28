import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@components/Header";
import Sidebar from "@components/Sidebar";
import Footer from "@components/Footer";
import Sidebar1 from "@components/Sidebar1"

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Website for Omar Zeineddine",
  description:
    "My portfolio website- created using react with typescript, and using next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Adding the custom fonts here */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header></Header>
        <Sidebar1></Sidebar1>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
