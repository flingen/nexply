import { terms } from "@/content/legal";
import { pageMeta } from "@/lib/meta";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMeta("terms", "/terms");

export default function TermsPage() {
  return (
    <LegalPage title={terms.title} updated={terms.updated}>
      {terms.body}
    </LegalPage>
  );
}
