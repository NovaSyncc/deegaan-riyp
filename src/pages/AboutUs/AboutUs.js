import React, { useEffect, useRef } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    // Animation for elements appearing on scroll
    const fadeElements = document.querySelectorAll('.fade-in-section');
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
      observerRef.current.observe(element);
    });
    
    return () => {
      if (observerRef.current) {
        fadeElements.forEach(element => {
          observerRef.current.unobserve(element);
        });
      }
    };
  }, []);

  return (
    <div className="about-us-container">
      <div className="cyber-grid"></div>
      
      <section className="about-hero fade-in-section">
        <div className="neon-circle"></div>
        <h1>ABOUT <span className="neon-text">DEEGAAN-RIYO</span></h1>
        <div className="neon-line"></div>
        <p className="tagline">Empowering Hospitality Through Direct Connections</p>
      </section>

      <section className="about-mission fade-in-section">
        <div className="section-content">
          <h2>OUR MISSION</h2>
          <div className="neon-line-small"></div>
          <p>Deegaan-Riyo is an innovative direct-to-consumer hotel booking platform designed specifically for Eastleigh, Kenya. Founded by Abdifatah Hajifarah, we simplify travel by connecting guests directly with hotels via WhatsApp—eliminating middlemen, fees, and complexity.</p>
          <p>As a subsidiary of RiyO, we embody a forward-thinking approach built on innovation, empowerment, and sustainability. Through technology and entrepreneurship, we create solutions that reshape industries, unlock economic opportunities, and solve real-world problems.</p>
        </div>
        <div className="cyber-box">
          <div className="box-corner top-left"></div>
          <div className="box-corner top-right"></div>
          <div className="box-corner bottom-left"></div>
          <div className="box-corner bottom-right"></div>
        </div>
      </section>

      <div className="neon-divider"></div>

      <section className="about-why fade-in-section">
        <h2>WHY IT MATTERS</h2>
        <div className="neon-line-small"></div>
        <div className="cards-container">
          <div className="cyber-card">
            <div className="card-glow"></div>
            <h3>For Travelers</h3>
            <p>Book effortlessly via WhatsApp, with no apps or hidden costs. Browse our curated list of hotels, submit your details, and connect directly with your accommodation of choice.</p>
          </div>
          <div className="cyber-card">
            <div className="card-glow"></div>
            <h3>For Hotels</h3>
            <p>Grow revenue without tech overhead or third-party commissions. Maintain direct relationships with guests while using familiar tools you already know.</p>
          </div>
          <div className="cyber-card">
            <div className="card-glow"></div>
            <h3>For Eastleigh</h3>
            <p>A locally tailored tool that boosts small businesses and access, creating a sustainable ecosystem for hospitality growth in our community.</p>
          </div>
        </div>
      </section>

      <div className="neon-divider"></div>

      <section className="about-how fade-in-section">
        <h2>HOW IT WORKS</h2>
        <div className="neon-line-small"></div>
        <div className="process-container">
          <div className="process-step">
            <div className="step-number">01</div>
            <div className="step-content">
              <h3>Browse Hotels</h3>
              <p>Explore our curated list of quality accommodations in Eastleigh.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">02</div>
            <div className="step-content">
              <h3>Book Through WhatsApp</h3>
              <p>Fill out the booking form and connect directly with hotels via WhatsApp.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">03</div>
            <div className="step-content">
              <h3>Direct Communication</h3>
              <p>Confirm availability and details directly with your accommodation.</p>
            </div>
          </div>
          <div className="process-step">
            <div className="step-number">04</div>
            <div className="step-content">
              <h3>Secure Payment</h3>
              <p>Pay securely offline using M-Pesa or the hotel's preferred method.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="neon-divider"></div>

      <section className="about-future fade-in-section">
        <h2>THE FUTURE</h2>
        <div className="neon-line-small"></div>
        <p>At its core, Deegaan-Riyo reflects RiyO's mission: leveraging everyday technology (like WhatsApp) to bridge gaps, foster growth, and make opportunities more accessible. After proving our concept in Eastleigh, we plan to expand our innovative booking solution to other regions across Kenya and East Africa.</p>
        <div className="cyber-button">
          <span>JOIN OUR JOURNEY</span>
          <div className="button-glow"></div>
        </div>
      </section>

      <div className="neon-divider"></div>

      <section className="about-contact fade-in-section">
        <h2>CONNECT WITH US</h2>
        <div className="neon-line-small"></div>
        <div className="contact-grid">
          <div className="contact-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div className="contact-text">
              <h3>Address</h3>
              <p>Deegaan-Riyo Headquarters<br />BBS Mall, 3rd Floor<br />Eastleigh, Nairobi, Kenya</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div className="contact-text">
              <h3>Phone</h3>
              <p>+254 712 221 079</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div className="contact-text">
              <h3>Email</h3>
              <p>deegaan@riyo.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div className="contact-text">
              <h3>Website</h3>
              <p>www.deegaan-riyo.com</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <div className="neon-line"></div>
        <p>© {new Date().getFullYear()} Deegaan-Riyo. A subsidiary of RiyO.</p>
      </footer>
    </div>
  );
};

export default AboutUs;