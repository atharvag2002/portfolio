import React from 'react';

// 🖼️ Import your school images
import schoolImage from '../assets/ramanbaug.jpg';
import jrCollegeImage from '../assets/pvg.jpg';
import collegeImage from '../assets/vcacs.png';

const About = () => {
  return (
    <section id="about" className="bg-[#f1f5f9] py-16 px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* 💬 Brief Intro */}
        <h2 className="text-4xl font-bold text-primary mb-6">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Hey! I'm Atharva, a passionate and curious full-stack web developer based in Pune. 
          I love transforming ideas into responsive, user-friendly websites using modern tech stacks like React, Tailwind, PHP, and Node.js. 
          Apart from coding, I enjoy working out, learning new things, and staying creative.
        </p>

        {/* 🎓 Education Timeline */}
        <h3 className="text-3xl font-semibold text-primary mb-10">My Education</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* School */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transition duration-300">
            <img 
              src={schoolImage} 
              alt="RAMANBAUG SCHOOL" 
              className="w-28 h-28 rounded-full object-cover mb-4"
            />
            <h4 className="text-xl font-bold mb-1">NES Ramanbaug</h4>
            <p className="text-gray-600 text-sm">10th Grade - 74%<br />Pune</p>
          </div>

          {/* Jr. College */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transition duration-300">
            <img 
              src={jrCollegeImage} 
              alt=" PVG Junior College" 
              className="w-28 h-28 rounded-full object-cover mb-4"
            />
            <h4 className="text-xl font-bold mb-1">PVG College</h4>
            <p className="text-gray-600 text-sm">12th Grade - 57%<br />Pune</p>
          </div>

          {/* College */}
          <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:scale-105 transition duration-300">
            <img 
              src={collegeImage} 
              alt="VCACS" 
              className="w-28 h-28 rounded-full object-cover mb-4"
            />
            <h4 className="text-xl font-bold mb-1">VCACS College</h4>
            <p className="text-gray-600 text-sm">B.Sc. Computer Science - 8.00 CGPA<br />Pune</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
