import React from 'react';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import About from './Component/About';
import Skill from './Component/Skills';
import Contact from './Component/Contacts';
import Project from './Component/Project';

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
