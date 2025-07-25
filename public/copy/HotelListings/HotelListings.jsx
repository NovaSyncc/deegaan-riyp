import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import './HotelListings.css';
import BookingForm from '../../../../components/BookingForm/BookingForm';
import yareConf from '../../../../assets/images/yareconf.jpg';
import yareL from '../../../../assets/images/yarel.jpg';
import yarePool from '../../../../assets/images/yarepool.jpg';
import yareRoom from '../../../../assets/images/yareroom.jpg';
import yareRoom2 from '../../../../assets/images/yareroom2.jpg';
import yareSeats from '../../../../assets/images/yareseats.jpg';
import { useNavigate } from 'react-router-dom';

const HotelListings = () => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [language, setLanguage] = useState('en');
  const [expandedHotels, setExpandedHotels] = useState({});
  const [currentSlides, setCurrentSlides] = useState({});
  const navigate = useNavigate();

  const translations = {
    en: {
      title: "Deegaan-Riyo Hotel Network",
      subtitle: "Premium Hotels Across East Africa",
      selectCountry: "Select Country",
      selectCity: "Select City",
      allCities: "All Cities",
      bookNow: "Book Now",
      amenities: "Amenities",
      perNight: "per night",
      countries: {
        kenya: "Kenya",
        somalia: "Somalia",
        ethiopia: "Ethiopia",
        djibouti: "Djibouti",
        somaliland: "Somaliland"
      },
      cities: {
        nairobi: "Nairobi Eastleigh",
        mogadishu: "Mogadishu",
        addisAbaba: "Addis Ababa",
        djibouti: "Djibouti City",
        hargeisa: "Hargeisa"
      }
    },
    so: {
      title: "Shabakadda Huteelada Deegaan-Riyo",
      subtitle: "Huteelada Heer-sare ah Bariga Afrika",
      selectCountry: "Dooro Waddan",
      selectCity: "Dooro Magaalo",
      allCities: "Dhammaan Magaalooyinka",
      bookNow: "Buug Hadda",
      amenities: "Adeegyada",
      perNight: "habeenkii",
      countries: {
        kenya: "Kiinya",
        somalia: "Soomaaliya",
        ethiopia: "Itoobiya",
        djibouti: "Jabuuti",
        somaliland: "Somaliland"
      },
      cities: {
        nairobi: "Nairobi Eastleigh",
        mogadishu: "Muqdisho",
        addisAbaba: "Addis Ababa",
        djibouti: "Magaalada Jabuuti",
        hargeisa: "Hargeysa"
      }
    }
  };

  const t = translations[language];

  const countryData = {
    kenya: {
      name: t.countries.kenya,
      cities: [
        { id: 'nairobi', name: t.cities.nairobi }
      ]
    },
    somalia: {
      name: t.countries.somalia,
      cities: [
        { id: 'mogadishu', name: t.cities.mogadishu }
      ]
    },
    ethiopia: {
      name: t.countries.ethiopia,
      cities: [
        { id: 'addisAbaba', name: t.cities.addisAbaba }
      ]
    },
    djibouti: {
      name: t.countries.djibouti,
      cities: [
        { id: 'djibouti', name: t.cities.djibouti }
      ]
    },
    somaliland: {
      name: t.countries.somaliland,
      cities: [
        { id: 'hargeisa', name: t.cities.hargeisa }
      ]
    }
  };

  const hotels = [
    {
      id: 1,
      name: "Yare Towers Hotel",
      location: t.cities.nairobi,
      city: "nairobi",
      country: "kenya",
      priceRange: "Ksh 7,000 - Ksh 9,000",
      description: language === 'en'
        ? "Luxury hotel featuring spacious rooms with daily, weekly, and monthly rates. Choose from 1 bedroom to 2-bedroom executive suites. Enjoy premium amenities including a swimming pool and rooftop area."
        : "Huteel raaxo leh oo leh qolal ballaaran oo leh qiimayaal maalinle, todobaadle, iyo bile ah. Dooro qolal 1 ilaa 2 qol. Ku raaxayso adeegyada heer sare ah oo ay ku jiraan berkadda dabaasha iyo aagga saqafka.",
      amenities: language === 'en'
        ? ["24/7 Reception", "Swimming Pool", "Rooftop Area", "Restaurants", "Free Wi-Fi", "Conference Room"]
        : ["Soo dhaweyn 24/7", "Berkadda Dabaasha", "Aagga Saqafka", "Makhaayadaha", "Wi-Fi Bilaash", "Qolka Shirarka"],
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
      ],
      whatsappNumber: "254703422456",
      images: [
        yareRoom,    // First default image
        yarePool,    // Second default image
        yareL,
        yareRoom2,
        yareConf,
        yareSeats
      ]
    },
    {
      id: 2,
      name: "Eastleigh Lights Hotel",
      location: t.cities.nairobi,
      city: "nairobi",
      country: "kenya",
      priceRange: "Ksh 5,000 - Ksh 8,000",
      description: language === 'en'
        ? "Modern hotel in the heart of Eastleigh featuring comfortable rooms with daily, weekly, and monthly rates. Experience warm hospitality and convenient amenities."
        : "Huteel casri ah oo ku yaal wadnaha Eastleigh oo leh qolal raaxo leh oo leh qiimayaal maalinle, todobaadle, iyo bile ah. Ku raaxayso martiqaad diiran iyo adeegyo habboon.",
      amenities: language === 'en'
        ? ["24/7 Reception", "Restaurant", "Free Wi-Fi", "Conference Room", "Secure Parking"]
        : ["Soo dhaweyn 24/7", "Makhaayadda", "Wi-Fi Bilaash", "Qolka Shirarka", "Baaking Ammaan ah"],
      roomTypes: [
        {
          type: "Standard Room",
          daily: "Ksh 5,000",
          weekly: "Ksh 30,000",
          monthly: "Ksh 100,000"
        },
        {
          type: "Deluxe Room",
          daily: "Ksh 6,500",
          weekly: "Ksh 35,000",
          monthly: "Ksh 120,000"
        },
        {
          type: "Suite",
          daily: "Ksh 8,000",
          weekly: "Ksh 40,000",
          monthly: "Ksh 150,000"
        }
      ],
      whatsappNumber: "254700000000",
      images: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    {
      id: 3,
      name: "Star Light Hotel",
      location: t.cities.nairobi,
      city: "nairobi",
      country: "kenya",
      priceRange: "Ksh 4,000 - Ksh 7,000",
      description: language === 'en'
        ? "Comfortable hotel in Eastleigh offering affordable accommodation with excellent amenities. Perfect for both business and leisure travelers."
        : "Huteel raaxo leh oo ku yaal Eastleigh oo leh hoy macquul ah oo leh adeegyo wanaagsan. Waa ku haboon yahay labada ganacsiga iyo dalxiisayaasha.",
      amenities: language === 'en'
        ? ["24/7 Security", "Restaurant", "Free Wi-Fi", "Meeting Room", "Airport Shuttle"]
        : ["Amni 24/7", "Makhaayadda", "Wi-Fi Bilaash", "Qolka Shirarka", "Gaadiidka Garoonka"],
      roomTypes: [
        {
          type: "Standard Single",
          daily: "Ksh 4,000",
          weekly: "Ksh 25,000",
          monthly: "Ksh 90,000"
        },
        {
          type: "Standard Double",
          daily: "Ksh 5,500",
          weekly: "Ksh 33,000",
          monthly: "Ksh 110,000"
        },
        {
          type: "Deluxe Room",
          daily: "Ksh 7,000",
          weekly: "Ksh 40,000",
          monthly: "Ksh 130,000"
        }
      ],
      whatsappNumber: "254700000000",
      images: [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    {
      id: 4,
      name: "Hotel RIYO Mogadishu",
      location: t.cities.mogadishu,
      city: "mogadishu",
      country: "somalia",
      priceRange: "$40 - $65",
      description: language === 'en'
        ? "Luxury hotel in the heart of Mogadishu featuring premium amenities, rooftop dining, and state-of-the-art facilities."
        : "Huteel raaxo ah oo ku yaal wadnaha Muqdisho oo leh adeegyo heer-sare ah, cunno saqafka sare, iyo xarumaha casriga ah.",
      amenities: language === 'en'
        ? ["Rooftop Dining", "Fitness Center", "Free Parking", "24/7 Front Desk"]
        : ["Cunno Saqafka Sare", "Xarunta Jimicsiga", "Baarkinka Bilaash", "Aqbalaha 24/7"],
      whatsappNumber: "252611234567",
      images: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 5,
      name: "Hotel RIYO Addis",
      location: t.cities.addisAbaba,
      city: "addisAbaba",
      country: "ethiopia",
      priceRange: "$35 - $55",
      description: language === 'en'
        ? "Modern hotel in Addis Ababa offering comfortable accommodation with excellent accessibility for business and leisure travelers."
        : "Huteel casri ah oo ku yaal Addis Ababa oo bixiya deggan raaxo leh oo leh heli karo fiican ganacsi iyo dalxiisayaasha.",
      amenities: language === 'en'
        ? ["Free Wi-Fi", "Business Center", "Restaurant", "Airport Shuttle"]
        : ["Wi-Fi Bilaash", "Xarunta Ganacsiga", "Makhaayadda", "Baabuurka Dayuuradaha"],
      whatsappNumber: "251911234567",
      images: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 6,
      name: "Hotel RIYO Djibouti",
      location: t.cities.djibouti,
      city: "djibouti",
      country: "djibouti",
      priceRange: "$45 - $70",
      description: language === 'en'
        ? "Premium hotel offering exceptional service and modern amenities in the strategic location of Djibouti City."
        : "Huteel heer-sare ah oo bixiya adeeg aad u fiican iyo adeegyo casri ah meel istiraatiiji ah oo ku taal Magaalada Jabuuti.",
      amenities: language === 'en'
        ? ["Ocean View", "Fine Dining", "Spa Services", "Conference Facilities"]
        : ["Muuqaalka Badda", "Cunno Heer-sare", "Adeegyada Spa", "Xarumaha Shirarka"],
      whatsappNumber: "25377123456",
      images: [
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 7,
      name: "Hotel RIYO Hargeisa",
      location: t.cities.hargeisa,
      city: "hargeisa",
      country: "somaliland",
      priceRange: "$30 - $50",
      description: language === 'en'
        ? "Contemporary hotel in Hargeisa featuring modern amenities, high-speed internet and excellent hospitality services."
        : "Huteel casri ah oo ku yaal Hargeysa oo leh adeegyo casri ah, internet dhaqso badan iyo adeegyo marti-qaad oo fiican.",
      amenities: language === 'en'
        ? ["High-Speed Wi-Fi", "Restaurant", "Laundry Service", "Car Rental"]
        : ["Wi-Fi Dhaqso Badan", "Makhaayadda", "Adeegga Dhaqida", "Kirayska Baabuurta"],
      whatsappNumber: "252634123456",
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  const handleBookNowClick = (hotel) => {
    setSelectedHotel(hotel);
    setIsBookingFormOpen(true);
  };

  const closeBookingForm = () => {
    setIsBookingFormOpen(false);
    setSelectedHotel(null);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'so' : 'en');
  };

  const toggleHotelExpansion = (hotelId, hotelName) => {
    if (hotelName === "Yare Towers Hotel") {
      navigate('/yare');
    } else {
      setExpandedHotels(prev => ({
        ...prev,
        [hotelId]: !prev[hotelId]
      }));
    }
  };

  const changeSlide = (hotelId, index) => {
    setCurrentSlides(prev => ({
      ...prev,
      [hotelId]: index
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlides(prev => {
        const newSlides = { ...prev };
        hotels.forEach(hotel => {
          if (hotel.images.length > 2) {
            const current = prev[hotel.id] || 0;
            newSlides[hotel.id] = (current + 1) % hotel.images.length;
          }
        });
        return newSlides;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const filteredHotels = hotels.filter(hotel => {
    if (!selectedCountry) return true;
    if (selectedCountry && !selectedCity) return hotel.country === selectedCountry;
    return hotel.country === selectedCountry && hotel.city === selectedCity;
  });

  // Helper function to get hotel images
  const getHotelImages = (hotel) => {
    if (hotel.name === "Yare Towers Hotel") {
      return [yareRoom, yarePool, yareL, yareRoom2, yareConf, yareSeats];
    }
    return hotel.images.length > 0 ? hotel.images : [];
  };

  return (
    <section className="deegaan-hotel-listings-section" id="hotel-listings">
      <div className="deegaan-container">
        <div className="deegaan-language-toggle">
          <button
            className={`deegaan-lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            className={`deegaan-lang-btn ${language === 'so' ? 'active' : ''}`}
            onClick={() => setLanguage('so')}
          >
            SO
          </button>
        </div>

        <h2 className="deegaan-section-title">{t.title}</h2>
        <p className="deegaan-section-subtitle">{t.subtitle}</p>

        <div className="deegaan-filters">
          <div className="deegaan-filter-group">
            <FaGlobe className="deegaan-filter-icon" />
            <select
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setSelectedCity('');
              }}
              className="deegaan-filter-select"
            >
              <option value="">{t.selectCountry}</option>
              {Object.entries(countryData).map(([key, country]) => (
                <option key={key} value={key}>{country.name}</option>
              ))}
            </select>
          </div>
          
          {selectedCountry && countryData[selectedCountry].cities.length > 1 && (
            <div className="deegaan-filter-group">
              <FaMapMarkerAlt className="deegaan-filter-icon" />
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="deegaan-filter-select"
              >
                <option value="">{t.allCities}</option>
                {countryData[selectedCountry].cities.map(city => (
                  <option key={city.id} value={city.id}>{city.name}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        <div className="deegaan-hotel-grid">
          {filteredHotels.map((hotel) => {
            const hotelImages = getHotelImages(hotel);
            
            return (
              <div className="deegaan-hotel-card" key={hotel.id}>
                <div className="deegaan-hotel-images">
                  {window.innerWidth <= 768 ? (
                    <div className="deegaan-hotel-images-slideshow">
                      {hotelImages.map((image, i) => (
                        <div
                          className={`deegaan-hotel-image-slide ${i === (currentSlides[hotel.id] || 0) ? 'active' : ''}`}
                          key={i}
                        >
                          <img src={image} alt={`${hotel.name} - view ${i+1}`} />
                        </div>
                      ))}
                      <div className="deegaan-slideshow-controls">
                        {hotelImages.map((_, i) => (
                          <div
                            key={i}
                            className={`deegaan-slideshow-dot ${i === (currentSlides[hotel.id] || 0) ? 'active' : ''}`}
                            onClick={() => changeSlide(hotel.id, i)}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Desktop view - show first two images
                    hotelImages.slice(0, 2).map((image, i) => (
                      <div className="deegaan-hotel-image" key={i}>
                        <img src={image} alt={`${hotel.name} - view ${i+1}`} />
                      </div>
                    ))
                  )}
                </div>
                <div className="deegaan-hotel-content">
                  <h3
                    className="deegaan-hotel-name"
                    data-hotel={
                      hotel.name === "Yare Towers Hotel" ? "yare-towers" :
                      hotel.name === "Eastleigh Lights Hotel" ? "eastleigh-lights" :
                      hotel.name === "Star Light Hotel" ? "star-light" : "riyo"
                    }
                  >
                    {hotel.name}
                  </h3>
                  <div className="deegaan-hotel-location">
                    <i className="deegaan-location-icon">📍</i>
                    <span>{hotel.location}</span>
                  </div>
                  <div className="deegaan-hotel-price">{hotel.priceRange} {t.perNight}</div>
                  <p
                    className="deegaan-hotel-description"
                    style={{
                      maxHeight: expandedHotels[hotel.id] ? 'none' : '3em',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    {hotel.description}
                  </p>
                  <button
                    className="deegaan-read-more-btn"
                    onClick={() => toggleHotelExpansion(hotel.id, hotel.name)}
                  >
                    {hotel.name === "Yare Towers Hotel" ?
                      (language === 'en' ? 'View Full Hotel Info' : 'Arag Macluumaadka Huteelka oo Dhan') :
                      (expandedHotels[hotel.id] ?
                        (language === 'en' ? 'Show Less' : 'Itus Yar') :
                        (language === 'en' ? 'Read More' : 'Sii Akhri')
                      )
                    }
                  </button>
                  <div className="deegaan-hotel-amenities">
                    <h4>{t.amenities}</h4>
                    <div className="deegaan-amenities-list">
                      {hotel.amenities.map((amenity, i) => (
                        <span className="deegaan-amenity" key={i}>{amenity}</span>
                      ))}
                    </div>
                  </div>
                  <button
                    className="deegaan-whatsapp-button"
                    onClick={() => handleBookNowClick(hotel)}
                  >
                    <FaWhatsapp className="deegaan-whatsapp-icon" /> {t.bookNow}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

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

export default HotelListings;