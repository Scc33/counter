export default function CountdownExplanation() {
  return (
    <div className="mt-16 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          About Your Countdown
        </h2>

        <div className="text-gray-600 dark:text-gray-400 space-y-4 text-left">
          <p>
            Your countdown is now live! The timer updates every second and shows
            the exact time remaining until your trip.
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
