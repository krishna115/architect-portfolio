import React from "react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#7B4B94] to-[#C774B2] text-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let’s Build Something Amazing Together
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-100">
          Whether it's an architectural masterpiece or an innovative urban plan, 
          I’m here to bring your vision to life.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-white text-[#7B4B94] px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition-all"
        >
          Get in Touch <ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}
