import { Suspense } from "react";
import Header from "../components/static/Header";
import Footer from "../components/static/Footer";
import CountdownPageClient from "../components/dynamic/CountdownPageClient";
import CountdownExplanation from "../components/static/CountdownExplanation";

export default function CountdownPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <Header />

        <Suspense
          fallback={
            <div className="flex items-center justify-center py-12">
              <div className="text-lg">Loading countdown...</div>
            </div>
          }
        >
          <CountdownPageClient />
        </Suspense>

        <CountdownExplanation />
        <Footer />
      </div>
    </div>
  );
}
