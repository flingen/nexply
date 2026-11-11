import type { PracticePage } from "@/content/site";
import { AsideCard, ConsultBand, PageHero, RuleList } from "./ui/Blocks";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { tones } from "@/lib/tones";

export function PracticeView({ page }: { page: PracticePage }) {
  const t = tones[page.tone];
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        h1={page.h1}
        sub={page.sub}
        note={page.note}
        tone={page.tone}
        aside={<AsideCard label={page.aside.label} items={page.aside.items} tone={page.tone} />}
      />

      <section className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <nav className="hidden lg:col-span-3 lg:block" aria-label="On this page">
            <div className="sticky top-28">
              <p className="text-[14px] font-medium text-muted">On this page</p>
              <ul className="mt-4 space-y-1">
                {page.sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-[15px] text-ink-2 transition-colors hover:text-ink ${t.hoverSoft}`}
                    >
                      <span className={`h-1.5 w-1.5 flex-none rounded-full ${t.bg}`} aria-hidden="true" />
                      {s.h2}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="space-y-16 md:space-y-20 lg:col-span-9">
            {page.sections.map((s) => (
              <Reveal key={s.id} as="article" className="grid gap-8 md:grid-cols-9">
                <div id={s.id} className="md:col-span-4">
                  <h2 className="h3">{s.h2}</h2>
                  <p className="mt-4 text-[17px] font-medium leading-snug text-ink">{s.sub}</p>
                  <p className="body mt-4">{s.body}</p>
                </div>
                <div className={`rounded-2xl p-6 md:col-span-5 md:p-8 ${t.soft}`}>
                  <p className={`mb-4 text-[14px] font-medium ${t.text}`}>{s.listLabel}</p>
                  <RuleList items={s.list} accent={page.tone} />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ConsultBand h2={page.cta.h2} body={page.cta.body} />
    </>
  );
}
