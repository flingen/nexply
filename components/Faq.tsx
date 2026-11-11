import { faq } from "@/content/site";
import { Reveal } from "./ui/Reveal";
import { Container } from "./ui/Container";

export function Faq() {
  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow">{faq.eyebrow}</p>
            <h2 className="h2 mt-4 max-w-[12ch]">{faq.h2}</h2>
          </Reveal>
        </div>
        <div className="faq lg:col-span-8">
          {faq.items.map((f) => (
            <details key={f.q} className="group border-b border-line py-1 first:border-t">
              <summary className="flex items-center justify-between gap-6 py-5 text-[18px] font-medium text-ink transition-colors hover:text-accent-ink">
                {f.q}
                <span className="plus flex h-8 w-8 flex-none items-center justify-center rounded-full bg-accent-soft text-accent-ink" aria-hidden="true">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5">
                    <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="body max-w-[62ch] pb-6">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
