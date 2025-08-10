export default function HeroSection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-0">
        
        {/* Large Architect Name in Background */}
        <h1 className="uppercase text-[20vw] md:text-[20vw] font-medium text-black tracking-tight absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20 z-0 whitespace-nowrap">
          DEEPIKA
        </h1>

        {/* <h1
  className="absolute text-[15vw] font-bold uppercase text-black opacity-90 mix-blend-overlay pointer-events-none"
  style={{ lineHeight: "0.9" }}
>
  DEEPIKA
</h1> */}


{/* <h1
  className="absolute text-[20vw] font-medium uppercase bg-[url('/images/deepika4.png')] bg-cover bg-center text-black bg-clip-text pointer-events-none"
  style={{ lineHeight: "0.9" }}
>
  DEEPIKA
</h1> */}

{/* <h1
  className="absolute text-[20vw] font-medium uppercase text-black drop-shadow-[0_5px_25px_rgba(0,0,0,0.3)] pointer-events-none"
  style={{ lineHeight: "0.9" }}
>
  DEEPIKA
</h1> */}



        {/* Image in front, centered */}
        <div className="relative z-10">
          <img
            src="/images/deepika4.png"
            alt="Architect Deepika"
            className="h-180 md:h-[28rem] object-contain mx-auto"
          />
        </div>

        {/* Paragraphs below */}
        {/* <div className="w-full flex flex-col md:flex-row justify-between mt-10 px-4 md:px-12 text-sm md:text-base text-gray-700 z-10 relative">
          <p className="md:w-1/3 text-left">
            Hello, I'm Deepika, an architect in India. I bring innovative ideas to life through my designs and collaborations.
          </p>
          <p className="md:w-1/3 text-right hidden md:block">
            I bring innovative ideas to life through my designs and collaborations.
          </p>
        </div> */}
      </div>
    </section>
  );
}
