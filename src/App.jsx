import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
        <Project />
        <ContactMe />
      </div>
      <Footer/>
    </>
  );
};

export default App
