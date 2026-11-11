import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { Tone } from "@/content/site";
import { tones } from "@/lib/tones";
import { consultButton, contact, contactWhatsappText } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Arrow, Button } from "./Button";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
export function PageHero({
  eyebrow,
  h1,
  sub,
  aside,
  note,
  tone,
}: {
  eyebrow: string;
  h1: string;
  sub: string;
  aside?: ReactNode;
  note?: string;
  tone?: Tone;
}) {
  const t = tone ? tones[tone] : null;
  return (
    <section
      className="relative overflow-hidden border-b border-line pb-16 pt-16 md:pb-24 md:pt-24"
      style={t ? ({ "--eyebrow-line": t.line } as CSSProperties) : undefined}
    >
      <div className={`pointer-events-none absolute inset-0 ${t ? t.glow : "glow-hero"}`} aria-hidden="true" />
      <Container className={`relative ${aside ? "grid items-end gap-12 lg:grid-cols-12 lg:gap-10" : ""}`}>
        <div className={aside ? "lg:col-span-7" : "max-w-[60rem]"}>
          <p className="eyebrow rise">{eyebrow}</p>
          <h1 className="display rise mt-5 max-w-[17ch] text-[clamp(2.75rem,1.5rem+4.6vw,5rem)]" style={{ animationDelay: "60ms" }}>
            {h1}
          </h1>
          <p className="lede rise mt-7 max-w-[54ch]" style={{ animationDelay: "120ms" }}>
            {sub}
          </p>
          <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "180ms" }}>
            <Button href={consultButton.href} arrow>
              {consultButton.label}
            </Button>
          </div>
          {note && <p className="mt-6 text-[14px] text-muted">{note}</p>}
        </div>
        {aside && (
          <div className="rise lg:col-span-4 lg:col-start-9" style={{ animationDelay: "220ms" }}>
            {aside}
          </div>
        )}
      </Container>
    </section>
  );
}
export function AsideCard({ label, items, tone = "blue" }: { label: string; items: string[]; tone?: Tone }) {
  const t = tones[tone];
  return (
    <div className="relative overflow-hidden rounded-2xl bg-surface p-6 shadow-[0_24px_50px_-32px_rgba(0,17,40,0.4)] sm:p-8">
      <span className={`absolute inset-x-0 top-0 h-1 ${t.bg}`} aria-hidden="true" />
      <p className={`text-[15px] font-medium ${t.text}`}>{label}</p>
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-center gap-3 text-[15.5px] text-ink">
            <span className={`h-1.5 w-1.5 flex-none rounded-full ${t.bg}`} aria-hidden="true" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
export function SectionHead({
  eyebrow,
  h2,
  sub,
  link,
  tone = "light",
  accent,
  className = "",
}: {
  eyebrow: string;
  h2: string;
  sub?: string;
  link?: { label: string; href: string };
  tone?: "light" | "dark";
  accent?: Tone;
  className?: string;
}) {
  return (
    <Reveal className={`grid gap-6 lg:grid-cols-12 lg:items-end ${className}`}>
      <div className="lg:col-span-7">
        <p
          className={`eyebrow ${tone === "dark" ? "eyebrow-night" : ""}`}
          style={accent ? ({ "--eyebrow-line": tones[accent].line } as CSSProperties) : undefined}
        >
          {eyebrow}
        </p>
        <h2 className={`h2 mt-4 max-w-[18ch] ${tone === "dark" ? "text-white" : ""}`}>{h2}</h2>
      </div>
      {(sub || link) && (
        <div className="lg:col-span-5">
          {sub && (
            <p className={`text-[17px] leading-relaxed ${tone === "dark" ? "text-night-muted" : "text-ink-2"}`}>{sub}</p>
          )}
          {link && (
            <Link href={link.href} className={`text-link mt-5 ${tone === "dark" ? "border-white/30 text-white" : "text-ink"}`}>
              {link.label}
              <Arrow />
            </Link>
          )}
        </div>
      )}
    </Reveal>
  );
}
export function RuleList({
  items,
  tone = "light",
  accent = "blue",
}: {
  items: string[];
  tone?: "light" | "dark";
  accent?: Tone;
}) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li
          key={it}
          className={`flex gap-3.5 text-[16px] leading-snug ${tone === "dark" ? "text-white/90" : "text-ink-2"}`}
        >
          <span className={`mt-[8px] h-[6px] w-[6px] flex-none rounded-full ${tones[accent].bg}`} aria-hidden="true" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
export function ConsultBand({ h2, body }: { h2: string; body: string }) {
  return (
    <section className="glow-night relative text-white">
      <div className="bar-tri absolute inset-x-0 top-0 h-[3px]" aria-hidden="true" />
      <Container className="grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-7">
          <p className="eyebrow eyebrow-night">Free consultation</p>
          <h2 className="h2 mt-4 max-w-[16ch] text-white">{h2}</h2>
          <p className="mt-6 max-w-[46ch] text-[17px] leading-relaxed text-night-muted">{body}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href={consultButton.href} variant="inverse" arrow>
              {consultButton.label}
            </Button>
            <Button href={whatsappLink(contactWhatsappText)} variant="ghost-dark">
              Message us on WhatsApp
            </Button>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-4 lg:col-start-9 lg:self-end" delay={120}>
          <dl className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.04] px-6 text-[15px]">
            <div className="flex justify-between gap-6 py-4">
              <dt className="text-night-muted">Call</dt>
              <dd>
                <span className="text-white">30 minutes, free</span>
              </dd>
            </div>
            <div className="flex justify-between gap-6 py-4">
              <dt className="text-night-muted">WhatsApp</dt>
              <dd>
                <a
                  href={whatsappLink(contactWhatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent-bright"
                >
                  {contact.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="flex justify-between gap-6 py-4">
              <dt className="text-night-muted">Email</dt>
              <dd>
                <a href={`mailto:${contact.email}`} className="text-white hover:text-accent-bright">
                  {contact.email}
                </a>
              </dd>
            </div>
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
