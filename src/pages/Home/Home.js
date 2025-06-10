import React from 'react';
import HeroSection from './Sections/HeroSection/HeroSection';

import HotelListings from './Sections/HotelListings/HotelListings';
import WhyBookUs from './Sections/WhyBookUs/WhyBookUs';
import TestimonialSection from './Sections/Testimonials/Testimonials';
import './Home.css';

const Home = () => {
  return (
    <>
      <HeroSection />


      <HotelListings />
      <WhyBookUs />
      <TestimonialSection />
    </>
  );
};

export default Home;
