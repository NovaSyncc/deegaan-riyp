import React, { useEffect, useRef } from 'react';
import './AboutUs.css';
import CEOImage from '../../../../assets/images/CEO.webp';
// In AboutUs.jsx, add an id attribute to your section element


const AboutUs = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Ahmed Mohamed",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      id: 2,
      name: "Amina Hassan",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      id: 3,
      name: "Omar Ali",
      role: "Marketing Specialist",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    },
    {
      id: 4,
      name: "Fatima Hussein",
      role: "Customer Relations",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80"
    }
  ];

  return (
    <section className="about-us-section" ref={sectionRef}>
      <div className="container">
        {/* About RiyO Brand First */}
        <div className="riyo-brand">
          <h2 className="section-title">About RiyO</h2>
          <div className="neon-line"></div>
          
          <p className="intro-text">
            <span className="highlight-text">RiyO</span> is the parent company of Deegaan-Riyo, built on <span className="highlight-text">innovation, empowerment, and sustainability</span>. Our business ecosystem is driven by technology and entrepreneurship with a <span className="highlight-text">vision of reshaping industries, creating economic opportunities, and solving real-world problems</span> through accessible technology solutions across multiple ventures.
          </p>
          
          <div className="core-values">
            <div className="value-pill">
              <span className="value-icon">★</span>
              <span>Innovation</span>
            </div>
            <div className="value-pill">
              <span className="value-icon">⟁</span>
              <span>Empowerment</span>
            </div>
            <div className="value-pill">
              <span className="value-icon">♻</span>
              <span>Sustainability</span>
            </div>
          </div>
        </div>
        
        {/* About Deegaan-Riyo Content */}
        <div className="about-content">
          <h2 className="section-title">About Deegaan-Riyo</h2>
          <div className="neon-line"></div>
          
          <p className="intro-text">
            Deegaan-Riyo, a subsidiary of <span className="highlight-text">RiyO</span>, is an innovative direct-to-consumer hotel booking platform designed specifically for Eastleigh, Kenya. Founded by <span className="highlight-text">Abdifatah Hajifarah</span>, a visionary young entrepreneur, our platform simplifies reservations by connecting guests directly with hotels via <span className="highlight-text">WhatsApp</span>.
          </p>
          
          <div className="vision-mission">
            <div className="vision">
              <h3 className="neon-text">Our Vision</h3>
              <p>To leverage everyday tools like WhatsApp to bridge gaps between small hotels and guests, fostering economic growth in Eastleigh's hospitality sector while reshaping the industry through accessible technology.</p>
            </div>
            
            <div className="mission">
              <h3 className="neon-text">Our Mission</h3>
              <p>To empower local hotels and offer travelers a seamless, culturally tailored booking experience by cutting out intermediaries and creating direct connections, solving real-world problems through innovation.</p>
            </div>
          </div>
          
          <div className="key-features">
            <h3 className="neon-text">Why Deegaan-Riyo?</h3>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="icon-traveler"></i>
                </div>
                <h4>For Travelers</h4>
                <p>Browse hotels effortlessly and confirm bookings via <strong>WhatsApp</strong> with no apps to download. Enjoy transparent communication with hotels and no hidden fees.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="icon-hotel"></i>
                </div>
                <h4>For Hotels</h4>
                <p><strong>Zero tech overhead</strong> - no need for expensive booking systems, just WhatsApp. Reach more guests without intermediaries taking commissions.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="icon-market"></i>
                </div>
                <h4>For Eastleigh's Market</h4>
                <p>Built for local preferences: WhatsApp-first, mobile-friendly, and language-inclusive. A community tool that helps small hotels compete and creates economic opportunities.</p>
              </div>
            </div>
          </div>
          
          <div className="how-it-works">
            <h3 className="neon-text">How It Works</h3>
            <div className="steps-container">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Discover</h4>
                  <p>Users browse curated hotels on Deegaan-Riyo's React-based platform.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>Connect</h4>
                  <p>Click-to-chat via WhatsApp deep linking initiates direct booking talks.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Book</h4>
                  <p>Confirm reservations with hotels instantly—no forms or logins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Meet the Team Section */}
        <div className="team-section">
          <h2 className="section-title">Meet the Team</h2>
          <div className="neon-line"></div>
          
          <div className="founder-section">
            <h3 className="neon-text">About the Founder</h3>
            <div className="founder-content">
              <div className="founder-image">
                <img src={CEOImage} alt="Abdifatah Hajifarah" />
                <div className="image-glow"></div>
              </div>
              <div className="founder-bio">
                <h4>Abdifatah Hajifarah</h4>
                <p className="founder-title">Founder & CEO, RiyO & Deegaan-Riyo</p>
                <p>A visionary young entrepreneur, Abdifatah Hajifarah champions accessible technology for Eastleigh's hospitality sector. Driven by the core values of innovation, empowerment, and sustainability, he's dedicated to reshaping industries and creating economic opportunities through technology-driven solutions.</p>
                <blockquote className="founder-quote">
                  "Deegaan-Riyo isn't just a platform—it's a community tool. By turning WhatsApp into a booking engine, we're helping small hotels compete and travelers explore with confidence. This represents RiyO's broader mission to solve real-world problems through innovative approaches."
                </blockquote>
              </div>
            </div>
          </div>
          
          <div className="team-members-section">
            <h3 className="neon-text">Our Team</h3>
            <div className="team-grid">
              {teamMembers.map(member => (
                <div className="team-card" key={member.id}>
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                    <div className="image-glow"></div>
                  </div>
                  <div className="member-info">
                    <h4>{member.name}</h4>
                    <p>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;