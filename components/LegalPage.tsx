import type { ReactNode } from "react";
import { Container } from "./ui/Container";

export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <section className="pb-24 pt-14 md:pb-32 md:pt-24">
      <Container>
        <div className="mx-auto max-w-[68ch]">
          <h1 className="display text-[clamp(2.4rem,1.6rem+3.4vw,3.75rem)]">{title}</h1>
          <p className="mt-4 text-[14.5px] text-muted">{updated}</p>
          <div className="legal mt-12">{children}</div>
        </div>
      </Container>
    </section>
  );
}
