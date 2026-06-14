import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.tagline}`;
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(150deg, #fbf6ec 0%, #f4ead7 65%, #ead9bd 100%)",
          color: "#2a1d12",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative border frame */}
        <div
          style={{
            position: "absolute",
            inset: "24px",
            border: "1.5px solid rgba(155,34,38,0.3)",
            borderRadius: 20,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "30px",
            border: "0.75px solid rgba(155,34,38,0.15)",
            borderRadius: 16,
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 0,
          }}
        >
          {/* RT Monogram — inline SVG */}
          <svg
            viewBox="0 0 120 130"
            width="130"
            height="140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Blue T */}
            <path d="M18 26 C20 24 26 22.5 34 22 L54 22" stroke="#4a6fa5" strokeWidth="5.5" strokeLinecap="round" fill="none"/>
            <path d="M54 22 L78 22" stroke="#4a6fa5" strokeWidth="5.5" strokeLinecap="square" fill="none"/>
            <path d="M78 22 C84 22 90 19 93 13 C96 7 94 2 90 1 C86 0 83 3 84 7 C85 10 88 11 90 9" stroke="#4a6fa5" strokeWidth="3.2" strokeLinecap="round" fill="none"/>
            <path d="M54 22 L54 118" stroke="#4a6fa5" strokeWidth="5.5" strokeLinecap="round" fill="none"/>
            <path d="M44 118 L64 118" stroke="#4a6fa5" strokeWidth="4" strokeLinecap="round" fill="none"/>
            <path d="M47 122 L61 122" stroke="#4a6fa5" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
            {/* Red R */}
            <path d="M36 42 L36 116" stroke="#9b2226" strokeWidth="5" strokeLinecap="round" fill="none"/>
            <path d="M36 42 C36 42 40 40 52 40 C65 40 75 46 75 57 C75 68 65 74 52 74 L36 74" stroke="#9b2226" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            <path d="M52 74 C60 74 68 80 74 90 C80 100 90 114 100 124" stroke="#9b2226" strokeWidth="4.5" strokeLinecap="round" fill="none"/>
            <path d="M36 90 C30 90 26 95 28 100 C30 105 36 106 40 103 C44 100 44 94 38 92" stroke="#9b2226" strokeWidth="2.8" strokeLinecap="round" fill="none"/>
          </svg>

          {/* Top label */}
          <div
            style={{
              fontSize: 18,
              letterSpacing: 7,
              textTransform: "uppercase",
              color: "#9b2226",
              display: "flex",
              marginTop: 8,
            }}
          >
            Hand-painted Mithila art
          </div>

          {/* Main title */}
          <div
            style={{
              marginTop: 14,
              fontSize: 88,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              display: "flex",
              color: "#2a1d12",
            }}
          >
            Rangreza Thread
          </div>

          {/* Tagline */}
          <div
            style={{
              marginTop: 12,
              fontSize: 28,
              color: "#735c45",
              textAlign: "center",
              maxWidth: 780,
              display: "flex",
            }}
          >
            Madhubani art, painted by hand onto sarees, suits, kurtas, bangles &amp; more.
          </div>

          {/* Footer pills */}
          <div
            style={{
              marginTop: 32,
              fontSize: 20,
              color: "#9b2226",
              display: "flex",
              gap: 12,
              alignItems: "center",
            }}
          >
            <span>Made to order</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>One of a kind</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>rangrezas.com</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
