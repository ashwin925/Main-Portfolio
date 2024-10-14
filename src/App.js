import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Templates from './components/templates';
// import Homepage from './components/home'; 
//  import About from './components/about'; 
// import Projects from './components/projects';   
import Contact from './components/contact'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Contact />} />
        {/* <Route path="/" element={<Templates />} /> */}
        {/* <Route path="/" element={<About />} /> */}
        {/* <Route path="/" element={<Projects />} /> */}
        {/* <Route path="/" element={<Homepage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
