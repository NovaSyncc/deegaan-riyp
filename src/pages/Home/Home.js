import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroSection from './Sections/HeroSection/HeroSection';
import HotelListings from './Sections/HotelListings/HotelListings';
import WhyBookUs from './Sections/WhyBookUs/WhyBookUs';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <HeroSection />
      <HotelListings />
      <WhyBookUs />
    </div>
  );
};

export default Home;
