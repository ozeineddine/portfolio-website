"use client";

import { useState, useEffect } from "react";

const basePath = process.env.NODE_ENV === "production" ? "/portfolio-website" : "";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 40;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-page/90 backdrop-blur-md border-b border-ink/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 flex justify-between items-center">
        <a
          href="#"
          className="font-barlow font-black text-xl tracking-tight text-ink hover:text-accent transition-colors"
        >
          OZ
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted font-epilogue">
          <a href="#vlogit" className="hover:text-ink transition-colors">
            Vlogit
          </a>
          <a href="#journey" className="hover:text-ink transition-colors">
            Journey
          </a>
          <a href="#story" className="hover:text-ink transition-colors">
            Story
          </a>
        </nav>

        <a
          href="https://vlogit.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-page bg-accent hover:bg-ink px-5 py-2.5 rounded-full transition-colors"
        >
          <span className="w-4 h-4 rounded-md overflow-hidden flex-shrink-0 block">
            <img
              src={`${basePath}/images/vlogit_logo.jpg`}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </span>
          View Vlogit
        </a>
      </div>
    </header>
  );
};

export default Header;
