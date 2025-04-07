import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Legal.css';

const Legal = () => {
  return (
    <div className="legal-container">
      <div className="cyber-header">
        <h1>Legal <span className="neon-text">Documentation</span></h1>
        <div className="neon-line"></div>
      </div>
      
      <div className="legal-nav">
        <Link to="/legal/privacy" className="legal-nav-item">
          <div className="nav-icon">§</div>
          Privacy Policy
        </Link>
        <Link to="/legal/terms" className="legal-nav-item">
          <div className="nav-icon">¶</div>
          Terms of Service
        </Link>
        <Link to="/legal/cookies" className="legal-nav-item">
          <div className="nav-icon">℗</div>
          Cookie Policy
        </Link>
      </div>
      
      <div className="legal-content">
        <Outlet />
        
        {/* Default content when no specific legal page is selected */}
        <div className="legal-default">
          <h2>Legal <span className="accent-text">Framework</span></h2>
          <p>Welcome to Deegaan-Riyo's legal documentation center. As a WhatsApp-based hotel booking platform serving Eastleigh, Kenya, we're committed to transparency and legal compliance.</p>
          
          <div className="info-box">
            <h3>Select a <span className="accent-text">Document</span></h3>
            <p>Please select one of the legal documents above to view our policies regarding your data, our services, and more.</p>
          </div>
          
          <div className="legal-sections">
            <div className="legal-section">
              <h3>Privacy Commitment</h3>
              <p>We respect your personal information and use advanced security measures to protect your data while using our WhatsApp-based booking service.</p>
            </div>
            
            <div className="legal-section">
              <h3>Terms Overview</h3>
              <p>Our Terms of Service outline the rules and guidelines for using Deegaan-Riyo's platform to connect with hotels in Eastleigh.</p>
            </div>
            
            <div className="legal-section">
              <h3>Cookie Usage</h3>
              <p>Learn how we use cookies and similar technologies to enhance your browsing experience on our platform.</p>
            </div>
          </div>
          
          <div className="contact-info">
            <h3>Legal <span className="accent-text">Contact</span></h3>
            <p>For any legal inquiries, please contact us at: <span className="highlight-text">legal@deegaan-riyo.com</span></p>
          </div>
        </div>
      </div>
      
      <div className="cyber-footer">
        <div className="neon-line"></div>
        <p>© {new Date().getFullYear()} Deegaan-Riyo | A RiyO Company</p>
      </div>
    </div>
  );
};

export default Legal;