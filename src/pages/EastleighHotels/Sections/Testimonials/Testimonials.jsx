import React, { useState, useEffect } from 'react';
import './Testimonials.css';

// Import local images with correct paths
import SaraImage from '../../../../assets/images/Sara-J.png';
import MichaelImage from '../../../../assets/images/Michael.png';
import AminaImage from '../../../../assets/images/Amina.png';
import OmarImage from '../../../../assets/images/Omar-K.png';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'so' for Somali
  
  // Testimonials data with both languages
  const testimonials = [
    {
      id: 1,
      image: SaraImage,
      name: "Sarah J.",
      text: {
        en: "Booking with Deegaan-Riyo was the easiest experience ever. I found a great hotel and confirmed in minutes! No more wasting time on comparison sites.",
        so: "Dhigashada Deegaan-Riyo waxay ahayd khibradii ugu fududayd. Waxaan helay huteel wanaagsan oo aan ku xaqiijiyay daqiiqado gudahood! Wakhti dhumis kale ma jirto goobaha isbarbardhigga."
      }
    },
    {
      id: 2,
      image: MichaelImage,
      name: "Michael T.",
      text: {
        en: "I love how I can just chat with the hotel directly. Got all my questions answered and even negotiated a room upgrade. Best booking experience ever!",
        so: "Waxaan jeclahay sida aan ula sheekeysan karo hotelka si toos ah. Waxaan helay dhammaan su'aalahayga oo la iiga jawaabay iyada oo xitaa lagu heshiiyay qol hore. Khibradii dhigitaanka ugu fiicnayd abid!"
      }
    },
    {
      id: 3,
      image: AminaImage,
      name: "Amina H.",
      text: {
        en: "The AI-powered recommendations truly understood my preferences. Found a perfect place that matched my style and budget constraints like it was reading my mind!",
        so: "Talooyinka ku shaqeeya AI-ga dhab ahaantii waxay fahmeen doorbidkayga. Waxaan helay meel ku habboon qaabkayga iyo xaddidaadda miisaaniyadda sidii iyada oo maskaxdayda la akhrinayo!"
      }
    },
    {
      id: 4,
      image: OmarImage,
      name: "Omar K.",
      text: {
        en: "The virtual tour feature blew me away! I could explore my room before booking, and the real place was exactly as shown. No surprises, just perfect service.",
        so: "Astaamaha safarka virtual-ka ah ayaa i yaabishay! Waxaan baari karay qolkayga ka hor intaan dhigin, goobta dhabta ahna waxay ahayd sidii la tusay. Layaab ma jirto, oo kaliya adeeg hufan."
      }
    }
  ];

  // Auto-slide for mobile view
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth <= 992) {
        setCurrentSlide(prev => (prev + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Toggle language
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'so' : 'en');
  };

  // Navigation functions for mobile slideshow
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="testimonials-title">
          {language === 'en' ? 'What Our Guests Say' : 'Waxa Martideenna Ay Yiraahdaan'}
        </h2>
        
        <div className="language-toggle">
          <button 
            onClick={toggleLanguage} 
            className={`toggle-btn ${language === 'en' ? 'active' : ''}`}
          >
            {language === 'en' ? 'SO' : 'EN'}
          </button>
        </div>
        
        {/* Desktop View */}
        <div className="testimonials-grid desktop-view">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial">
              <div className="testimonial-header">
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
                <h3 className="testimonial-name">{testimonial.name}</h3>
              </div>
              <p className="testimonial-text">"{testimonial.text[language]}"</p>
              <div className="cyber-accent"></div>
            </div>
          ))}
        </div>
        
        {/* Mobile Slideshow */}
        <div className="testimonials-slideshow mobile-view">
          <div className="testimonial">
            <div className="testimonial-header">
              <img 
                src={testimonials[currentSlide].image} 
                alt={testimonials[currentSlide].name} 
                className="testimonial-img" 
              />
              <h3 className="testimonial-name">{testimonials[currentSlide].name}</h3>
            </div>
            <p className="testimonial-text">"{testimonials[currentSlide].text[language]}"</p>
            <div className="cyber-accent"></div>
          </div>
          
          <div className="slideshow-controls">
            <button className="nav-btn prev-btn" onClick={prevSlide}>
              <span className="nav-icon">◄</span>
            </button>
            <div className="slide-indicators">
              {testimonials.map((_, index) => (
                <span 
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
            <button className="nav-btn next-btn" onClick={nextSlide}>
              <span className="nav-icon">►</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;