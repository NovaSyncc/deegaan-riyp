import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWhatsapp, 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faGithub, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xblgpzay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
      });
      
      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };
  
  return (
    <footer className="cyberpunk-footer">
      <div className="footer-glow-container">
        <div className="footer-glow"></div>
      </div>
      
      <div className="footer-grid">
        <div className="footer-branding">
          <h2 className="footer-logo">Riyo<span className="blink-text">_</span></h2>
          <p className="tagline">Reshaping Industries Through Technology</p>
          <div className="social-links">
            <a 
              href="https://wa.link/bq4imb" 
              className="social-icon" 
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a 
              href="https://facebook.com/deegaanriyo" 
              className="social-icon" 
              aria-label="Facebook - Deegaan Riyo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a 
              href="https://twitter.com/DeegaanRiyo" 
              className="social-icon" 
              aria-label="X (Twitter) - DeegaanRiyo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a 
              href="https://www.instagram.com/haji_al_benghazi?igsh=MWg0MjJqMDVnbDc3Yg==" 
              className="social-icon" 
              aria-label="Instagram - Haji Al Benghazi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a 
              href="https://github.com/NovaSyncc" 
              className="social-icon" 
              aria-label="GitHub - NovaSyncc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a 
              href="https://youtube.com/@RiyoNova" 
              className="social-icon" 
              aria-label="YouTube - RiyoNova"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="link-column">
            <h3 className="column-title">RiyO</h3>
            <ul className="footer-nav">
              <li><Link to="/AboutUs">About Us</Link></li>
              <li><Link to="/">Our Ventures</Link></li>
              <li><Link to="/contact">Team</Link></li>
              <li><Link to="/contact">Careers</Link></li>
            </ul>
          </div>
          
          <div className="link-column">
            <h3 className="column-title">Deegaan-Riyo</h3>
            <ul className="footer-nav">
              <li><Link to="/eastleigh-hotels">Browse Hotels</Link></li>
              <li><Link to="/contact">Locations</Link></li>
              <li><Link to="/contact">Partner With Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
          
          <div className="link-column">
            <h3 className="column-title">Connect</h3>
            <ul className="footer-nav">
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/contact">Support</Link></li>
              <li><Link to="/">Press</Link></li>
              <li><Link to="/blog">Blog</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-newsletter">
          <h3 className="column-title">Stay Connected</h3>
          <p>Subscribe to our newsletter for updates</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribe-btn">
                {status === 'success' ? 'Subscribed!' : status === 'error' ? 'Try Again' : 'Subscribe'}
              </button>
            </div>
            {status === 'success' && <div className="form-message success">Thank you for subscribing!</div>}
            {status === 'error' && <div className="form-message error">Submission failed. Please try again.</div>}
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="neon-line-footer"></div>
        <div className="footer-legal">
          <p className="copyright">&copy; {currentYear} RiyO Technologies. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/legal">Terms of Use</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
        <div className="digital-signature">
          <span className="circuit-line"></span>
          <span className="digital-text">RiyO-{currentYear}-NE0N</span>
          <span className="circuit-line"></span>
        </div>
      </div>
      
      <div className="footer-contact">
        <p>Email: <a href="mailto:deegaan@deegaanriyo.online">deegaan@deegaanriyo.online</a></p>
      </div>
    </footer>
  );
};

export default Footer;
