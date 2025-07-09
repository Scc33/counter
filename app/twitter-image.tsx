import { createOpenGraphImage } from "./components/static/OpenGraphImage";

export const runtime = "edge";

export const alt = "Trip Countdown - Share the Excitement with Friends";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image() {
  return createOpenGraphImage({
    title: "🗓️ Trip Countdown",
    subtitle: "Share the excitement with friends",
    showFeatures: true,
  });
}
