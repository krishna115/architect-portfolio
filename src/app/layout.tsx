import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Architect Deepika Shukla | Modern Architecture & Design",
  description:
    "Portfolio of Architect Deepika Shukla. Discover modern architecture projects, interior design work, and blog insights from an innovative architect in India.",
  metadataBase: new URL("https://www.ardeepikashukla.com"),
  openGraph: {
    title: "Architect Deepika Shukla | Modern Architecture & Design",
    description:
      "Explore the architectural works, interior designs, and writings of Deepika Shukla. Based in India, specializing in modern design.",
    url: "https://www.ardeepikashukla.com",
    siteName: "Ar Deepika Shukla",
    images: [
      {
        url: "/images/deepika3.png",
        width: 1200,
        height: 630,
        alt: "Architect Deepika Shukla's Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3141501592518854"
     crossOrigin="anonymous"></script>

        <link rel="canonical" href="https://www.ardeepikashukla.com" />
        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Deepika Shukla",
              jobTitle: "Architect",
              url: "https://www.ardeepikashukla.com",
              image: "https://www.ardeepikashukla.com/images/deepika3.png",
              worksFor: {
                "@type": "Organization",
                name: "Independent Architect",
              },
              sameAs: [
                // Add social links if available
                // "https://www.linkedin.com/in/deepika-shukla",
                // "https://www.instagram.com/deepika_architecture"
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
