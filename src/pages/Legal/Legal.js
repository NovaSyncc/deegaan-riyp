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
          <p>Welcome to Deegaan-Riyo's legal documentation center. As a premium digital hotel showcase platform featuring Top 10 Best Hotels across major East African cities serving Somali communities, we're committed to transparency and legal compliance.</p>
          
          <div className="info-box">
            <h3>Select a <span className="accent-text">Document</span></h3>
            <p>Please select one of the legal documents above to learn about our policies regarding your data, our services, and platform usage.</p>
          </div>
          
          <div className="legal-sections">
            <div className="legal-section">
              <h3>Privacy Commitment</h3>
              <p>We respect your privacy and maintain minimal data collection practices, focusing solely on facilitating direct WhatsApp connections between you and our featured hotels.</p>
            </div>
            
            <div className="legal-section">
              <h3>Terms Overview</h3>
              <p>Our Terms of Service outline the guidelines for using Deegaan-Riyo's platform across our service regions in Nairobi Eastleigh, Mogadishu, Addis Ababa, Djibouti, and Hargeisa.</p>
            </div>
            
            <div className="legal-section">
              <h3>Cookie Usage</h3>
              <p>Learn about the essential cookies we use to maintain basic platform functionality and enhance your browsing experience.</p>
            </div>
          </div>
          
          <div className="contact-info">
            <h3>Legal <span className="accent-text">Contact</span></h3>
            <p>For any legal inquiries, please contact us at: <span className="highlight-text">deegaan@deegaanriyo.online</span></p>
          </div>
        </div>
      </div>
      
      <div className="cyber-footer">
        <div className="neon-line"></div>
        <p>© {new Date().getFullYear()} Deegaan-Riyo | A RiyO Technologies Company</p>
      </div>
    </div>
  );
};

export default Legal;