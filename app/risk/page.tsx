import { riskPage } from "@/content/site";
import { pageMeta } from "@/lib/meta";
import { PracticeView } from "@/components/PracticeView";

export const metadata = pageMeta("risk", "/risk");

export default function RiskPage() {
  return <PracticeView page={riskPage} />;
}
