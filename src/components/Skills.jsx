import React from 'react';

// ✅ Importing images from src/assets/skills/
import javascript from '../assets/javascript.svg';
import reactLogo from '../assets/react.svg';
import tailwind from '../assets/tailwind.svg';
import node from '../assets/nodejs.svg';
import mysql from '../assets/mysql.svg';
import git from '../assets/git.svg';
import java from '../assets/java.svg';
import php from '../assets/php.svg';
import tableau from '../assets/tableau.svg';
import boot from '../assets/boot.svg';



// ✅ Skills array using imported images
const skills = [
  { name: 'JavaScript', image: javascript },
  { name: 'React', image: reactLogo },
  { name: 'Tailwind CSS', image: tailwind },
  { name: 'Node.js', image: node },
  { name: 'MySql', image: mysql },
  { name: 'Git', image: git },
  { name: 'Java', image: java },
  { name: 'PHP', image: php },
  { name: 'Tableau', image: tableau },
  { name: 'Spring Boot', image:boot }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#f1f5f9] py-20 px-10">
      <h2 className="text-4xl font-bold text-primary mb-10 text-center">Skills</h2>
    
    <div className=" border border-grey-300 bg-white shadow-lg rounded-2xl p-20" >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="bg-yellow-50 border border-black text-primary shadow-md rounded-xl p-6 flex flex-col items-center hover:scale-105 transition duration-300"
          >
            <img 
              src={skill.image} 
              alt={skill.name} 
              className="w-12 h-12 object-contain mb-3 "
            />
            <p className="text-lg font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Skills;
