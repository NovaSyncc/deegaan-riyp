import React from 'react';
import { Camera, TrendingUp, MessageCircle, CheckCircle, Users, Shield, Code, Smartphone, Zap } from 'lucide-react';
import './MoonsPalace.css';

const MoonsPalaceProposal = () => {
  const portfolioWebsites = [
    {
      name: "HYYAT Golden Hotel",
      location: "Eastleigh, Nairobi",
      image: "/images/hotels/hyyat-golden/hyyatgoldenhotelentrance.jpg",
      url: "https://www.hyyatgoldenhotel.online/",
      features: "Full booking system, multilingual"
    },
    {
      name: "BinAli Hotel",
      location: "Eastleigh, Nairobi",
      image: "/images/hotels/bushra/reception.jpg",
      url: "https://www.binalihotel.online/",
      features: "Custom CMS, payment integration"
    },
    {
      name: "Baraka Tower Hotel",
      location: "Eastleigh, Nairobi",
      image: "/images/hotels/baraka-tower/room2.jpg",
      url: "https://barakatowerhotel.com/",
      features: "Premium digital presence"
    }
  ];

  const features = [
    "Custom domain (moonspalacehotel.com) - your own brand",
    "Mobile-responsive design - looks perfect on all devices",
    "Direct booking system - WhatsApp integration, inquiry forms",
    "Room showcase with photo galleries, videos and pricing",
    "Reception video loop - capturing rooms and all hotel amenities",
    "Professional video content - room tours, facilities walkthrough",
    "Google Maps integration - guests can find you easily",
    "Contact forms and booking calendar",
    "Fast loading speed - optimized for poor connections",
    "SEO setup - rank on Google for 'hotels near me'",
    "Multilingual support (English & Somali)",
    "1 year free hosting & domain included"
  ];

  const techStack = [
    "React.js - Modern, fast user interface",
    "Node.js - Powerful backend server",
    "MongoDB - Secure database management",
    "Tailwind CSS - Beautiful, responsive design",
    "WhatsApp API - Direct booking integration",
    "Google Analytics - Track visitor behavior"
  ];

  const problems = [
    {
      icon: <Users className="mp-card-icon" style={{ width: '2.5rem', height: '2.5rem', color: '#f87171' }} />,
      title: "Lost Premium Guests",
      desc: "High-value guests (corporate, international) only book hotels with professional websites. They won't trust WhatsApp-only bookings."
    },
    {
      icon: <TrendingUp className="mp-card-icon" style={{ width: '2.5rem', height: '2.5rem', color: '#f87171' }} />,
      title: "Zero Online Visibility",
      desc: "Google doesn't rank hotels without websites. You're invisible to 95% of online searchers."
    },
    {
      icon: <Shield className="mp-card-icon" style={{ width: '2.5rem', height: '2.5rem', color: '#f87171' }} />,
      title: "No Brand Authority",
      desc: "Without your own domain, you look unprofessional compared to competitors with polished websites."
    }
  ];

  const packages = [
    {
      icon: <Code style={{ width: '2rem', height: '2rem' }} />,
      iconClass: "cyan",
      title: "Website Development",
      items: ["Custom design & branding", "5-7 page website", "Mobile-responsive layout", "Admin dashboard for updates"],
      value: "25,000 KES"
    },
    {
      icon: <Camera style={{ width: '2rem', height: '2rem' }} />,
      iconClass: "purple",
      title: "Professional Content",
      items: ["Professional photography session", "15-20 high-quality images", "Copywriting & descriptions", "SEO optimization"],
      value: "10,000 KES"
    },
    {
      icon: <Smartphone style={{ width: '2rem', height: '2rem' }} />,
      iconClass: "yellow",
      title: "Booking System",
      items: ["WhatsApp instant booking", "Contact form integration", "Room availability calendar", "Guest inquiry management"],
      value: "7,000 KES"
    },
    {
      icon: <Zap style={{ width: '2rem', height: '2rem' }} />,
      iconClass: "green",
      title: "Launch & Support",
      items: ["Domain setup & hosting (1 year)", "SSL security certificate", "Google Business integration", "30-day post-launch support"],
      value: "3,000 KES"
    }
  ];

  return (
    <div className="moons-palace-wrapper">
      {/* Hero Section */}
      <div className="mp-hero">
        <div className="mp-hero-bg"></div>
        <div className="mp-hero-overlay"></div>

        <div className="mp-hero-content">
          {/* Logo/Brand */}
          <div className="mp-text-center mp-mb-8">
            <div className="mp-brand">
              <Code className="mp-brand-icon" />
              <span className="mp-brand-name">DEEGAAN RIYO</span>
              <span className="mp-brand-divider">|</span>
              <span className="mp-brand-tagline">Premium Web Development</span>
            </div>
            <p className="mp-brand-subtitle">Leading premium website developer for Eastleigh hotels</p>
          </div>

          <h1 className="mp-title">
            <span style={{ fontSize: '0.6em', color: '#9ca3af', fontWeight: '500' }}>PROPOSAL FOR</span><br />
            Premium Website for<br />
            <span className="mp-title-highlight">Moons Palace Hotel</span>
          </h1>

          <p className="mp-subtitle">
            Professional hotel website with booking system.
            <span className="mp-price"> 45,000 KES</span> total investment.
          </p>

          <div className="mp-flex mp-flex-col mp-items-center mp-gap-4" style={{ marginBottom: '2rem' }}>
            <a
              href="https://wa.me/254712221079?text=I'm%20interested%20in%20the%2045K%20premium%20website%20for%20Moons%20Palace%20Hotel"
              className="mp-btn-primary"
            >
              <MessageCircle style={{ width: '1.5rem', height: '1.5rem' }} />
              <span>Schedule Director Meeting</span>
            </a>
            <button
              onClick={() => document.getElementById('package').scrollIntoView({ behavior: 'smooth' })}
              className="mp-btn-secondary"
            >
              View Full Package
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mp-trust-grid">
            <div className="mp-trust-item">
              <div className="mp-trust-number cyan">8+</div>
              <div className="mp-trust-label">Eastleigh Hotels Worked With</div>
            </div>
            <div className="mp-trust-item">
              <div className="mp-trust-number green">3</div>
              <div className="mp-trust-label">Full Websites Built</div>
            </div>
            <div className="mp-trust-item">
              <div className="mp-trust-number yellow">100%</div>
              <div className="mp-trust-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="mp-section mp-section-dark">
        <div className="mp-container">
          <div className="mp-text-center mp-mb-12">
            <h2 className="mp-section-title">Why Hotels Without Websites Lose Money</h2>
            <p className="mp-section-subtitle">In 2025, no website = no credibility = no premium bookings</p>
          </div>

          <div className="mp-grid-3">
            {problems.map((item, i) => (
              <div key={i} className="mp-card">
                {item.icon}
                <h3 className="mp-card-title">{item.title}</h3>
                <p className="mp-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mp-reality-box">
            <p className="mp-reality-text">
              <span className="mp-reality-label">Reality Check:</span> Hotels like HYYAT Golden and BinAli charge 20% more per room and attract more bookings because they have professional websites. They look established and professional. Online presence matters.
            </p>
          </div>
        </div>
      </div>

      {/* Solution Section */}
      <div className="mp-section mp-section-darker">
        <div className="mp-container">
          <div className="mp-text-center mp-mb-12">
            <h2 className="mp-section-title">
              Your <span className="mp-title-highlight">Premium Website Solution</span>
            </h2>
            <p className="mp-section-subtitle">Everything a modern hotel needs to dominate online</p>
          </div>

          <div className="mp-grid-2">
            <div>
              <h3 className="mp-section-title" style={{ fontSize: '1.5rem', textAlign: 'left', marginBottom: '1.5rem', color: '#22d3ee' }}>What You Get:</h3>
              <div className="mp-feature-list">
                {features.map((point, i) => (
                  <div key={i} className="mp-feature-item">
                    <CheckCircle className="mp-feature-icon" />
                    <p className="mp-feature-text">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="mp-design-sample">
                <h4 className="mp-design-title">Professional Design Sample</h4>
                <div className="mp-design-preview">
                  <img
                    src="/images/hotels/hyyat-golden/hyyatgoldenreception.jpg"
                    alt="Hotel website showcase"
                    className="mp-design-image"
                  />
                  <div className="mp-design-content">
                    <h5 className="mp-design-hotel-name">Moons Palace Hotel</h5>
                    <p className="mp-design-location">📍 Premium Location, Nairobi</p>
                    <div className="mp-room-grid">
                      <div className="mp-room-card">
                        <div className="mp-room-type">Deluxe</div>
                        <div className="mp-room-price">KSH 3,500/nt</div>
                      </div>
                      <div className="mp-room-card">
                        <div className="mp-room-type">Suite</div>
                        <div className="mp-room-price">KSH 5,500/nt</div>
                      </div>
                    </div>
                    <button className="mp-book-btn">
                      <MessageCircle style={{ width: '1rem', height: '1rem' }} /> Book Now
                    </button>
                  </div>
                </div>
                <p className="mp-design-caption">
                  Clean, professional, conversion-optimized
                </p>
              </div>

              <div className="mp-bonus-box">
                <p className="mp-bonus-text">
                  <span className="mp-bonus-label">Bonus:</span> If your hotel qualifies, you may be eligible for free listing on our DGR platform (deegaanriyo.online) - additional exposure worth 15K
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Package Section */}
      <div id="package" className="mp-section mp-section-dark">
        <div className="mp-container">
          <div className="mp-text-center mp-mb-12">
            <h2 className="mp-section-title">
              Complete Package: <span className="mp-title-highlight">45,000 KES</span>
            </h2>
            <p className="mp-section-subtitle">Premium web development - turnkey solution</p>
          </div>

          <div className="mp-package-grid">
            {packages.map((item, i) => (
              <div key={i} className="mp-package-card">
                <div className="mp-package-header">
                  <div className={`mp-package-icon ${item.iconClass}`}>{item.icon}</div>
                  <div className="mp-package-info">
                    <h3 className="mp-package-title">{item.title}</h3>
                    <p className="mp-package-value">Value: {item.value}</p>
                  </div>
                </div>
                <ul className="mp-package-list">
                  {item.items.map((point, j) => (
                    <li key={j} className="mp-package-item">
                      <CheckCircle className="mp-package-check" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Pricing Card */}
          <div className="mp-pricing-card">
            <div className="mp-pricing-badge">
              <span className="mp-pricing-badge-text">PREMIUM WEB DEVELOPMENT</span>
            </div>
            <h3 className="mp-pricing-amount">45,000 KES</h3>
            <p className="mp-pricing-subtitle">One-time investment • Your website forever</p>

            <div className="mp-pricing-breakdown">
              <div className="mp-pricing-row">
                <span className="mp-pricing-label">Total Package Value:</span>
                <span className="mp-pricing-value strikethrough">45,000 KES</span>
              </div>
              <div className="mp-pricing-row">
                <span className="mp-pricing-label cyan">Your Investment:</span>
                <span className="mp-pricing-value cyan">45,000 KES</span>
              </div>
              <p className="mp-pricing-note">+ Annual renewal: 15K/year (hosting & domain)</p>
            </div>

            <a
              href="https://wa.me/254712221079?text=I'm%20ready%20to%20invest%2045K%20in%20a%20premium%20website%20for%20Moons%20Palace"
              className="mp-pricing-cta"
            >
              Start Your Website Today
            </a>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mp-section mp-section-darker">
        <div className="mp-container">
          <div className="mp-text-center mp-mb-12">
            <h2 className="mp-section-title">
              Built with <span className="mp-title-highlight">Modern Technology</span>
            </h2>
            <p className="mp-section-subtitle">Industry-leading tech stack for performance and reliability</p>
          </div>

          <div className="mp-grid-3">
            {techStack.map((tech, i) => (
              <div key={i} className="mp-card" style={{ borderColor: 'rgba(34, 211, 238, 0.2)' }}>
                <div className="mp-feature-item">
                  <CheckCircle className="mp-feature-icon" />
                  <p className="mp-feature-text">{tech}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="mp-section mp-section-dark">
        <div className="mp-container">
          <div className="mp-text-center mp-mb-12">
            <h2 className="mp-section-title">Eastleigh Hotels Trust Us</h2>
            <p className="mp-section-subtitle">We've built the digital presence for the area's top hotels</p>
          </div>

          <div className="mp-portfolio-grid">
            {portfolioWebsites.map((hotel, i) => (
              <div key={i} className="mp-portfolio-card">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="mp-portfolio-image"
                />
                <div className="mp-portfolio-content">
                  <h3 className="mp-portfolio-name">{hotel.name}</h3>
                  <p className="mp-portfolio-location">📍 {hotel.location}</p>
                  <p className="mp-portfolio-url">{hotel.url}</p>
                  <p className="mp-portfolio-features">{hotel.features}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mp-track-record">
            <h3 className="mp-track-title">Our Track Record in Eastleigh:</h3>
            <div className="mp-track-grid">
              <div>
                <div className="mp-track-number cyan">8+</div>
                <div className="mp-track-label">Eastleigh Hotels Worked With</div>
              </div>
              <div>
                <div className="mp-track-number green">3</div>
                <div className="mp-track-label">Full Websites Built</div>
              </div>
              <div>
                <div className="mp-track-number yellow">100%</div>
                <div className="mp-track-label">Happy Clients</div>
              </div>
            </div>
          </div>

          <div className="mp-track-note">
            <p className="mp-track-note-text">
              <span className="mp-track-note-label">Note:</span> DGR platform listing is separate and requires qualification. This package is for your standalone premium website.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mp-section mp-section-black">
        <div className="mp-container" style={{ maxWidth: '64rem' }}>
          <h2 className="mp-section-title" style={{ fontSize: 'clamp(2.25rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>
            Ready to Launch Moons Palace Online?
          </h2>
          <p className="mp-section-subtitle">
            Let's build you a website that generates premium bookings
          </p>

          <div className="mp-flex mp-flex-col mp-items-center mp-gap-4 mp-mb-12">
            <a
              href="https://wa.me/254712221079?text=I%20want%20to%20discuss%20the%2045K%20premium%20website%20for%20Moons%20Palace"
              className="mp-btn-primary"
            >
              <MessageCircle style={{ width: '1.5rem', height: '1.5rem' }} />
              <span>WhatsApp: 0712 221 079</span>
            </a>
          </div>

          <div className="mp-timeline">
            <h3 className="mp-timeline-title">Project Timeline:</h3>
            <div className="mp-timeline-list">
              <div className="mp-timeline-item">
                <span className="mp-timeline-number">1</span>
                <p className="mp-timeline-text">Director approves 45K investment & signs agreement</p>
              </div>
              <div className="mp-timeline-item">
                <span className="mp-timeline-number">2</span>
                <p className="mp-timeline-text">Content gathering - photos, videos, hotel information (Day 1)</p>
              </div>
              <div className="mp-timeline-item">
                <span className="mp-timeline-number">3</span>
                <p className="mp-timeline-text">Website development & design (Days 2-4)</p>
              </div>
              <div className="mp-timeline-item">
                <span className="mp-timeline-number">4</span>
                <p className="mp-timeline-text">Your review, revisions, and final approval (Day 5)</p>
              </div>
              <div className="mp-timeline-item">
                <span className="mp-timeline-number green">5</span>
                <p className="mp-timeline-text green">Website goes LIVE - start receiving premium bookings!</p>
              </div>
            </div>
            <div className="mp-timeline-total">
              <p className="mp-timeline-total-text">Total Timeline: 5 Business Days from payment to launch</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mp-footer">
        <div className="mp-footer-content">
          <p className="mp-footer-text">
            © 2025 Deegaan Riyo. Premium Hotel Web Development.
          </p>
          <p className="mp-footer-note">
            This proposal is valid for 30 days from presentation date. We serve hotels across Nairobi & Somalia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoonsPalaceProposal;
