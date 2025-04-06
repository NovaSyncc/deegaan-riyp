import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import EastleighHotels from './pages/EastleighHotels/EastleighHotels';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/eastleigh-hotels" element={<EastleighHotels />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;