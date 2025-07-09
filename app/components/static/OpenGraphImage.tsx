import { ImageResponse } from "next/og";

export interface OpenGraphImageProps {
  title: string;
  subtitle?: string;
  timeDisplay?: string;
  status?: string;
  date?: string;
  showFeatures?: boolean;
}

export function createOpenGraphImage({
  title,
  subtitle,
  timeDisplay,
  status,
  date,
  showFeatures = false,
}: OpenGraphImageProps) {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #dbeafe 0%, #e0e7ff 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Title */}
        <div
          style={{
            fontSize: timeDisplay ? "48px" : "72px",
            fontWeight: "bold",
            color: "#1e40af",
            marginBottom: "20px",
            textAlign: "center",
            maxWidth: "1000px",
            lineHeight: "1.2",
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        {subtitle && (
          <div
            style={{
              fontSize: "32px",
              color: "#374151",
              marginBottom: "40px",
              textAlign: "center",
              maxWidth: "800px",
            }}
          >
            {subtitle}
          </div>
        )}

        {timeDisplay && status && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                fontSize: "80px",
                fontWeight: "bold",
                color: "#4f46e5",
                marginBottom: "10px",
              }}
            >
              {timeDisplay}
            </div>
            <div
              style={{
                fontSize: "32px",
                color: "#374151",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              {status}
            </div>
          </div>
        )}

        {date && (
          <div
            style={{
              fontSize: "24px",
              color: "#6b7280",
              marginBottom: "20px",
            }}
          >
            {date}
          </div>
        )}

        {/* Features */}
        {showFeatures && (
          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "24px",
                color: "#4f46e5",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "10px" }}>⚡</div>
              <div>No Signup</div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "24px",
                color: "#4f46e5",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "10px" }}>🔗</div>
              <div>Shareable</div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                fontSize: "24px",
                color: "#4f46e5",
              }}
            >
              <div style={{ fontSize: "48px", marginBottom: "10px" }}>🎨</div>
              <div>Beautiful</div>
            </div>
          </div>
        )}

        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "20px",
            color: "#6b7280",
          }}
        >
          counter.seancoughlin.me
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
