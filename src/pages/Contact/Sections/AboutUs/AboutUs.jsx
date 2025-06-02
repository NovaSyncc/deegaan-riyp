import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';
import CEOImage from '../../../../assets/images/CEO.webp';

// Fix image imports by using process.env.PUBLIC_URL
const AhmedImage = `${process.env.PUBLIC_URL}/images/Ahmed Mohamed.png`;
const AminaImage = `${process.env.PUBLIC_URL}/images/Amina Hassan.png`;
const FardhowsaImage = `${process.env.PUBLIC_URL}/images/Fardawsa Ibrahim.png`;
const JaneImage = `${process.env.PUBLIC_URL}/images/Jane Opung.png`;

const AboutUs = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px 0px -50px 0px'
      }
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

  // Updated team members with local images and Fardhowsa replacing Omar
  const teamMembers = [
    {
      id: 1,
      name: "Ahmed Mohamed",
      role: "Lead Developer",
      image: AhmedImage,
      bio: "Full-stack developer with expertise in React and modern web technologies"
    },
    {
      id: 2,
      name: "Amina Hassan",
      role: "UX/UI Designer",
      image: AminaImage,
      bio: "Creative designer focused on user-centered design and seamless experiences"
    },
    {
      id: 3,
      name: "Fardhowsa Ibrahim",
      role: "Marketing Specialist",
      image: FardhowsaImage,
      bio: "Digital marketing expert with deep understanding of local market dynamics"
    },
    {
      id: 4,
      name: "Jane Opung",
      role: "Customer Relations",
      image: JaneImage,
      bio: "Customer success specialist ensuring exceptional user experiences and satisfaction"
    }
  ];

  const keyFeatures = [
    {
      icon: "🧳",
      title: "For Travelers",
      description: "Browse hotels effortlessly and confirm bookings via WhatsApp with no apps to download. Enjoy transparent communication with hotels and no hidden fees.",
      benefits: ["No app downloads", "Direct communication", "Transparent pricing"]
    },
    {
      icon: "🏨",
      title: "For Hotels",
      description: "Zero tech overhead - no need for expensive booking systems, just WhatsApp. Reach more guests without intermediaries taking commissions.",
      benefits: ["Zero commission fees", "Simple WhatsApp integration", "Direct customer access"]
    },
    {
      icon: "🌍",
      title: "For Eastleigh's Market",
      description: "Built for local preferences: WhatsApp-first, mobile-friendly, and language-inclusive. A community tool that helps small hotels compete.",
      benefits: ["Culturally tailored", "Mobile-first design", "Community-focused"]
    }
  ];

  const workingSteps = [
    {
      number: 1,
      title: "Discover",
      description: "Users browse curated hotels on Deegaan-Riyo's React-based platform with detailed information and photos.",
      icon: "🔍"
    },
    {
      number: 2,
      title: "Connect",
      description: "Click-to-chat via WhatsApp deep linking initiates direct booking conversations with hotel staff.",
      icon: "💬"
    },
    {
      number: 3,
      title: "Book",
      description: "Confirm reservations with hotels instantly—no forms, no logins, just simple WhatsApp messaging.",
      icon: "✅"
    }
  ];

  const handleExploreHotels = () => {
    navigate('/#HotelListing');
  };

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <section className="about-us-section visible" ref={sectionRef} id="about">
      <div className="container">
        {/* About RiyO Brand First */}
        <div className="riyo-brand">
          <h2 className="section-title">About RiyO</h2>
          <div className="neon-line"></div>
          
          <p className="intro-text">
            <span className="highlight-text">RiyO</span> is the parent company of Deegaan-Riyo, built on the foundation of{' '}
            <span className="highlight-text">innovation, empowerment, and sustainability</span>. Our business ecosystem is driven by cutting-edge technology and entrepreneurial spirit with a{' '}
            <span className="highlight-text">vision of reshaping industries, creating economic opportunities, and solving real-world problems</span>{' '}
            through accessible technology solutions across multiple ventures.
          </p>
          
          <div className="core-values">
            <div className="value-pill">
              <span className="value-icon">⭐</span>
              <span>Innovation</span>
            </div>
            <div className="value-pill">
              <span className="value-icon">🚀</span>
              <span>Empowerment</span>
            </div>
            <div className="value-pill">
              <span className="value-icon">♻️</span>
              <span>Sustainability</span>
            </div>
          </div>
        </div>
        
        {/* About Deegaan-Riyo Content */}
        <div className="about-content">
          <h2 className="section-title">About Deegaan-Riyo</h2>
          <div className="neon-line"></div>
          
          <p className="intro-text">
            Deegaan-Riyo, a subsidiary of <span className="highlight-text">RiyO</span>, is an innovative direct-to-consumer hotel booking platform designed specifically for Eastleigh, Kenya. Founded by{' '}
            <span className="highlight-text">Abdifatah Hajifarah</span>, a visionary young entrepreneur, our platform simplifies reservations by connecting guests directly with hotels via{' '}
            <span className="highlight-text">WhatsApp</span>, eliminating complexity and reducing costs for everyone involved.
          </p>
          
          <div className="vision-mission">
            <div className="vision">
              <h3 className="neon-text">🎯 Our Vision</h3>
              <p>
                To leverage everyday tools like WhatsApp to bridge gaps between small hotels and guests, fostering economic growth in Eastleigh's hospitality sector while reshaping the industry through accessible, innovative technology solutions that everyone can use.
              </p>
            </div>
            
            <div className="mission">
              <h3 className="neon-text">🚀 Our Mission</h3>
              <p>
                To empower local hotels and offer travelers a seamless, culturally tailored booking experience by cutting out intermediaries and creating direct connections, solving real-world problems through innovation while building stronger community ties.
              </p>
            </div>
          </div>
          
          <div className="key-features">
            <h3 className="neon-text">Why Choose Deegaan-Riyo?</h3>
            <div className="features-grid">
              {keyFeatures.map((feature, index) => (
                <div className="feature-card" key={index}>
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                  <div className="feature-benefits">
                    {feature.benefits.map((benefit, idx) => (
                      <span key={idx} className="benefit-tag">
                        ✓ {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="how-it-works">
            <h3 className="neon-text">How It Works</h3>
            <div className="steps-container">
              {workingSteps.map((step, index) => (
                <div className="step" key={step.number}>
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <div className="step-icon">{step.icon}</div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    
        {/* Meet the Team Section */}
        <div className="team-section">
          <h2 className="section-title">Meet the Team</h2>
          <div className="neon-line"></div>
          
          <div className="founder-section">
            <h3 className="neon-text">👨‍💼 About the Founder</h3>
            <div className="founder-content">
              <div className="founder-image">
                <img src={CEOImage} alt="Abdifatah Hajifarah - Founder & CEO" />
                <div className="image-glow"></div>
              </div>
              <div className="founder-bio">
                <h4>Abdifatah Hajifarah</h4>
                <p className="founder-title">Founder & CEO, RiyO & Deegaan-Riyo</p>
                <p>
                  A visionary young entrepreneur and tech innovator, Abdifatah Hajifarah champions accessible technology solutions for Eastleigh's hospitality sector. Driven by the core values of innovation, empowerment, and sustainability, he's dedicated to reshaping industries and creating meaningful economic opportunities through technology-driven solutions that make a real difference in people's lives.
                </p>
                <blockquote className="founder-quote">
                  "Deegaan-Riyo isn't just a platform—it's a community tool that bridges the digital divide. By turning WhatsApp into a powerful booking engine, we're helping small hotels compete in the digital age while giving travelers the confidence to explore. This represents RiyO's broader mission to solve real-world problems through innovative, accessible approaches that everyone can benefit from."
                </blockquote>
              </div>
            </div>
          </div>
          
          <div className="team-members-section">
            <h3 className="neon-text">👥 Our Amazing Team</h3>
            <div className="team-grid">
              {teamMembers.map(member => (
                <div className="team-card" key={member.id}>
                  <div className="member-image">
                    <img 
                      src={member.image} 
                      alt={`${member.name} - ${member.role}`}
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=00c3ff&color=ffffff&size=400`;
                      }}
                    />
                    <div className="image-glow"></div>
                  </div>
                  <div className="member-info">
                    <h4>{member.name}</h4>
                    <p className="member-role">{member.role}</p>
                    <p className="member-bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to Action Section */}
        <div className="cta-section">
          <h2 className="section-title">Ready to Experience the Future of Hotel Booking?</h2>
          <div className="neon-line"></div>
          <p className="cta-text">
            Join thousands of travelers who have discovered a better way to book hotels in Eastleigh. 
            Experience the simplicity of WhatsApp booking today!
          </p>
          <div className="cta-buttons">
            <button className="cta-primary" onClick={handleExploreHotels}>
              <span>🏨</span>
              Explore Hotels
            </button>
            <button className="cta-secondary" onClick={handleContactUs}>
              <span>💬</span>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;