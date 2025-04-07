import React from 'react';
import './Cookies.css';

const Cookies = () => {
  return (
    <div className="cookies-container">
      <div className="cookies-header">
        <h1>Cookie Policy</h1>
        <div className="neon-line"></div>
      </div>

      <div className="cookie-section">
        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your device when you visit our website. 
          They help us remember your preferences, understand how you use our site, and 
          improve your experience.
        </p>
      </div>

      <div className="cookie-section">
        <h2>How We Use Cookies</h2>
        <p>
          At Deegaan-Riyo, we use cookies to:
        </p>
        <ul className="cyber-list">
          <li>Remember your booking preferences</li>
          <li>Analyze site traffic and usage patterns</li>
          <li>Enable WhatsApp connection features</li>
          <li>Improve our services based on your interactions</li>
          <li>Secure your data during the booking process</li>
        </ul>
      </div>

      <div className="cookie-section">
        <h2>Types of Cookies We Use</h2>
        
        <div className="cookie-type">
          <h3>Essential Cookies</h3>
          <p>
            Required for the website to function properly. They enable core functionality 
            such as security and network management. You cannot opt out of these cookies.
          </p>
        </div>
        
        <div className="cookie-type">
          <h3>Performance Cookies</h3>
          <p>
            Help us improve our website by collecting anonymous information about how you 
            use Deegaan-Riyo, such as which pages you visit most frequently.
          </p>
        </div>
        
        <div className="cookie-type">
          <h3>Functionality Cookies</h3>
          <p>
            Remember your preferences and choices to enhance your experience, such as 
            language preferences and booking history.
          </p>
        </div>
        
        <div className="cookie-type">
          <h3>Third-Party Cookies</h3>
          <p>
            Set by third-party services on our website, such as WhatsApp integration for 
            direct hotel booking communications.
          </p>
        </div>
      </div>

      <div className="cookie-section">
        <h2>Managing Your Cookie Preferences</h2>
        <p>
          You can control cookies through your browser settings. Be aware that disabling 
          certain cookies may affect the functionality of our booking platform.
        </p>
        
        <div className="browser-instructions">
          <h3>Browser Settings</h3>
          <p>
            Most browsers allow you to refuse cookies or accept them on a case-by-case basis:
          </p>
          <ul className="cyber-list">
            <li>Chrome: Settings → Privacy and Security → Cookies</li>
            <li>Firefox: Options → Privacy & Security → Cookies</li>
            <li>Safari: Preferences → Privacy → Cookies</li>
            <li>Edge: Settings → Cookies and Site Permissions</li>
          </ul>
        </div>
      </div>

      <div className="cookie-section">
        <h2>Our Cookie Policy Updates</h2>
        <p>
          We may update this policy periodically to reflect changes in technology or regulations. 
          Check back occasionally to stay informed about how Deegaan-Riyo protects your data.
        </p>
      </div>

      <div className="cookies-actions">
        <button className="cyber-button primary">Accept All Cookies</button>
        <button className="cyber-button secondary">Essential Cookies Only</button>
        <button className="cyber-button outline">Customize Settings</button>
      </div>

      <div className="cookies-footer">
        <p>Last Updated: April 2025</p>
        <p>Deegaan-Riyo | A RiyO company</p>
      </div>
    </div>
  );
};

export default Cookies;