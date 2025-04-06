import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WhyBookUs.css';

const WhyBookUs = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/eastleigh-hotels');
  };

  const reasons = [
    {
      id: 1,
      title: "No Booking Fees",
      description: "Book directly with hotels and avoid unnecessary platform fees and commissions.",
      icon: "💰"
    },
    {
      id: 2,
      title: "Direct Communication",
      description: "Chat directly with hotel staff via WhatsApp to get immediate answers to your questions.",
      icon: "💬"
    },
    {
      id: 3,
      title: "Best Price Guarantee",
      description: "Get the best rates directly from hotels without any middleman markup.",
      icon: "🏆"
    },
    {
      id: 4,
      title: "Instant Confirmation",
      description: "Receive booking confirmations immediately through WhatsApp.",
      icon: "✅"
    }
  ];

  return (
    <section className="why">
      <div className="container">
        <h2>Why Book With Us?</h2>
        <div className="reasons-grid">
          {reasons.map(reason => (
            <div key={reason.id} className="reason-card">
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="cta-container">
          <button className="cta-button" onClick={handleButtonClick}>
            Checkout Best Deals
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyBookUs;