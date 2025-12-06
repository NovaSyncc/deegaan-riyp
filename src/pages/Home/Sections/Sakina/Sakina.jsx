import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone, FaGlobe, FaMapMarkerAlt, FaWifi, FaBed, FaUtensils, FaUsers, FaBuilding, FaArrowLeft, FaStar, FaTv, FaShower, FaConciergeBell, FaCar, FaSpa, FaLock, FaCoffee, FaParking } from 'react-icons/fa';
import BookingForm from '../../../../components/BookingForm/BookingForm';
import { getHotelImage, handleImageError } from '../../../../utils/imageUtils';
import './Sakina.css';

const Sakina = ({ onBack }) => {
  const [language, setLanguage] = useState('en');
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Get images using the hotel image system
  const sakina1 = getHotelImage('sakina', 'TNT03856-scaled.jpg');
  const sakina2 = getHotelImage('sakina', 'TNT03870-scaled.jpg');
  const sakina3 = getHotelImage('sakina', 'TNT03874-scaled.jpg');
  const sakina4 = getHotelImage('sakina', 'TNT03885-scaled.jpg');
  const sakina5 = getHotelImage('sakina', 'TNT03911-scaled.jpg');
  const sakina6 = getHotelImage('sakina', 'TNT03943-scaled.jpg');
  const sakina7 = getHotelImage('sakina', 'TNT03952-scaled.jpg');
  const sakina8 = getHotelImage('sakina', 'TNT03957-scaled.jpg');
  const sakina9 = getHotelImage('sakina', 'TNT04009-scaled.jpg');
  
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
  
  // FIXED: Updated hotel data with correct Sakina pricing
  const selectedHotel = {
    id: 'sakina-hotel',
    name: 'Sakina Hotel',
    location: language === 'en' ? 'Nairobi Eastleigh' : 'Nairobi Eastleigh',
    city: 'nairobi',
    country: 'kenya',
    priceRange: 'Ksh 2,000 - Ksh 4,000',
    whatsappNumber: '254741947770',
    roomTypes: [
      {
        type: "Standard Single",
        daily: "Ksh 2,000",
        weekly: "Contact for rates",
        monthly: "Contact for rates"
      },
      {
        type: "Deluxe Double",
        daily: "Ksh 3,000",
        weekly: "Contact for rates",
        monthly: "Contact for rates"
      },
      {
        type: "Twin Beds",
        daily: "Ksh 3,000",
        weekly: "Contact for rates",
        monthly: "Contact for rates"
      },
      {
        type: "VIP Family",
        daily: "Ksh 4,000",
        weekly: "Contact for rates",
        monthly: "Contact for rates"
      }
    ]
  };

  // Booking form handlers - matching Urban format
  const handleBookNowClick = () => {
    setIsBookingFormOpen(true);
  };

  const closeBookingForm = () => {
    setIsBookingFormOpen(false);
  };

  // FIXED: Translation object with correct room types
  const translations = {
    en: {
      title: "Sakina Hotel",
      subtitle: "Discover the Perfect Blend of Comfort, Luxury, and Exceptional Service",
      ranking: "⭐ Premier Luxury Hotel in the Heart of Eastleigh",
      backToListings: "← Back to Hotel Listings",
      roomRates: "Room Rates",
      amenities: "Hotel Amenities",
      contactInfo: "Contact & Location",
      location: "6th Street, Eastleigh – Next to Masjidul Abubakar Mosque, Nairobi, Kenya",
      viewOnMaps: "View on Google Maps",
      callNow: "Call Now",
      whatsappUs: "WhatsApp Us",
      visitWebsite: "Visit Website",
      contactForRates: "Contact for rates",
      roomTypes: {
        standardSingle: "Standard Single",
        deluxeDouble: "Deluxe Double",
        twinBeds: "Twin Beds",
        vipFamily: "VIP Family"
      },
      amenitiesList: [
        "Premium Spacious Rooms",
        "On-site Restaurant & Cuisine",
        "Prime Eastleigh Location",
        "Conference & Event Facilities",
        "24/7 Reception Service",
        "High-Speed Wi-Fi",
        "Luxury Bedding & Linens",
        "Secure Parking"
      ],
      description: "Nestled in the vibrant heart of Eastleigh, Sakina Hotel is where quality Kenyan hospitality meets unparalleled luxury. Our spacious rooms are designed with the utmost attention to detail, featuring modern amenities including high-speed Wi-Fi, flat-screen TVs, in-room safes, and premium tea & coffee facilities. Indulge in our rejuvenating spa services, savor exceptional cuisine at our restaurant, and experience seamless 24/7 service.",
      additionalInfo: "Additional Information",
      additionalNotes: [
        "All rooms feature modern amenities and luxury furnishings",
        "Complimentary high-speed Wi-Fi throughout the property",
        "24/7 reception and concierge services available",
        "Spa and wellness services by appointment",
        "On-site restaurant serving local and international cuisine",
        "Conference facilities for business meetings and events",
        "Free secure parking for all guests",
        "Special rates available for long-term stays"
      ],
      bookNow: "Book Your Stay",
      priceNote: "* Special rates available for weekly and monthly stays. Contact us for details."
    },
    so: {
      title: "Huteel Sakina",
      subtitle: "Hel Isku-darka Ugu Fiican ee Raaxada, Quruxda iyo Adeegga Heer Sare",
      ranking: "⭐ Huteelka Ugu Quruxda badan Wadnaha Eastleigh",
      backToListings: "← Dib ugu noqo Liiska Huteellada",
      roomRates: "Qiimayaalka Qolalka",
      amenities: "Adeegyada Huteelka",
      contactInfo: "Xiriir & Goobta",
      location: "Waddada 6aad, Eastleigh – Ku xiga Masjidka Masjidul Abubakar, Nairobi, Kenya",
      viewOnMaps: "Ku eeg Google Maps",
      callNow: "War Hadda",
      whatsappUs: "WhatsApp",
      visitWebsite: "Booqo Websitekan",
      contactForRates: "Nala soo xiriir qiimaha",
      roomTypes: {
        standardSingle: "Qol Hal Qof",
        deluxeDouble: "Qol Laba Qof (Deluxe)",
        twinBeds: "Laba Sariir",
        vipFamily: "Qol Qoys VIP"
      },
      amenitiesList: [
        "Qolal Ballaaran oo Heer Sare ah",
        "Makhaayadda iyo Cuntada",
        "Goob Fiican Eastleigh",
        "Shirarka & Xafladaha",
        "Adeeg 24/7",
        "Wi-Fi Xawaare Sare",
        "Sariirta Quruxda badan",
        "Baakiin Ammaan ah"
      ],
      description: "Ku yaalla wadnaha firfircoon ee Eastleigh, Huteel Sakina waa halka tayada adeegga Kenyan uu la kulmo raaxada heerka sare ah. Qolalkeenna ballaaran waxaa lagu habeeyay dareen gaar ah, oo ay ku jiraan agabka casriga ah sida Wi-Fi xawaare sare, TV-yada shaashadda, khasnado, iyo shaah & qaxwe. Ku raaxayso adeegyada spa, ku dhadhami cuntada heerka sare ah makhaayaddeena, oo aad ku hesho adeeg 24/7.",
      additionalInfo: "Macluumaad Dheeraad ah",
      additionalNotes: [
        "Dhammaan qolalka waxay leeyihiin agabka casriga ah iyo alaabta quruxda badan",
        "Wi-Fi bilaash ah oo xawaare sare oo guriga oo dhan",
        "24/7 qabasho iyo adeegyada",
        "Spa iyo adeegyada caafimaadka",
        "Makhaayadda cunto maxalli ah iyo caalami ah",
        "Goobaha shirarka ganacsiga iyo xafladaha",
        "Baakiin bilaash ah oo ammaan ah",
        "Qiimayaal gaar ah joogitaanka dheer"
      ],
      bookNow: "Buug Joogitaankaaga",
      priceNote: "* Qiimayaal gaar ah todobaadle iyo bile. Nala soo xiriir macluumaadka."
    }
  };

  const t = translations[language];

  // Hotel images - 9 images for grid layout
  const hotelImages = [
    {
      src: sakina1,
      alt: 'Sakina Hotel - Exterior View'
    },
    {
      src: sakina2,
      alt: 'Sakina Hotel - Lobby'
    },
    {
      src: sakina3,
      alt: 'Sakina Hotel - Reception'
    },
    {
      src: sakina4,
      alt: 'Sakina Hotel - Deluxe Room'
    },
    {
      src: sakina5,
      alt: 'Sakina Hotel - King Suite'
    },
    {
      src: sakina6,
      alt: 'Sakina Hotel - Bathroom'
    },
    {
      src: sakina7,
      alt: 'Sakina Hotel - Lounge'
    },
    {
      src: sakina8,
      alt: 'Sakina Hotel - Restaurant'
    },
    {
      src: sakina9,
      alt: 'Sakina Hotel - Conference Room'
    }
  ];

  // FIXED: Room rates with correct Sakina pricing
  const roomRates = [
    {
      type: t.roomTypes.standardSingle,
      daily: "Ksh 2,000",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    },
    {
      type: t.roomTypes.deluxeDouble,
      daily: "Ksh 3,000",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    },
    {
      type: t.roomTypes.twinBeds,
      daily: "Ksh 3,000",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    },
    {
      type: t.roomTypes.vipFamily,
      daily: "Ksh 4,000",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    }
  ];

  const handleCallClick = () => {
    window.open('tel:+254741947770', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254741947770', '_blank');
  };

  const handleWebsiteClick = () => {
    window.open('https://sakina.ke', '_blank');
  };

  const handleMapsClick = () => {
    window.open('https://maps.google.com/?q=Sakina+Hotel+6th+Street+Eastleigh+Nairobi', '_blank');
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

        {/* Hotel Images - Desktop Grid / Mobile Slideshow */}
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
                  ></div>
                ))}
              </div>
            </>
          ) : (
            // Desktop Grid
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

        {/* Room Rates Table */}
        <div className="sakina-section">
          <h2 className="sakina-section-title">{t.roomRates}</h2>
          <div className="sakina-table-container">
            <table className="sakina-rates-table">
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
                    <td className="sakina-room-type">{rate.type}</td>
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
        <div className="sakina-section">
          <h2 className="sakina-section-title">{t.amenities}</h2>
          <div className="sakina-amenities-grid">
            <div className="sakina-amenity-item">
              <FaBuilding className="sakina-amenity-icon" />
              <span>{t.amenitiesList[0]}</span>
            </div>
            <div className="sakina-amenity-item">
              <FaUtensils className="sakina-amenity-icon" />
              <span>{t.amenitiesList[1]}</span>
            </div>
            <div className="sakina-amenity-item">
              <FaMapMarkerAlt className="sakina-amenity-icon" />
              <span>{t.amenitiesList[2]}</span>
            </div>
            <div className="sakina-amenity-item">
              <FaUsers className="sakina-amenity-icon" />
              <span>{t.amenitiesList[3]}</span>
            </div>
            <div className="sakina-amenity-item">
              <FaConciergeBell className="sakina-amenity-icon" />
              <span>{t.amenitiesList[4]}</span>
            </div>
            <div className="sakina-amenity-item">
              <FaWifi className="sakina-amenity-icon" />
              <span>{t.amenitiesList[5]}</span>
            </div>
            <div className="sakina-amenity-item">
              <FaBed className="sakina-amenity-icon" />
              <span>{t.amenitiesList[6]}</span>
            </div>
            <div className="sakina-amenity-item">
              <FaCar className="sakina-amenity-icon" />
              <span>{t.amenitiesList[7]}</span>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="sakina-section">
          <h2 className="sakina-section-title">{t.additionalInfo}</h2>
          <ul className="sakina-info-list">
            {t.additionalNotes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="sakina-section">
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
            
            <button className="sakina-contact-btn website-btn" onClick={handleWebsiteClick}>
              <FaGlobe className="sakina-contact-icon" />
              <div className="sakina-contact-info">
                <span className="sakina-contact-label">{t.visitWebsite}</span>
                <span className="sakina-contact-value">sakina.ke</span>
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

        {/* Book Now Button - Updated to match Urban style */}
        <div className="sakina-book-now-container">
          <button className="sakina-book-now-btn" onClick={handleBookNowClick}>
            <FaWhatsapp className="sakina-whatsapp-icon" />
            {t.bookNow}
          </button>
        </div>
      </div>

      {/* Booking Form Modal - Updated to match Urban format */}
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