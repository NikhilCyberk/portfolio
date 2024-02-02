import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Project from './components/Project/Project';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
        <Project />
      </div>
    </>
  );
};

export default App
