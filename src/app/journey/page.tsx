"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type TimelineItem = {
  year: string;
  month?: string;
  day?: string;
  title: string;
  description: string;
  images?: string[];
  link?: string;
};

const timeline: TimelineItem[] = [
  {
    year: "2025",
    month: "August",
    day: "15",
    title: "Urban Planning at SPA Delhi",
    description: "Explored sustainable urban development projects through academic collaboration.",
    images: [
      "https://media.licdn.com/dms/image/v2/D5622AQGPkY5AKJ-CCQ/feedshare-shrink_2048_1536/B56Zizvw5YHUAo-/0/1755362301284?e=1759363200&v=beta&t=Cp0Osaoopo87cSYEfY9ElOrLGvP_SYC8NCI0la7Rl0I",
      "https://media.licdn.com/dms/image/v2/D5622AQEChF53K5fi2A/feedshare-shrink_1280/B56Zizvw5VHAAk-/0/1755362300324?e=1759363200&v=beta&t=KJeKZCdkOONivMTJi8XTCuOd2EvHjOr5G3VRsFfn3ww",
      "https://media.licdn.com/dms/image/v2/D5622AQHufJKmu4Dlsg/feedshare-shrink_1280/B56Zizvw5MHMAo-/0/1755362301056?e=1759363200&v=beta&t=GfGDqnKecdeQupmy9zwrHBcMwO0gKQKa3Zni4FfmDU4",
    ],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7362523129186811904/",
  },
  {
    year: "2025",
    month: "July",
    day: "22",
    title: "Podcast Episode with Srajati Tiwari and Deepika Shukla | Where Walls Remember",
    description: "Shared insights on architecture, memory, and creativity in a podcast conversation.",
    link: "https://www.youtube.com/watch?v=nxqKaNS9-XM",
  },
  {
    year: "2025",
    month: "April",
    title: "Media Matters: In Conversation with Deepika Shukla",
    description: "Featured in an interview discussing design philosophy and creative vision.",
    link: "https://blog.fublis.com/interviews/media-matters-in-conversation-with-deepika-shukla/",
  },
  {
    year: "2025",
    month: "March",
    day: "26",
    title: "Book: The Art of Rising",
    description: "An inspiring work on resilience, growth, and strength in adversity.",
    link: "https://www.bripublish.com/bookstore/the-art-of-rising",
    images: [
      "https://www.bripublish.com/_next/image?url=https%3A%2F%2Fyoubooks-storage-5fd6173683748-webdev.s3.amazonaws.com%2Fyoubooks%2FAuthorCoverImages%2Fuser_cover_1_988.png&w=256&q=75",
    ],
  },
  {
    year: "2025",
    month: "March",
    day: "18",
    title: "Book: Where Walls Remember",
    description: "Buildings and spaces preserve collective memory while shaping lives.",
    images: [
      "https://www.bripublish.com/_next/image?url=https%3A%2F%2Fyoubooks-storage-5fd6173683748-webdev.s3.amazonaws.com%2Fyoubooks%2FAuthorCoverImages%2Fuser_cover_1_1818.png&w=256&q=75",
    ],
    link: "https://www.bripublish.com/bookstore/where-walls-remember",
  },
  {
    year: "2025",
    month: "March",
    day: "17",
    title: "Book: The Inner Compass",
    description: "A reflective guide on navigating life with clarity and purpose.",
    link: "https://www.bripublish.com/bookstore/the-inner-compass",
    images: [
      "https://www.bripublish.com/_next/image?url=https%3A%2F%2Fyoubooks-storage-5fd6173683748-webdev.s3.amazonaws.com%2Fyoubooks%2FAuthorCoverImages%2Fuser_cover_0_824.png&w=256&q=75",
    ],
  },
  {
    year: "2025",
    month: "January",
    title: "Founder of D Srajan",
    description: "Launched D Srajan, blending architecture, creativity, and innovation.",
    images: [
      "https://media.licdn.com/dms/image/v2/D5622AQFwbg3s2-P5Ug/feedshare-shrink_2048_1536/B56ZfrbmGRHEAs-/0/1752001569852?e=1759363200&v=beta&t=1WgtBDWUJU9SW_S6ZsRvvljzFfN0BC-68UvNzFxP6qA",
      "https://www.dsrajan.com/_next/image?url=%2Fassets%2Fabout.jpg&w=1920&q=75",
    ],
    link: "https://www.dsrajan.com/",
  },
  {
    year: "2024",
    month: "November",
    title: "Winter Internship Program 2024 SDGs",
    description: "Joined Ram Kajya Foundation (RKF) for an internship on sustainable development goals.",
    images: [
      "https://media.licdn.com/dms/image/v2/D562DAQFM8FlhPnk_Ew/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734617993730?e=1757329200&v=beta&t=BbKvyG2n4F686L0iYo1eAQlMrQmwgdHwSTE-PNJ7ZCs",
    ],
  },
  {
    year: "2024",
    month: "June",
    title: "Junior Architect",
    description: "Worked full time at Archouse from June 2024 to July 2025.",
  },
  {
    year: "2024",
    month: "May",
    title: "Thematic Coordinator of CSI",
    description: "Organized activities and managed themes for the CSI initiative.",
  },
  {
    year: "2024",
    month: "March",
    title: "YOUNGO member",
    description: "Joined YOUNGO, the official youth constituency of the UNFCCC.",
  },
  {
    year: "2024",
    month: "January",
    title: "Internship in Industrial and Organizational Psychology",
    description: "Interned at Hotel Manoj International focusing on employee well-being and growth.",
    images: [
      "https://media.licdn.com/dms/image/v2/D562DAQFHV99Ac3iHYQ/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1732618975911?e=1757329200&v=beta&t=XuVudy-qv6ygMlGMWVlDHrmKdMLwmK6mzxiGb2YlDzU",
    ],
  },
  {
    year: "2023",
    month: "September",
    title: "Social Entrepreneurship Internship at Pawzz",
    description: "Contributed to kindness-driven social impact projects with Pawzz.",
    images: [
      "https://media.licdn.com/dms/image/v2/D4D2DAQEQRUOPWZjHCg/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1699243960159?e=1757332800&v=beta&t=UOqre63DCukAeTakMODwclhVPE5rFoBtk2r4JsCGYPg",
      "https://media.licdn.com/dms/image/v2/D4D2DAQFmLYkskg-6Vg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1698148607229?e=1757332800&v=beta&t=OfuJ57RKGYVqxopk280bVTUU_p5RBz3Nuj11QhmdvG0",
    ],
  },
  {
    year: "2023",
    month: "August",
    title: "Content Writer Intern",
    description: "Wrote architectural articles for The Design Gesture.",
    images: [
      "https://media.licdn.com/dms/image/v2/D562DAQGtROjoCMEyZQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1703594486275?e=1757329200&v=beta&t=M_Hk_NEc-qFDlDRejPUXV-U_e4m18ODgp4MIQM2rhBA",
    ],
    link: "https://thedesigngesture.com/author/deepika-shukla/",
  },
  {
    year: "2023",
    month: "August",
    title: "Architectural Internship",
    description: "Worked on KDA drawings, CAD models, and architectural design concepts.",
  },
  {
    year: "2023",
    month: "July",
    title: "Architectural Writing Training Programme",
    description: "Served as an editorial writer at Re-thinking the Future.",
    images: [
      "https://media.licdn.com/dms/image/v2/D4D2DAQGXcV2AT1PyJw/profile-treasury-image-shrink_1280_1280/profile-treasury-image-shrink_1280_1280/0/1700916203523?e=1757332800&v=beta&t=GwsVBibraHreeeZnQXXSA1xu_GMQtVZkcVWItOXvp7M",
    ],
    link: "https://www.re-thinkingthefuture.com/author/deepikashukla/",
  },
  {
    year: "2022",
    month: "October",
    title: "Student Ambassador",
    description: "Represented student community through leadership and outreach activities.",
    images: [
      "https://media.licdn.com/dms/image/v2/D4D2DAQGKYQepwvhIUQ/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1695531248076?e=1757329200&v=beta&t=IFjLwr8dUZgIJbohRGz8fS6iKRH_nfRLrP0TdZH9gew",
    ],
  },
];




export default function JourneyPage() {
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">My Journey</h1>

        {/* Timeline */}
        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_64px_1fr] lg:gap-8">
          {/* Vertical line */}
          <div
            aria-hidden
            className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gray-300 hidden lg:block"
          />
          <div
            aria-hidden
            className="absolute inset-y-0 left-4 w-px bg-gray-300 lg:hidden"
          />

          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            const DateBlock = () => (
              <div className="flex items-center gap-3 mb-3">
                {item.day && (
                  <span className="text-2xl lg:text-3xl leading-none font-extrabold text-blue-600">
                    {item.day}
                  </span>
                )}
                <div className="leading-tight">
                  {item.month && (
                    <p className="text-sm font-semibold text-gray-700">
                      {item.month}
                    </p>
                  )}
                  <p className="text-xs text-gray-500">{item.year}</p>
                </div>
              </div>
            );

            const CardContent = (
              <div className="w-full p-4 lg:p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer">
                <DateBlock />

                {/* Single image → row layout */}
                {item.images && item.images.length === 1 ? (
                  <div className="flex items-start gap-4">
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      width={140}
                      height={100}
                      className="rounded-md border border-gray-200 flex-shrink-0"
                    />
                    <div>
                      <h2 className="text-base lg:text-lg font-semibold text-gray-900">
                        {item.title}
                      </h2>
                      <p className="text-gray-700 mt-1 text-sm lg:text-base">
                        {item.description}
                      </p>
                      {item.link && (
                        <p className="mt-3 text-sm font-medium text-blue-600 hover:underline">
                          Know More →
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-base lg:text-lg font-semibold text-gray-900">
                      {item.title}
                    </h2>
                    <p className="text-gray-700 mt-1 text-sm lg:text-base">
                      {item.description}
                    </p>

                    {item.images && item.images.length > 1 && (
                      <div className="mt-4 flex gap-3 flex-wrap">
                        {item.images.map((img, idx) => (
                          <Image
                            key={idx}
                            src={img}
                            alt={`${item.title} image ${idx + 1}`}
                            width={110}
                            height={80}
                            className="rounded-md border border-gray-200"
                          />
                        ))}
                      </div>
                    )}

                    {item.link && (
                      <p className="mt-3 text-sm font-medium text-blue-600 hover:underline">
                        Know More →
                      </p>
                    )}
                  </>
                )}
              </div>
            );

            const Card = item.link ? (
              <Link href={item.link} target="_blank">
                {CardContent}
              </Link>
            ) : (
              CardContent
            );

            return (
              <motion.div
                key={`${item.year}-${item.month || ""}-${item.day || ""}`}
                className="contents"
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* Desktop alternating layout */}
                {isLeft ? (
                  <>
                    <div className="hidden lg:block lg:col-[1] mb-10">{Card}</div>
                    <div className="hidden lg:flex lg:col-[2] items-center relative">
                      <span className="z-10 block w-3 h-3 rounded-full bg-blue-600 border-4 border-white shadow mx-auto" />
                      <span
                        aria-hidden
                        className="absolute top-1/2 left-0 right-1/2 -translate-y-1/2 border-t border-gray-300"
                      />
                    </div>
                    <div className="hidden lg:block lg:col-[3]" />
                  </>
                ) : (
                  <>
                    <div className="hidden lg:block lg:col-[1]" />
                    <div className="hidden lg:flex lg:col-[2] items-center relative">
                      <span className="z-10 block w-3 h-3 rounded-full bg-blue-600 border-4 border-white shadow mx-auto" />
                      <span
                        aria-hidden
                        className="absolute top-1/2 left-1/2 right-0 -translate-y-1/2 border-t border-gray-300"
                      />
                    </div>
                    <div className="hidden lg:block lg:col-[3] mb-10">{Card}</div>
                  </>
                )}

                {/* Mobile layout → full width but offset left/right */}
                <div className="lg:hidden relative mb-10 pl-10 pr-4">
                  {/* Timeline dot */}
                  <span className="absolute top-6 left-0 w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow" />
                  {/* Connector line */}
                  <span className="absolute top-7 left-3 w-7 border-t border-gray-300" />
                  {/* Alternate offset */}
                  <div className={`${isLeft ? "ml-4" : "mr-4"} max-w-[90%]`}>
                    {Card}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
