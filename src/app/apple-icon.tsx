import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(160deg, #4f46e5 0%, #3730a3 100%)",
          borderRadius: 40,
        }}
      >
        <svg width="108" height="108" viewBox="0 0 32 32">
          <polygon points="16,2 29,9 29,23 16,30 3,23 3,9" fill="#ffffff" />
          <polygon points="16,8 23,12 23,20 16,24 9,20 9,12" fill="#4f46e5" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
