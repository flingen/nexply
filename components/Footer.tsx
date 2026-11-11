import Link from "next/link";
import { contact, contactWhatsappText, footer, nav, practices } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { Container } from "./ui/Container";
import { Wordmark } from "./ui/Wordmark";

export function Footer() {
  const year = new Date().getFullYear();
  const firm = nav.links.filter((l) => !practices.some((p) => p.href === l.href));
  return (
    <footer className="relative bg-night-2 text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <Wordmark tone="dark" size="lg" />
          <p className="mt-6 max-w-[34ch] text-[15px] leading-relaxed text-night-muted">{footer.line}</p>
        </div>

        <nav className="md:col-span-2" aria-label="Practices">
          <p className="text-[14px] font-medium text-night-muted">Practices</p>
          <ul className="mt-5 space-y-3 text-[15px]">
            {practices.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="text-white/85 transition-colors hover:text-white">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="md:col-span-2" aria-label="Firm">
          <p className="text-[14px] font-medium text-night-muted">Firm</p>
          <ul className="mt-5 space-y-3 text-[15px]">
            {[...firm, nav.cta].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/85 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic md:col-span-4">
          <p className="text-[14px] font-medium text-night-muted">Lagos office</p>
          <p className="mt-5 text-[15px] leading-relaxed text-white/85">
            {contact.addressLines.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </p>
          <ul className="mt-5 space-y-2 text-[15px]">
            <li>
              <a href={`mailto:${contact.email}`} className="text-white/85 transition-colors hover:text-white">
                {contact.email}
              </a>
            </li>
            <li>
              <a href={`tel:${contact.phoneTel}`} className="text-white/85 transition-colors hover:text-white">
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink(contactWhatsappText)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent-bright transition-colors hover:text-white"
              >
                {footer.whatsappLabel}
              </a>
            </li>
          </ul>
        </address>
      </Container>

      <Container>
        <div className="flex flex-col gap-4 border-t border-night-line py-7 text-[13px] text-night-muted md:flex-row md:items-center md:justify-end">
          <div className="flex flex-none items-center gap-5">
            {footer.legal.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-white">
                {l.label}
              </Link>
            ))}
            <span>© {year} Nexply</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
