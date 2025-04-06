import React, { useEffect, useState } from 'react';
import './Location.css';

const Location = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('location-section');
      if (element) {
        const position = element.getBoundingClientRect();
        // If element is in viewport
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="location-section" className={`location-container ${isVisible ? 'fade-in' : ''}`}>
      <h2 className="location-title">Our Location</h2>
      
      <div className="location-content">
        <div className="map-container">
          <iframe 
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.!2d-122.!3d37.!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDAw!5e0!3m2!1sen!2sus!4v1649458000000!5m2!1sen!2sus" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="contact-card">
          <div className="card-content">
            <h3 className="card-title">Contact Information</h3>
            
            <div className="address-info">
              <div className="info-item">
                <i className="info-icon location-icon"></i>
                <div>
                  <h4>Address</h4>
                  <p>123 Neon Boulevard, Suite 5678</p>
                  <p>Techno City, TX 90210</p>
                </div>
              </div>
              
              <div className="info-item">
                <i className="info-icon phone-icon"></i>
                <div>
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+12345678900" className="contact-link">
                      +1 (234) 567-8900
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="info-item">
                <i className="info-icon email-icon"></i>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@techlabs.com" className="contact-link">
                      info@techlabs.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="location-cta">
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="directions-button">
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;