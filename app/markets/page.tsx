import { marketsPage } from "@/content/site";
import { pageMeta } from "@/lib/meta";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ConsultBand, PageHero } from "@/components/ui/Blocks";

export const metadata = pageMeta("markets", "/markets");

export default function MarketsPage() {
  const p = marketsPage;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} h1={p.h1} sub={p.sub} />

      {p.regions.map((r, ri) => (
        <section key={r.region} className={`py-16 md:py-24 ${ri > 0 ? "bg-sky" : "bg-paper-2"}`}>
          <Container className="grid gap-10 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-3">
              <h2 className="h2 lg:sticky lg:top-28">{r.region}</h2>
              <span className={`mt-5 block h-1 w-12 rounded-full ${ri === 0 ? "bg-teal" : "bg-accent"}`} aria-hidden="true" />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-9">
              {r.markets.map((m, i) => (
                <Reveal key={m.id} delay={i * 50}>
                  <div id={m.id} className="h-full rounded-2xl bg-surface p-7 shadow-[0_1px_2px_rgba(0,17,40,0.06)]">
                    <h3 className="serif text-[28px] leading-tight tracking-[-0.01em]">{m.name}</h3>
                    <p className="body mt-3">{m.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <ConsultBand h2={p.cta.h2} body={p.cta.body} />
    </>
  );
}
