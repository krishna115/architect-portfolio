import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Journey | Deepika Shukla",
  description:
    "Explore the professional and creative journey of Deepika Shukla through milestones in architecture, design, writing, and innovation.",
  openGraph: {
    title: "My Journey | Deepika Shukla",
    description:
      "Explore the professional and creative journey of Deepika Shukla through milestones in architecture, design, writing, and innovation.",
    url: "https://www.dsrajan.com/journey",
    siteName: "D Srajan",
    images: [
      {
        url: "https://www.dsrajan.com/assets/about.jpg", // Replace with your banner image
        width: 1200,
        height: 630,
        alt: "Deepika Shukla Journey Timeline",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Journey | Deepika Shukla",
    description:
      "Follow the journey of Deepika Shukla in design, writing, and innovation.",
    images: ["https://www.dsrajan.com/assets/about.jpg"],
  },
  alternates: {
    canonical: "https://www.dsrajan.com/journey",
  },
};

export default function JourneyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
