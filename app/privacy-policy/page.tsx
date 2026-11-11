import { privacy } from "@/content/legal";
import { pageMeta } from "@/lib/meta";
import { LegalPage } from "@/components/LegalPage";

export const metadata = pageMeta("privacy", "/privacy-policy");

export default function PrivacyPage() {
  return (
    <LegalPage title={privacy.title} updated={privacy.updated}>
      {privacy.body}
    </LegalPage>
  );
}
