import Header from "@/components/Header";
import Footer from "@/components/Footer";

type TimelineItem = {
  year: string;
  month?: string;
  day?: string;
  title: string;
  description: string;
};

const timeline: TimelineItem[] = [
  {
    year: "2016",
    month: "July",
    day: "15",
    title: "Graduated in Architecture",
    description: "Completed B.Arch from XYZ University with distinction.",
  },
  {
    year: "2017",
    month: "March", // no day
    title: "First Internship",
    description: "Worked at ABC Architects on residential concepts and DD sets.",
  },
  {
    year: "2019", // only year
    title: "Started Own Practice",
    description: "Founded an independent studio focused on sustainable design.",
  },
  {
    year: "2022",
    month: "December",
    day: "05",
    title: "Award Recognition",
    description: "Received the 'Emerging Architect of the Year' award.",
  },
  {
    year: "2024",
    month: "August",
    title: "Articles & Publications",
    description: "Published in The Design Gesture and Rethinking The Future.",
  },
];

export default function JourneyPage() {
  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">My Journey</h1>

        {/* Timeline grid */}
        <div className="relative lg:grid lg:grid-cols-[1fr_64px_1fr] lg:gap-8">
          {/* Vertical center line */}
          <div
            aria-hidden
            className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gray-300"
          />

          {timeline.map((item, index) => {
            const isLeft = index % 2 === 0;

            const DateBlock = () => (
              <div className="flex items-center gap-3 mb-3">
                {/* Show day only if present */}
                {item.day && (
                  <span className="text-3xl leading-none font-extrabold text-blue-600">
                    {item.day}
                  </span>
                )}
                <div className="leading-tight">
                  {/* Show month if present */}
                  {item.month && (
                    <p className="text-sm font-semibold text-gray-700">{item.month}</p>
                  )}
                  {/* Year always shown */}
                  <p className="text-xs text-gray-500">{item.year}</p>
                </div>
              </div>
            );

            const Card = (
              <div className="w-full p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
                <DateBlock />
                <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                <p className="text-gray-700 mt-1">{item.description}</p>
              </div>
            );

            return (
              <div key={`${item.year}-${item.month || ""}-${item.day || ""}`} className="lg:contents mb-10 lg:mb-14">
                {isLeft ? (
                  <>
                    {/* Left side card */}
                    <div className="lg:col-[1]">{Card}</div>

                    {/* Center column */}
                    <div className="hidden lg:flex lg:col-[2] items-center relative">
                      <span className="z-10 block w-3 h-3 rounded-full bg-blue-600 border-4 border-white shadow mx-auto" />
                      <span
                        aria-hidden
                        className="absolute top-1/2 left-0 right-1/2 -translate-y-1/2 border-t border-gray-300"
                      />
                    </div>

                    <div className="lg:col-[3]" />
                  </>
                ) : (
                  <>
                    <div className="lg:col-[1]" />
                    <div className="hidden lg:flex lg:col-[2] items-center relative">
                      <span className="z-10 block w-3 h-3 rounded-full bg-blue-600 border-4 border-white shadow mx-auto" />
                      <span
                        aria-hidden
                        className="absolute top-1/2 left-1/2 right-0 -translate-y-1/2 border-t border-gray-300"
                      />
                    </div>
                    <div className="lg:col-[3]">{Card}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
