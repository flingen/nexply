"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { compliancePage, legalPage, practices, riskPage } from "@/content/site";
import { tones } from "@/lib/tones";
import { Arrow } from "./ui/Button";

const pages = [compliancePage, riskPage, legalPage];

export function PracticeTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const pr = practices[active];
  const t = tones[pr.tone];

  function onKey(e: KeyboardEvent) {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + practices.length) % practices.length;
    setActive(next);
    tabs.current[next]?.focus();
  }

  return (
    <div>
      <div role="tablist" aria-label="Practices" className="flex flex-wrap gap-2" onKeyDown={onKey}>
        {practices.map((p, i) => {
          const on = i === active;
          const tt = tones[p.tone];
          return (
            <button
              key={p.href}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`tab-${p.tone}`}
              aria-selected={on}
              aria-controls={`panel-${p.tone}`}
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              className={`serif relative inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[17px] sm:gap-3 sm:px-6 sm:py-3 sm:text-[clamp(1.25rem,1rem+0.8vw,1.75rem)] tracking-[-0.01em] transition-colors ${
                on ? "bg-ink text-white" : "bg-surface text-ink-2 hover:text-ink"
              }`}
            >
              <span className={`h-2.5 w-2.5 rounded-full ${tt.bg}`} aria-hidden="true" />
              {p.name}
            </button>
          );
        })}
      </div>

      <div
        key={pr.href}
        role="tabpanel"
        id={`panel-${pr.tone}`}
        aria-labelledby={`tab-${pr.tone}`}
        className="fade-up mt-10"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[46ch] text-[19px] leading-snug text-ink">{pr.line}</p>
          <Link href={pr.href} className={`text-link flex-none ${t.text}`}>
            Explore {pr.name.toLowerCase()}
            <Arrow />
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pages[active].sections.map((s) => (
            <Link
              key={s.id}
              href={`${pr.href}#${s.id}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-surface p-6 shadow-[0_1px_2px_rgba(0,17,40,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(0,17,40,0.4)]"
            >
              <span className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${t.bg}`} aria-hidden="true" />
              <span className="flex items-start justify-between gap-4">
                <span className="text-[17px] font-medium leading-snug text-ink">{s.h2}</span>
                <Arrow className={`mt-1 transition-transform group-hover:translate-x-1 ${t.text}`} />
              </span>
              <span className="mt-3 text-[14.5px] leading-relaxed text-muted">{s.sub}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
