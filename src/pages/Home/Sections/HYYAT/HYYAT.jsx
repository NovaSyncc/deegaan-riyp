import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone, FaGlobe, FaMapMarkerAlt, FaWifi, FaBed, FaUtensils, FaUsers, FaBuilding, FaArrowLeft, FaStar, FaMosque, FaShower, FaConciergeBell, FaCar, FaArrowsAltV } from 'react-icons/fa';
import BookingForm from '../../../../components/BookingForm/BookingForm';
import './HYYAT.css';

// Import HYYAT GOLDEN HOTEL images (only using confirmed existing files)
import hyyatBed1 from '../../../../assets/images/hyyat/bed1.jpg';
import hyyatDeluxeKing from '../../../../assets/images/hyyat/deluxeking.jpg';
import hyyatGoldenHotelEntrance from '../../../../assets/images/hyyat/hyyatgoldenhotelentrance.jpg';
import hyyatGoldenReception from '../../../../assets/images/hyyat/hyyatgoldenreception.jpg';
import hyyatPreview from '../../../../assets/images/hyyat/hyyatpreview.jpg';
import hyyatMasjid from '../../../../assets/images/hyyat/masjid.jpg';
import hyyatNic from '../../../../assets/images/hyyat/nic.jpg';
import hyyatResta from '../../../../assets/images/hyyat/resta.jpg';
import hyyatResta1 from '../../../../assets/images/hyyat/resta1.jpg';
import hyyatSuperiorSingle from '../../../../assets/images/hyyat/superiorsingle.jpg';
import hyyatTwin from '../../../../assets/images/hyyat/twin.jpg';

const HYYAT = ({ onBack }) => {
  const [language, setLanguage] = useState('en');
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
  
  // Hotel data matching your hotelConfig.js
  const selectedHotel = {
    id: 5,
    name: 'HYYAT GOLDEN HOTEL',
    location: language === 'en' ? 'Nairobi Eastleigh' : 'Nairobi Eastleigh',
    city: 'nairobi',
    country: 'kenya',
    priceRange: 'KES 1,800 - KES 4,000',
    whatsappNumber: '254712345678',
    roomTypes: [
      {
        type: "Classic King Suite",
        daily: "KES 1,800",
        weekly: "Contact for rates",
        monthly: "Contact for rates"
      },
      {
        type: "Superior King Suite",
        daily: "KES 2,300",
        weekly: "Contact for rates", 
        monthly: "Contact for rates"
      },
      {
        type: "Deluxe King Suite",
        daily: "KES 2,500",
        weekly: "Contact for rates",
        monthly: "Contact for rates"
      },
      {
        type: "Twin Comfort Room",
        daily: "KES 2,500",
        weekly: "Contact for rates",
        monthly: "Contact for rates"
      },
      {
        type: "Family Executive Suite",
        daily: "KES 4,000",
        weekly: "Contact for rates",
        monthly: "Contact for rates"
      }
    ]
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
      title: "HYYAT GOLDEN HOTEL",
      subtitle: "Exceptional Hospitality in the Heart of Eastleigh",
      ranking: "⭐ 9-Floor Premium Hotel with Modern Amenities & Masjid",
      backToListings: "← Back to Hotel Listings",
      roomRates: "Room Rates",
      amenities: "Hotel Amenities",
      additionalInfo: "Additional Information",
      contactInfo: "Contact for Reservations",
      location: "Centre of Eastleigh Nairobi, 11th Street Second Avenue",
      viewOnMaps: "View on Google Maps",
      callNow: "Call Now",
      whatsappUs: "WhatsApp Us",
      visitWebsite: "Visit Website",
      roomTypes: {
        classicKing: "Classic King Suite",
        superiorKing: "Superior King Suite",
        deluxeKing: "Deluxe King Suite",
        twinComfort: "Twin Comfort Room",
        familyExecutive: "Family Executive Suite"
      },
      rates: {
        daily: "Daily Rate",
        weekly: "Weekly Rate", 
        monthly: "Monthly Rate"
      },
      amenitiesList: [
        "9-Floor Hotel Building",
        "On-site Masjid Facilities",
        "Halal Restaurant & Dining",
        "Underground Secure Parking",
        "24/7 Reception Service",
        "Free High-Speed WiFi",
        "Conference & Meeting Rooms",
        "Daily Housekeeping",
        "Room Service Available",
        "Elevator Access All Floors",
        "Safe Deposit Boxes"
      ],
      additionalNotes: [
        "Located in the centre of Eastleigh Nairobi on 11th Street Second Avenue",
        "9-floor modern hotel building with elevator access to all floors",
        "Beautiful on-site Masjid with proper Qibla direction and ablution areas",
        "Halal-certified restaurant serving local Somali cuisine and international dishes",
        "Secure underground parking with 24/7 CCTV surveillance",
        "All rooms feature air conditioning, private bathrooms, and modern amenities",
        "Business facilities including conference rooms and meeting spaces",
        "Perfect location for both business travelers and families",
        "Walking distance to major Eastleigh shopping and business areas",
        "Multilingual staff providing exceptional customer service"
      ],
      description: "Experience exceptional hospitality at HYYAT Golden Hotel, located in the vibrant centre of Eastleigh, Nairobi. Our 9-floor establishment offers premium accommodation with modern amenities, halal dining, and beautiful Masjid facilities. From our Classic King Suites to spacious Family Executive Suites, each room is designed for comfort and convenience with air conditioning, free WiFi, and 24/7 room service.",
      bookNow: "Book Your Stay",
      bookingLabel: "Make a Reservation",
      contactForRates: "Contact for rates"
    },
    so: {
      title: "HYYAT GOLDEN HOTEL",
      subtitle: "Martiqaad Gaar ah Wadnaha Eastleigh",
      ranking: "⭐ Huteel 9 Dabaqad oo Heer-sare ah oo leh Adeegyo Casri ah & Masjid",
      backToListings: "← Dib ugu noqo Liiska Huteellada",
      roomRates: "Qiimayaalka Qolalka",
      amenities: "Adeegyada Huteelka",
      additionalInfo: "Macluumaad Dheeraad ah",
      contactInfo: "Xiriir Buuginta",
      location: "Xarunta Eastleigh Nairobi, 11th Street Second Avenue",
      viewOnMaps: "Ku eeg Google Maps",
      callNow: "War Hadda",
      whatsappUs: "WhatsApp noo soo dir",
      visitWebsite: "Booqo Website-ka",
      roomTypes: {
        classicKing: "Classic King Suite",
        superiorKing: "Superior King Suite", 
        deluxeKing: "Deluxe King Suite",
        twinComfort: "Twin Comfort Room",
        familyExecutive: "Family Executive Suite"
      },
      rates: {
        daily: "Qiimaha Maalinle",
        weekly: "Qiimaha Todobaadle",
        monthly: "Qiimaha Bile"
      },
      amenitiesList: [
        "Dhisme Huteel 9 Dabaqad",
        "Adeegyada Masjidka Gudaha",
        "Maqaayad Xalaal & Cunto",
        "Gaadhi Hoosta Dhulka Ammaan ah",
        "Adeegga Soo dhaweynta 24/7",
        "WiFi Dhaqso Sare oo Bilaash",
        "Qolalka Shirarka & Kulanada",
        "Nadiifinta Maalinlaha ah",
        "Adeegga Qolka",
        "Wiishka Dhammaan Dabaqadaha",
        "Sanduuqyada Kaydka Ammaan"
      ],
      additionalNotes: [
        "Ku yaal xarunta Eastleigh Nairobi 11th Street Second Avenue",
        "Dhisme huteel casri ah 9 dabaqad oo leh wiish dhammaan dabaqadaha",
        "Masjid qurux badan oo gudaha ah oo leh jiheeda saxda ah ee Qiblada iyo meelaha wuduu",
        "Maqaayad shahaado xalaal leh oo u adeegta cuntada Soomaalida iyo caalamka",
        "Gaadhi hoosta dhulka ammaan ah oo leh kormeer CCTV 24/7",
        "Dhammaan qolalka waxay leeyihiin qaboojiye hawada, musqul gaarka ah, iyo adeegyo casri ah",
        "Adeegyada ganacsiga oo ay ku jiraan qolalka shirarka iyo meelaha kulanada",
        "Meel ku habboon socdaalayaasha ganacsiga iyo qoysaska labadaba",
        "Masafo lugaynta ah dukaannada waaweyn ee Eastleigh iyo aagga ganacsiga",
        "Shaqaale luqado badan ku hadla oo bixiya adeeg aad u fiican"
      ],
      description: "Ku raaxayso martiqaad cajiib ah HYYAT Golden Hotel, oo ku yaal xarunta firfircoon ee Eastleigh, Nairobi. Dhismahayaga 9 dabaqad ah wuxuu bixiyaa degan heer sare ah oo leh adeegyo casri ah, cunto xalaal, iyo adeegyada masjidka qurxoon. Laga bilaabo Classic King Suites ilaa Family Executive Suites ballaaran, qol kasta wuxuu loogu talagalay raaxo iyo fududeyn oo leh qaboojiye hawada, WiFi bilaash, iyo adeegga qolka 24/7.",
      bookNow: "Buug Joogitaankaaga",
      bookingLabel: "Samee Buukin",
      contactForRates: "Xiriir qiimayaalka"
    }
  };

  const t = translations[language];

  // Hotel images - 11 images from the hyyat folder (removed familyroom1 reference)
  const hotelImages = [
    {
      src: hyyatGoldenHotelEntrance,
      alt: 'HYYAT Golden Hotel - Main Entrance'
    },
    {
      src: hyyatGoldenReception,
      alt: 'HYYAT Golden Hotel - Reception Area'
    },
    {
      src: hyyatDeluxeKing,
      alt: 'HYYAT Golden Hotel - Deluxe King Suite'
    },
    {
      src: hyyatBed1,
      alt: 'HYYAT Golden Hotel - Bedroom'
    },
    {
      src: hyyatSuperiorSingle,
      alt: 'HYYAT Golden Hotel - Superior Single Room'
    },
    {
      src: hyyatTwin,
      alt: 'HYYAT Golden Hotel - Twin Room'
    },
    {
      src: hyyatMasjid,
      alt: 'HYYAT Golden Hotel - Masjid'
    },
    {
      src: hyyatResta,
      alt: 'HYYAT Golden Hotel - Restaurant'
    },
    {
      src: hyyatResta1,
      alt: 'HYYAT Golden Hotel - Dining Area'
    },
    {
      src: hyyatPreview,
      alt: 'HYYAT Golden Hotel - Hotel Preview'
    },
    {
      src: hyyatNic,
      alt: 'HYYAT Golden Hotel - Interior View'
    }
  ];

  const roomRates = [
    {
      type: t.roomTypes.classicKing,
      daily: "KES 1,800",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    },
    {
      type: t.roomTypes.superiorKing,
      daily: "KES 2,300",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    },
    {
      type: t.roomTypes.deluxeKing,
      daily: "KES 2,500",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    },
    {
      type: t.roomTypes.twinComfort,
      daily: "KES 2,500",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    },
    {
      type: t.roomTypes.familyExecutive,
      daily: "KES 4,000",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    }
  ];

  const handleCallClick = () => {
    window.open('tel:+254712345678', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254712345678', '_blank');
  };

  const handleWebsiteClick = () => {
    // Update this with actual website when available
    window.open('https://hyyatgoldenhotel.com', '_blank');
  };

  const handleMapsClick = () => {
    window.open('https://maps.google.com/?q=HYYAT+Golden+Hotel+11th+Street+Second+Avenue+Eastleigh+Nairobi', '_blank');
  };

  return (
    <section className="hyyat-hotel-section">
      <div className="hyyat-container">
        {/* Language Toggle */}
        <div className="hyyat-language-toggle">
          <button 
            className={`hyyat-lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button 
            className={`hyyat-lang-btn ${language === 'so' ? 'active' : ''}`}
            onClick={() => setLanguage('so')}
          >
            SO
          </button>
        </div>

        {/* Back Button */}
        {onBack && (
          <button className="hyyat-back-btn" onClick={onBack}>
            <FaArrowLeft className="hyyat-back-icon" />
            {t.backToListings}
          </button>
        )}

        {/* Header */}
        <div className="hyyat-header">
          <h1 className="hyyat-title">{t.title}</h1>
          <p className="hyyat-subtitle">{t.subtitle}</p>
          <div className="hyyat-ranking-badge">
            <FaStar className="hyyat-star-icon" />
            <span>{t.ranking}</span>
          </div>
        </div>

        {/* Hotel Images - Desktop Grid / Mobile Slideshow */}
        <div className="hyyat-images-grid">
          {window.innerWidth <= 768 ? (
            // Mobile Slideshow
            <>
              {hotelImages.map((image, index) => (
                <div
                  key={index}
                  className={`hyyat-image-container ${index === currentSlide ? 'active' : ''}`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="hyyat-image"
                    loading="lazy"
                  />
                </div>
              ))}
              <div className="hyyat-slideshow-controls">
                {hotelImages.map((_, index) => (
                  <div
                    key={index}
                    className={`hyyat-slideshow-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => changeSlide(index)}
                  />
                ))}
              </div>
            </>
          ) : (
            // Desktop Grid
            hotelImages.map((image, index) => (
              <div key={index} className="hyyat-image-container">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="hyyat-image"
                  loading="lazy"
                />
              </div>
            ))
          )}
        </div>

        {/* Description */}
        <div className="hyyat-description">
          <p>{t.description}</p>
        </div>

        {/* Room Rates Table */}
        <div className="hyyat-section">
          <h2 className="hyyat-section-title">{t.roomRates}</h2>
          <div className="hyyat-table-container">
            <table className="hyyat-rates-table">
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
                    <td className="hyyat-room-type">{rate.type}</td>
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
        <div className="hyyat-section">
          <h2 className="hyyat-section-title">{t.amenities}</h2>
          <div className="hyyat-amenities-grid">
            <div className="hyyat-amenity-item">
              <FaBuilding className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[0]}</span>
            </div>
            <div className="hyyat-amenity-item">
              <FaMosque className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[1]}</span>
            </div>
            <div className="hyyat-amenity-item">
              <FaUtensils className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[2]}</span>
            </div>
            <div className="hyyat-amenity-item">
              <FaCar className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[3]}</span>
            </div>
            <div className="hyyat-amenity-item">
              <FaConciergeBell className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[4]}</span>
            </div>
            <div className="hyyat-amenity-item">
              <FaWifi className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[5]}</span>
            </div>
            <div className="hyyat-amenity-item">
              <FaUsers className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[6]}</span>
            </div>
            <div className="hyyat-amenity-item">
              <FaBed className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[7]}</span>
            </div>
            <div className="hyyat-amenity-item">
              <FaBed className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[8]}</span>
            </div>
            <div className="hyyat-amenity-item">
              <FaArrowsAltV className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[9]}</span>
            </div>
            <div className="hyyat-amenity-item">
              <FaShower className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[10]}</span>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="hyyat-section">
          <h2 className="hyyat-section-title">{t.additionalInfo}</h2>
          <ul className="hyyat-info-list">
            {t.additionalNotes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="hyyat-section">
          <h2 className="hyyat-section-title">{t.contactInfo}</h2>
          <div className="hyyat-contact-grid">
            <button className="hyyat-contact-btn call-btn" onClick={handleCallClick}>
              <FaPhone className="hyyat-contact-icon" />
              <div className="hyyat-contact-info">
                <span className="hyyat-contact-label">{t.callNow}</span>
                <span className="hyyat-contact-value">0712 345 678</span>
              </div>
            </button>
            
            <button className="hyyat-contact-btn whatsapp-btn" onClick={handleWhatsAppClick}>
              <FaWhatsapp className="hyyat-contact-icon" />
              <div className="hyyat-contact-info">
                <span className="hyyat-contact-label">{t.whatsappUs}</span>
                <span className="hyyat-contact-value">+254 712 345 678</span>
              </div>
            </button>
            
            <button className="hyyat-contact-btn website-btn" onClick={handleWebsiteClick}>
              <FaGlobe className="hyyat-contact-icon" />
              <div className="hyyat-contact-info">
                <span className="hyyat-contact-label">{t.visitWebsite}</span>
                <span className="hyyat-contact-value">hyyatgoldenhotel.com</span>
              </div>
            </button>
            
            <button className="hyyat-contact-btn maps-btn" onClick={handleMapsClick}>
              <FaMapMarkerAlt className="hyyat-contact-icon" />
              <div className="hyyat-contact-info">
                <span className="hyyat-contact-label">{t.viewOnMaps}</span>
                <span className="hyyat-contact-value">{t.location}</span>
              </div>
            </button>
          </div>
        </div>

        {/* Book Now Button */}
        <div className="hyyat-book-now-container">
          <button className="hyyat-book-now-btn" onClick={handleBookNowClick}>
            <FaWhatsapp className="hyyat-whatsapp-icon" />
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

export default HYYAT;