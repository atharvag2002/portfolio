import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white py-16 px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg text-black" />
            <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg text-black" />
            <textarea placeholder="Your Message" className="w-full p-3 rounded-lg text-black h-32"></textarea>
            <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg hover:scale-105 transition duration-300">Send</button>
          </form>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Connect</h2>
          <div className="space-y-4 text-lg">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition"><FaGithub /> GitHub</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition"><FaLinkedin /> LinkedIn</a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition"><FaInstagram /> Instagram</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer;
