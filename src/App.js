import React from 'react';
import Hero from './components/Hero';  
import Navbar from './components/Navbar';
import Projects from'./components/projects';
import Skills from './components/Skills';
import Footer from './components/footer';
import About from './components/About'; 
import Tableau from './components/tableau';



function App() {
  return (
    <div className="relative min-h-screen bg-background">
     
      <Navbar />
      <Hero />
      <Projects />
      <Tableau/>
      <Skills />
      <About />
      <Footer />
      
      
    </div>
  );
}

export default App;
