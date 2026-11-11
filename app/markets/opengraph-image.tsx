import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Markets Nexply works in";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg("markets");
}
