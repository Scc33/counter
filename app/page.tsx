"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import CountdownForm from "./components/CountdownForm";
import CountdownDisplay from "./components/CountdownDisplay";
import Header from "./components/Header";
import Footer from "./components/Footer";

function CountdownApp() {
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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Header />

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

        <Footer />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-lg">Loading...</div>
        </div>
      }
    >
      <CountdownApp />
    </Suspense>
  );
}
