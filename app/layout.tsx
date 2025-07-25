import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import DynamicHead from "./components/dynamic/DynamicHead";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),
  title: "Trip Countdown - Share the Excitement with Friends",
  description:
    "Create beautiful, shareable countdown timers for your upcoming trips. No signup required - just create and share!",
  keywords:
    "countdown, trip countdown, vacation countdown, travel countdown, share countdown",
  authors: [{ name: "Sean Coughlin", url: "https://seancoughlin.me" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Trip Countdown - Share the Excitement",
    description:
      "Create beautiful, shareable countdown timers for your upcoming trips",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trip Countdown - Share the Excitement",
    description:
      "Create beautiful, shareable countdown timers for your upcoming trips",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={null}>
        <DynamicHead />
      </Suspense>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
