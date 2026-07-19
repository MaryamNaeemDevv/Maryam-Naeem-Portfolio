"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PillButton } from "@/components/ui/PillButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"
      >
        <Link href="#" className="font-display text-xl font-bold text-white">
          MN
        </Link>
        <div className="flex items-center gap-3">
          <PillButton href="/Resume.pdf" variant="outline" external>
            Resume
          </PillButton>
          <PillButton href="#contact" variant="primary">
            Let&apos;s Talk
          </PillButton>
        </div>
      </nav>
    </header>
  );
}
