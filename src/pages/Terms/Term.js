import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <div className="terms-content">
      <h2>Terms of <span className="accent-text">Service</span></h2>
      
      <div className="last-updated">
        <span className="neon-badge">Last Updated: April 7, 2025</span>
      </div>
      
      <div className="terms-intro">
        <p>Welcome to Deegaan-Riyo. By accessing or using our WhatsApp-based hotel booking platform, you agree to be bound by these Terms of Service. Please read them carefully before using our services.</p>
      </div>
      
      <div className="terms-section">
        <h3><span className="section-number">01.</span> Acceptance of Terms</h3>
        <div className="neon-divider"></div>
        <p>By accessing or using Deegaan-Riyo's platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.</p>
      </div>
      
      <div className="terms-section">
        <h3><span className="section-number">02.</span> Service Description</h3>
        <div className="neon-divider"></div>
        <p>Deegaan-Riyo is a platform that connects travelers with hotels in Eastleigh, Kenya through WhatsApp. We facilitate direct communication between guests and hotels for booking accommodations.</p>
        
        <div className="terms-subsection">
          <h4>2.1 Platform Role</h4>
          <p>We act solely as an intermediary, connecting users with hotels. We do not own, operate, or manage any of the listed hotels.</p>
        </div>
        
        <div className="terms-subsection">
          <h4>2.2 WhatsApp Communication</h4>
          <p>All booking communications occur through WhatsApp. We are not responsible for any technical issues with WhatsApp that may affect your booking process.</p>
        </div>
      </div>
      
      <div className="terms-section">
        <h3><span className="section-number">03.</span> User Obligations</h3>
        <div className="neon-divider"></div>
        <p>When using our service, you agree to:</p>
        <ul className="cyber-list">
          <li>
            <span className="list-icon">⟡</span>
            Provide accurate and complete personal information
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Communicate respectfully with hotel staff
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Comply with all hotel policies and rules
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Make timely payments as agreed with the hotel
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Not use our service for any illegal or unauthorized purpose
          </li>
        </ul>
      </div>
      
      <div className="terms-section">
        <h3><span className="section-number">04.</span> Booking and Payments</h3>
        <div className="neon-divider"></div>
        
        <div className="terms-subsection">
          <h4>4.1 Booking Process</h4>
          <p>All bookings are subject to availability and confirmation by the hotel. Once you submit a booking request through our platform, the hotel will confirm availability and provide payment instructions via WhatsApp.</p>
        </div>
        
        <div className="terms-subsection">
          <h4>4.2 Payments</h4>
          <p>All payments are made directly to the hotel using M-Pesa or other methods specified by the hotel. Deegaan-Riyo does not process or handle any payments.</p>
        </div>
        
        <div className="terms-subsection">
          <h4>4.3 Cancellations and Refunds</h4>
          <p>Cancellation policies are set by individual hotels. Please confirm the cancellation policy directly with the hotel before making a booking.</p>
        </div>
      </div>
      
      <div className="terms-section">
        <h3><span className="section-number">05.</span> Limitation of Liability</h3>
        <div className="neon-divider"></div>
        <p>Deegaan-Riyo is not liable for:</p>
        <ul className="cyber-list">
          <li>
            <span className="list-icon">⟡</span>
            The quality or condition of hotel accommodations
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Any disputes between users and hotels
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Payment issues or financial transactions
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Technical failures of WhatsApp or other third-party services
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Indirect, incidental, special, or consequential damages
          </li>
        </ul>
      </div>
      
      <div className="terms-section">
        <h3><span className="section-number">06.</span> Intellectual Property</h3>
        <div className="neon-divider"></div>
        <p>All content on the Deegaan-Riyo platform, including but not limited to text, graphics, logos, and software, is the property of RiyO or its content suppliers and is protected by copyright laws.</p>
      </div>
      
      <div className="terms-section">
        <h3><span className="section-number">07.</span> Termination</h3>
        <div className="neon-divider"></div>
        <p>We reserve the right to terminate or suspend your access to our services at our sole discretion, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.</p>
      </div>
      
      <div className="terms-section">
        <h3><span className="section-number">08.</span> Changes to Terms</h3>
        <div className="neon-divider"></div>
        <p>We reserve the right to modify these Terms at any time. We will provide notice of significant changes by updating the "Last Updated" date at the top of this page.</p>
      </div>
      
      <div className="terms-section">
        <h3><span className="section-number">09.</span> Contact Us</h3>
        <div className="neon-divider"></div>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <div className="contact-box">
          <p><span className="contact-label">Email:</span> <span className="highlight-text">legal@deegaan-riyo.com</span></p>
          <p><span className="contact-label">WhatsApp:</span> <span className="highlight-text">+254 XX XXX XXXX</span></p>
          <p><span className="contact-label">Address:</span> Eastleigh, Nairobi, Kenya</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;