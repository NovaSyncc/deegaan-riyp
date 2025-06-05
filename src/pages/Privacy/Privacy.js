import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-content">
      <h2>Privacy <span className="accent-text">Policy</span></h2>
      
      <div className="last-updated">
        <span className="neon-badge">Last Updated: April 7, 2025</span>
      </div>
      
      <div className="policy-intro">
        <p>At Deegaan-Riyo, we value and respect your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our WhatsApp-based hotel booking platform serving Eastleigh, Kenya.</p>
      </div>
      
      <div className="policy-section">
        <h3><span className="section-number">01.</span> Information We Collect</h3>
        <div className="neon-divider"></div>
        <p>When you use Deegaan-Riyo, we collect the following types of information:</p>
        <ul className="cyber-list">
          <li>
            <span className="list-icon">⟡</span>
            <strong>Contact Information:</strong> Name, phone number, email address
          </li>
          <li>
            <span className="list-icon">⟡</span>
            <strong>Booking Details:</strong> Check-in/check-out dates, number of guests, room preferences
          </li>
          <li>
            <span className="list-icon">⟡</span>
            <strong>WhatsApp Communication:</strong> Messages exchanged with hotels through our platform
          </li>
          <li>
            <span className="list-icon">⟡</span>
            <strong>Technical Data:</strong> IP address, browser type, device information, cookies
          </li>
        </ul>
      </div>
      
      <div className="policy-section">
        <h3><span className="section-number">02.</span> How We Use Your Information</h3>
        <div className="neon-divider"></div>
        <p>We use your personal information to:</p>
        <ul className="cyber-list">
          <li>
            <span className="list-icon">⟡</span>
            Facilitate hotel bookings through WhatsApp
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Communicate with you about your reservation
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Improve our services and user experience
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Send you important updates about our platform
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Comply with legal obligations
          </li>
        </ul>
      </div>
      
      <div className="policy-section">
        <h3><span className="section-number">03.</span> Information Sharing</h3>
        <div className="neon-divider"></div>
        <p>We share your information with:</p>
        <ul className="cyber-list">
          <li>
            <span className="list-icon">⟡</span>
            <strong>Hotels:</strong> To process your booking request
          </li>
          <li>
            <span className="list-icon">⟡</span>
            <strong>Service Providers:</strong> Who help us operate our platform
          </li>
          <li>
            <span className="list-icon">⟡</span>
            <strong>Legal Authorities:</strong> When required by law
          </li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </div>
      
      <div className="policy-section">
        <h3><span className="section-number">04.</span> Data Security</h3>
        <div className="neon-divider"></div>
        <p>We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is completely secure. While we strive to protect your data, we cannot guarantee its absolute security.</p>
      </div>
      
      <div className="policy-section">
        <h3><span className="section-number">05.</span> Your Rights</h3>
        <div className="neon-divider"></div>
        <p>You have the right to:</p>
        <ul className="cyber-list">
          <li>
            <span className="list-icon">⟡</span>
            Access your personal information
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Correct inaccurate data
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Delete your information (with certain limitations)
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Object to processing of your data
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Withdraw consent at any time
          </li>
        </ul>
        <p>To exercise these rights, please contact us at <span className="highlight-text">deegaan@riyo.com</span></p>
      </div>
      
      <div className="policy-section">
        <h3><span className="section-number">06.</span> Changes to This Policy</h3>
        <div className="neon-divider"></div>
        <p>We may update this Privacy Policy from time to time. The latest version will always be posted on our website with the effective date.</p>
      </div>
      
      <div className="policy-section">
        <h3><span className="section-number">07.</span> Contact Us</h3>
        <div className="neon-divider"></div>
        <p>If you have any questions about this Privacy Policy, please contact us at: deegaan@deegaanriyo.online</p>
      </div>
    </div>
  );
};

export default Privacy;