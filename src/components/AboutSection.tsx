// components/AboutSection.jsx
import React from "react";

export default function AboutSection() {
  return (
    <section className="bg-white py-16" id="about">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="lg:w-1/2">
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              About me
            </p>
            <h2 className="text-4xl font-bold text-gray-900 leading-snug">
              A blend of creativity, planning, and purpose  
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
  Hi, I’m <strong>Deepika</strong> — I’m passionate about creating spaces that 
  feel welcoming, inspiring, and full of life. I believe every project is an 
  opportunity to make the world a little more beautiful and connected.
</p>
<p className="text-lg text-gray-700 leading-relaxed">
  Over the years, I’ve learned that great design is more than just aesthetics — 
  it’s about how it makes people feel. That’s why I approach every idea with both 
  creativity and care, aiming to leave a positive mark wherever I work.
</p>

        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
  src="/images/deepika5.png" // replace with your actual image path
  alt="Deepika"
  className="w-full max-w-md aspect-square rounded-lg shadow-lg object-cover"
/>

        </div>
      </div>
    </section>
  );
}
