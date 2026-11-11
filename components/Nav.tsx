"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contact, nav } from "@/content/site";
import { Container } from "./ui/Container";
import { Wordmark } from "./ui/Wordmark";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || open ? "border-b border-line bg-paper/92 backdrop-blur-md" : "border-b border-transparent bg-paper"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:bg-ink focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Container className="flex h-[76px] items-center justify-between">
        <Link href="/" className="rounded-sm" aria-label="Nexply home">
          <Wordmark />
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Main">
          {nav.links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`relative px-3 py-2 text-[14.5px] transition-colors ${
                  active ? "text-ink" : "text-ink-2/80 hover:text-ink"
                }`}
              >
                {l.label}
                {active && <span className="absolute inset-x-3 -bottom-[2px] h-[2px] rounded-full bg-accent" />}
              </Link>
            );
          })}
          <Link
            href={nav.cta.href}
            className="ml-4 inline-flex h-11 items-center rounded-full bg-ink px-6 text-[14px] font-medium text-white transition-colors hover:bg-accent-ink"
          >
            {nav.cta.label}
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 h-[1.5px] w-5 bg-ink transition-transform duration-300 ${
                open ? "top-[5px] rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-5 bg-ink transition-transform duration-300 ${
                open ? "top-[5px] -rotate-45" : "top-[10px]"
              }`}
            />
          </span>
        </button>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-76px)] overflow-y-auto border-t border-line bg-paper lg:hidden"
      >
        <Container className="flex flex-col py-6">
          {nav.links.map((l) => (
            <Link key={l.href} href={l.href} className="serif border-b border-line py-4 text-[26px] tracking-[-0.01em]">
              {l.label}
            </Link>
          ))}
          <Link
            href={nav.cta.href}
            className="mt-8 inline-flex h-[52px] items-center justify-center rounded-full bg-ink text-[15px] font-medium text-white"
          >
            {nav.cta.label}
          </Link>
          <a href={`mailto:${contact.email}`} className="mt-5 text-center text-[15px] text-muted">
            {contact.email}
          </a>
        </Container>
      </div>
    </header>
  );
}
