import React from 'react';
import './App.css';
import About from './About';
import Skills from './Skills';
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
   <Router>
     <div>
     <About></About>
     <Skills></Skills>
     </div>
     
   </Router>
  );
}

export default App;
