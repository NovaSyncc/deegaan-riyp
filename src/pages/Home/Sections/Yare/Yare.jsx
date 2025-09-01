import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone, FaGlobe, FaMapMarkerAlt, FaWifi, FaSwimmingPool, FaUtensils, FaUsers, FaBuilding, FaArrowLeft, FaStar } from 'react-icons/fa';
import BookingForm from '../../../../components/BookingForm/BookingForm';
import { getHotelImage, handleImageError } from '../../../../utils/imageUtils';
import './Yare.css';

const Yare = ({ onBack }) => {
  const [language, setLanguage] = useState('en');
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Get images using the new system
  const yareConf = getHotelImage('yare-towers', 'yareconf.jpg');
  const yareL = getHotelImage('yare-towers', 'yarel.jpg');
  const yarePool = getHotelImage('yare-towers', 'yarepool.jpg');
  const yareRoom = getHotelImage('yare-towers', 'yareroom.jpg');
  const yareRoom2 = getHotelImage('yare-towers', 'yareroom2.jpg');
  const yareSeats = getHotelImage('yare-towers', 'yareseats.jpg');
  
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
  
  // Updated hotel data to match HotelListings format
  const selectedHotel = {
    id: 1,
    name: 'Yare Towers Hotel',
    location: language === 'en' ? 'Nairobi Eastleigh' : 'Nairobi Eastleigh',
    city: 'nairobi',
    country: 'kenya',
    priceRange: 'Ksh 7,000 - Ksh 9,000',
    whatsappNumber: '254703422456',
    roomTypes: [
      {
        type: "1 Bedroom",
        daily: "Ksh 7,000",
        weekly: "Ksh 35,000",
        monthly: "Ksh 130,000"
      },
      {
        type: "2-Bedroom Standard",
        daily: "Ksh 8,000",
        weekly: "Ksh 40,000",
        monthly: "Ksh 140,000"
      },
      {
        type: "2-Bedroom Executive",
        daily: "Ksh 9,000",
        weekly: "Ksh 43,000",
        monthly: "Ksh 150,000"
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
      title: "Yare Towers Hotel",
      subtitle: "Luxury Accommodation in Eastleigh, Nairobi",
      ranking: "⭐ Ranked among the Top 10 Best Hotels in Eastleigh",
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
        oneBedroom: "One-Bedroom Suite",
        twoBedroomStd: "Two-Bedroom Standard Suite", 
        twoBedroomExec: "Two-Bedroom Executive Suite"
      },
      rates: {
        daily: "Daily Rate",
        weekly: "Weekly Rate", 
        monthly: "Monthly Rate"
      },
      amenitiesList: [
        "Swimming Pool",
        "Rooftop Area", 
        "Restaurants",
        "Free Wi-Fi",
        "Conference Room"
      ],
      additionalNotes: [
        "Prices are subject to change without prior notice.",
        "Additional charges may apply for extra services.",
        "Flexible check-in available 24/7 | Standard check-out time: 10:00 AM",
        "Late check-out available upon request (subject to availability)",
        "Complimentary parking available for guests"
      ],
      description: "Experience luxury and comfort at Yare Towers Hotel, located in the vibrant heart of Eastleigh, Nairobi. Our premium accommodation features spacious rooms with modern amenities, perfect for both business and leisure travelers. Choose from our range of 1-bedroom to 2-bedroom executive suites, all designed with your comfort in mind.",
      bookNow: "Book Your Stay",
      bookingLabel: "Make a Reservation",
    },
    so: {
      title: "Huteel Yare Towers",
      subtitle: "Hoy Raaxo ah oo ku yaal Eastleigh, Nairobi",
      ranking: "⭐ Waxaa loo tiriyaa mid ka mid ah 10-ka Huteel ee ugu fiican Eastleigh",
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
        oneBedroom: "Suite Hal Qol ah",
        twoBedroomStd: "Suite Laba Qol Caadi ah",
        twoBedroomExec: "Suite Laba Qol Fulinta ah"
      },
      rates: {
        daily: "Qiimaha Maalinle",
        weekly: "Qiimaha Todobaadle",
        monthly: "Qiimaha Bile"
      },
      amenitiesList: [
        "Berkadda Dabaasha",
        "Aagga Saqafka",
        "Makhaayadaha", 
        "Wi-Fi Bilaash",
        "Qolka Shirarka"
      ],
      additionalNotes: [
        "Qiimaha waa la beddeli karaa ogeysiis la'aan.",
        "Lacag dheeraad ah ayaa laga qaadi karaa adeegyo kale.",
        "Waqti galitaan dabacsan 24/7 | Waqtiga caadiga ah ee bixitaanka: 10:00 AM",
        "Dib u bixitaan dambe ayaa la heli karaa marka la codsado (marka uu banaan yahay)",
        "Baakiin bilaash ah ayaa loo helay martida"
      ],
      description: "Ku raaxayso raaxada iyo raaxada Huteel Yare Towers, oo ku yaal wadnaha firfircoon ee Eastleigh, Nairobi. Hoygayaga raaxada ah wuxuu leeyahay qolal ballaaran oo leh adeegyo casri ah, oo ku habboon labada ganacsiga iyo dalxiisayaasha raaxada. Ka dooro kala duwanaanshaha 1-qol ilaa 2-qol fulinta suites, oo dhan oo loogu talagalay raaxadaada.",
      bookNow: "Buug Joogitaankaaga",
      bookingLabel: "Samee Buukin",
    }
  };

  const t = translations[language];

  // Hotel images - 6 images in order
  const hotelImages = [
    {
      src: yareL,
      alt: 'Yare Towers Hotel - Lobby View'
    },
    {
      src: yarePool,
      alt: 'Yare Towers Hotel - Swimming Pool'
    },
    {
      src: yareRoom,
      alt: 'Yare Towers Hotel - Standard Room'
    },
    {
      src: yareRoom2,
      alt: 'Yare Towers Hotel - Executive Suite'
    },
    {
      src: yareConf,
      alt: 'Yare Towers Hotel - Conference Room'
    },
    {
      src: yareSeats,
      alt: 'Yare Towers Hotel - Lounge Area'
    }
  ];

  const roomRates = [
    {
      type: t.roomTypes.oneBedroom,
      daily: "Ksh 7,000",
      weekly: "Ksh 35,000", 
      monthly: "Ksh 130,000"
    },
    {
      type: t.roomTypes.twoBedroomStd,
      daily: "Ksh 8,000",
      weekly: "Ksh 40,000",
      monthly: "Ksh 140,000"
    },
    {
      type: t.roomTypes.twoBedroomExec,
      daily: "Ksh 9,000",
      weekly: "Ksh 43,000", 
      monthly: "Ksh 150,000"
    }
  ];

  const handleCallClick = () => {
    window.open('tel:+254703422559', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254703422456', '_blank');
  };

  const handleWebsiteClick = () => {
    window.open('https://www.yaretowers.com', '_blank');
  };

  const handleMapsClick = () => {
    window.open('https://maps.google.com/?q=Yare+Towers+Hotel+Eastleigh+Nairobi', '_blank');
  };

  return (
    <section className="yare-hotel-section">
      <div className="yare-container">
        {/* Language Toggle */}
        <div className="yare-language-toggle">
          <button 
            className={`yare-lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button 
            className={`yare-lang-btn ${language === 'so' ? 'active' : ''}`}
            onClick={() => setLanguage('so')}
          >
            SO
          </button>
        </div>

        {/* Back Button */}
        {onBack && (
          <button className="yare-back-btn" onClick={onBack}>
            <FaArrowLeft className="yare-back-icon" />
            {t.backToListings}
          </button>
        )}

        {/* Header */}
        <div className="yare-header">
          <h1 className="yare-title">{t.title}</h1>
          <p className="yare-subtitle">{t.subtitle}</p>
          {/* Added ranking badge */}
          <div className="yare-ranking-badge">
            <FaStar className="yare-star-icon" />
            <span>{t.ranking}</span>
          </div>
        </div>

        {/* Hotel Images - Desktop Grid / Mobile Slideshow */}
        <div className="yare-images-grid">
          {window.innerWidth <= 768 ? (
            // Mobile Slideshow
            <>
              {hotelImages.map((image, index) => (
                <div
                  key={index}
                  className={`yare-image-container ${index === currentSlide ? 'active' : ''}`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="yare-image"
                    loading="lazy"
                    onError={handleImageError}
                  />
                </div>
              ))}
              <div className="yare-slideshow-controls">
                {hotelImages.map((_, index) => (
                  <div
                    key={index}
                    className={`yare-slideshow-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => changeSlide(index)}
                  />
                ))}
              </div>
            </>
          ) : (
            // Desktop Grid
            hotelImages.map((image, index) => (
              <div key={index} className="yare-image-container">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="yare-image"
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>
            ))
          )}
        </div>

        {/* Description */}
        <div className="yare-description">
          <p>{t.description}</p>
        </div>

        {/* Room Rates Table */}
        <div className="yare-section">
          <h2 className="yare-section-title">{t.roomRates}</h2>
          <div className="yare-table-container">
            <table className="yare-rates-table">
              <thead>
                <tr>
                  <th>Room Type</th>
                  <th>Daily Rate</th>
                  <th>Weekly Rate</th>
                  <th>Monthly Rate</th>
                </tr>
              </thead>
              <tbody>
                {roomRates.map((rate, index) => (
                  <tr key={index}>
                    <td className="yare-room-type">{rate.type}</td>
                    <td data-label="Daily Rate">{rate.daily}</td>
                    <td data-label="Weekly Rate">{rate.weekly}</td>
                    <td data-label="Monthly Rate">{rate.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Amenities */}
        <div className="yare-section">
          <h2 className="yare-section-title">{t.amenities}</h2>
          <div className="yare-amenities-grid">
            <div className="yare-amenity-item">
              <FaSwimmingPool className="yare-amenity-icon" />
              <span>{t.amenitiesList[0]}</span>
            </div>
            <div className="yare-amenity-item">
              <FaBuilding className="yare-amenity-icon" />
              <span>{t.amenitiesList[1]}</span>
            </div>
            <div className="yare-amenity-item">
              <FaUtensils className="yare-amenity-icon" />
              <span>{t.amenitiesList[2]}</span>
            </div>
            <div className="yare-amenity-item">
              <FaWifi className="yare-amenity-icon" />
              <span>{t.amenitiesList[3]}</span>
            </div>
            <div className="yare-amenity-item">
              <FaUsers className="yare-amenity-icon" />
              <span>{t.amenitiesList[4]}</span>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="yare-section">
          <h2 className="yare-section-title">{t.additionalInfo}</h2>
          <ul className="yare-info-list">
            {t.additionalNotes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="yare-section">
          <h2 className="yare-section-title">{t.contactInfo}</h2>
          <div className="yare-contact-grid">
            <button className="yare-contact-btn call-btn" onClick={handleCallClick}>
              <FaPhone className="yare-contact-icon" />
              <div className="yare-contact-info">
                <span className="yare-contact-label">{t.callNow}</span>
                <span className="yare-contact-value">0703 422 559</span>
              </div>
            </button>
            
            <button className="yare-contact-btn whatsapp-btn" onClick={handleWhatsAppClick}>
              <FaWhatsapp className="yare-contact-icon" />
              <div className="yare-contact-info">
                <span className="yare-contact-label">{t.whatsappUs}</span>
                <span className="yare-contact-value">+254 703 422 456</span>
              </div>
            </button>
            
            <button className="yare-contact-btn website-btn" onClick={handleWebsiteClick}>
              <FaGlobe className="yare-contact-icon" />
              <div className="yare-contact-info">
                <span className="yare-contact-label">{t.visitWebsite}</span>
                <span className="yare-contact-value">www.yaretowers.com</span>
              </div>
            </button>
            
            <button className="yare-contact-btn maps-btn" onClick={handleMapsClick}>
              <FaMapMarkerAlt className="yare-contact-icon" />
              <div className="yare-contact-info">
                <span className="yare-contact-label">{t.viewOnMaps}</span>
                <span className="yare-contact-value">{t.location}</span>
              </div>
            </button>
          </div>
        </div>

        {/* Book Now Button - Updated to match HotelListings style */}
        <div className="yare-book-now-container">
          <button className="yare-book-now-btn" onClick={handleBookNowClick}>
            <FaWhatsapp className="yare-whatsapp-icon" />
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

export default Yare;