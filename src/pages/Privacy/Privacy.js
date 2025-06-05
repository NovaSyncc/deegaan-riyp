import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-content">
      <h2>Privacy <span className="accent-text">Policy</span></h2>
      
      <div className="last-updated">
        <span className="neon-badge">Last Updated: June 5, 2025</span>
      </div>
      
      <div className="policy-intro">
        <p>At Deegaan-Riyo, we value and respect your privacy. This Privacy Policy explains how we handle your information when you use our premium digital hotel showcase platform featuring the Top 10 Best Hotels across major East African cities serving Somali communities, including Nairobi Eastleigh (Kenya), Mogadishu (Somalia), Addis Ababa (Ethiopia), Djibouti (Djibouti), and Hargeisa (Somaliland).</p>
      </div>
      
      <div className="policy-section">
        <h3><span className="section-number">01.</span> Information We Collect</h3>
        <div className="neon-divider"></div>
        <p>When you use Deegaan-Riyo, we collect minimal information necessary to facilitate your hotel connections:</p>
        <ul className="cyber-list">
          <li>
            <span className="list-icon">⟡</span>
            <strong>Booking Form Information:</strong> Name, travel dates, number of guests, and any special requirements you choose to share
          </li>
          <li>
            <span className="list-icon">⟡</span>
            <strong>Technical Data:</strong> Basic device information and cookies necessary for platform functionality
          </li>
        </ul>
      </div>
      
      <div className="policy-section">
        <h3><span className="section-number">02.</span> How We Use Your Information</h3>
        <div className="neon-divider"></div>
        <p>We use your information solely to:</p>
        <ul className="cyber-list">
          <li>
            <span className="list-icon">⟡</span>
            Generate your pre-filled WhatsApp message to your chosen hotel
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Improve our platform's functionality and user experience
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Maintain platform security and prevent fraud
          </li>
        </ul>
      </div>
      
      <div className="policy-section">
        <h3><span className="section-number">03.</span> Information Handling</h3>
        <div className="neon-divider"></div>
        <p>Important points about how we handle your data:</p>
        <ul className="cyber-list">
          <li>
            <span className="list-icon">⟡</span>
            We do not store your booking information after generating your WhatsApp message
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Direct communication happens between you and the hotel via WhatsApp
          </li>
          <li>
            <span className="list-icon">⟡</span>
            We do not have access to your WhatsApp conversations with hotels
          </li>
          <li>
            <span className="list-icon">⟡</span>
            We never sell or share your information with third parties
          </li>
        </ul>
      </div>
      
      <div className="policy-section">
        <h3><span className="section-number">04.</span> Data Security</h3>
        <div className="neon-divider"></div>
        <p>We implement industry-standard security measures to protect any temporary data processed through our platform. Since we operate primarily as a connection facilitator to WhatsApp, most of your sensitive communication occurs directly through WhatsApp's encrypted platform.</p>
      </div>
      
      <div className="policy-section">
        <h3><span className="section-number">05.</span> Your Rights</h3>
        <div className="neon-divider"></div>
        <p>You have the right to:</p>
        <ul className="cyber-list">
          <li>
            <span className="list-icon">⟡</span>
            Know how your information is being used
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Choose not to provide certain information
          </li>
          <li>
            <span className="list-icon">⟡</span>
            Request information about our data practices
          </li>
        </ul>
      </div>
      
      <div className="policy-section">
        <h3><span className="section-number">06.</span> Changes to This Policy</h3>
        <div className="neon-divider"></div>
        <p>We may update this Privacy Policy to reflect changes in our practices or for legal compliance. The latest version will always be posted on our website with the effective date.</p>
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