import React from 'react';
import './App.css';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import Header from './Header';
import self from './images/self.jpg'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='container'>
        <img id='image' src={self} alt={self}></img>
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
