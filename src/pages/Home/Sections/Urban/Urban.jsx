import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhone, FaGlobe, FaMapMarkerAlt, FaWifi, FaBed, FaUtensils, FaUsers, FaBuilding, FaArrowLeft, FaStar, FaTv, FaShower, FaConciergeBell, FaCar, FaSwimmingPool } from 'react-icons/fa';
import BookingForm from '../../../../components/BookingForm/BookingForm';
import { getHotelImage, handleImageError } from '../../../../utils/imageUtils';
import './Urban.css';

const Urban = ({ onBack }) => {
  const [language, setLanguage] = useState('en');
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Get images using the new system
  const urbanImage1 = getHotelImage('urban-point', '11.jpg');
  const urbanImage2 = getHotelImage('urban-point', '12.jpg');
  const urbanImage3 = getHotelImage('urban-point', '33.png');
  const urbanBed1 = getHotelImage('urban-point', 'bed1.jpg');
  const urbanBed2 = getHotelImage('urban-point', 'bed2.jpg');
  const urbanBed3 = getHotelImage('urban-point', 'bed3.jpg');
  const urbanDouble = getHotelImage('urban-point', 'double.jpg');
  const urbanFood = getHotelImage('urban-point', 'food.png');
  const urbanSofa = getHotelImage('urban-point', 'sofa.jpg');
  const urbanView1 = getHotelImage('urban-point', 'veiw1.jpg');
  const urbanView = getHotelImage('urban-point', 'view.jpg');
  
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
    id: 2,
    name: 'Urban Point Hotel',
    location: language === 'en' ? 'Nairobi Eastleigh' : 'Nairobi Eastleigh',
    city: 'nairobi',
    country: 'kenya',
    priceRange: 'Ksh 5,000 - Ksh 8,500',
    whatsappNumber: '254742555222',
    roomTypes: [
      {
        type: "Standard Suite",
        daily: "Ksh 5,000",
        weekly: "Contact for rates",
        monthly: "Contact for rates"
      },
      {
        type: "Standard Double Suite",
        daily: "Ksh 6,000",
        weekly: "Contact for rates",
        monthly: "Contact for rates"
      },
      {
        type: "Deluxe Twin Bed",
        daily: "Ksh 7,000",
        weekly: "Contact for rates",
        monthly: "Contact for rates"
      },
      {
        type: "VIP Suite",
        daily: "Ksh 7,500",
        weekly: "Contact for rates",
        monthly: "Contact for rates"
      },
      {
        type: "Deluxe Triple Bed",
        daily: "Ksh 8,500",
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
      title: "Urban Point Hotel",
      subtitle: "Where Quality Kenyan Hospitality Meets Unparalleled Luxury",
      ranking: "⭐ 99 Spacious Contemporary Rooms & Suites in Eastleigh",
      backToListings: "← Back to Hotel Listings",
      roomRates: "Room Rates",
      amenities: "Hotel Amenities",
      additionalInfo: "Additional Information",
      contactInfo: "Contact for Reservations",
      location: "General Waruingi Street, Eastleigh",
      viewOnMaps: "View on Google Maps",
      callNow: "Call Now",
      whatsappUs: "WhatsApp Us",
      visitWebsite: "Visit Website",
      roomTypes: {
        standardSuite: "Standard Suite",
        standardDouble: "Standard Double Suite",
        deluxeTwin: "Deluxe Twin Bed",
        vipSuite: "VIP Suite",
        deluxeTriple: "Deluxe Triple Bed"
      },
      rates: {
        daily: "Daily Rate",
        weekly: "Weekly Rate", 
        monthly: "Monthly Rate"
      },
      amenitiesList: [
        "99 Spacious Contemporary Rooms",
        "Global Culinary Excellence",
        "Prime Eastleigh Location",
        "Business & Conference Facilities",
        "24/7 Concierge Service",
        "Free Wi-Fi Throughout",
        "Room Service Available",
        "Complimentary Parking"
      ],
      additionalNotes: [
        "Ideally located on General Waruingi Street, opposite Pumwani Maternity Hospital",
        "99 spacious and contemporary guest bedrooms and suites designed to exceed comfort standards",
        "Team of top chefs from around the globe serving Somali, Indian, Pakistani, and Continental cuisines",
        "Perfect for both business and leisure travelers",
        "Breathtaking views of Nairobi City from select rooms",
        "Warm hospitality and exceptional service standards",
        "Weekly and monthly rates available upon request"
      ],
      description: "Urban Point Hotel, nestled in the vibrant heart of Eastleigh, offers quality Kenyan hospitality, luxury, and comfort. Located on General Waruingi Street, opposite Pumwani Maternity Hospital, our hotel provides an exceptional experience for both business and leisure travelers. Enjoy 99 spacious, contemporary rooms and suites with breathtaking Nairobi City views. Our team of global chefs serves delectable Somali, Indian, Pakistani, and Continental cuisines.",
      bookNow: "Book Your Stay",
      bookingLabel: "Make a Reservation",
      contactForRates: "Contact for rates"
    },
    so: {
      title: "Huteel Urban Point",
      subtitle: "Halka Martiqaadka Kiinya ee Tayada leh uu la kulmo Raaxada aan la barbar dhigi karin",
      ranking: "⭐ 99 Qolal Ballaaran oo Casri ah & Suites ku yaal Eastleigh",
      backToListings: "← Dib ugu noqo Liiska Huteellada",
      roomRates: "Qiimayaalka Qolalka",
      amenities: "Adeegyada Huteelka",
      additionalInfo: "Macluumaad Dheeraad ah",
      contactInfo: "Xiriir Buuginta",
      location: "General Waruingi Street, Eastleigh",
      viewOnMaps: "Ku eeg Google Maps",
      callNow: "War Hadda",
      whatsappUs: "WhatsApp noo soo dir",
      visitWebsite: "Booqo Website-ka",
      roomTypes: {
        standardSuite: "Suite Caadi ah",
        standardDouble: "Suite Caadi Laba Sariir ah",
        deluxeTwin: "Deluxe Twin Bed",
        vipSuite: "VIP Suite",
        deluxeTriple: "Deluxe Saddex Sariir ah"
      },
      rates: {
        daily: "Qiimaha Maalinle",
        weekly: "Qiimaha Todobaadle",
        monthly: "Qiimaha Bile"
      },
      amenitiesList: [
        "99 Qolal Ballaaran oo Casri ah",
        "Cunto Heer Caalami ah",
        "Goobta Muhiimka ah ee Eastleigh",
        "Xarumaha Ganacsiga & Shirarka",
        "Adeegga 24/7",
        "Wi-Fi Bilaash ah Meel kasta",
        "Adeegga Qolka",
        "Baakiin Bilaash"
      ],
      additionalNotes: [
        "Si fiican ugu dhex yaal General Waruingi Street, ka soo horjeeda Isbitaalka Pumwani",
        "99 qolal ballaaran oo casri ah oo loogu talagalay inay ka sarreeyaan heerarka raaxada",
        "Koox kariyayaal heer sare ah oo ka yimid adduunka oo dhan oo u shaqeeya cuntada Soomaalida, Hindida, Bakistaan, iyo Continental",
        "Ku habboon ganacsi iyo dalxiis labadaba",
        "Muuqaal qurux badan oo Magaalada Nairobi ah qolal gaar ah",
        "Martiqaad diiran iyo heerarka adeegga gaar ah",
        "Qiimayaalka todobaadle iyo bile ayaa la heli karaa marka la codsado"
      ],
      description: "Huteel Urban Point, oo ku dhex yaal wadnaha firfircoon ee Eastleigh, wuxuu bixiyaa martiqaad tayo leh oo Kiinya ah, raaxo, iyo nasasho. Waxaa ku yaal General Waruingi Street, oo ka soo horjeeda Isbitaalka Pumwani, huteelkayagu wuxuu bixiyaa khibrad gaar ah oo loogu talagalay ganacsi iyo dalxiis labadaba. Ku raaxayso 99 qolal ballaaran oo casri ah iyo suites leh muuqaal qurux badan oo Magaalada Nairobi ah. Kooxdayada cunto kariyayaasha caalamiga ah waxay u adeegaan cuntooyinka macaan ee Soomaalida, Hindida, Bakistaan, iyo Continental.",
      bookNow: "Buug Joogitaankaaga",
      bookingLabel: "Samee Buukin",
      contactForRates: "Xiriir qiimayaalka"
    }
  };

  const t = translations[language];

  // Hotel images - 9 images from the urban folder (removed unused images)
  const hotelImages = [
    {
      src: urbanBed1,
      alt: 'Urban Point Hotel - Bedroom 1'
    },
    {
      src: urbanView1,
      alt: 'Urban Point Hotel - City View'
    },
    {
      src: urbanBed2,
      alt: 'Urban Point Hotel - Bedroom 2'
    },
    {
      src: urbanImage1,
      alt: 'Urban Point Hotel - Dining Area'
    },
    {
      src: urbanDouble,
      alt: 'Urban Point Hotel - Double Room'
    },
    {
      src: urbanBed3,
      alt: 'Urban Point Hotel - Bedroom 3'
    },
    {
      src: urbanSofa,
      alt: 'Urban Point Hotel - Lounge Area'
    },
    {
      src: urbanFood,
      alt: 'Urban Point Hotel - Restaurant & Cuisine'
    },
    {
      src: urbanView,
      alt: 'Urban Point Hotel - Hotel View'
    }
  ];

  const roomRates = [
    {
      type: t.roomTypes.standardSuite,
      daily: "Ksh 5,000",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    },
    {
      type: t.roomTypes.standardDouble,
      daily: "Ksh 6,000",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    },
    {
      type: t.roomTypes.deluxeTwin,
      daily: "Ksh 7,000",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    },
    {
      type: t.roomTypes.vipSuite,
      daily: "Ksh 7,500",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    },
    {
      type: t.roomTypes.deluxeTriple,
      daily: "Ksh 8,500",
      weekly: t.contactForRates,
      monthly: t.contactForRates
    }
  ];

  const handleCallClick = () => {
    window.open('tel:+254742555222', '_self');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/254742555222', '_blank');
  };

  const handleWebsiteClick = () => {
    // Update this with actual website when available
    window.open('https://www.urbanpointhotel.com', '_blank');
  };

  const handleMapsClick = () => {
    window.open('https://maps.google.com/?q=Urban+Point+Hotel+General+Waruingi+Street+Eastleigh+Nairobi', '_blank');
  };

  return (
    <section className="urban-hotel-section">
      <div className="urban-container">
        {/* Language Toggle */}
        <div className="urban-language-toggle">
          <button 
            className={`urban-lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button 
            className={`urban-lang-btn ${language === 'so' ? 'active' : ''}`}
            onClick={() => setLanguage('so')}
          >
            SO
          </button>
        </div>

        {/* Back Button */}
        {onBack && (
          <button className="urban-back-btn" onClick={onBack}>
            <FaArrowLeft className="urban-back-icon" />
            {t.backToListings}
          </button>
        )}

        {/* Header */}
        <div className="urban-header">
          <h1 className="urban-title">{t.title}</h1>
          <p className="urban-subtitle">{t.subtitle}</p>
          {/* Added ranking badge */}
          <div className="urban-ranking-badge">
            <FaStar className="urban-star-icon" />
            <span>{t.ranking}</span>
          </div>
        </div>

        {/* Hotel Images - Desktop Grid / Mobile Slideshow */}
        <div className="urban-images-grid">
          {window.innerWidth <= 768 ? (
            // Mobile Slideshow
            <>
              {hotelImages.map((image, index) => (
                <div
                  key={index}
                  className={`urban-image-container ${index === currentSlide ? 'active' : ''}`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="urban-image"
                    loading="lazy"
                    onError={handleImageError}
                  />
                </div>
              ))}
              <div className="urban-slideshow-controls">
                {hotelImages.map((_, index) => (
                  <div
                    key={index}
                    className={`urban-slideshow-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => changeSlide(index)}
                  />
                ))}
              </div>
            </>
          ) : (
            // Desktop Grid
            hotelImages.map((image, index) => (
              <div key={index} className="urban-image-container">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="urban-image"
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>
            ))
          )}
        </div>

        {/* Description */}
        <div className="urban-description">
          <p>{t.description}</p>
        </div>

        {/* Room Rates Table */}
        <div className="urban-section">
          <h2 className="urban-section-title">{t.roomRates}</h2>
          <div className="urban-table-container">
            <table className="urban-rates-table">
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
                    <td className="urban-room-type">{rate.type}</td>
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
        <div className="urban-section">
          <h2 className="urban-section-title">{t.amenities}</h2>
          <div className="urban-amenities-grid">
            <div className="urban-amenity-item">
              <FaBuilding className="urban-amenity-icon" />
              <span>{t.amenitiesList[0]}</span>
            </div>
            <div className="urban-amenity-item">
              <FaUtensils className="urban-amenity-icon" />
              <span>{t.amenitiesList[1]}</span>
            </div>
            <div className="urban-amenity-item">
              <FaMapMarkerAlt className="urban-amenity-icon" />
              <span>{t.amenitiesList[2]}</span>
            </div>
            <div className="urban-amenity-item">
              <FaUsers className="urban-amenity-icon" />
              <span>{t.amenitiesList[3]}</span>
            </div>
            <div className="urban-amenity-item">
              <FaConciergeBell className="urban-amenity-icon" />
              <span>{t.amenitiesList[4]}</span>
            </div>
            <div className="urban-amenity-item">
              <FaWifi className="urban-amenity-icon" />
              <span>{t.amenitiesList[5]}</span>
            </div>
            <div className="urban-amenity-item">
              <FaBed className="urban-amenity-icon" />
              <span>{t.amenitiesList[6]}</span>
            </div>
            <div className="urban-amenity-item">
              <FaCar className="urban-amenity-icon" />
              <span>{t.amenitiesList[7]}</span>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="urban-section">
          <h2 className="urban-section-title">{t.additionalInfo}</h2>
          <ul className="urban-info-list">
            {t.additionalNotes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="urban-section">
          <h2 className="urban-section-title">{t.contactInfo}</h2>
          <div className="urban-contact-grid">
            <button className="urban-contact-btn call-btn" onClick={handleCallClick}>
              <FaPhone className="urban-contact-icon" />
              <div className="urban-contact-info">
                <span className="urban-contact-label">{t.callNow}</span>
                <span className="urban-contact-value">0742 555 222</span>
              </div>
            </button>
            
            <button className="urban-contact-btn whatsapp-btn" onClick={handleWhatsAppClick}>
              <FaWhatsapp className="urban-contact-icon" />
              <div className="urban-contact-info">
                <span className="urban-contact-label">{t.whatsappUs}</span>
                <span className="urban-contact-value">+254 742 555 222</span>
              </div>
            </button>
            
            <button className="urban-contact-btn website-btn" onClick={handleWebsiteClick}>
              <FaGlobe className="urban-contact-icon" />
              <div className="urban-contact-info">
                <span className="urban-contact-label">{t.visitWebsite}</span>
                <span className="urban-contact-value">www.urbanpointhotel.com</span>
              </div>
            </button>
            
            <button className="urban-contact-btn maps-btn" onClick={handleMapsClick}>
              <FaMapMarkerAlt className="urban-contact-icon" />
              <div className="urban-contact-info">
                <span className="urban-contact-label">{t.viewOnMaps}</span>
                <span className="urban-contact-value">{t.location}</span>
              </div>
            </button>
          </div>
        </div>

        {/* Book Now Button - Updated to match HotelListings style */}
        <div className="urban-book-now-container">
          <button className="urban-book-now-btn" onClick={handleBookNowClick}>
            <FaWhatsapp className="urban-whatsapp-icon" />
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

export default Urban;