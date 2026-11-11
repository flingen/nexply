import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Nexply: Compliance, risk and legal for businesses built to last";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("home");
}
