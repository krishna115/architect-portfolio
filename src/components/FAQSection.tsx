// FAQSection.jsx
"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What design services do you offer?",
    answer:
      "I offer a range of design services, including logo and brand identity design, UI/UX design for web/mobile applications, digital illustration, packaging design, and simple portfolio/business website development.",
  },
  {
    question: "How does your design process typically work?",
    answer:
      "My design process typically involves understanding client needs, research, concept creation, design execution, and revisions based on feedback.",
  },
  {
    question: "Are you open to collaboration or part-time work?",
    answer:
      "Yes! I’m open to both collaboration and part-time opportunities as long as they align with my expertise.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "It depends on the project scope, but most projects are completed within 1–4 weeks.",
  },
  {
    question: "How do I start a project with you?",
    answer:
      "You can get started by contacting me via email or filling out the contact form on my website.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Frequently Asked <br /> Question
          </h2>
          <p className="mt-4 text-gray-600">
            Here are some common questions along with their answers to help clear up any confusion.
          </p>
        </div>

        {/* Right FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden cursor-pointer border border-gray-200 transition-all duration-300 ${
                activeIndex === index ? "bg-gray" : "bg-white"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center px-5 py-4">
                <h3
                  className={`font-medium ${
                    activeIndex === index ? "text-gray-800" : "text-gray-800"
                  }`}
                >
                  {faq.question}
                </h3>
                <span className="text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>

              {activeIndex === index && (
                <div className="px-5 pb-4 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
