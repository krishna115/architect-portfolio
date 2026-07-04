export default function HeroSection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-0">
        
        {/* Large Architect Name in Background */}
        <h1 className="uppercase text-[20vw] md:text-[20vw] font-medium text-black tracking-tight absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 z-0 whitespace-nowrap">
          DEEPIKA
        </h1>

        {/* Image in front, centered */}
        <div className="relative z-10">
          <img
            src="/images/deepika4.png"
            alt="Architect Deepika"
            className="h-180 md:h-[28rem] object-contain mx-auto"
          />
        </div>

        {/* Paragraphs below the image, but right below the large text */}
        <div className="w-full flex flex-col md:flex-row justify-between mt-6 px-4 md:px-12 text-sm md:text-base text-gray-700 z-0 absolute top-1/2">
          <p className="md:w-1/3 text-left mb-4 md:mb-0">
            Hello, I'm Deepika, an architect in India. I bring innovative ideas to life through my designs and collaborations.
          </p>
          <p className="md:w-1/3 text-right">
            I believe that thoughtful design transforms spaces and enriches lives.
          </p>
        </div>
        
      </div>
    </section>
  );
}
