import { ImageResponse } from "next/og";

export const alt = "OpenHexa — les données publiques françaises, transformées en outils utiles.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b0b12 0%, #1e1b4b 55%, #3730a3 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <svg width="52" height="52" viewBox="0 0 32 32">
            <polygon points="16,2 29,9 29,23 16,30 3,23 3,9" fill="#818cf8" />
            <polygon points="16,8 23,12 23,20 16,24 9,20 9,12" fill="#0b0b12" />
          </svg>
          <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>OpenHexa</span>
        </div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 980 }}>
          Les données publiques françaises, transformées en outils utiles.
        </div>
        <div style={{ display: "flex", gap: 14, marginTop: 40 }}>
          {["Open source", "Données 100 % publiques", "Immo · Essence"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                fontSize: 22,
                padding: "8px 20px",
                borderRadius: 999,
                border: "1.5px solid rgba(255,255,255,0.35)",
                color: "#e0e0f8",
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
