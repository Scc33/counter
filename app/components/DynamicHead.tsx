"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function DynamicHead() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const date = searchParams.get("date");

  useEffect(() => {
    if (title && date) {
      document.title = `${title} Countdown - Trip Countdown`;
    } else {
      document.title = "Trip Countdown - Share the Excitement with Friends";
    }
  }, [title, date]);

  return null;
}
