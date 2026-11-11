import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Nexply Privacy Policy";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("privacy");
}
