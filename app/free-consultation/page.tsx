import { consult, contact, contactWhatsappText } from "@/content/site";
import { pageMeta } from "@/lib/meta";
import { whatsappLink } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { ConsultForm } from "@/components/ConsultForm";
import { RuleList } from "@/components/ui/Blocks";

export const metadata = pageMeta("consult", "/free-consultation");

export default function ConsultPage() {
  const p = consult;
  return (
    <section className="relative overflow-hidden pb-24 pt-14 md:pb-32 md:pt-24">
      <div className="glow-hero pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="eyebrow rise">{p.eyebrow}</p>
          <h1 className="display rise mt-7 max-w-[12ch] text-[clamp(2.75rem,1.5rem+4.2vw,4.75rem)]" style={{ animationDelay: "60ms" }}>
            {p.h1}
          </h1>
          <p className="lede rise mt-6 max-w-[40ch]" style={{ animationDelay: "120ms" }}>
            {p.sub}
          </p>

          <div className="rise mt-12" style={{ animationDelay: "180ms" }}>
            <p className="mb-3 text-[14px] font-medium text-muted">{p.getLabel}</p>
            <RuleList items={p.get} />
          </div>

          <div className="mt-12">
            <p className="mb-4 text-[14px] font-medium text-muted">{p.next.h2}</p>
            <ol className="space-y-4">
              {p.next.steps.map((s, i) => (
                <li key={s} className="flex items-center gap-4 text-[15.5px] leading-snug text-ink-2">
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-accent-soft text-[13px] font-semibold text-accent-ink">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 rounded-2xl bg-surface p-6 text-[15px]">
            <p className="text-muted">{p.orLabel}</p>
            <p className="mt-3 flex flex-col gap-1.5">
              <a
                href={whatsappLink(contactWhatsappText)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink hover:text-accent-ink"
              >
                WhatsApp {contact.phoneDisplay}
              </a>
              <a href={`mailto:${contact.email}`} className="font-medium text-ink hover:text-accent-ink">
                {contact.email}
              </a>
              <span className="text-muted">{contact.address}</span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ConsultForm />
        </div>
      </Container>
    </section>
  );
}
