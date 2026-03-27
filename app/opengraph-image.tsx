import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Dark Mode for Google Workspace";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a2e 0%, #0a0a14 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              marginRight: "16px",
            }}
          >
            🌙
          </div>
          <div
            style={{
              fontSize: "52px",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-1px",
            }}
          >
            Google Workspace Dark Mode
          </div>
        </div>
        <div
          style={{
            fontSize: "28px",
            color: "#94a3b8",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Beautiful dark themes for Google Docs, Sheets, Slides, and Drive.
          Reduce eye strain instantly.
        </div>
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "48px",
          }}
        >
          {["Docs", "Sheets", "Slides", "Drive"].map((label) => (
            <div
              key={label}
              style={{
                background: "rgba(139, 92, 246, 0.15)",
                border: "1px solid rgba(139, 92, 246, 0.3)",
                borderRadius: "12px",
                padding: "12px 24px",
                fontSize: "22px",
                color: "#a78bfa",
              }}
            >
              {label}
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: "32px",
            fontSize: "20px",
            color: "#64748b",
          }}
        >
          Free Chrome Extension
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
