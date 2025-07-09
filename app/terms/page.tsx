import Header from "../components/static/Header";
import Footer from "../components/static/Footer";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Header />

        <main className="max-w-4xl mx-auto py-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Terms of Service
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-200 mb-3">
                  📋 Simple Terms
                </h2>
                <p className="text-blue-700 dark:text-blue-300">
                  Trip Countdown is a free service with simple, straightforward
                  terms. We believe in transparency and keeping things simple.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Acceptance of Terms
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-8">
                By using Trip Countdown, you agree to these Terms of Service. If
                you don&apos;t agree with any part of these terms, please
                don&apos;t use our service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Service Description
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Trip Countdown provides a free web application that allows users
                to:
              </p>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Create countdown timers for upcoming events</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Generate shareable links for countdowns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>View countdowns shared by others</span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Free Service
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Trip Countdown is completely free to use. We don&apos;t charge
                any fees, require subscriptions, or offer premium features. The
                service is provided as-is without any cost to users.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                User Responsibilities
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-6">
                When using Trip Countdown, you agree to:
              </p>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Use the service for lawful purposes only</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Respect the privacy and rights of others</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>
                    Not attempt to disrupt or interfere with the service
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>
                    Not use the service to share inappropriate or harmful
                    content
                  </span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Privacy
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Your privacy is important to us. We don&apos;t collect, store,
                or process any personal information. Please review our{" "}
                <Link
                  href="/privacy"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Privacy Policy
                </Link>{" "}
                for complete details.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Service Availability
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-8">
                We strive to keep Trip Countdown available 24/7, but we
                don&apos;t guarantee uninterrupted service. The service may be
                temporarily unavailable due to maintenance, updates, or
                technical issues.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Intellectual Property
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Trip Countdown and its content are owned by us and protected by
                copyright and other intellectual property laws. You may use the
                service for personal, non-commercial purposes only.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Limitation of Liability
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Trip Countdown is provided &quot;as is&quot; without warranties
                of any kind. We&apos;re not liable for any damages arising from
                your use of the service.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Changes to Terms
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-8">
                We may update these terms from time to time. We&apos;ll notify
                users of any significant changes by updating the &quot;Last
                updated&quot; date at the top of this page.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h2>

              <p className="text-gray-700 dark:text-gray-300 mb-8">
                If you have questions about these terms, please contact us.
                We&apos;re committed to transparency and will be happy to
                clarify anything.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Ready to Start Counting Down?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  These terms are designed to be fair and transparent. We want
                  you to enjoy using Trip Countdown with confidence.
                </p>
                <Link
                  href="/"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Create Your Countdown
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
