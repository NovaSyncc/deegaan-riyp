import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="testimonials-title">What Our Guests Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <div className="testimonial-header">
              <img src="https://source.unsplash.com/random/128x128/?portrait,woman" alt="Sarah J." className="testimonial-img" />
              <h3 className="testimonial-name">Sarah J.</h3>
            </div>
            <p className="testimonial-text">"Booking with Deegaan-Riyo was the easiest experience ever. I found a great hotel and confirmed in minutes! No more wasting time on comparison sites."</p>
          </div>
          
          <div className="testimonial">
            <div className="testimonial-header">
              <img src="https://source.unsplash.com/random/128x128/?portrait,man" alt="Michael T." className="testimonial-img" />
              <h3 className="testimonial-name">Michael T.</h3>
            </div>
            <p className="testimonial-text">"I love how I can just chat with the hotel directly. Got all my questions answered and even negotiated a room upgrade. Best booking experience ever!"</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;