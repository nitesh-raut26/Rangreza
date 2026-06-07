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
          padding: "56px",
          background: "linear-gradient(150deg, #fbf6ec 0%, #f4ead7 60%, #efd9b6 100%)",
          color: "#2a1d12",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            border: "2px solid rgba(155,34,38,0.35)",
            borderRadius: 24,
            padding: "48px",
          }}
        >
          <div
            style={{
              fontSize: 26,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#9b2226",
              display: "flex",
            }}
          >
            Hand-painted Mithila art
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 104,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            Rangreza Thread
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 34,
              color: "#735c45",
              textAlign: "center",
              maxWidth: 820,
              display: "flex",
            }}
          >
            Madhubani art, painted by hand onto sarees, dupattas, kurtas &amp; more.
          </div>
          <div
            style={{
              marginTop: 40,
              fontSize: 24,
              color: "#9b2226",
              display: "flex",
              gap: 14,
            }}
          >
            <span>Made to order</span>
            <span>·</span>
            <span>One of a kind</span>
            <span>·</span>
            <span>rangrezas.com</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
