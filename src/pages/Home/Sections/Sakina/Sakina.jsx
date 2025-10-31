import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaWifi, FaSpa, FaUtensils, FaUsers, FaParking, FaArrowLeft, FaStar, FaTv, FaCoffee, FaLock } from 'react-icons/fa';
import BookingForm from '../../../../components/BookingForm/BookingForm';
import { getHotelImage, handleImageError } from '../../../../utils/imageUtils';
import './Sakina.css';

const Sakina = ({ onBack }) => {
  const [language, setLanguage] = useState('en');
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedRateType, setSelectedRateType] = useState('daily');
  
  // Get images using the hotel image system - ALL REAL SAKINA IMAGES (using first 9 for grid)
  const sakina1 = getHotelImage('sakina', 'TNT03856-scaled.jpg');
  const sakina2 = getHotelImage('sakina', 'TNT03870-scaled.jpg');
  const sakina3 = getHotelImage('sakina', 'TNT03874-scaled.jpg');
  const sakina4 = getHotelImage('sakina', 'TNT03885-scaled.jpg');
  const sakina5 = getHotelImage('sakina', 'TNT03911-scaled.jpg');
  const sakina6 = getHotelImage('sakina', 'TNT03943-scaled.jpg');
  const sakina7 = getHotelImage('sakina', 'TNT03952-scaled.jpg');
  const sakina8 = getHotelImage('sakina', 'TNT03957-scaled.jpg');
  const sakina9 = getHotelImage('sakina', 'TNT04009-scaled.jpg');
  
  // Hotel images - 9 images for 4x3 grid layout
  const hotelImages = [
    { src: sakina1, alt: 'Sakina Hotel - Exterior View' },
    { src: sakina2, alt: 'Sakina Hotel - Lobby' },
    { src: sakina3, alt: 'Sakina Hotel - Reception Area' },
    { src: sakina4, alt: 'Sakina Hotel - Room Interior' },
    { src: sakina5, alt: 'Sakina Hotel - Deluxe Room' },
    { src: sakina6, alt: 'Sakina Hotel - Bathroom' },
    { src: sakina7, alt: 'Sakina Hotel - Restaurant' },
    { src: sakina8, alt: 'Sakina Hotel - Dining Area' },
    { src: sakina9, alt: 'Sakina Hotel - Conference Room' }
  ];
  
  // Auto-advance slideshow for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth <= 768) {
        setCurrentSlide(prev => (prev + 1) % hotelImages.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Handle manual slide change
  const changeSlide = (index) => {
    setCurrentSlide(index);
  };
  
  // Hotel data
  const selectedHotel = {
    id: 'sakina-hotel',
    name: 'Sakina Hotel',
    location: language === 'en' ? 'Eastleigh, Nairobi' : 'Eastleigh, Nairobi',
    city: 'nairobi',
    country: 'kenya',
    priceRange: 'Ksh 2,000 - Ksh 6,500 (Daily)',
    whatsappNumber: '254741947770',
    roomTypes: [] 
  };

  // Booking form handlers
  const handleBookNowClick = () => {
    setIsBookingFormOpen(true);
  };

  const closeBookingForm = () => {
    setIsBookingFormOpen(false);
  };

  // Translation object
  const translations = {
    en: {
      title: "Sakina Hotel",
      subtitle: "Luxury, Comfort & Exceptional Service in Eastleigh",
      ranking: "⭐ Premier Hotel in the Heart of Eastleigh",
      backToListings: "← Back to Hotel Listings",
      roomRates: "Room Rates",
      amenities: "Hotel Amenities",
      contactInfo: "Contact & Location",
      location: "Eastleigh, Nairobi",
      viewOnMaps: "View on Google Maps",
      callNow: "Call Now",
      whatsappUs: "WhatsApp Us",
      daily: "Daily",
      weekly: "Weekly",
      monthly: "Monthly",
      roomTypes: {
        standard: "Standard Room",
        deluxe: "Deluxe Room",
        vip: "VIP Suite",
        family1: "Family Suite (1BR)",
        family2: "Family Suite (2BR)",
      },
      withBreakfast: "With Breakfast",
      withoutBreakfast: "Without Breakfast",
      amenitiesList: [
        "High-Speed Wi-Fi",
        "Flat-Screen TVs",
        "In-Room Safes",
        "Tea & Coffee",
        "Spa Services",
        "Restaurant",
        "Free Parking",
        "24/7 Reception"
      ],
      description: "Experience luxury and comfort at Sakina Hotel in the heart of Eastleigh. Our spacious rooms feature modern amenities including high-speed Wi-Fi, flat-screen TVs, in-room safes, and tea/coffee facilities. Enjoy our spa, restaurant, and exceptional 24/7 service.",
      bookNow: "Book Your Stay",
      priceNote: "* Long-stay rates available. Contact us for special offers."
    },
    so: {
      title: "Huteel Sakina",
      subtitle: "Raaxo, Qurux iyo Adeeg Heer Sare ah oo Eastleigh ah",
      ranking: "⭐ Huteelka Ugu Fiican Wadnaha Eastleigh",
      backToListings: "← Dib ugu noqo Liiska Huteellada",
      roomRates: "Qiimayaalka Qolalka",
      amenities: "Adeegyada Huteelka",
      contactInfo: "Xiriir & Goobta",
      location: "Eastleigh, Nairobi",
      viewOnMaps: "Ku eeg Google Maps",
      callNow: "War Hadda",
      whatsappUs: "WhatsApp",
      daily: "Maalinle",
      weekly: "Todobaadle",
      monthly: "Bile",
      roomTypes: {
        standard: "Qol Caadi ah",
        deluxe: "Qol Qurux badan",
        vip: "Suite VIP",
        family1: "Suite Qoyska (1BR)",
        family2: "Suite Qoyska (2BR)",
      },
      withBreakfast: "Quraac Wadata",
      withoutBreakfast: "Quraac La'aan",
      amenitiesList: [
        "Wi-Fi Xawaare Sare",
        "TV-yada Shaashadda",
        "Khasnado Qolka",
        "Shaah & Qaxwe",
        "Spa Nasasho",
        "Makhaayadda",
        "Baakiin Bilaash",
        "Qabasho 24/7"
      ],
      description: "Ku raaxayso raaxada iyo quruxda Huteel Sakina oo ku yaal wadnaha Eastleigh. Qolalkeenna ballaaran waxay leeyihiin Wi-Fi xawaare sare, TV-yada casriga ah, khasnado, iyo alaabta shaaha iyo qaxwaha. Hel spa, makhaayadda, iyo adeeg 24/7.",
      bookNow: "Buug Joogitaankaaga",
      priceNote: "* Qiimayaal gaar ah joogitaanka dheer. Nala soo xiriir."
    }
  };

  const t = translations[language];

  // Simplified room rates with toggle view
  const roomRates = {
    daily: [
      { type: t.roomTypes.standard, withB: "2,500", withoutB: "2,000" },
      { type: t.roomTypes.deluxe, withB: "3,500", withoutB: "3,000" },
      { type: t.roomTypes.vip, withB: "4,500", withoutB: "4,000" },
      { type: t.roomTypes.family1, withB: "5,500", withoutB: "-" },
      { type: t.roomTypes.family2, withB: "6,500", withoutB: "-" }
    ],
    weekly: [
      { type: t.roomTypes.standard, withB: "15,000", withoutB: "12,000" },
      { type: t.roomTypes.deluxe, withB: "22,000", withoutB: "19,000" },
      { type: t.roomTypes.vip, withB: "28,000", withoutB: "25,000" },
      { type: t.roomTypes.family1, withB: "35,000", withoutB: "-" },
      { type: t.roomTypes.family2, withB: "40,000", withoutB: "-" }
    ],
    monthly: [
      { type: t.roomTypes.standard, withB: "60,000", withoutB: "50,000" },
      { type: t.roomTypes.deluxe, withB: "85,000", withoutB: "75,000" },
      { type: t.roomTypes.vip, withB: "105,000", withoutB: "95,000" },
      { type: t.roomTypes.family1, withB: "130,000", withoutB: "-" },
      { type: t.roomTypes.family2, withB: "150,000", withoutB: "-" }
    ]
  };

  const handleCallClick = () => {
    window.open('tel:+254741947770', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254741947770', '_blank');
  };

  const handleMapsClick = () => {
    window.open('https://maps.app.goo.gl/9PWSBYV8awHQLVSq5', '_blank');
  };

  return (
    <section className="sakina-hotel-section">
      <div className="sakina-container">
        {/* Language Toggle */}
        <div className="sakina-language-toggle">
          <button 
            className={`sakina-lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button 
            className={`sakina-lang-btn ${language === 'so' ? 'active' : ''}`}
            onClick={() => setLanguage('so')}
          >
            SO
          </button>
        </div>

        {/* Back Button */}
        {onBack && (
          <button className="sakina-back-btn" onClick={onBack}>
            <FaArrowLeft className="sakina-back-icon" />
            {t.backToListings}
          </button>
        )}

        {/* Header */}
        <div className="sakina-header">
          <h1 className="sakina-title">{t.title}</h1>
          <p className="sakina-subtitle">{t.subtitle}</p>
          <div className="sakina-ranking-badge">
            <FaStar className="sakina-star-icon" />
            <span>{t.ranking}</span>
          </div>
        </div>

        {/* Hotel Images - Desktop 4x3 Grid / Mobile Slideshow */}
        <div className="sakina-images-grid">
          {window.innerWidth <= 768 ? (
            // Mobile Slideshow
            <>
              {hotelImages.map((image, index) => (
                <div
                  key={index}
                  className={`sakina-image-container ${index === currentSlide ? 'active' : ''}`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="sakina-image"
                    loading="lazy"
                    onError={handleImageError}
                  />
                </div>
              ))}
              <div className="sakina-slideshow-controls">
                {hotelImages.map((_, index) => (
                  <div
                    key={index}
                    className={`sakina-slideshow-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => changeSlide(index)}
                  />
                ))}
              </div>
            </>
          ) : (
            // Desktop Grid - 4x3 layout with creative shapes
            hotelImages.map((image, index) => (
              <div key={index} className="sakina-image-container">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="sakina-image"
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>
            ))
          )}
        </div>

        {/* Description */}
        <div className="sakina-description">
          <p>{t.description}</p>
        </div>

        {/* Two Column Layout for Rates and Amenities */}
        <div className="sakina-content-grid">
          {/* Room Rates - Compact Design */}
          <div className="sakina-section sakina-rates-section">
            <h2 className="sakina-section-title">{t.roomRates}</h2>
            
            {/* Rate Type Toggle */}
            <div className="sakina-rate-toggle">
              <button 
                className={`sakina-rate-btn ${selectedRateType === 'daily' ? 'active' : ''}`}
                onClick={() => setSelectedRateType('daily')}
              >
                {t.daily}
              </button>
              <button 
                className={`sakina-rate-btn ${selectedRateType === 'weekly' ? 'active' : ''}`}
                onClick={() => setSelectedRateType('weekly')}
              >
                {t.weekly}
              </button>
              <button 
                className={`sakina-rate-btn ${selectedRateType === 'monthly' ? 'active' : ''}`}
                onClick={() => setSelectedRateType('monthly')}
              >
                {t.monthly}
              </button>
            </div>

            {/* Compact Rate Cards */}
            <div className="sakina-rate-cards">
              {roomRates[selectedRateType].map((rate, index) => (
                <div key={index} className="sakina-rate-card">
                  <div className="sakina-rate-room-type">{rate.type}</div>
                  <div className="sakina-rate-prices">
                    <div className="sakina-rate-price-item">
                      <span className="sakina-rate-label">{t.withBreakfast}</span>
                      <span className="sakina-rate-value">Ksh {rate.withB}</span>
                    </div>
                    {rate.withoutB !== "-" && (
                      <div className="sakina-rate-price-item secondary">
                        <span className="sakina-rate-label">{t.withoutBreakfast}</span>
                        <span className="sakina-rate-value">Ksh {rate.withoutB}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="sakina-note">{t.priceNote}</p>
          </div>

          {/* Amenities - Grid */}
          <div className="sakina-section sakina-amenities-section">
            <h2 className="sakina-section-title">{t.amenities}</h2>
            <div className="sakina-amenities-grid">
              <div className="sakina-amenity-item">
                <FaWifi className="sakina-amenity-icon" />
                <span>{t.amenitiesList[0]}</span>
              </div>
              <div className="sakina-amenity-item">
                <FaTv className="sakina-amenity-icon" />
                <span>{t.amenitiesList[1]}</span>
              </div>
              <div className="sakina-amenity-item">
                <FaLock className="sakina-amenity-icon" />
                <span>{t.amenitiesList[2]}</span>
              </div>
              <div className="sakina-amenity-item">
                <FaCoffee className="sakina-amenity-icon" />
                <span>{t.amenitiesList[3]}</span>
              </div>
              <div className="sakina-amenity-item">
                <FaSpa className="sakina-amenity-icon" />
                <span>{t.amenitiesList[4]}</span>
              </div>
              <div className="sakina-amenity-item">
                <FaUtensils className="sakina-amenity-icon" />
                <span>{t.amenitiesList[5]}</span>
              </div>
              <div className="sakina-amenity-item">
                <FaParking className="sakina-amenity-icon" />
                <span>{t.amenitiesList[6]}</span>
              </div>
              <div className="sakina-amenity-item">
                <FaUsers className="sakina-amenity-icon" />
                <span>{t.amenitiesList[7]}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="sakina-section sakina-contact-section">
          <h2 className="sakina-section-title">{t.contactInfo}</h2>
          <div className="sakina-contact-grid">
            <button className="sakina-contact-btn call-btn" onClick={handleCallClick}>
              <FaPhone className="sakina-contact-icon" />
              <div className="sakina-contact-info">
                <span className="sakina-contact-label">{t.callNow}</span>
                <span className="sakina-contact-value">0741 947 770</span>
              </div>
            </button>
            
            <button className="sakina-contact-btn whatsapp-btn" onClick={handleWhatsAppClick}>
              <FaWhatsapp className="sakina-contact-icon" />
              <div className="sakina-contact-info">
                <span className="sakina-contact-label">{t.whatsappUs}</span>
                <span className="sakina-contact-value">+254 741 947 770</span>
              </div>
            </button>
            
            <button className="sakina-contact-btn maps-btn" onClick={handleMapsClick}>
              <FaMapMarkerAlt className="sakina-contact-icon" />
              <div className="sakina-contact-info">
                <span className="sakina-contact-label">{t.viewOnMaps}</span>
                <span className="sakina-contact-value">{t.location}</span>
              </div>
            </button>
          </div>
        </div>

        {/* Book Now Button */}
        <div className="sakina-book-now-container">
          <button className="sakina-book-now-btn" onClick={handleBookNowClick}>
            <FaWhatsapp className="sakina-whatsapp-icon" />
            {t.bookNow}
          </button>
        </div>
      </div>

      {/* Booking Form Modal */}
      {isBookingFormOpen && selectedHotel && (
        <BookingForm 
          isOpen={isBookingFormOpen} 
          onClose={closeBookingForm} 
          selectedHotelId={selectedHotel.id}
          selectedHotel={selectedHotel}
        />
      )}
    </section>
  );
};

export default Sakina;