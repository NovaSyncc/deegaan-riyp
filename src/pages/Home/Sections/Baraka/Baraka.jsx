import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone, FaGlobe, FaMapMarkerAlt, FaWifi, FaBed, FaUtensils, FaUsers, FaBuilding, FaArrowLeft, FaStar, FaTv, FaShower, FaCoffee, FaShieldAlt } from 'react-icons/fa';
import BookingForm from '../../../../components/BookingForm/BookingForm';
import './Baraka.css';

// Import Baraka hotel images
import facility16 from '../../../../assets/images/baraka/facility-16.jpg';
import facility17 from '../../../../assets/images/baraka/facility-17.jpg';
import room2 from '../../../../assets/images/baraka/room2.jpg';
import room3 from '../../../../assets/images/baraka/room3.jpg';
import room4_1 from '../../../../assets/images/baraka/room4 (1).jpg';
import room4 from '../../../../assets/images/baraka/room4.jpg';
import room20 from '../../../../assets/images/baraka/room-20.jpg';
import room21 from '../../../../assets/images/baraka/room-21.jpg';
import room26 from '../../../../assets/images/baraka/room-26.jpg';
import room27 from '../../../../assets/images/baraka/room-27.jpg';

const Baraka = ({ onBack }) => {
  const [language, setLanguage] = useState('en');
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Hotel images - 10 images in your preferred order (moved before useEffect)
  const hotelImages = [
    {
      src: room2,
      alt: 'Baraka Tower Hotel - Standard Room'
    },
    {
      src: room3,
      alt: 'Baraka Tower Hotel - Deluxe Room'
    },
    {
      src: room4,
      alt: 'Baraka Tower Hotel - Executive Room'
    },
    {
      src: room4_1,
      alt: 'Baraka Tower Hotel - Suite'
    },
    {
      src: room20,
      alt: 'Baraka Tower Hotel - Premium Room'
    },
    {
      src: room21,
      alt: 'Baraka Tower Hotel - Luxury Room'
    },
    {
      src: room26,
      alt: 'Baraka Tower Hotel - Business Room'
    },
    {
      src: room27,
      alt: 'Baraka Tower Hotel - VIP Room'
    },
    {
      src: facility16,
      alt: 'Baraka Tower Hotel - Restaurant Facility'
    },
    {
      src: facility17,
      alt: 'Baraka Tower Hotel - Hotel Facilities'
    }
  ];
  
  // Auto-advance slideshow for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth <= 768) {
        setCurrentSlide(prev => (prev + 1) % hotelImages.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [hotelImages.length]); // Added dependency

  // Handle manual slide change
  const changeSlide = (index) => {
    setCurrentSlide(index);
  };
  
  // Updated hotel data to match HotelListings format
  const selectedHotel = {
    id: 4,
    name: 'Baraka Tower Hotel',
    location: language === 'en' ? 'Nairobi Eastleigh' : 'Nairobi Eastleigh',
    city: 'nairobi',
    country: 'kenya',
    priceRange: 'Ksh 4,000 - Ksh 9,000',
    whatsappNumber: '254712511311',
    roomTypes: [
      {
        type: "Standard Room",
        singleRate: "Ksh 4,000",
        doubleRate: "Ksh 5,000"
      },
      {
        type: "Deluxe Room",
        singleRate: "Ksh 6,500",
        doubleRate: "Ksh 7,500"
      },
      {
        type: "Executive Room",
        singleRate: "Ksh 7,000",
        doubleRate: "Ksh 8,000"
      },
      {
        type: "The Suite",
        singleRate: "Ksh 8,000",
        doubleRate: "Ksh 9,000"
      }
    ]
  };

  // Booking form handlers - matching HotelListings format
  const handleBookNowClick = () => {
    setIsBookingFormOpen(true);
  };

  const closeBookingForm = () => {
    setIsBookingFormOpen(false);
  };

  // Translation object
  const translations = {
    en: {
      title: "Baraka Tower Hotel",
      subtitle: "Luxury Accommodation in Eastleigh, Nairobi",
      ranking: "★ Premier Luxury Destination in Eastleigh",
      backToListings: "← Back to Hotel Listings",
      roomRates: "Room Rates",
      amenities: "Hotel Amenities",
      additionalInfo: "Additional Information",
      contactInfo: "Contact for Reservations",
      location: "Location",
      viewOnMaps: "View on Google Maps",
      callNow: "Call Now",
      whatsappUs: "WhatsApp Us",
      visitWebsite: "Visit Website",
      roomTypes: {
        standard: "Standard Room",
        deluxe: "Deluxe Room",
        executive: "Executive Room",
        suite: "The Suite"
      },
      rates: {
        single: "Single Rate",
        double: "Double Rate"
      },
      amenitiesList: [
        "Premier Luxury Location",
        "All-Day Dining Restaurant",
        "Business & Meeting Facilities",
        "Free Wi-Fi Throughout",
        "24/7 Reception Service",
        "Room Service Available",
        "Safe & Secure Environment",
        "Modern Room Amenities"
      ],
      additionalNotes: [
        "Rates are subject to change without prior notice.",
        "Discounts available for extended stays.",
        "Flexible check-in available 24/7 | Standard check-out: 11:00 AM",
        "Late check-out available upon request (subject to availability)",
        "All rates include standard room amenities as listed",
        "The Suite includes premium amenities and services",
        "Meeting rooms and business facilities available"
      ],
      description: "Welcome to Baraka Tower Hotel, Eastleigh's premier luxury destination. We offer discerning business travelers a serene environment for work and relaxation. Indulge in exquisite culinary delights at our all-day dining restaurant. Our hotel is a dynamic hub providing bespoke services and the perfect blend of productivity and comfort.",
      bookNow: "Book Your Stay",
      bookingLabel: "Make a Reservation"
    },
    so: {
      title: "Huteel Baraka Tower",
      subtitle: "Hoy Raaxo ah oo ku yaal Eastleigh, Nairobi",
      ranking: "★ Goobta Raaxada ugu Fiican Eastleigh",
      backToListings: "← Dib ugu noqo Liiska Huteellada",
      roomRates: "Qiimayaalka Qolalka",
      amenities: "Adeegyada Huteelka",
      additionalInfo: "Macluumaad Dheeraad ah",
      contactInfo: "Xiriir Buuginta",
      location: "Goobta",
      viewOnMaps: "Ku eeg Google Maps",
      callNow: "War Hadda",
      whatsappUs: "WhatsApp noo soo dir",
      visitWebsite: "Booqo Website-ka",
      roomTypes: {
        standard: "Qol Caadi ah",
        deluxe: "Qol Raaxo ah",
        executive: "Qol Fuliye ah",
        suite: "Qolka Ugu Fiican"
      },
      rates: {
        single: "Qiimaha Hal Qof",
        double: "Qiimaha Laba Qof"
      },
      amenitiesList: [
        "Goob Raaxo ah oo Heer Sare ah",
        "Makhaayadda Maalinta oo dhan",
        "Goobaha Shaqada & Kulamada",
        "Wi-Fi Bilaash ah Meel kasta",
        "Soo dhaweyn 24/7",
        "Adeegga Qolka",
        "Deegaan Ammaan ah",
        "Qalabka Qolka ee Casriga ah"
      ],
      additionalNotes: [
        "Qiimaha waa la beddeli karaa ogeysiis la'aan.",
        "Dhimis ayaa loo heli karaa joogitaan dheer.",
        "Waqti galitaan dabacsan 24/7 | Waqtiga caadiga ah ee bixitaanka: 11:00 AM",
        "Dib u bixitaan dambe ayaa la heli karaa marka la codsado",
        "Dhammaan qiimayaalka waxay ku jiraan adeegyada qolka caadiga ah",
        "Qolka ugu Fiican wuxuu ka koobanyahay adeegyo iyo adeegyo heer sare ah",
        "Qolal kulamo ah iyo goobaha ganacsiga ayaa la heli karaa"
      ],
      description: "Ku soo dhaweyn Huteel Baraka Tower, goobta raaxada ugu fiican ee Eastleigh. Waxaan u bixinaa safarkaa ganacsiga ah deegaan xasilloon oo loogu talagalay shaqada iyo nasashada. Ku raaxayso cunto aad u fiican makhaayadayada maalinta oo dhan. Huteelkayagu waa xarun firfircoon oo bixisa adeegyo gaar ah iyo isku dhafka fiican ee wax soo saarka iyo raaxada.",
      bookNow: "Buug Joogitaankaaga",
      bookingLabel: "Samee Buukin"
    }
  };

  const t = translations[language];

  const roomRates = [
    {
      type: t.roomTypes.standard,
      single: "Ksh 4,000",
      double: "Ksh 5,000"
    },
    {
      type: t.roomTypes.deluxe,
      single: "Ksh 6,500",
      double: "Ksh 7,500"
    },
    {
      type: t.roomTypes.executive,
      single: "Ksh 7,000",
      double: "Ksh 8,000"
    },
    {
      type: t.roomTypes.suite,
      single: "Ksh 8,000",
      double: "Ksh 9,000"
    }
  ];

  const handleCallClick = () => {
    window.open('tel:+254712511311', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254712511311', '_blank');
  };

  const handleWebsiteClick = () => {
    window.open('https://barakatowerhotel.com/', '_blank');
  };

  const handleMapsClick = () => {
    window.open('https://maps.app.goo.gl/Tf1TGHZDfgTbyTcKA', '_blank');
  };

  return (
    <section className="baraka-hotel-section">
      <div className="baraka-container">
        {/* Language Toggle */}
        <div className="baraka-language-toggle">
          <button 
            className={`baraka-lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button 
            className={`baraka-lang-btn ${language === 'so' ? 'active' : ''}`}
            onClick={() => setLanguage('so')}
          >
            SO
          </button>
        </div>

        {/* Back Button */}
        {onBack && (
          <button className="baraka-back-btn" onClick={onBack}>
            <FaArrowLeft className="baraka-back-icon" />
            {t.backToListings}
          </button>
        )}

        {/* Header */}
        <div className="baraka-header">
          <h1 className="baraka-title">{t.title}</h1>
          <p className="baraka-subtitle">{t.subtitle}</p>
          {/* Added ranking badge */}
          <div className="baraka-ranking-badge">
            <FaStar className="baraka-star-icon" />
            <span>{t.ranking}</span>
          </div>
        </div>

        {/* Hotel Images - Desktop Grid / Mobile Slideshow */}
        <div className="baraka-images-grid">
          {window.innerWidth <= 768 ? (
            // Mobile Slideshow
            <>
              {hotelImages.map((image, index) => (
                <div
                  key={index}
                  className={`baraka-image-container ${index === currentSlide ? 'active' : ''}`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="baraka-image"
                    loading="lazy"
                  />
                </div>
              ))}
              <div className="baraka-slideshow-controls">
                {hotelImages.map((_, index) => (
                  <div
                    key={index}
                    className={`baraka-slideshow-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => changeSlide(index)}
                  />
                ))}
              </div>
            </>
          ) : (
            // Desktop Grid
            hotelImages.map((image, index) => (
              <div key={index} className="baraka-image-container">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="baraka-image"
                  loading="lazy"
                />
              </div>
            ))
          )}
        </div>

        {/* Description */}
        <div className="baraka-description">
          <p>{t.description}</p>
        </div>

        {/* Room Rates Table */}
        <div className="baraka-section">
          <h2 className="baraka-section-title">{t.roomRates}</h2>
          <div className="baraka-table-container">
            <table className="baraka-rates-table">
              <thead>
                <tr>
                  <th>Room Type</th>
                  <th>Single Rate</th>
                  <th>Double Rate</th>
                </tr>
              </thead>
              <tbody>
                {roomRates.map((rate, index) => (
                  <tr key={index}>
                    <td className="baraka-room-type">{rate.type}</td>
                    <td data-label="Single Rate">{rate.single}</td>
                    <td data-label="Double Rate">{rate.double}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Amenities */}
        <div className="baraka-section">
          <h2 className="baraka-section-title">{t.amenities}</h2>
          <div className="baraka-amenities-grid">
            <div className="baraka-amenity-item">
              <FaMapMarkerAlt className="baraka-amenity-icon" />
              <span>{t.amenitiesList[0]}</span>
            </div>
            <div className="baraka-amenity-item">
              <FaUtensils className="baraka-amenity-icon" />
              <span>{t.amenitiesList[1]}</span>
            </div>
            <div className="baraka-amenity-item">
              <FaBuilding className="baraka-amenity-icon" />
              <span>{t.amenitiesList[2]}</span>
            </div>
            <div className="baraka-amenity-item">
              <FaWifi className="baraka-amenity-icon" />
              <span>{t.amenitiesList[3]}</span>
            </div>
            <div className="baraka-amenity-item">
              <FaBuilding className="baraka-amenity-icon" />
              <span>{t.amenitiesList[4]}</span>
            </div>
            <div className="baraka-amenity-item">
              <FaUsers className="baraka-amenity-icon" />
              <span>{t.amenitiesList[5]}</span>
            </div>
            <div className="baraka-amenity-item">
              <FaShieldAlt className="baraka-amenity-icon" />
              <span>{t.amenitiesList[6]}</span>
            </div>
            <div className="baraka-amenity-item">
              <FaTv className="baraka-amenity-icon" />
              <span>{t.amenitiesList[7]}</span>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="baraka-section">
          <h2 className="baraka-section-title">{t.additionalInfo}</h2>
          <ul className="baraka-info-list">
            {t.additionalNotes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="baraka-section">
          <h2 className="baraka-section-title">{t.contactInfo}</h2>
          <div className="baraka-contact-grid">
            <button className="baraka-contact-btn call-btn" onClick={handleCallClick}>
              <FaPhone className="baraka-contact-icon" />
              <div className="baraka-contact-info">
                <span className="baraka-contact-label">{t.callNow}</span>
                <span className="baraka-contact-value">0712 511 311</span>
              </div>
            </button>
            
            <button className="baraka-contact-btn whatsapp-btn" onClick={handleWhatsAppClick}>
              <FaWhatsapp className="baraka-contact-icon" />
              <div className="baraka-contact-info">
                <span className="baraka-contact-label">{t.whatsappUs}</span>
                <span className="baraka-contact-value">+254 712 511 311</span>
              </div>
            </button>
            
            <button className="baraka-contact-btn website-btn" onClick={handleWebsiteClick}>
              <FaGlobe className="baraka-contact-icon" />
              <div className="baraka-contact-info">
                <span className="baraka-contact-label">{t.visitWebsite}</span>
                <span className="baraka-contact-value">barakatowerhotel.com</span>
              </div>
            </button>
            
            <button className="baraka-contact-btn maps-btn" onClick={handleMapsClick}>
              <FaMapMarkerAlt className="baraka-contact-icon" />
              <div className="baraka-contact-info">
                <span className="baraka-contact-label">{t.viewOnMaps}</span>
                <span className="baraka-contact-value">{t.location}</span>
              </div>
            </button>
          </div>
        </div>

        {/* Book Now Button - Updated to match HotelListings style */}
        <div className="baraka-book-now-container">
          <button className="baraka-book-now-btn" onClick={handleBookNowClick}>
            <FaWhatsapp className="baraka-whatsapp-icon" />
            {t.bookNow}
          </button>
        </div>
      </div>

      {/* Booking Form Modal - Updated to match HotelListings format */}
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

export default Baraka;