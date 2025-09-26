import React, { useState } from 'react';
import { Lightbulb } from "lucide-react";

const Navbar = ({ onToggleBlackout, isBlackoutOn }) => {  // Receive props
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-navyellow text-[#f1f5f9] shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-2xl font-logo text-[#f97316]">Atharva</a>

          {/* Desktop Navbar */}
          <div className="hidden md:flex space-x-6 items-center">  {/* Added items-center for alignment */}
          {/* Toggle Button for Desktop */}

<button 
  onClick={onToggleBlackout}
  className="ml-4 p-2 rounded transition hover:scale-110"
>
  <Lightbulb 
    size={28} 
    className={
      isBlackoutOn 
        ?   "text-gray-400"
        : "text-yellow-400 drop-shadow-[0_0_10px_#facc15] animate-pulse"
    } 
  />
</button>


            
            <a href="#home" className="hover:text-[#f97316]">Home</a>
            <a href="#projects" className="hover:text-[#f97316]">Projects</a>
            <a href="#skills" className="hover:text-[#f97316]">Skills</a>
            <a href="#about" className="hover:text-[#f97316]">About</a>
            <a href="#contact" className="hover:text-[#f97316]">Contact</a>

           
          </div>

          {/* Mobile Navbar */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isMenuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#2C3539] text-[#f1f5f9] space-y-4 py-4">
            <a href="#home" className="block text-center">Home</a>
            <a href="#projects" className="block text-center">Projects</a>
            <a href="#skills" className="block text-center">Skills</a>
            <a href="#about" className="block text-center">About</a>
            <a href="#contact" className="block text-center">Contact</a>
            
            {/* Toggle  Button for Mobile */}
            {/* <button 
              onClick={onToggleBlackout}
              className="block w-full text-center px-3 py-2 bg-[#f97316] text-[#f1f5f9] hover:bg-[#e56b0f] transition"
            >
              {isBlackoutOn ? 'Blackout Off' : 'Blackout On'}
            </button> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;