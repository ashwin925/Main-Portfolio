import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// import Homepage from './components/home'; 
import About from './components/about';     

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        {/* <Route path="/home" element={<Homepage />} />  */}
      </Routes>
    </Router>
  );
}

export default App;
