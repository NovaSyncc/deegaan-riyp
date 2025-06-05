import React, { useState, useEffect, useRef } from 'react';
import './FAQ.css';

const FAQ = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Group FAQs by category
  const faqCategories = [
    {
      id: 'general',
      name: 'General Questions',
      questions: [
        {
          id: 'what-is-riyo',
          question: "What is RiyO?",
          answer: "RiyO is a parent company focused on innovation, empowerment, and sustainability. We create and manage various technology ventures including Deegaan-Riyo, our hotel booking platform for Eastleigh, Kenya. Our mission is to reshape industries and create economic opportunities through accessible technology solutions."
        },
        {
          id: 'who-founded',
          question: "Who founded RiyO?",
          answer: "RiyO was founded by Abdifatah Hajifarah, a visionary entrepreneur who identified opportunities to leverage everyday technology tools like WhatsApp to solve real-world problems and bridge gaps in various industries."
        },
        {
          id: 'ventures',
          question: "What ventures are part of RiyO?",
          answer: "Currently, our flagship venture is Deegaan-Riyo, a direct-to-consumer hotel booking platform in Eastleigh, Kenya. We're constantly exploring new opportunities to expand our portfolio with ventures that align with our core values of innovation, empowerment, and sustainability."
        }
      ]
    },
    {
      id: 'deegaan',
      name: 'About Deegaan-Riyo',
      questions: [
        {
          id: 'what-is-deegaan',
          question: "What is Deegaan-Riyo?",
          answer: "Deegaan-Riyo is an innovative direct-to-consumer hotel booking platform specifically designed for Eastleigh, Kenya. It connects travelers directly with hotels through WhatsApp, eliminating the need for complex booking systems or third-party intermediaries."
        },
        {
          id: 'how-it-works',
          question: "How does Deegaan-Riyo work?",
          answer: "Our platform allows users to browse available hotels on our website, then connect directly with the hotel via WhatsApp to complete their booking. This approach leverages existing technology that both hotels and travelers are already comfortable using, making the process seamless and accessible."
        },
        {
          id: 'why-whatsapp',
          question: "Why use WhatsApp for bookings?",
          answer: "WhatsApp is already widely used in East Africa, making it an accessible tool for both hotels and travelers. By leveraging an existing communication channel, we eliminate the need for special training, additional software installations, or expensive booking systems. This approach lowers barriers to entry for small hotels and creates a familiar experience for users."
        }
      ]
    },
    {
      id: 'hotels',
      name: 'For Hotels',
      questions: [
        {
          id: 'hotel-join',
          question: "How can my hotel join Deegaan-Riyo?",
          answer: "If you operate a hotel in Eastleigh and want to partner with us, you can reach out through our contact page or email us at partners@deegaan-riyo.com. Our team will guide you through the simple onboarding process and help set up your hotel profile on our platform."
        },
        {
          id: 'hotel-cost',
          question: "What does it cost hotels to use Deegaan-Riyo?",
          answer: "We operate on a commission-based model that's significantly lower than traditional booking platforms. There are no upfront costs, subscription fees, or technical requirements beyond having a WhatsApp business account. This makes our platform accessible to hotels of all sizes."
        },
        {
          id: 'hotel-manage',
          question: "How do hotels manage bookings?",
          answer: "Hotels manage bookings directly through WhatsApp conversations with guests. This allows for real-time communication, easy clarification of special requests, and building personal connections with guests before arrival. We provide templates and best practices to help streamline the booking process."
        }
      ]
    },
    {
      id: 'travelers',
      name: 'For Travelers',
      questions: [
        {
          id: 'booking-guarantee',
          question: "Are my bookings guaranteed?",
          answer: "When you book through Deegaan-Riyo, you're establishing a direct relationship with the hotel. Your conversation and booking confirmation in WhatsApp serves as your reservation record. We carefully vet all hotel partners to ensure reliability and quality service."
        },
        {
          id: 'payment-options',
          question: "What payment options are available?",
          answer: "Payment arrangements are made directly between you and the hotel during your WhatsApp conversation. Most hotels accept mobile money transfers, cash payments upon arrival, and some accept card payments. The direct nature of the booking allows for flexible payment arrangements."
        },
        {
          id: 'cancellation-policy',
          question: "What is the cancellation policy?",
          answer: "Cancellation policies vary by hotel. When booking through WhatsApp, you can directly ask the hotel about their specific cancellation terms. This transparency is one of the benefits of our direct booking approach."
        },
        {
          id: 'contact-support',
          question: "How can I contact support?",
          answer: "You can reach our support team at deegaan@deegaanriyo.online or call +254 712 221 079"
        }
      ]
    }
  ];

  // State to track which questions are expanded
  const [expandedQuestions, setExpandedQuestions] = useState({});

  // Toggle question expand/collapse
  const toggleQuestion = (questionId) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  return (
    <section className="faq-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="neon-line"></div>
        
        <p className="intro-text">
          Find answers to common questions about RiyO, our ventures, and how we're using technology to create innovative solutions.
        </p>
        
        <div className="search-container">
          <div className="search-wrapper">
            <input 
              type="text" 
              placeholder="Search for questions..." 
              className="search-input"
              aria-label="Search FAQs" 
            />
            <button className="search-btn" aria-label="Search">
              <i className="icon-search"></i>
            </button>
          </div>
        </div>
        
        <div className="faq-content">
          {faqCategories.map(category => (
            <div className="faq-category" key={category.id}>
              <h3 className="category-title">{category.name}</h3>
              
              <div className="questions-list">
                {category.questions.map(item => (
                  <div 
                    className={`faq-item ${expandedQuestions[item.id] ? 'expanded' : ''}`} 
                    key={item.id}
                  >
                    <button 
                      className="question" 
                      onClick={() => toggleQuestion(item.id)}
                      aria-expanded={expandedQuestions[item.id]}
                      aria-controls={`answer-${item.id}`}
                    >
                      <span>{item.question}</span>
                      <span className="toggle-icon"></span>
                    </button>
                    <div 
                      className="answer"
                      id={`answer-${item.id}`}
                      style={{
                        maxHeight: expandedQuestions[item.id] ? '500px' : '0',
                        opacity: expandedQuestions[item.id] ? '1' : '0'
                      }}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-cta">
          <h3>Still have questions?</h3>
          <p>We're here to help! Reach out to our team and get the answers you need.</p>
          <div className="cta-buttons">
            <a href="/contact" className="contact-btn">Contact Us</a>
            <a href="mailto:support@riyo.com" className="email-btn">Email Support</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;