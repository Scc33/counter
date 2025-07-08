import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Header />

        <main className="max-w-4xl mx-auto py-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Privacy Policy
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-3">
                  🛡️ Simple Privacy Promise
                </h2>
                <p className="text-green-700 dark:text-green-300">
                  We believe privacy should be simple. Trip Countdown is
                  designed to be completely private by default - we don't
                  collect, store, or track any personal information.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                What We Don't Collect
              </h2>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 mb-8">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>
                    Personal information (names, emails, phone numbers)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Account data or user profiles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Countdown details or event information</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Browsing history or usage analytics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>Cookies or tracking technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">✗</span>
                  <span>IP addresses or location data</span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                How It Works
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Trip Countdown operates entirely in your browser. When you
                create a countdown:
              </p>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>
                    Your countdown data is stored locally in your browser's URL
                    parameters
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>
                    No data is sent to our servers or stored in our databases
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>
                    When you share a link, the countdown information is encoded
                    in the URL itself
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>
                    Anyone with the link can view the countdown, but we have no
                    record of who created it
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Third-Party Services
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We use minimal third-party services to keep the app running:
              </p>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>
                    <strong>Vercel:</strong> Hosting and deployment (standard
                    server logs only)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>
                    <strong>No analytics:</strong> We don't use Google
                    Analytics, Facebook Pixel, or any tracking tools
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>
                    <strong>No advertising:</strong> We don't display ads or use
                    ad networks
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Your Rights
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Since we don't collect personal data, there's nothing to
                request, modify, or delete. Your privacy is protected by design.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Changes to This Policy
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-8">
                If we ever change our privacy practices to collect personal
                information, we will update this policy and provide clear notice
                before any changes take effect.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Us
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-8">
                If you have any questions about this privacy policy, please
                contact us. We're committed to transparency and would be happy
                to clarify anything about how we protect your privacy.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Ready to Create Your Countdown?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Rest assured that your privacy is protected while you share
                  the excitement of your upcoming events.
                </p>
                <Link
                  href="/"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
