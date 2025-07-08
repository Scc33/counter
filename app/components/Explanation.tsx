export default function Explanation() {
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
            automatically updates the URL with your countdown parameters.
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
            will start immediately, and you can copy the URL from your
            browser&apos;s address bar to share with others.
          </p>
        </div>

        <div className="mt-8 text-gray-500 dark:text-gray-400">
          <p>Share this link with friends to show them the same countdown!</p>
        </div>
      </div>
    </div>
  );
}
