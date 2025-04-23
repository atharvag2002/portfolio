import React from 'react';
import profile from '../assets/profile.png';

const Hero = () => {
  return (
    <section className="relative bg-background text-textLight h-screen flex items-center px-8 overflow-hidden">

      {/* Vertical color plane */}
      <div className="absolute top-0 left-0 h-full w-3 bg-primary md:w-5 lg:w-1/5"></div>

      {/* Profile Picture */}
      <img
        src={profile}
        alt="Atharva"
        className="absolute left-[9%] top-1/2 transform -translate-y-1/2 w-52 h-52 md:w-72 md:h-72 rounded-full object-cover shadow-lg border-4 border-primary"
      />

      {/* Text Content */}
      <div className="z-10 ml-[35%] text-left">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
          Hey, I'm Atharva 👋
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-textLight max-w-2xl">
          A passionate Web Developer crafting sleek, responsive websites using React, Tailwind CSS, and modern tech.
        </p>
        <div className="flex gap-6">
          <a
            href="#projects"
            className="bg-primary text-background px-6 py-3 rounded-2xl text-lg font-medium shadow-md hover:scale-105 transition duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border-2 border-primary px-6 py-3 rounded-2xl text-lg font-medium hover:bg-primary hover:text-background transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
