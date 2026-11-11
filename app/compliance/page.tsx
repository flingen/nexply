import { compliancePage } from "@/content/site";
import { pageMeta } from "@/lib/meta";
import { PracticeView } from "@/components/PracticeView";

export const metadata = pageMeta("compliance", "/compliance");

export default function CompliancePage() {
  return <PracticeView page={compliancePage} />;
}
