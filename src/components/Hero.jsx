import React from 'react';
import profile from '../assets/profile.png';
import '../index.css'; // scroll animation styles

import java from '../assets/icons/java.svg';
import javascript from '../assets/icons/javascript.svg';
import vscode from '../assets/icons/vscode.svg';
import tailwind from '../assets/icons/tailwind.svg';
import tableau from '../assets/icons/tableau.svg';
import sql from '../assets/icons/sql.svg';
import springboot from '../assets/icons/springboot.svg';
import php from '../assets/icons/php.svg';
import linux from '../assets/icons/linux.svg';
import github from '../assets/icons/github.svg';
import database from '../assets/icons/database.svg';


const Hero = () => {
  return (
    <section id="home" className="relative bg-background text-textLight min-h-screen flex items-center justify-center px-4 sm:px-8 overflow-hidden">
      {/* Background floating icons */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-center items-center opacity-70">
        <img src={java} alt="java" className="w-8 sm:w-12 opacity-60 absolute top-[10%] left-[15%]" />
        <img src={vscode} alt="vscode" className="w-8 sm:w-12 opacity-60 absolute top-[15%] right-[10%]" />
        <img src={tailwind} alt="tailwind" className="w-8 sm:w-12 opacity-60 absolute bottom-[10%] left-[25%]" />
        <img src={tableau} alt="tableau" className="w-8 sm:w-12 opacity-65 absolute top-[30%] left-[40%]" />
        <img src={sql} alt="sql" className="w-8 sm:w-12 opacity-60 absolute bottom-[20%] right-[5%]" />
        <img src={springboot} alt="springboot" className="w-8 sm:w-12 opacity-60 absolute top-[45%] right-[15%]" />
        <img src={php} alt="php" className="w-8 sm:w-12 opacity-60 absolute bottom-[10%] left-[40%]" />
        <img src={linux} alt="linux" className="w-8 sm:w-12 opacity-62 absolute top-[55%] left-[35%]" />
        <img src={github} alt="github" className="w-8 sm:w-12 opacity-60 absolute top-[20%] left-[70%]" />
        <img src={database} alt="database" className="w-8 sm:w-12 opacity-60 absolute bottom-[10%] right-[25%]" />
        <img src={javascript} alt="javascript" className="w-8 sm:w-12 opacity-40 absolute top-[15%] left-[25%]" />
      </div>

      {/* Vertical color plane */}
      <div className="absolute top-0 left-0 h-full w-1/5 bg-primary sm:w-1/5 md:w-1/5 lg:w-1/5"></div>

      {/* Main Flex Container for profile and text */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-4 pt-20 md:gap-56">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <img
            src={profile}
            alt="Atharva"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full object-cover shadow-lg border-4 border-primary mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="mt-8 md:mt-0 text-center md:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-offftext leading-tight whitespace-nowrap">
            Hey, I'm{" "}
            <span className="text-transparent bulb-flicker" style={{ WebkitTextStroke: '1px #fdf6e3' }}>
              Atharva
            </span>{" "}
            <span className="waving-hand md:text-5xl text-3xl">👋</span>
          </h1>

          {/* Scroll Text in one line */}
          <div className="text-xl sm:text-xl md:text-2xl text-textLight mt-6 mb-10 flex items-center gap-9 flex-wrap font-bold font-rajdhani">
            <span>I am into</span>
            <div className="relative h-10 sm:h-12 overflow-hidden w-52 sm:w-60 md:w-72">
              {/* 🔽 Gradient Mask */}
              <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10 pointer-events-none"></div>
              {/* 🔁 Scrolling Skills */}
              <ul className="animate-scrollText h-full flex flex-col items-center text-accent font-semibold text-xl sm:text-2xl font-poppins">
                {["", "Front End Development", "Back End Development", "Data Analytics"].map((item, i) => (
                  <li key={i} className="h-10 sm:h-12 flex items-center justify-center tracking-tight">{item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <a download
              href="/portfolio/public/mca.pdf"
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
      </div>
    </section>
  );
};

export default Hero;
