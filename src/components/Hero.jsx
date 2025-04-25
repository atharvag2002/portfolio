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
          <span className="text-transparent bulb-flicker" style={{ WebkitTextStroke: '1px #fdf6e3' }}>
            Atharva
          </span>{" "} <span className="waving-hand  md:text-5xl text-3xl">👋</span>

        </h1>

        {/* "I am into..." part and scrolling skills */}
        {/* Scroll Text in one line */}
<div className="text-xl sm:text-xl md:text-2xl text-textLight mt-6 mb-10 flex items-center gap-9 flex-wrap  font-bold font-rajdhani">
  <span>I am  into</span>
  
  <div className="relative h-10 sm:h-12 overflow-hidden w-52 sm:w-60 md:w-72">
    {/* 🔽 Gradient Mask */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 pointer-events-none"></div>

    {/* 🔁 Scrolling Skills */}
    <ul className="animate-scrollText h-full flex flex-col items-center text-accent font-semibold text-xl sm:text-2xl font-poppins">
      {["Front End Development", "Back End Development", "Data Analytics"].map((item, i) => (
        <li key={i} className="h-10 sm:h-12 flex items-center justify-center">{item}</li>
      ))}
    </ul>
  </div>
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
