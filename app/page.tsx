import Link from "next/link";
import { home, practices, sectorsPage } from "@/content/site";
import { pageMeta } from "@/lib/meta";
import { tones, toneCycle } from "@/lib/tones";
import { Container } from "@/components/ui/Container";
import { Arrow, Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ConsultBand, SectionHead } from "@/components/ui/Blocks";
import { PracticeTabs } from "@/components/PracticeTabs";
import { LifecycleStepper } from "@/components/LifecycleStepper";
import { Comparison } from "@/components/Comparison";
import { Faq } from "@/components/Faq";

export const metadata = pageMeta("home", "/");

export default function HomePage() {
  const { hero, umbrella, compare, dpco } = home;
  const lead = hero.h1.replace("built to last.", "");
  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-14 md:pb-28 md:pt-24">
        <div className="glow-hero pointer-events-none absolute inset-0" aria-hidden="true" />
        <Container className="relative grid items-end gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-8">
            <p className="eyebrow rise">{hero.eyebrow}</p>
            <h1
              className="display rise mt-6 max-w-[15ch] text-[clamp(3rem,1.4rem+5.8vw,6.25rem)]"
              style={{ animationDelay: "60ms" }}
            >
              {lead}
              <span className="relative inline-block text-accent-ink">
                built to last.
                <svg
                  className="swash absolute -bottom-[0.12em] left-0 h-[0.28em] w-full"
                  viewBox="0 0 300 24"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 16 C 60 6, 120 4, 180 10 S 270 20, 296 8"
                    fill="none"
                    stroke="#d4a72c"
                    strokeWidth="5"
                    strokeLinecap="round"
                    pathLength={1}
                  />
                </svg>
              </span>
            </h1>
            <p className="lede rise mt-9 max-w-[52ch]" style={{ animationDelay: "140ms" }}>
              {hero.sub}
            </p>
            <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "200ms" }}>
              <Button href={hero.primary.href} arrow>
                {hero.primary.label}
              </Button>
              <Button href={hero.secondary.href} variant="secondary">
                {hero.secondary.label}
              </Button>
            </div>
          </div>

          <nav
            aria-label="Practices"
            className="rise hidden overflow-hidden rounded-2xl bg-surface shadow-[0_30px_60px_-36px_rgba(0,17,40,0.45)] lg:col-span-4 lg:block"
            style={{ animationDelay: "260ms" }}
          >
            <div className="bar-tri h-1" aria-hidden="true" />
            <ul className="p-2">
              {practices.map((p) => {
                const t = tones[p.tone];
                return (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className={`group flex items-center gap-4 rounded-xl px-4 py-4 transition-colors ${t.hoverSoft}`}
                    >
                      <span className={`h-10 w-1 flex-none rounded-full ${t.bg}`} aria-hidden="true" />
                      <span className="flex-1">
                        <span className="serif block text-[25px] leading-none tracking-[-0.01em]">{p.name}</span>
                        <span className="mt-1.5 block text-[14px] leading-snug text-ink-2">{p.line}</span>
                      </span>
                      <Arrow className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink" />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className="bg-gradient-to-r from-ink to-[#003a7a] px-6 py-4 text-[13.5px] text-white">
              {umbrella.pillars.join(" · ")}
            </p>
          </nav>
        </Container>
      </section>
      <section id="practices" className="bg-paper-2 py-20 md:py-28">
        <Container>
          <SectionHead eyebrow={umbrella.eyebrow} h2={umbrella.h2} sub={umbrella.sub} />
          <Reveal className="mt-12">
            <PracticeTabs />
          </Reveal>
        </Container>
      </section>
      <section className="bg-sky py-20 md:py-28">
        <Container>
          <SectionHead eyebrow={compare.eyebrow} h2={compare.h2} sub={compare.sub} link={compare.link} />
          <Reveal className="mt-12 md:mt-14">
            <Comparison />
          </Reveal>
        </Container>
      </section>
      <section className="glow-night py-20 text-white md:py-28">
        <Container>
          <SectionHead
            tone="dark"
            eyebrow={home.lifecycle.eyebrow}
            h2={home.lifecycle.h2}
            sub={home.lifecycle.sub}
            link={home.lifecycle.link}
          />
          <Reveal className="mt-12 md:mt-16">
            <LifecycleStepper />
          </Reveal>
        </Container>
      </section>
      <section className="py-20 md:py-28">
        <Container>
          <SectionHead eyebrow={home.sectors.eyebrow} h2={home.sectors.h2} link={home.sectors.link} />
          <ul className="mt-12 md:mt-16">
            {sectorsPage.items.map((s, i) => {
              const t = tones[toneCycle[i % 3]];
              return (
                <Reveal as="li" key={s.id} delay={i * 40}>
                  <Link
                    href={`/who-we-act-for#${s.id}`}
                    className="group block border-b border-line py-6 transition-colors hover:border-ink/40 md:py-7"
                  >
                    <span className="grid items-baseline gap-2 md:grid-cols-12 md:gap-8">
                      <span className="serif flex items-center gap-4 text-[clamp(1.5rem,1.2rem+0.9vw,2rem)] leading-tight tracking-[-0.01em] md:col-span-6">
                        <span className={`h-2.5 w-2.5 flex-none rounded-full ${t.bg} transition-transform group-hover:scale-150`} aria-hidden="true" />
                        {s.name}
                      </span>
                      <span className="text-[15.5px] text-ink-2 md:col-span-5">{s.text}</span>
                      <Arrow className="hidden justify-self-end text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink md:col-span-1 md:block" />
                    </span>
                    <span className="expand">
                      <span className="block">
                        <span className="flex flex-wrap gap-2 pt-4 md:pl-[calc(50%+1rem)]">
                          {s.needs.map((n) => (
                            <span key={n} className={`rounded-full px-3 py-1 text-[13.5px] text-ink ${t.soft}`}>
                              {n}
                            </span>
                          ))}
                        </span>
                      </span>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>
      <section className="pb-8">
        <Container>
          <Reveal className="grid items-center gap-8 rounded-2xl bg-accent-soft p-8 md:grid-cols-12 md:gap-10 md:p-12">
            <div className="md:col-span-8">
              <p className="eyebrow">{dpco.badge}</p>
              <h2 className="h3 mt-3">{dpco.h2}</h2>
              <p className="body mt-3 max-w-[56ch]">{dpco.body}</p>
            </div>
            <div className="md:col-span-4 md:justify-self-end">
              <Button href={dpco.link.href} variant="secondary" arrow>
                {dpco.link.label}
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <Faq />

      <ConsultBand
        h2="One call covers all three."
        body="A free 30-minute call with a specialist. You'll leave with your regulatory map, your main exposures and clear next steps."
      />
    </>
  );
}
