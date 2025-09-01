import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone, FaGlobe, FaMapMarkerAlt, FaWifi, FaBed, FaUtensils, FaUsers, FaBuilding, FaArrowLeft, FaStar, FaMosque, FaShower, FaConciergeBell, FaCar, FaArrowsAltV } from 'react-icons/fa';
import BookingForm from '../../../../components/BookingForm/BookingForm';
import { getHotelImage, handleImageError } from '../../../../utils/imageUtils';
import './HYYAT.css';

const HYYAT = ({ onBack }) => {
  const [language, setLanguage] = useState('en');
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Get images using the new system
  const hyyatBed1 = getHotelImage('hyyat-golden', 'bed1.jpg');
  const hyyatDeluxeKing = getHotelImage('hyyat-golden', 'deluxeking.jpg');
  const hyyatGoldenHotelEntrance = getHotelImage('hyyat-golden', 'hyyatgoldenhotelentrance.jpg');
  const hyyatGoldenReception = getHotelImage('hyyat-golden', 'hyyatgoldenreception.jpg');
  const hyyatPreview = getHotelImage('hyyat-golden', 'hyyatpreview.jpg');
  const hyyatMasjid = getHotelImage('hyyat-golden', 'masjid.jpg');
  const hyyatNic = getHotelImage('hyyat-golden', 'nic.jpg');
  const hyyatResta = getHotelImage('hyyat-golden', 'resta.jpg');
  const hyyatResta1 = getHotelImage('hyyat-golden', 'resta1.jpg');
  const hyyatSuperiorSingle = getHotelImage('hyyat-golden', 'superiorsingle.jpg');
  const hyyatTwin = getHotelImage('hyyat-golden', 'twin.jpg');
  
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
    priceRange: 'KES 2,000 - KES 4,500',
    whatsappNumber: '254701387612',
    email: 'info@hyyatgoldenhotel.online',
    website: 'https://hyyatgoldenhotel.online',
    roomTypes: [
      {
        type: "Classic King Suite",
        daily: "KES 2,000",
        size: "25 sqm",
        guests: "2 guests"
      },
      {
        type: "Superior King Suite",
        daily: "KES 2,500",
        size: "30 sqm",
        guests: "2 guests"
      },
      {
        type: "Deluxe King Suite",
        daily: "KES 2,800",
        size: "35 sqm",
        guests: "2 guests"
      },
      {
        type: "Twin Comfort Room",
        daily: "KES 2,500",
        size: "28 sqm",
        guests: "2 guests"
      },
      {
        type: "Family Executive Suite",
        daily: "KES 4,500",
        size: "45 sqm",
        guests: "4 guests"
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
        "Restaurant & Halal Dining",
        "On-site Masjid",
        "Underground Parking",
        "24/7 Reception",
        "Free High-Speed WiFi",
        "Conference & Meeting Rooms",
        "Room Service",
        "Laundry & Dry Cleaning Service",
        "Air Conditioning (All Rooms)",
        "Daily Housekeeping",
        "Elevator Access (All Floors)",
        "Safe Deposit Boxes",
        "Luggage Storage Service",
        "Taxi & Transport Service"
      ],
      additionalNotes: [
        "Located in the centre of Eastleigh Nairobi on 11th Street Second Avenue",
        "9-floor modern hotel building with elevator access to all floors",
        "Beautiful on-site Masjid with proper Qibla direction and ablution areas",
        "Full-service restaurant offering local Somali cuisine and international dishes with halal certification",
        "Secure underground parking facility with 24/7 CCTV surveillance and valet service",
        "All rooms feature air conditioning, private bathrooms, and modern amenities",
        "Conference and meeting rooms available for business travelers",
        "Room service available 24/7 for guest convenience",
        "Daily housekeeping and laundry services including dry cleaning",
        "Safe deposit boxes and luggage storage for guest security",
        "Perfect location for both business travelers and families visiting Eastleigh",
        "Walking distance to major Eastleigh shopping and business areas",
        "Multilingual staff providing exceptional customer service in Somali, English, and Arabic",
        "Operating hours: Reception 24/7, Restaurant 6:00 AM - 11:00 PM, Parking 24/7",
        "Check-in: 14:00, Check-out: 11:00, Non-smoking hotel, Pets not allowed"
      ],
      description: "Experience exceptional hospitality at HYYAT Golden Hotel in the heart of Eastleigh, Nairobi. Our 9-floor establishment offers premium rooms with modern amenities, halal dining, masjid facilities, and secure underground parking for business and leisure travelers. From our Classic King Suites to spacious Family Executive Suites, each room is designed for comfort with air conditioning, free WiFi, and 24/7 room service.",
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
        "Maqaayad & Cunto Xalaal",
        "Masjidka Gudaha",
        "Gaadhi Hoosta Dhulka",
        "Soo dhaweyn 24/7",
        "WiFi Dhaqso Sare oo Bilaash",
        "Qolalka Shirarka & Kulanada",
        "Adeegga Qolka",
        "Adeegga Maydaha & Nadiifinta Qalalan",
        "Qaboojinta Hawada (Dhammaan Qolalka)",
        "Nadiifinta Maalinlaha ah",
        "Wiishka (Dhammaan Dabaqadaha)",
        "Sanduuqyada Kaydka Ammaan",
        "Adeegga Kaydinta Shantooyinka",
        "Adeegga Taxi & Gaadiidka"
      ],
      additionalNotes: [
        "Ku yaal xarunta Eastleigh Nairobi 11th Street Second Avenue",
        "Dhisme huteel casri ah 9 dabaqad oo leh wiish dhammaan dabaqadaha",
        "Masjid qurux badan oo gudaha ah oo leh jiheeda saxda ah ee Qiblada iyo meelaha wuduu",
        "Maqaayad adeeg buuxa ah oo bixisa cunto Soomaali ah iyo cuntooyinka caalamka oo leh shahaado xalaal",
        "Xarun ammaan ah oo gaadhi hoosta dhulka ah oo leh kormeer CCTV 24/7 iyo adeegga valet",
        "Dhammaan qolalka waxay leeyihiin qaboojiye hawada, musqul gaarka ah, iyo adeegyo casri ah",
        "Qolalka shirarka iyo kulanada ayaa u diyaar ganacsatada",
        "Adeegga qolka ayaa la heli karaa 24/7 raaxada martida",
        "Nadiifinta maalinlaha ah iyo adeegyada maydaha oo ay ku jiraan nadiifinta qalalan",
        "Sanduuqyada kaydka ammaan iyo kaydinta shantooyinka ammanka martida",
        "Meel ku habboon socdaalayaasha ganacsiga iyo qoysaska labadaba ee booqda Eastleigh",
        "Masafo lugaynta ah dukaannada waaweyn ee Eastleigh iyo aagga ganacsiga",
        "Shaqaale luqado badan ku hadla oo bixiya adeeg aad u fiican Soomaali, Ingiriis, iyo Carabi",
        "Wakhtiyada shaqada: Soo dhaweynta 24/7, Maqaayada 6:00 subaxnimo - 11:00 habeenkii, Gaadhi 24/7",
        "Soo galka: 14:00, Ka bixitaanka: 11:00, Huteel aan sigaarka lagu cabi karin, Xayawaanka la joogi maayo"
      ],
      description: "La kulaan martiqaad cajiib ah HYYAT Golden Hotel ee wadnaha Eastleigh, Nairobi. Dhismahayaga 9 dabaqad ah wuxuu bixiyaa qolal heer sare ah oo leh adeegyo casri ah, cunto xalaal, adeegyada masjidka, iyo gaadhi ammaan ah hoosta dhulka ganacsatada iyo dadka dalxiiska. Laga bilaabo Classic King Suites ilaa Family Executive Suites ballaaran, qol kasta wuxuu loogu talagalay raaxo oo leh qaboojiye hawada, WiFi bilaash, iyo adeegga qolka 24/7.",
      bookNow: "Buug Joogitaankaaga",
      bookingLabel: "Samee Buukin",
      contactForRates: "Xiriir qiimayaalka"
    }
  };

  const t = translations[language];

  // Hotel images - 11 images from the hyyat folder
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
      daily: "KES 2,000",
      size: "25 sqm",
      guests: "2 guests",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    },
    {
      type: t.roomTypes.superiorKing,
      daily: "KES 2,500",
      size: "30 sqm",
      guests: "2 guests",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    },
    {
      type: t.roomTypes.deluxeKing,
      daily: "KES 2,800",
      size: "35 sqm",
      guests: "2 guests",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    },
    {
      type: t.roomTypes.twinComfort,
      daily: "KES 2,500",
      size: "28 sqm",
      guests: "2 guests",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    },
    {
      type: t.roomTypes.familyExecutive,
      daily: "KES 4,500",
      size: "45 sqm",
      guests: "4 guests",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    }
  ];

  const handleCallClick = () => {
    window.open('tel:+254701387612', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254701387612', '_blank');
  };

  const handleWebsiteClick = () => {
    window.open('https://hyyatgoldenhotel.online', '_blank');
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
                    onError={handleImageError}
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
                  onError={handleImageError}
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
                  <th>Size</th>
                  <th>Guests</th>
                </tr>
              </thead>
              <tbody>
                {roomRates.map((rate, index) => (
                  <tr key={index}>
                    <td className="hyyat-room-type">{rate.type}</td>
                    <td data-label="Daily Rate">{rate.daily}</td>
                    <td data-label="Size">{rate.size}</td>
                    <td data-label="Guests">{rate.guests}</td>
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
              <FaUtensils className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[1]}</span>
            </div>
            <div className="hyyat-amenity-item">
              <FaMosque className="hyyat-amenity-icon" />
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
              <FaShower className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[8]}</span>
            </div>
            <div className="hyyat-amenity-item">
              <FaArrowsAltV className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[9]}</span>
            </div>
            <div className="hyyat-amenity-item">
              <FaBed className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[10]}</span>
            </div>
            <div className="hyyat-amenity-item">
              <FaArrowsAltV className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[11]}</span>
            </div>
            <div className="hyyat-amenity-item">
              <FaShower className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[12]}</span>
            </div>
            <div className="hyyat-amenity-item">
              <FaBed className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[13]}</span>
            </div>
            <div className="hyyat-amenity-item">
              <FaCar className="hyyat-amenity-icon" />
              <span>{t.amenitiesList[14]}</span>
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
                <span className="hyyat-contact-value">0701 387 612</span>
              </div>
            </button>
            
            <button className="hyyat-contact-btn whatsapp-btn" onClick={handleWhatsAppClick}>
              <FaWhatsapp className="hyyat-contact-icon" />
              <div className="hyyat-contact-info">
                <span className="hyyat-contact-label">{t.whatsappUs}</span>
                <span className="hyyat-contact-value">+254 701 387 612</span>
              </div>
            </button>
            
            <button className="hyyat-contact-btn website-btn" onClick={handleWebsiteClick}>
              <FaGlobe className="hyyat-contact-icon" />
              <div className="hyyat-contact-info">
                <span className="hyyat-contact-label">{t.visitWebsite}</span>
                <span className="hyyat-contact-value">hyyatgoldenhotel.online</span>
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