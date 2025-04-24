import React from 'react';
import profile from '../assets/profile.png';
import '../index.css'; // scroll animation styles

const Hero = () => {
  return (
    <section className="relative bg-background text-textLight min-h-screen flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 overflow-hidden">

      {/* Vertical color plane */}
      <div className="absolute top-0 left-0 h-full w-1/5 bg-primary sm:w-1/5 md:w-1/5 lg:w-1/5"></div>

      {/* Profile Picture */}
      <div className="z-10 mt-10 md:mt-0 md:absolute md:left-[9%] md:top-1/2 md:transform md:-translate-y-1/2">
        <img
          src={profile}
          alt="Atharva"
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full object-cover shadow-lg border-4 border-primary mx-auto"
        />
      </div>

      {/* Text Content */}
      <div className="z-10 mt-8 md:mt-0 md:ml-[35%] text-center md:text-left max-w-xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-offftext leading-tight whitespace-nowrap">
           Hey, I'm{" "}
           <span
  className="text-transparent bulb-flicker"
  style={{ WebkitTextStroke: '1px #fdf6e3' }}
>
  Atharva
</span>





          {" "}
  👋
            </h1>

        {/* Scroll Text */}
        <div className="text-lg sm:text-xl md:text-2xl mb-6 text-textLight">
          I am into{" "}
          <span className="inline-block h-10 sm:h-12 relative overflow-hidden">
            <ul className="animate-scrollText leading-10 sm:leading-[3rem] text-accent font-semibold text-xl sm:text-2xl font-poppins">
              {["Web Development", "UI/UX Design", "Data Analytics", "App Development"].map((item, i) => (
                <li key={i} className="h-10 text-center">{item}</li>
              ))}
            </ul>
          </span>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
          <a
            href="#projects"
            className="bg-offyellow text-background px-6 py-3 rounded-2xl text-lg font-medium shadow-md hover:scale-105 transition duration-300"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="border-2 border-primary px-6 py-3 rounded-2xl text-lg font-medium hover:bg-offyellow hover:text-background transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
