import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Countdown.css';

const Countdown = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('en');
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate countdown
  useEffect(() => {
    // Set target date to 4 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 4);
    targetDate.setHours(23, 59, 59, 999); // Set to end of day
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance <= 0) {
        // Timer has expired
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTimeLeft(timeLeft);
      
      // Clear interval when timer expires
      if (timeLeft.days === 0 && timeLeft.hours === 0 && 
          timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const content = {
    en: {
      headline: "🔥 Only 6 Slots Left – A Website Built for Eastleigh's Top Hotels! (Launching in 4 Days)",
      ctaHeadline: "Think your hotel belongs on Eastleigh's Top 10 list?",
      ctaDescription: "Register your hotel now and claim your spot among the most trusted and prestigious stays in the region.",
      registerNow: "Register Now",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      slotsAvailable: "Slots Available",
      totalSlots: "Total Slots",
      chooseLanguage: "Choose language",
      english: "English",
      somali: "Somali",
      limitedOffer: "Limited Time Offer"
    },
    so: {
      headline: "🔥 Kaliya 6 Boos ayaa Harsan – Website loogu talagalay Hoteellada ugu Fiican Islii (Eastleigh)! (Waxa uu Furmayaa 4 Maalmood Gudaho)",
      ctaHeadline: "Ma rumaysan tahay in hodhelkaagu uu u qalmo liiska 10-ka ugu wanaagsan Eastleigh?",
      ctaDescription: "Diiwaan geli hodhelkaaga si uu uga mid noqdo hoteelada ugu sumcadda badan ee la isku halayn karo.",
      registerNow: "Diiwaan geli Hadda",
      days: "Maalmood",
      hours: "Saacadood",
      minutes: "Daqiiqo",
      seconds: "Ilbiriqsi",
      slotsAvailable: "Boos ayaa banaan",
      totalSlots: "Wadarta Boos-ka",
      chooseLanguage: "Dooro luuqada",
      english: "English",
      somali: "Somali",
      limitedOffer: "Fursad Xaddidan"
    }
  };

  const handleRegistration = () => {
    navigate('/registration');
  };

  return (
    <section className="countdown-section">
      {/* Background Effects */}
      <div className="countdown-bg-effects">
        <div className="countdown-gradient-orb countdown-orb-1"></div>
        <div className="countdown-gradient-orb countdown-orb-2"></div>
        <div className="countdown-gradient-orb countdown-orb-3"></div>
      </div>

      {/* Desktop Hotel Image */}
      <div className="countdown-hotel-bg"></div>

      <div className="countdown-container">
        {/* Language Toggle */}
        <div className="countdown-lang-container">
          <div className="countdown-lang-toggle">
            <button 
              onClick={() => setLanguage('en')}
              className={`countdown-lang-btn ${language === 'en' ? 'active' : ''}`}
              aria-label="Switch to English"
            >
              {content[language].english}
            </button>
            <button 
              onClick={() => setLanguage('so')}
              className={`countdown-lang-btn ${language === 'so' ? 'active' : ''}`}
              aria-label="Switch to Somali"
            >
              {content[language].somali}
            </button>
          </div>
          <div className="countdown-lang-helper">
            {content[language].chooseLanguage}
          </div>
          <div className="countdown-lang-underline"></div>
        </div>

        {/* Main Content */}
        <div className="countdown-content">
          {/* Brand Logo */}
          <div className="countdown-brand">
            <h1 className="countdown-brand-name">Deegaan-Riyo</h1>
            <div className="countdown-brand-underline"></div>
          </div>

          {/* Headline */}
          <h2 className="countdown-headline">
            {content[language].headline}
          </h2>

          {/* Timer */}
          <div className="countdown-timer">
            <div className="countdown-timer-item">
              <div className="countdown-timer-number">{timeLeft.days}</div>
              <div className="countdown-timer-label">{content[language].days}</div>
            </div>
            <div className="countdown-timer-separator">:</div>
            <div className="countdown-timer-item">
              <div className="countdown-timer-number">{timeLeft.hours}</div>
              <div className="countdown-timer-label">{content[language].hours}</div>
            </div>
            <div className="countdown-timer-separator">:</div>
            <div className="countdown-timer-item">
              <div className="countdown-timer-number">{timeLeft.minutes}</div>
              <div className="countdown-timer-label">{content[language].minutes}</div>
            </div>
            <div className="countdown-timer-separator">:</div>
            <div className="countdown-timer-item">
              <div className="countdown-timer-number">{timeLeft.seconds}</div>
              <div className="countdown-timer-label">{content[language].seconds}</div>
            </div>
          </div>

          {/* Slots Display */}
          <div className="countdown-slots-container">
            <div className="countdown-slots-header">
              <span className="countdown-slots-available">6 {content[language].slotsAvailable}</span>
              <span className="countdown-slots-total">/ 10 {content[language].totalSlots}</span>
            </div>
            <div className="countdown-slots-visual">
              {[...Array(10)].map((_, index) => (
                <div 
                  key={index}
                  className={`countdown-slot ${index < 6 ? 'active' : 'filled'}`}
                >
                  <div className="countdown-slot-inner"></div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="countdown-cta-section">
            <h3 className="countdown-cta-headline">
              {content[language].ctaHeadline}
            </h3>
            <p className="countdown-cta-description">
              {content[language].ctaDescription}
            </p>
            <button className="countdown-cta-btn" onClick={handleRegistration}>
              <span className="countdown-cta-text">{content[language].registerNow}</span>
              <div className="countdown-cta-glow"></div>
            </button>
          </div>

          {/* Urgency Indicator */}
          <div className="countdown-urgency">
            <div className="countdown-pulse-dot"></div>
            <span>{content[language].limitedOffer}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;