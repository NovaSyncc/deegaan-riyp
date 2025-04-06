import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import ContactUs from './Sections/ContactUs/ContactUs.jsx';
import WhyBookUs from './Sections/WhyBookUs/WhyBookUs.jsx';
import AboutUs from './Sections/AboutUs/AboutUs.jsx';
import Location from './Sections/Location/Location.jsx';

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactUs />
      <WhyBookUs />
      <AboutUs />
      <Location />
    </>
  );
};

export default Contact;