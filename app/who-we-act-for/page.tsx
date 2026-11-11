import Link from "next/link";
import { practices, sectorsPage } from "@/content/site";
import { pageMeta } from "@/lib/meta";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ConsultBand, PageHero } from "@/components/ui/Blocks";
import { tones, toneCycle } from "@/lib/tones";

export const metadata = pageMeta("sectors", "/who-we-act-for");

export default function SectorsPage() {
  const p = sectorsPage;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} h1={p.h1} sub={p.sub} />

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {p.items.map((s, i) => (
              <Reveal
                key={s.id}
                as="article"
                delay={(i % 2) * 90}
                className={`${p.items.length % 2 === 1 && i === p.items.length - 1 ? "md:col-span-2" : ""}`}
              >
                <div id={s.id} className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-surface p-7 shadow-[0_1px_2px_rgba(0,17,40,0.06)] transition-shadow hover:shadow-[0_24px_48px_-30px_rgba(0,17,40,0.4)] sm:p-10">
                  <span className={`absolute inset-x-0 top-0 h-1 ${tones[toneCycle[i % 3]].bg}`} aria-hidden="true" />
                  <h2 className="h3">{s.name}</h2>
                  <p className="body mt-3">{s.text}</p>
                  <p className="mb-3 mt-8 text-[14px] font-medium text-muted">{p.needsLabel}</p>
                  <ul className="flex flex-wrap gap-2">
                    {s.needs.map((n) => (
                      <li key={n} className={`rounded-full px-3 py-1.5 text-[14px] text-ink ${tones[toneCycle[i % 3]].soft}`}>
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-[15px] text-muted">Every business above draws on all three practices.</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {practices.map((pr) => (
                <Link key={pr.href} href={pr.href} className={`serif inline-flex items-center gap-2.5 text-[22px] hover:underline hover:underline-offset-4`}>
                  <span className={`h-2 w-2 rounded-full ${tones[pr.tone].bg}`} aria-hidden="true" />
                  {pr.name}
                </Link>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <ConsultBand h2={p.cta.h2} body={p.cta.body} />
    </>
  );
}
