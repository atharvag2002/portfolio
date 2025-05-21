import React from 'react';
import { FaGithub, FaLinkedin , FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id='contact' className="bg-[#0f172a] text-white py-16 px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        

        {/* Social Links */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Connect</h2>
          <div className="space-y-4 text-lg">
            <a href="https://github.com/atharvag2002" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent transition"><FaGithub /> GitHub</a>
            <a href="https://www.linkedin.com/in/atharva-gaikwad-5b650427b/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-accent transition"><FaLinkedin /> LinkedIn</a>
            <h2  className="flex items-center gap-3 hover:text-accent transition"><FaEnvelope  />atharvagaikwad125@gmail.com</h2>

          </div>
        </div>

        
      </div>
    </footer>
  )
}

export default Footer;
