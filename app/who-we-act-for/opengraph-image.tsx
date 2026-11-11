import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Who Nexply acts for";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("sectors");
}
