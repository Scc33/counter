"use client";

import { useState, useEffect } from "react";

interface CountdownDisplayProps {
  title: string;
  targetDate: string;
  onReset: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownDisplay({
  title,
  targetDate,
  onReset,
}: CountdownDisplayProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);
  const [showCopied, setShowCopied] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate + "T00:00:00");
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
        setIsExpired(false);
      } else {
        setIsExpired(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString + "T00:00:00");
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isExpired) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-2xl mx-auto text-center">
        <div className="text-6xl mb-6">🎉</div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
          {title} is here!
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Your trip started on {formatDate(targetDate)}
        </p>
        <button
          onClick={onReset}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-200"
        >
          Create New Countdown
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {formatDate(targetDate)}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 text-center text-white">
          <div className="text-3xl md:text-4xl font-bold mb-2">
            {timeLeft.days}
          </div>
          <div className="text-sm opacity-90">Days</div>
        </div>
        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-center text-white">
          <div className="text-3xl md:text-4xl font-bold mb-2">
            {timeLeft.hours.toString().padStart(2, "0")}
          </div>
          <div className="text-sm opacity-90">Hours</div>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-center text-white">
          <div className="text-3xl md:text-4xl font-bold mb-2">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </div>
          <div className="text-sm opacity-90">Minutes</div>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 text-center text-white">
          <div className="text-3xl md:text-4xl font-bold mb-2">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </div>
          <div className="text-sm opacity-90">Seconds</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={copyToClipboard}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          {showCopied ? "Copied!" : "Share Link"}
        </button>
        <button
          onClick={onReset}
          className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-200"
        >
          Create New
        </button>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Share this link with friends to show them the same countdown!
        </p>
      </div>
    </div>
  );
}
