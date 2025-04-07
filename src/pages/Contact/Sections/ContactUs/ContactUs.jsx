import React, { useState, useEffect } from 'react';
import './ContactUs.css';
import supportImage from '../../../../assets/images/suport.png';

const ContactUs = () => {
  const [formData, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });
  
  // Multilingual content
  const slideContent = [
    {
      language: "English",
      greeting: "Hello, how can we help?",
      supportText: "We're here to assist you"
    },
    {
      language: "Somali",
      greeting: "Salaam, sidee kugu caawin karnaa?",
      supportText: "Waxaan halkan u joognaa inaan ku caawino"
    },
    {
      language: "Kiswahili",
      greeting: "Habari, tunawezaje kusaidia?",
      supportText: "Tuko hapa kukusaidia"
    }
  ];
  
  // Auto-rotate slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slideContent.length);
    }, 5000);
    
    return () => clearInterval(slideInterval);
  }, [slideContent.length]);
  
  // Handle manual slide change
  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };
  
  const handleFocus = (name) => {
    setFocused(prev => ({
      ...prev,
      [name]: true
    }));
  };
  
  const handleBlur = (name) => {
    setFocused(prev => ({
      ...prev,
      [name]: false
    }));
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      try {
        // Send data to Formspree
        const response = await fetch('https://formspree.io/f/xblgpzay', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        const data = await response.json();
        
        if (data.ok) {
          console.log('Form submitted successfully:', formData);
          setSubmitted(true);
          
          // Reset form after submission
          setState({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
          
          // Reset submission message after 5 seconds
          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        } else {
          console.error('Form submission error:', data);
          setErrors({ form: 'Failed to submit form. Please try again.' });
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setErrors({ form: 'Failed to submit form. Please try again.' });
      } finally {
        setIsLoading(false);
      }
    }
  };
  
  return (
    <div className="contact-container">
      <div className="contact-content-wrapper">
        <div className="contact-image-container">
          <div className="support-shape">
            <img src={supportImage} alt="Support" />
            
            {/* Multilingual Slideshow */}
            <div className="multilingual-text">
              <div className="slideshow-container">
                {slideContent.map((slide, index) => (
                  <div key={index} className={`slide ${index === activeSlide ? 'active' : ''}`}>
                    <span className="language-label">{slide.language}</span>
                    <h2 className="greeting-text">{slide.greeting}</h2>
                    <p className="support-text">{slide.supportText}</p>
                  </div>
                ))}
              </div>
              
              {/* Dot indicators */}
              <div className="dot-indicators">
                {slideContent.map((_, index) => (
                  <span 
                    key={index} 
                    className={`dot ${index === activeSlide ? 'active' : ''}`}
                    onClick={() => handleSlideChange(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <div className="contact-form-card">
            <div className="card-glow"></div>
            <h1 className="form-title">Contact Us</h1>
            <p className="form-subtitle">Get in touch with our team</p>
            
            {submitted && (
              <div className="success-message">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Message sent successfully!</span>
              </div>
            )}
            
            {errors.form && (
              <div className="error-message form-error">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF5555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>{errors.form}</span>
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <div className={`input-container ${errors.name ? 'error' : ''} ${focused.name ? 'focused' : ''}`}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                  />
                  <div className="input-glow"></div>
                </div>
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className={`input-container ${errors.email ? 'error' : ''} ${focused.email ? 'focused' : ''}`}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                  />
                  <div className="input-glow"></div>
                </div>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <div className={`input-container ${errors.subject ? 'error' : ''} ${focused.subject ? 'focused' : ''}`}>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={() => handleBlur('subject')}
                  />
                  <div className="input-glow"></div>
                </div>
                {errors.subject && <span className="error-message">{errors.subject}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <div className={`input-container textarea ${errors.message ? 'error' : ''} ${focused.message ? 'focused' : ''}`}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    rows="5"
                  ></textarea>
                  <div className="input-glow"></div>
                </div>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="loader"></div>
                ) : (
                  <span>SEND MESSAGE</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;