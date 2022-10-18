import React from 'react';
import './App.css';
import Navbar from './components/Nav-Section/navbar.jsx'
import Intro from './components/Intro-Section/intro'
import Skills from './components/Skill-Section/skill'
import About from './components/About-Section/about'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <About />
    </div>
  );
}

export default App;
