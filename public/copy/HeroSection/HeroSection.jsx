import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import heroImage from '../../../../assets/images/Hero.jpg';
import bubbleSound1 from '../../../../assets/sounds/blip.mp3';
import bubbleSound2 from '../../../../assets/sounds/ding.mp3';
import './HeroSection.css';

const HeroSection = () => {
  const [soundsPlayed, setSoundsPlayed] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const sound1Ref = useRef(null);
  const sound2Ref = useRef(null);
  const hasMountedRef = useRef(false);

  // Check user's sound preference
  useEffect(() => {
    // Try to get saved preference from localStorage
    const savedMutePreference = localStorage.getItem('hero-sound-muted');
    if (savedMutePreference !== null) {
      setIsMuted(savedMutePreference === 'true');
    }
  }, []);

  // Save mute preference when it changes
  useEffect(() => {
    if (hasMountedRef.current) {
      localStorage.setItem('hero-sound-muted', isMuted.toString());
    } else {
      hasMountedRef.current = true;
    }
  }, [isMuted]);

  // Play the sound effects when the message bubbles appear
  const playMessageSound = (soundRef, delay) => {
    if (!isMuted) {
      setTimeout(() => {
        if (soundRef.current) {
          soundRef.current.volume = 0.4; // Set a moderate volume
          soundRef.current.play()
            .catch(error => {
              // Handle autoplay restrictions
              console.log("Sound autoplay prevented:", error);
            });
        }
      }, delay);
    }
  };

  // Toggle sound mute state
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  // Set up intersection observer to play sounds when bubbles are visible
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // Play sounds when bubbles become visible
        playMessageSound(sound1Ref, 1200); // First bubble sound
        playMessageSound(sound2Ref, 1800); // Second bubble sound
      }
    }, options);

    const messageContainer = document.querySelector('.message-bubbles-container');
    if (messageContainer) {
      observer.observe(messageContainer);
    }

    return () => {
      if (messageContainer) {
        observer.unobserve(messageContainer);
      }
    };
  }, [isMuted]); // Only re-run when mute state changes

  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Find the Best Hotels in Eastleigh, Nairobi
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Book directly with your desired hotel's reception in "ISLII" via <span className="whatsapp-text"><FaWhatsapp className="whatsapp-icon" />WhatsApp</span> – No middlemen, no hassle.
        </motion.p>
        
        <div className="message-bubbles-container">
          <motion.div 
            className="message-bubble somali-bubble"
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.2,
              type: "spring",
              stiffness: 100
            }}
          >
            <p className="bubble-text">Ku soo dhawoow deegaan aad ka heli doonto riyo wacan.</p>
          </motion.div>
          
          <motion.div 
            className="message-bubble swahili-bubble"
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.6,
              type: "spring",
              stiffness: 100
            }}
          >
            <p className="bubble-text">Karibu kwenye mahali utakapopata usingizi mtulivu na ndoto za fahari.</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#hotel-listings" className="hero-cta-button">
            Explore Hotels
          </a>
        </motion.div>
      </div>
      
      {/* Sound control button */}
      <div 
        className={`sound-control ${isMuted ? 'muted' : ''}`} 
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute sound effects" : "Mute sound effects"}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </div>
      
      {/* Sound effect audio elements */}
      <div className="sound-effects">
        <audio ref={sound1Ref} preload="auto">
          <source src={bubbleSound1} type="audio/mp3" />
        </audio>
        <audio ref={sound2Ref} preload="auto">
          <source src={bubbleSound2} type="audio/mp3" />
        </audio>
      </div>
    </div>
  );
};

export default HeroSection;