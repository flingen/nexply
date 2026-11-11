import { whyPage, home } from "@/content/site";
import { pageMeta } from "@/lib/meta";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ConsultBand, PageHero, SectionHead } from "@/components/ui/Blocks";
import { Comparison } from "@/components/Comparison";
import { tones, toneCycle } from "@/lib/tones";

export const metadata = pageMeta("why", "/why-nexply");

export default function WhyPage() {
  const p = whyPage;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} h1={p.h1} sub={p.sub} />
      <section className="py-20 md:py-28">
        <Container>
          <SectionHead eyebrow={p.gaps.eyebrow} h2={p.gaps.h2} />
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-10">
            {p.gaps.items.map((g, i) => (
              <Reveal key={g.title} delay={i * 90} className="relative overflow-hidden rounded-2xl bg-surface p-7 shadow-[0_1px_2px_rgba(0,17,40,0.06)]">
                <span className={`absolute inset-x-0 top-0 h-1 ${tones[toneCycle[i]].bg}`} aria-hidden="true" />
                <h3 className="serif text-[24px] leading-tight tracking-[-0.01em]">{g.title}</h3>
                <p className="body mt-4">{g.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="relative mt-12 overflow-hidden rounded-2xl bg-surface p-7 pl-9 shadow-[0_24px_50px_-36px_rgba(0,17,40,0.4)] md:p-10 md:pl-12">
            <span className="absolute inset-y-0 left-0 w-[4px] bg-gradient-to-b from-accent via-teal to-gold" aria-hidden="true" />
            <p className="serif max-w-[40ch] text-[clamp(1.5rem,1.2rem+1vw,2.1rem)] leading-snug tracking-[-0.01em] text-ink">
              {p.gaps.close}
            </p>
          </Reveal>
        </Container>
      </section>
      <section className="bg-sky py-20 md:py-28">
        <Container>
          <SectionHead eyebrow={home.compare.eyebrow} h2={home.compare.h2} sub={home.compare.sub} />
          <Reveal className="mt-14">
            <Comparison />
          </Reveal>
        </Container>
      </section>
      <section id="engagement" className="glow-night py-20 text-white md:py-28">
        <Container>
          <SectionHead tone="dark" eyebrow={p.engagement.eyebrow} h2={p.engagement.h2} />
          <ol className="mt-14 grid gap-10 md:mt-16 md:grid-cols-4 md:gap-8">
            {p.engagement.steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 80} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <span className={`flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-semibold ${tones[toneCycle[i % 3]].bg} text-night`}>{i + 1}</span>
                <h3 className="serif mt-4 text-[24px] leading-tight">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-night-muted">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <ConsultBand h2={p.cta.h2} body={p.cta.body} />
    </>
  );
}
