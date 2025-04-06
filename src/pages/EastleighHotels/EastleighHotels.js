import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from './Sections/Hero/Hero';

import Testimonials from './Sections/Testimonials/Testimonials';
import './EastleighHotels.css';

const EastleighHotels = () => {
  return (
    <div className="eastleigh-hotels">
      <Navbar />
      <Hero />

      <Testimonials />
    </div>
  );
};

export default EastleighHotels;