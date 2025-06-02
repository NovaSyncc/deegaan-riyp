import React from 'react';
import HotelListings from '../Home/Sections/HotelListings/HotelListings';
import Testimonials from './Sections/Testimonials/Testimonials';
import './EastleighHotels.css';

const EastleighHotels = () => {
  return (
    <div className="eastleigh-hotels">
      <HotelListings />
      <Testimonials />
    </div>
  );
};

export default EastleighHotels;
