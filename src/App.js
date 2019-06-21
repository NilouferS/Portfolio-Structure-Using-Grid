import React from 'react';
import './App.css';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='container'>
        <Header></Header>
        <About></About>
        <Skills></Skills>
        <Project></Project>
        <Contact></Contact>

      </div>

    </Router>
  );
}

export default App;
