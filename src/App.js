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
  const [isBlackoutOn, setIsBlackoutOn] = useState(false);  // Start with OFF

  const toggleBlackout = () => setIsBlackoutOn(!isBlackoutOn);

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

      <Hero />
      <Projects />
      <Tableau />
      <Skills />
      <About />
      <Footer />

      {/* Render spotlight only when blackout is active */}
      {isBlackoutOn && <SpotlightCursor />}
    </div>
  );
}

export default App;
