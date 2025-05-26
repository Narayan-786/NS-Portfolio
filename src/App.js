import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Skill from './Components/Skills';
import Contact from './Components/Contacts';
import Project from './Components/Project';

function App() {
  return (
    <>
      <Navbar />
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
