import React from 'react';
import profile from '../assets/profile.png';
import '../index.css'; // Make sure your scroll animation CSS is here

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
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-offftext">
          Hey, I'm <span className="text-transparent" style={{ WebkitTextStroke: '1px #fdf6e3' }}>Atharva</span>  👋
        </h1>
        <div className="text-xl md:text-2xl mb-8 text-textLight max-w-2xl">
          I am into{" "}
          <span className="inline-block h-10 relative overflow-hidden">
  <ul className="animate-scrollText leading-10 text-accent font-semibold text-2xl font-poppins">

              {["Web Development", "UI/UX Design", "Data Analytics", "App Development"].map((item, i) => (
                <li key={i} className="h-6 text-center">{item}</li>
              ))}
            </ul>
          </span>
        </div>



        
        <div className="flex gap-6">
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
