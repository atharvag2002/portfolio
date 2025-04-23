import React from 'react';
import Hero from './components/Hero';  
import Navbar from './components/Navbar';
import Projects from'./components/projects';
import Skills from './components/Skills';
import Footer from './components/footer';


function App() {
  return (
    <div className="relative min-h-screen bg-background">
     
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Footer />
     
    </div>
  );
}

export default App;
