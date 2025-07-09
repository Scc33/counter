"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CountdownDisplay from "./CountdownDisplay";

export default function CountdownPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [title, setTitle] = useState("");
  const [targetDate, setTargetDate] = useState("");

  useEffect(() => {
    setIsClient(true);
    // Get countdown data from URL parameters after client-side hydration
    const urlTitle = searchParams.get("title");
    const urlDate = searchParams.get("date");

    if (!urlTitle || !urlDate) {
      // Redirect to home if no valid parameters
      router.push("/");
      return;
    }

    setTitle(urlTitle);
    setTargetDate(urlDate);
  }, [searchParams, router]);

  const handleReset = () => {
    router.push("/");
  };

  if (!isClient) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  // Don't render anything if we're redirecting
  if (!title || !targetDate) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-lg">Redirecting...</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <CountdownDisplay
        title={title}
        targetDate={targetDate}
        onReset={handleReset}
      />
    </div>
  );
}
