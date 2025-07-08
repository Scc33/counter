"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CountdownForm from "./CountdownForm";
import CountdownDisplay from "./CountdownDisplay";

export default function CountdownApp() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // Get countdown data from URL parameters
  const title = searchParams.get("title") || "";
  const targetDate = searchParams.get("date") || "";

  useEffect(() => {
    setIsClient(true);
  }, []);

  const updateCountdown = (newTitle: string, newDate: string) => {
    const params = new URLSearchParams();
    if (newTitle) params.set("title", newTitle);
    if (newDate) params.set("date", newDate);

    const newUrl = params.toString() ? `/?${params.toString()}` : "/";
    router.push(newUrl);
  };

  if (!isClient) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {!title || !targetDate ? (
        <CountdownForm onSubmit={updateCountdown} />
      ) : (
        <CountdownDisplay
          title={title}
          targetDate={targetDate}
          onReset={() => updateCountdown("", "")}
        />
      )}
    </div>
  );
}
