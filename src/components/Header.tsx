"use client";

import Link from "next/link";
import { ArchiveImage } from "@/components/ArchiveImage";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { images, navItems, site } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        solid
          ? "glass-header shadow-[var(--shadow-soft)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="page-container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          <ArchiveImage
            src={images.logo.src}
            fallbackSrc={images.logo.fallback}
            alt={site.name}
            width={200}
            height={32}
            className={`h-8 w-auto max-w-[200px] transition-all ${
              solid ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-nav rounded-full px-4 py-2 text-xs uppercase tracking-widest transition-all duration-200 ${
                  active
                    ? solid
                      ? "bg-gold/15 font-medium text-gold-dark"
                      : "bg-white/15 font-medium text-white"
                    : solid
                      ? "text-muted hover:bg-surface-alt hover:text-foreground"
                      : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition md:hidden ${
            solid ? "text-foreground hover:bg-surface-alt" : "text-white hover:bg-white/10"
          }`}
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <nav
        className={`overflow-hidden border-t transition-all duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
        } ${solid ? "border-border/60 bg-surface/95" : "border-white/20 bg-black/40 backdrop-blur-md"}`}
      >
        <div className="page-container space-y-1 py-3">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`font-nav block rounded-lg px-4 py-3 text-sm uppercase tracking-wide transition ${
                  active
                    ? "bg-gold/15 font-medium text-gold-dark"
                    : solid
                      ? "text-foreground hover:bg-surface-alt"
                      : "text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
