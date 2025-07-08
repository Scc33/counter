import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Header />

        <main className="max-w-4xl mx-auto py-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Trip Countdown
            </h1>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Trip Countdown is a simple, elegant tool designed to help you
                share the excitement of your upcoming trips with friends and
                family.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                What We Do
              </h2>

              <ul className="space-y-4 text-gray-700 dark:text-gray-300 mb-8">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>
                    Create beautiful countdown timers for any upcoming event or
                    trip
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>
                    Generate shareable links that you can send to friends and
                    family
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>
                    No registration required - just create and share instantly
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Works on any device - desktop, tablet, or mobile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-3">•</span>
                  <span>Real-time countdown that updates automatically</span>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                How It Works
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      1
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Set Your Date
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Choose the date and time for your countdown
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      2
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Get Your Link
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We generate a unique, shareable URL for your countdown
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      3
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Share & Enjoy
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Send the link to friends and watch the excitement build
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Perfect For
              </h2>

              <div className="grid md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 mb-8">
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Vacation countdowns</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Wedding countdowns</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Birthday celebrations</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Holiday anticipation</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Concert or event countdowns</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span>Any special occasion</span>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Ready to Get Started?
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Creating your first countdown is just a few clicks away. No
                  signup required!
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
