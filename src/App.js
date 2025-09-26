import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';  
import Navbar from './components/Navbar';
import Projects from './components/projects';
import Skills from './components/Skills';
import Footer from './components/footer';
import About from './components/About'; 
import Tableau from './components/tableau';
import SpotlightCursor from './components/SpotlightCursor';

function App() {
  const [isBlackoutOn, setIsBlackoutOn] = useState(false);  // State for blackout mode

  const toggleBlackout = () => setIsBlackoutOn(!isBlackoutOn);  // Toggle handler

  // Torch cursor logic
  useEffect(() => {
    if (isBlackoutOn) {
      document.body.classList.add('torch-cursor');
    } else {
      document.body.classList.remove('torch-cursor');
    }
  }, [isBlackoutOn]);

  return (
    <div className="relative min-h-screen bg-background">
      <Navbar 
        onToggleBlackout={toggleBlackout} 
        isBlackoutOn={isBlackoutOn} 
      />
      <Hero isBlackoutOn={isBlackoutOn} />

      <Projects />
      <Tableau />
      <Skills />
      <About />
      <Footer />

      {isBlackoutOn && <SpotlightCursor />}  {/* Conditionally render */}
    </div>
  );
}

export default App;
