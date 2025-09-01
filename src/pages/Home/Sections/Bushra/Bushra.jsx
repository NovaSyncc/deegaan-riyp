import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone, FaGlobe, FaMapMarkerAlt, FaWifi, FaBed, FaUtensils, FaUsers, FaBuilding, FaArrowLeft, FaStar, FaTv, FaShower } from 'react-icons/fa';
import BookingForm from '../../../../components/BookingForm/BookingForm';
import { getHotelImage, handleImageError } from '../../../../utils/imageUtils';
import './Bushra.css';

const Bushra = ({ onBack }) => {
  const [language, setLanguage] = useState('en');
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Get images using the new system
  const bushraImage1 = getHotelImage('bushra', '1.jpg');
  const bushraImage3 = getHotelImage('bushra', '3.jpg');
  const bushraCafe = getHotelImage('bushra', 'cafe.jpg');
  const bushraDeluxe1 = getHotelImage('bushra', 'Deluxe1.jpg');
  const bushraDouble = getHotelImage('bushra', 'Double.png');
  const bushraReception = getHotelImage('bushra', 'reception.jpg');
  const bushraSingle1 = getHotelImage('bushra', 'Single1.jpg');
  const bushraTwin1 = getHotelImage('bushra', 'Twin1.png');
  const bushraView = getHotelImage('bushra', 'view.jpg');
  
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
    id: 4,
    name: 'Bushra Hotel',
    location: language === 'en' ? 'Nairobi Eastleigh' : 'Nairobi Eastleigh',
    city: 'nairobi',
    country: 'kenya',
    priceRange: 'Ksh 2,500 - Ksh 4,000',
    whatsappNumber: '254720972757',
    roomTypes: [
      {
        type: "Standard Room",
        daily: "Ksh 3,000",
        weekly: "Contact for rates",
        monthly: "Contact for rates"
      },
      {
        type: "Standard Double Room",
        daily: "Ksh 2,500",
        weekly: "Contact for rates",
        monthly: "Contact for rates"
      },
      {
        type: "Deluxe Twin Bed",
        daily: "Ksh 3,000",
        weekly: "Contact for rates",
        monthly: "Contact for rates"
      },
      {
        type: "VIP Room",
        daily: "Ksh 4,000",
        weekly: "Contact for rates",
        monthly: "Contact for rates"
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
      title: "Bushra Hotel",
      subtitle: "Comfortable Accommodation in Eastleigh, Nairobi",
      ranking: "⭐ Experience Comfort and Hospitality in Eastleigh",
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
        standardDouble: "Standard Double Room",
        deluxeTwin: "Deluxe Twin Bed",
        vip: "VIP Room"
      },
      rates: {
        daily: "Daily Rate",
        weekly: "Weekly Rate", 
        monthly: "Monthly Rate"
      },
      amenitiesList: [
        "Prime Location in Eastleigh",
        "Exceptional Quality for Price",
        "On-site Masjid (Prayer Facility)",
        "Restaurant & Cafe",
        "24/7 Reception",
        "Free Wi-Fi",
        "Room Service",
        "Private Bathrooms"
      ],
      additionalNotes: [
        "Prices are subject to change without prior notice.",
        "Weekly and monthly rates available upon request.",
        "Flexible check-in available 24/7 | Standard check-out time: 11:00 AM",
        "Late check-out available upon request (subject to availability)",
        "Complimentary parking available for guests",
        "All rooms include private bathroom facilities",
        "Room service available during business hours"
      ],
      description: "Experience exceptional quality and value at Bushra Hotel, perfectly located in the prime area of Eastleigh, Nairobi. What sets us apart is our unmatched quality-to-price ratio, prime location in the heart of Eastleigh, and the convenience of an on-site Masjid for our Muslim guests. Our hotel offers comfortable accommodations from standard rooms to VIP suites, all designed to provide excellent value without compromising on comfort and service.",
      bookNow: "Book Your Stay",
      bookingLabel: "Make a Reservation",
      contactForRates: "Contact for rates"
    },
    so: {
      title: "Huteel Bushra",
      subtitle: "Hoy Raaxo ah oo ku yaal Eastleigh, Nairobi",
      ranking: "⭐ Ku raaxayso Raaxada iyo Martiqaadka Eastleigh",
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
        standardDouble: "Qol Caadi Laba Sariir ah",
        deluxeTwin: "Qol Raaxo Laba Sariir ah",
        vip: "Qol VIP ah"
      },
      rates: {
        daily: "Qiimaha Maalinle",
        weekly: "Qiimaha Todobaadle",
        monthly: "Qiimaha Bile"
      },
      amenitiesList: [
        "Qolal Raaxo leh",
        "Makhaayadda & Cafe",
        "Soo dhaweyn 24/7",
        "Wi-Fi Bilaash",
        "Adeegga Qolka",
        "Musqul Gaar ah",
        "Telefishin",
        "Qaboojiye"
      ],
      additionalNotes: [
        "Qiimaha waa la beddeli karaa ogeysiis la'aan.",
        "Qiimayaalka todobaadle iyo bile ayaa la heli karaa marka la codsado.",
        "Waqti galitaan dabacsan 24/7 | Waqtiga caadiga ah ee bixitaanka: 11:00 AM",
        "Dib u bixitaan dambe ayaa la heli karaa marka la codsado (marka uu banaan yahay)",
        "Baakiin bilaash ah ayaa loo helay martida",
        "Dhammaan qolalka waxay ku jiraan musqulo gaar ah",
        "Adeegga qolka ayaa la heli karaa saacadaha shaqada"
      ],
      description: "Ku raaxayso tayada iyo qiimaha gaar ah ee Huteel Bushra, oo si fiican ugu dhex yaal aagga muhiimka ah ee Eastleigh, Nairobi. Waxa naga kala saara saamiga aan la barbar dhigi karin ee tayada iyo qiimaha, goobta muhiimka ah ee wadnaha Eastleigh, iyo raaxada masjidka gudaha huteelka ee martidayada Muslimka ah. Huteelkayagu wuxuu bixiyaa hoy raaxo leh laga bilaabo qolal caadi ah ilaa suites VIP ah, oo dhan oo loogu talagalay inay bixiyaan qiimo fiican iyada oo aan wax ka dhimin raaxada iyo adeegga.",
      bookNow: "Buug Joogitaankaaga",
      bookingLabel: "Samee Buukin",
      contactForRates: "Xiriir qiimayaalka"
    }
  };

  const t = translations[language];

  // Hotel images - 9 images in your preferred order
  const hotelImages = [
    {
      src: bushraSingle1,
      alt: 'Bushra Hotel - Single Room'
    },
    {
      src: bushraDeluxe1,
      alt: 'Bushra Hotel - Deluxe Room'
    },
    {
      src: bushraView,
      alt: 'Bushra Hotel - Hotel View'
    },
    {
      src: bushraImage1,
      alt: 'Bushra Hotel - Hotel Exterior View'
    },
    {
      src: bushraReception,
      alt: 'Bushra Hotel - Reception Area'
    },
    {
      src: bushraTwin1,
      alt: 'Bushra Hotel - Twin Room'
    },
    {
      src: bushraDouble,
      alt: 'Bushra Hotel - Double Room'
    },
    {
      src: bushraCafe,
      alt: 'Bushra Hotel - Restaurant & Cafe'
    },
    {
      src: bushraImage3,
      alt: 'Bushra Hotel - Hotel Interior'
    }
  ];

  const roomRates = [
    {
      type: t.roomTypes.standardDouble,
      daily: "Ksh 2,500",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    },
    {
      type: t.roomTypes.standard,
      daily: "Ksh 3,000",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    },
    {
      type: t.roomTypes.deluxeTwin,
      daily: "Ksh 3,000",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    },
    {
      type: t.roomTypes.vip,
      daily: "Ksh 4,000",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    }
  ];

  const handleCallClick = () => {
    window.open('tel:+254720972757', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254720972757', '_blank');
  };

  const handleWebsiteClick = () => {
    // Update this with actual website when available
    window.open('https://www.bushrahotel.com', '_blank');
  };

  const handleMapsClick = () => {
    window.open('https://maps.google.com/?q=Bushra+Hotel+Eastleigh+Nairobi', '_blank');
  };

  return (
    <section className="bushra-hotel-section">
      <div className="bushra-container">
        {/* Language Toggle */}
        <div className="bushra-language-toggle">
          <button 
            className={`bushra-lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button 
            className={`bushra-lang-btn ${language === 'so' ? 'active' : ''}`}
            onClick={() => setLanguage('so')}
          >
            SO
          </button>
        </div>

        {/* Back Button */}
        {onBack && (
          <button className="bushra-back-btn" onClick={onBack}>
            <FaArrowLeft className="bushra-back-icon" />
            {t.backToListings}
          </button>
        )}

        {/* Header */}
        <div className="bushra-header">
          <h1 className="bushra-title">{t.title}</h1>
          <p className="bushra-subtitle">{t.subtitle}</p>
          {/* Added ranking badge */}
          <div className="bushra-ranking-badge">
            <FaStar className="bushra-star-icon" />
            <span>{t.ranking}</span>
          </div>
        </div>

        {/* Hotel Images - Desktop Grid / Mobile Slideshow */}
        <div className="bushra-images-grid">
          {window.innerWidth <= 768 ? (
            // Mobile Slideshow
            <>
              {hotelImages.map((image, index) => (
                <div
                  key={index}
                  className={`bushra-image-container ${index === currentSlide ? 'active' : ''}`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="bushra-image"
                    loading="lazy"
                    onError={handleImageError}
                  />
                </div>
              ))}
              <div className="bushra-slideshow-controls">
                {hotelImages.map((_, index) => (
                  <div
                    key={index}
                    className={`bushra-slideshow-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => changeSlide(index)}
                  />
                ))}
              </div>
            </>
          ) : (
            // Desktop Grid
            hotelImages.map((image, index) => (
              <div key={index} className="bushra-image-container">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="bushra-image"
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>
            ))
          )}
        </div>

        {/* Description */}
        <div className="bushra-description">
          <p>{t.description}</p>
        </div>

        {/* Room Rates Table */}
        <div className="bushra-section">
          <h2 className="bushra-section-title">{t.roomRates}</h2>
          <div className="bushra-table-container">
            <table className="bushra-rates-table">
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
                    <td className="bushra-room-type">{rate.type}</td>
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
        <div className="bushra-section">
          <h2 className="bushra-section-title">{t.amenities}</h2>
          <div className="bushra-amenities-grid">
            <div className="bushra-amenity-item">
              <FaMapMarkerAlt className="bushra-amenity-icon" />
              <span>{t.amenitiesList[0]}</span>
            </div>
            <div className="bushra-amenity-item">
              <FaStar className="bushra-amenity-icon" />
              <span>{t.amenitiesList[1]}</span>
            </div>
            <div className="bushra-amenity-item">
              <FaBuilding className="bushra-amenity-icon" />
              <span>{t.amenitiesList[2]}</span>
            </div>
            <div className="bushra-amenity-item">
              <FaUtensils className="bushra-amenity-icon" />
              <span>{t.amenitiesList[3]}</span>
            </div>
            <div className="bushra-amenity-item">
              <FaBuilding className="bushra-amenity-icon" />
              <span>{t.amenitiesList[4]}</span>
            </div>
            <div className="bushra-amenity-item">
              <FaWifi className="bushra-amenity-icon" />
              <span>{t.amenitiesList[5]}</span>
            </div>
            <div className="bushra-amenity-item">
              <FaUsers className="bushra-amenity-icon" />
              <span>{t.amenitiesList[6]}</span>
            </div>
            <div className="bushra-amenity-item">
              <FaShower className="bushra-amenity-icon" />
              <span>{t.amenitiesList[7]}</span>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bushra-section">
          <h2 className="bushra-section-title">{t.additionalInfo}</h2>
          <ul className="bushra-info-list">
            {t.additionalNotes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="bushra-section">
          <h2 className="bushra-section-title">{t.contactInfo}</h2>
          <div className="bushra-contact-grid">
            <button className="bushra-contact-btn call-btn" onClick={handleCallClick}>
              <FaPhone className="bushra-contact-icon" />
              <div className="bushra-contact-info">
                <span className="bushra-contact-label">{t.callNow}</span>
                <span className="bushra-contact-value">0720 972 757</span>
              </div>
            </button>
            
            <button className="bushra-contact-btn whatsapp-btn" onClick={handleWhatsAppClick}>
              <FaWhatsapp className="bushra-contact-icon" />
              <div className="bushra-contact-info">
                <span className="bushra-contact-label">{t.whatsappUs}</span>
                <span className="bushra-contact-value">+254 720 972 757</span>
              </div>
            </button>
            
            <button className="bushra-contact-btn website-btn" onClick={handleWebsiteClick}>
              <FaGlobe className="bushra-contact-icon" />
              <div className="bushra-contact-info">
                <span className="bushra-contact-label">{t.visitWebsite}</span>
                <span className="bushra-contact-value">www.bushrahotel.com</span>
              </div>
            </button>
            
            <button className="bushra-contact-btn maps-btn" onClick={handleMapsClick}>
              <FaMapMarkerAlt className="bushra-contact-icon" />
              <div className="bushra-contact-info">
                <span className="bushra-contact-label">{t.viewOnMaps}</span>
                <span className="bushra-contact-value">{t.location}</span>
              </div>
            </button>
          </div>
        </div>

        {/* Book Now Button - Updated to match HotelListings style */}
        <div className="bushra-book-now-container">
          <button className="bushra-book-now-btn" onClick={handleBookNowClick}>
            <FaWhatsapp className="bushra-whatsapp-icon" />
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

export default Bushra;