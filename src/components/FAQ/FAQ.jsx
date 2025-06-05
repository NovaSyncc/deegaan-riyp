import React, { useState, useEffect, useRef } from 'react';

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
          id: 'what-is-deegaan',
          question: "What is Deegaan-Riyo?",
          answer: "Deegaan-Riyo showcases only the Top 10 Best Hotels in major East African cities serving Somali communities. We operate in Nairobi Eastleigh, Mogadishu, Addis Ababa, Djibouti, and Hargeisa. Our curated selection of excellence helps guests discover premium stays, then connects them instantly with hotels through a seamless, commission-free process."
        },
        {
          id: 'our-mission',
          question: "What is our mission?",
          answer: "Our mission is to give your hotel prestigious digital recognition, attract quality bookings, and build trust through beauty, clarity, and convenience. We focus exclusively on serving Somali communities across East Africa's major cities with only the finest hotel selections."
        },
        {
          id: 'cities-served',
          question: "Which cities do you serve?",
          answer: "We operate in major East African cities with significant Somali communities: Nairobi Eastleigh (Kenya), Mogadishu (Somalia), Addis Ababa (Ethiopia), Djibouti (Djibouti), and Hargeisa (Somaliland). Each location features only the Top 10 Best Hotels in that area."
        },
        {
          id: 'top-10-only',
          question: "Why only Top 10 hotels?",
          answer: "We maintain exclusivity and quality by limiting each city to only the Top 10 Best Hotels. This curated approach ensures guests always find premium accommodations while giving participating hotels prestigious recognition among the elite selections in their city."
        }
      ]
    },
    {
      id: 'selection',
      name: 'Hotel Selection Process',
      questions: [
        {
          id: 'evaluation-process',
          question: "How do you select hotels?",
          answer: "We have a rigorous evaluation process that assesses hotel service quality, pricing competitiveness, and overall guest experience. Only hotels that pass our comprehensive evaluation become part of our Top 10 Best Hotels selection in each city."
        },
        {
          id: 'selection-criteria',
          question: "What are your selection criteria?",
          answer: "Our evaluation focuses on three key areas: exceptional service quality, competitive and fair pricing, and overall guest satisfaction. Hotels must excel in all areas to earn a place among the Top 10 Best Hotels in their city."
        },
        {
          id: 'how-it-works',
          question: "How does the platform work?",
          answer: "Customers browse our curated selection of the finest hotels, then connect directly with their chosen hotel via one-tap WhatsApp integration. This eliminates middlemen and commissions while providing seamless booking experiences for both guests and hotels."
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
          answer: "If you operate a hotel in our served cities (Nairobi Eastleigh, Mogadishu, Addis Ababa, Djibouti, or Hargeisa) and want to be considered for our Top 10 selection, contact us at deegaan@deegaanriyo.online or call +254 712 221 079. We'll evaluate your hotel through our rigorous selection process."
        },
        {
          id: 'tax-compliance',
          question: "How do you handle tax documentation?",
          answer: "We are fully compliant with tax authorities in all jurisdictions where we operate (Kenya, Somalia, Ethiopia, Djibouti, and Somaliland). We provide hotels with proper tax invoices and receipts for all transactions, ensuring complete transparency and compliance with local tax regulations."
        },
        {
          id: 'pricing-model',
          question: "What is your pricing model?",
          answer: "We operate with a $1,000 USD annual hotel listing fee plus a monthly performance-based fee agreed upon based on the number of clients we bring you each month. This ensures you only pay additional fees when we deliver results. We keep zero commissions from your bookings."
        },
        {
          id: 'onboarding-package',
          question: "What's included in the onboarding package?",
          answer: "Our Premium Onboarding Package ($1,000 USD) includes: premium listing among Top 10 Best Hotels, professional photo shoot, custom website development or revamp, WhatsApp booking integration, bilingual content (Somali + English), 1-year platform subscription, dedicated customer support, and monthly performance reports. Note: Early bird pricing of KES 50,000 has expired."
        },
        {
          id: 'zero-commission',
          question: "Do you take commissions from bookings?",
          answer: "No, we operate on a zero-commission model. You keep 100% of your booking revenue. Our business model is based on annual listing fees and performance-based monthly fees, ensuring your direct booking revenue remains entirely yours."
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
          answer: "When you book through Deegaan-Riyo, you're connecting with carefully selected Top 10 Best Hotels that have passed our rigorous evaluation process. Your WhatsApp conversation and booking confirmation serves as your reservation record with these premium establishments."
        },
        {
          id: 'payment-options',
          question: "What payment options are available?",
          answer: "Payment arrangements are made directly between you and the hotel during your WhatsApp conversation. Most hotels accept mobile money transfers, cash payments upon arrival, and some accept card payments. The direct booking approach allows for flexible payment arrangements."
        },
        {
          id: 'quality-assurance',
          question: "How do you ensure hotel quality?",
          answer: "Every hotel in our Top 10 selection has passed comprehensive evaluation covering service quality, competitive pricing, and guest satisfaction. We continuously monitor performance and maintain our high standards across all cities we serve."
        },
        {
          id: 'cities-available',
          question: "In which cities can I find hotels?",
          answer: "We currently serve Somali communities in five major East African cities: Nairobi Eastleigh (Kenya), Mogadishu (Somalia), Addis Ababa (Ethiopia), Djibouti (Djibouti), and Hargeisa (Somaliland). Each location features only the Top 10 Best Hotels."
        },
        {
          id: 'contact-support',
          question: "How can I contact support?",
          answer: "You can reach our support team at deegaan@deegaanriyo.online or call +254 712 221 079. We provide dedicated customer support to ensure your booking experience is seamless."
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
      <style jsx>{`
        /* FAQ.css - Enhanced Version */
        .faq-section {
          background-color: #080F1A;
          font-family: 'Inter', sans-serif;
          color: #fff;
          padding: 80px 0;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease, transform 1s ease;
          position: relative;
          overflow: hidden;
        }

        .faq-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(0, 162, 255, 0.1), transparent 70%);
          z-index: 0;
        }

        .faq-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        /* Typography */
        .section-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 3rem;
          margin-bottom: 15px;
          text-align: center;
          color: #FFFFFF;
          text-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
          letter-spacing: 2px;
          font-weight: 700;
        }

        .neon-line {
          height: 2px;
          background: linear-gradient(90deg, transparent, #00FFFF, transparent);
          margin: 0 auto 40px;
          width: 60%;
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
        }

        .intro-text {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 40px;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #B8C4E0;
        }

        /* Search Container */
        .search-container {
          max-width: 600px;
          margin: 0 auto 50px;
        }

        .search-wrapper {
          position: relative;
          display: flex;
          border-radius: 30px;
          overflow: hidden;
          border: 1px solid rgba(0, 255, 255, 0.3);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.1);
          background: rgba(8, 22, 42, 0.7);
        }

        .search-input {
          flex: 1;
          background: transparent;
          border: none;
          padding: 15px 20px;
          color: #fff;
          font-size: 1rem;
          outline: none;
        }

        .search-input::placeholder {
          color: rgba(184, 196, 224, 0.6);
        }

        .search-btn {
          background: linear-gradient(90deg, #0066CC, #00CCFF);
          border: none;
          padding: 0 25px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .search-btn:hover {
          background: linear-gradient(90deg, #00CCFF, #0066CC);
        }

        .icon-search::before {
          content: '🔍';
        }

        /* FAQ Content Organization */
        .faq-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }

        .faq-category {
          margin-bottom: 20px;
        }

        .category-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 1.8rem;
          margin-bottom: 20px;
          color: #00CCFF;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
          position: relative;
          padding-left: 15px;
        }

        .category-title::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 5px;
          height: 70%;
          background: linear-gradient(to bottom, #00CCFF, transparent);
          border-radius: 3px;
        }

        .questions-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        /* FAQ Items */
        .faq-item {
          background: rgba(8, 22, 42, 0.7);
          border: 1px solid rgba(0, 255, 255, 0.2);
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .faq-item:hover {
          border-color: rgba(0, 255, 255, 0.4);
          box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .faq-item.expanded {
          background: rgba(12, 28, 50, 0.8);
          border-color: rgba(0, 255, 255, 0.5);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
        }

        .question {
          width: 100%;
          padding: 20px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
          font-size: 1.2rem;
          background: transparent;
          border: none;
          color: inherit;
          text-align: left;
          transition: all 0.3s ease;
        }

        .question:hover {
          color: #00FFFF;
        }

        .toggle-icon {
          position: relative;
          width: 20px;
          height: 20px;
          transition: transform 0.3s ease;
        }

        .toggle-icon::before,
        .toggle-icon::after {
          content: '';
          position: absolute;
          background-color: #00FFFF;
          transition: all 0.3s ease;
        }

        .toggle-icon::before {
          width: 20px;
          height: 2px;
          top: 9px;
          left: 0;
        }

        .toggle-icon::after {
          width: 2px;
          height: 20px;
          left: 9px;
          top: 0;
        }

        .expanded .toggle-icon::after {
          transform: rotate(90deg);
          opacity: 0;
        }

        .answer {
          overflow: hidden;
          transition: all 0.5s ease;
          padding: 0 20px;
          background: rgba(0, 20, 40, 0.5);
          border-top: 1px solid transparent;
        }

        .expanded .answer {
          padding: 20px;
          border-top: 1px solid rgba(0, 255, 255, 0.2);
        }

        .answer p {
          line-height: 1.6;
          color: #B8C4E0;
        }

        /* FAQ CTA Section */
        .faq-cta {
          margin-top: 60px;
          text-align: center;
          padding: 40px;
          background: rgba(0, 40, 80, 0.3);
          border-radius: 12px;
          border: 1px solid rgba(0, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
        }

        .faq-cta::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at center, rgba(0, 162, 255, 0.15), transparent 70%);
          z-index: -1;
        }

        .faq-cta h3 {
          font-family: 'Orbitron', sans-serif;
          font-size: 2rem;
          margin-bottom: 15px;
          color: #FFFFFF;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }

        .faq-cta p {
          max-width: 600px;
          margin: 0 auto 30px;
          font-size: 1.1rem;
          color: #B8C4E0;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .contact-btn,
        .email-btn {
          padding: 12px 30px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .contact-btn {
          background: linear-gradient(90deg, #0066CC, #00CCFF);
          color: #FFFFFF;
          border: none;
          box-shadow: 0 0 20px rgba(0, 162, 255, 0.4);
        }

        .contact-btn:hover {
          background: linear-gradient(90deg, #00CCFF, #0066CC);
          transform: translateY(-3px);
          box-shadow: 0 0 30px rgba(0, 162, 255, 0.6);
        }

        .email-btn {
          background: transparent;
          color: #00FFFF;
          border: 1px solid #00FFFF;
        }

        .email-btn:hover {
          background: rgba(0, 255, 255, 0.1);
          transform: translateY(-3px);
          box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
        }

        /* Responsive Design */
        @media (min-width: 768px) {
          .faq-content {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }
          
          .neon-line {
            width: 80%;
          }
          
          .category-title {
            font-size: 1.5rem;
          }
          
          .question {
            font-size: 1rem;
            padding: 15px;
          }
          
          .answer {
            font-size: 0.9rem;
          }
          
          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .contact-btn,
          .email-btn {
            width: 100%;
            max-width: 250px;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          .faq-section {
            padding: 50px 0;
          }
          
          .section-title {
            font-size: 1.5rem;
          }
          
          .category-title {
            font-size: 1.2rem;
          }
          
          .faq-cta {
            padding: 30px 20px;
          }
          
          .faq-cta h3 {
            font-size: 1.5rem;
          }
        }

        /* Animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-category {
          animation: fadeIn 0.5s ease forwards;
        }

        .faq-category:nth-child(1) { animation-delay: 0.1s; }
        .faq-category:nth-child(2) { animation-delay: 0.2s; }
        .faq-category:nth-child(3) { animation-delay: 0.3s; }
        .faq-category:nth-child(4) { animation-delay: 0.4s; }
      `}</style>
      
      <div className="container">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="neon-line"></div>
        
        <p className="intro-text">
          Find answers to common questions about Deegaan-Riyo, our Top 10 Best Hotels selection process, and how we connect premium accommodations across East Africa's major cities.
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
            <a href="mailto:deegaan@deegaanriyo.online" className="email-btn">Email Support</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;