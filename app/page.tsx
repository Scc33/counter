import { Suspense } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CountdownApp from "./components/CountdownApp";
import Explanation from "./components/Explanation";

export default function Home() {
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
          <CountdownApp />
        </Suspense>

        <Explanation />
        <Footer />
      </div>
    </div>
  );
}
