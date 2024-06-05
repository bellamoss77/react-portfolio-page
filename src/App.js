import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import NatureGallery from './Nature';
import AnimalGallery from './Animal';
import RuinsGallery from './Ruins';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">  
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/nature" element={<NatureGallery />} />
          <Route path="/animal" element={<AnimalGallery />} />
          <Route path="/ruins" element={<RuinsGallery />} />
        </Routes>        
        </header>
      </div>
    </Router>
  );
}

export default App;
