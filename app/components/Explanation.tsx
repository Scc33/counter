"use client";

import { usePathname } from "next/navigation";

export default function Explanation() {
  const pathname = usePathname();
  const isCountdownPage = pathname === "/countdown";

  if (isCountdownPage) {
    return (
      <div className="mt-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            About Your Countdown
          </h2>

          <div className="text-gray-600 dark:text-gray-400 space-y-4 text-left">
            <p>
              Your countdown is now live! The timer updates every second and
              shows the exact time remaining until your trip.
            </p>

            <p>
              <strong>What you can do:</strong>
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Share the current URL with friends and family</li>
              <li>Copy the link using the &ldquo;Share Link&rdquo; button</li>
              <li>Create a new countdown anytime</li>
              <li>View the countdown on any device</li>
            </ul>

            <p>
              The countdown automatically adjusts for different time zones, so
              everyone sees the same countdown regardless of where they are.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          How This Countdown Works
        </h2>

        <div className="text-gray-600 dark:text-gray-400 space-y-4 text-left">
          <p>
            This countdown timer creates shareable links that you can send to
            friends and family. When you set a title and target date, the app
            automatically creates a unique URL for your countdown.
          </p>

          <p>
            <strong>Key Features:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Real-time countdown updates every second</li>
            <li>Shareable URLs that preserve your countdown settings</li>
            <li>Works across different time zones</li>
            <li>Responsive design for mobile and desktop</li>
            <li>Dark mode support</li>
          </ul>

          <p>
            Simply enter a title (like &ldquo;Vacation&rdquo; or
            &ldquo;Birthday&rdquo;) and select your target date. The countdown
            will start immediately, and you can share the URL with others.
          </p>
        </div>
      </div>
    </div>
  );
}
