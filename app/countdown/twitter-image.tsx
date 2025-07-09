import { createOpenGraphImage } from "../components/static/OpenGraphImage";

export const runtime = "edge";

export const alt = "Countdown Timer";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

export default async function Image({
  searchParams,
}: {
  searchParams: Record<string, string | string[]> | undefined;
}) {
  // Handle case where searchParams is undefined
  if (!searchParams) {
    return createOpenGraphImage({
      title: "🗓️ Trip Countdown",
      subtitle: "Create your countdown",
    });
  }

  const title = searchParams.title as string;
  const date = searchParams.date as string;

  if (!title || !date) {
    // Fallback for invalid parameters
    return createOpenGraphImage({
      title: "🗓️ Trip Countdown",
      subtitle: "Create your countdown",
    });
  }

  // Calculate time remaining
  const targetDate = new Date(date);
  const now = new Date();
  const timeRemaining = targetDate.getTime() - now.getTime();

  let timeDisplay = "";
  let status = "";

  if (timeRemaining > 0) {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );

    if (days > 0) {
      timeDisplay = `${days} day${days !== 1 ? "s" : ""}`;
      if (hours > 0) timeDisplay += ` ${hours}h`;
    } else if (hours > 0) {
      timeDisplay = `${hours}h ${minutes}m`;
    } else {
      timeDisplay = `${minutes}m`;
    }
    status = "until";
  } else {
    timeDisplay = "NOW!";
    status = "Time to go!";
  }

  const formattedDate = targetDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return createOpenGraphImage({
    title,
    timeDisplay,
    status,
    date: formattedDate,
  });
}
