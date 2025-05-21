import React from 'react';
import PROJECT1 from '../assets/GBUDDY.png';
import PROJECT2 from '../assets/PROJECT2.jpg';
import PROJECT3 from '../assets/PROJECT3.jpg';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Gym Management System",
      img: PROJECT1,
      desc: "A PHP-based gym management system with user tracking and activity management.",
      link: "https://github.com/atharvag2002/Gbuddy-php/tree/main",
      demo: "https://www.linkedin.com/posts/atharva-gaikwad-5b650427b_webdevelopment-gymmanagement-techinnovation-activity-7199407851918757888-HqzI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQ9iloBB2MWYqSKp_n9LcBojmveHQZtwDo"
    },
    {
      id: 2,
      title: "React To-Do App",
      img: PROJECT2,
      desc: "A clean and responsive to-do list app built with React and Tailwind CSS.",
      link: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Weather App",
      img: PROJECT3,
      desc: "React weather app fetching live data using API integration and clean UI.",
      link: "#",
      demo: "#"
    },
    
    
  ];

  return (
    <section id="projects" className="bg-offwhite text-textLight py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-primary mb-14 text-center">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projectData.map(project => (




          <div key={project.id} className="bg-white  rounded-2xl overflow-hidden shadow-lg transition transform hover:scale-105 duration-500">
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl text-primary font-semibold mb-3">{project.title}</h3>
              <p className="text-black mb-5">{project.desc}</p>
              <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm bg-primary text-white px-4 py-2 rounded-xl hover:scale-105 transition duration-300 inline-block  ">View Project</a>
              <a href={project.link} target="_blank" rel="noreferrer" className="text-sm bg-grey-100 text-primary rounded-xl px-7 py-2 hover:scale-95 transition duration-300  border border-black  float-right  inline-block" >  <span>&lt;Code&gt;</span></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Projects;
