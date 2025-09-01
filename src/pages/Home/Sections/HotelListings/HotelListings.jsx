import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './HotelListings.css';
import BookingForm from '../../../../components/BookingForm/BookingForm';
import { 
  getHotels, 
  getTranslations, 
  getCountryData, 
  filterHotels, 
  createPlaceholderHotel 
} from '../../../../utils/dataLoader';
import { 
  getHotelImages, 
  handleImageError, 
  preloadImages 
} from '../../../../utils/imageUtils';

const HotelListings = () => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [language, setLanguage] = useState('en');
  const [expandedHotels, setExpandedHotels] = useState({});
  const [currentSlides, setCurrentSlides] = useState({});
  const [showComingSoonPopup, setShowComingSoonPopup] = useState(false);
  const [selectedCountryName, setSelectedCountryName] = useState('');
  const navigate = useNavigate();

  // Get data from JSON files
  const hotels = getHotels();
  const t = getTranslations(language);
  const countryData = getCountryData(language);

  const handleBookNowClick = (hotel) => {
    if (hotel.isComingSoon) {
      setSelectedCountryName(countryData[hotel.country]?.name || hotel.country);
      setShowComingSoonPopup(true);
      return;
    }
    setSelectedHotel(hotel);
    setIsBookingFormOpen(true);
  };

  const closeBookingForm = () => {
    setIsBookingFormOpen(false);
    setSelectedHotel(null);
  };

  const closeComingSoonPopup = () => {
    setShowComingSoonPopup(false);
    setSelectedCountryName('');
  };

  const toggleHotelExpansion = (hotelId, hotelName, isComingSoon) => {
    if (isComingSoon) {
      const hotel = filteredHotels.find(h => h.id === hotelId);
      if (hotel) {
        setSelectedCountryName(countryData[hotel.country]?.name || hotel.country);
      }
      setShowComingSoonPopup(true);
      return;
    }
    
    // Navigation logic for specific hotels
    const navigationMap = {
      "Yare Towers Hotel": '/yare',
      "Urban Point Hotel": '/urban',
      "Baraka Tower Hotel": '/baraka',
      "Bushra Hotel": '/bushra',
      "HYYAT GOLDEN HOTEL": '/hyyat'
    };

    if (navigationMap[hotelName]) {
      navigate(navigationMap[hotelName]);
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
          const images = getHotelImages(hotel);
          if (images.length > 2) {
            const current = prev[hotel.id] || 0;
            newSlides[hotel.id] = (current + 1) % images.length;
          }
        });
        return newSlides;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [hotels]);

  // Preload images for better performance
  useEffect(() => {
    const allImages = hotels.flatMap(hotel => getHotelImages(hotel));
    preloadImages(allImages);
  }, [hotels]);

  // Get filtered hotels with placeholders
  const getFilteredHotels = () => {
    let filtered = filterHotels(hotels, selectedCountry, selectedCity);

    // If a country is selected but has no hotels, show placeholder
    if (selectedCountry && filtered.length === 0) {
      const placeholderHotel = createPlaceholderHotel(selectedCountry, selectedCity, language);
      filtered = [placeholderHotel];
    }

    return filtered;
  };

  const filteredHotels = getFilteredHotels();

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
            const currentDescription = hotel.descriptions?.[language] || hotel.descriptions?.en || '';
            const currentAmenities = hotel.amenities?.[language] || hotel.amenities?.en || [];
            const currentLocation = countryData[hotel.country]?.cities.find(c => c.id === hotel.city)?.name || hotel.location;
            
            return (
              <div className={`deegaan-hotel-card ${hotel.isComingSoon ? 'coming-soon' : ''}`} key={hotel.id}>
                <div className="deegaan-hotel-images">
                  {window.innerWidth <= 768 ? (
                    <div className="deegaan-hotel-images-slideshow">
                      {hotelImages.map((image, i) => (
                        <div
                          className={`deegaan-hotel-image-slide ${i === (currentSlides[hotel.id] || 0) ? 'active' : ''}`}
                          key={i}
                        >
                          <img 
                            src={image} 
                            alt={`${hotel.name} - view ${i+1}`} 
                            onError={handleImageError}
                          />
                        </div>
                      ))}
                      {hotel.isComingSoon && (
                        <div className="deegaan-coming-soon-overlay">
                          <div className="deegaan-coming-soon-badge">
                            {t.comingSoon}
                          </div>
                        </div>
                      )}
                      {hotel.isFurnishedApartment && (
                        <div className="deegaan-furnished-apartment-patch">
                          <div className="deegaan-furnished-badge">
                            {t.furnished}
                          </div>
                        </div>
                      )}
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
                    <>
                      {hotelImages.slice(0, 2).map((image, i) => (
                        <div className="deegaan-hotel-image" key={i}>
                          <img 
                            src={image} 
                            alt={`${hotel.name} - view ${i+1}`} 
                            onError={handleImageError}
                          />
                        </div>
                      ))}
                      {hotel.isComingSoon && (
                        <div className="deegaan-coming-soon-overlay">
                          <div className="deegaan-coming-soon-badge">
                            {t.comingSoon}
                          </div>
                        </div>
                      )}
                      {hotel.isFurnishedApartment && (
                        <div className="deegaan-furnished-apartment-patch">
                          <div className="deegaan-furnished-badge">
                            {t.furnished}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
                <div className="deegaan-hotel-content">
                  <h3
                    className="deegaan-hotel-name"
                    data-hotel={hotel.slug}
                  >
                    {hotel.name}
                  </h3>
                  <div className="deegaan-hotel-location">
                    <i className="deegaan-location-icon">📍</i>
                    <span>{currentLocation}</span>
                  </div>
                  <div className="deegaan-hotel-price">
                    {hotel.isComingSoon ? hotel.priceRange : `${hotel.priceRange} ${t.perNight}`}
                  </div>
                  <p
                    className="deegaan-hotel-description"
                    style={{
                      maxHeight: expandedHotels[hotel.id] ? 'none' : '3em',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    {currentDescription}
                  </p>
                  <button
                    className="deegaan-read-more-btn"
                    onClick={() => toggleHotelExpansion(hotel.id, hotel.name, hotel.isComingSoon)}
                  >
                    {['Yare Towers Hotel', 'Urban Point Hotel', 'Baraka Tower Hotel', 'Bushra Hotel', 'HYYAT GOLDEN HOTEL'].includes(hotel.name) ?
                      (language === 'en' ? 'View Full Hotel Info' : 'Arag Macluumaadka Huteelka oo Dhan') :
                      hotel.isComingSoon ?
                        t.learnMore :
                        (expandedHotels[hotel.id] ?
                          (language === 'en' ? 'Show Less' : 'Itus Yar') :
                          (language === 'en' ? 'Read More' : 'Sii Akhri')
                        )
                    }
                  </button>
                  <div className="deegaan-hotel-amenities">
                    <h4>{t.amenities}</h4>
                    <div className="deegaan-amenities-list">
                      {currentAmenities.map((amenity, i) => (
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

      {showComingSoonPopup && (
        <div className="deegaan-coming-soon-popup" onClick={closeComingSoonPopup}>
          <div className="deegaan-coming-soon-popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="deegaan-popup-icon">
              🏨
            </div>
            <h3 className="deegaan-popup-title">
              {t.comingSoon} {selectedCountryName && `to ${selectedCountryName}`}
            </h3>
            <p className="deegaan-popup-message">
              {t.comingSoonMessage}
            </p>
            <button className="deegaan-popup-close-btn" onClick={closeComingSoonPopup}>
              {t.closePopup}
            </button>
          </div>
        </div>
      )}

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