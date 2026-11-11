import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { seo } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export async function renderOg(key: keyof typeof seo) {
  const [semi, regular, logo] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/Geist-SemiBold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/Geist-Regular.ttf")),
    readFile(join(process.cwd(), "public/nexply-shield.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  const title = seo[key].ogTitle;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FBFAF7",
          padding: "64px 72px",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex" }}>
          <img src={logoSrc} width={54} height={65} alt="" />
          <div style={{ display: "flex", flexDirection: "column", marginLeft: 16, justifyContent: "center" }}>
            <span style={{ fontSize: 44, fontWeight: 600, letterSpacing: -2, color: "#001128", lineHeight: 1 }}>Nexply</span>
            <span style={{ fontSize: 15, letterSpacing: 4, color: "#5B6478", marginTop: 8 }}>COMPLIANCE · RISK · LEGAL</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: title.length > 40 ? 74 : title.length > 26 ? 86 : 100,
            fontWeight: 600,
            letterSpacing: -3,
            lineHeight: 1.02,
            color: "#001128",
            maxWidth: 1000,
          }}
        >
          {title.split(" ").map((w, i) => (
            <span key={i} style={{ marginRight: 16 }}>
              {w}
            </span>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <span style={{ fontSize: 26, color: "#56627A", fontWeight: 400 }}>
            Africa · United Kingdom · United States · Canada
          </span>
          <div style={{ display: "flex", gap: 10 }}>
            {["Compliance", "Risk", "Legal"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  padding: "8px 16px",
                  border: "1.5px solid #DCE2EB",
                  borderBottom: "none",
                  borderRadius: "12px 12px 0 0",
                  background: "#001128",
                  fontSize: 22,
                  color: "#FFFFFF",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Geist", data: semi, weight: 600, style: "normal" },
        { name: "Geist", data: regular, weight: 400, style: "normal" },
      ],
    },
  );
}
