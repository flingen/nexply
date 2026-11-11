import { legalPage } from "@/content/site";
import { pageMeta } from "@/lib/meta";
import { PracticeView } from "@/components/PracticeView";

export const metadata = pageMeta("legal", "/legal");

export default function LegalPage() {
  return <PracticeView page={legalPage} />;
}
