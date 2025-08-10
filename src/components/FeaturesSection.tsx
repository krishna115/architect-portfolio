// components/FeaturesSection.jsx
import React from "react";
import { Map, BookOpen, Camera, Search } from "lucide-react"; // Lucide icons

const features = [
  {
    title: "Urban Planner",
    description:
      "Designing sustainable, functional, and people-centric spaces for modern cities.",
    icon: Map,
  },
  {
    title: "Author",
    description:
      "Writing thought-provoking books and articles to inspire and educate.",
    icon: BookOpen,
  },
  {
    title: "Model",
    description:
      "Bringing artistic visions to life through professional modeling and campaigns.",
    icon: Camera,
  },
  {
    title: "Researcher",
    description:
      "Exploring innovative solutions and insights through dedicated research.",
    icon: Search,
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
  <div>
    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
      Why Choose Me
    </p>
    <h2 className="text-4xl font-bold mt-2 leading-snug">
      Solving Challenges <br /> That Others Avoid
    </h2>
  </div>
  <div className="flex items-center">
    <p className="text-gray-600">
      I thrive where others hesitate — turning obstacles into opportunities 
      through strategy, creativity, and technical expertise. Each challenge 
      is an invitation to innovate, and I deliver solutions that not only 
      work, but last.
    </p>
  </div>
</div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EB9D9F] mb-4">
                  <Icon size={20} className="text-black" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
