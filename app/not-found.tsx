import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { consultButton } from "@/content/site";

export default function NotFound() {
  return (
    <section className="py-32">
      <Container>
        <p className="eyebrow">404</p>
        <h1 className="display mt-6 text-[clamp(2.6rem,1.6rem+3.6vw,4.25rem)]">This page isn&apos;t on file.</h1>
        <p className="lede mt-5 max-w-[44ch]">The link may be old. Start from the homepage or book a free consultation.</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Button href="/">Go to homepage</Button>
          <Button href={consultButton.href} variant="secondary">
            {consultButton.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
