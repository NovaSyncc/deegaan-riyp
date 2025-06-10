import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaHotel, FaSpinner } from 'react-icons/fa';
import './CountryHighlights.css';

// Import flag images
import djiboutiFlag from '../../../../assets/images/djibouti-flag.jpg';
import ethiopiaFlag from '../../../../assets/images/ethiopia-flag.jpg';
import kenyaFlag from '../../../../assets/images/kenya-flag.png';
import somaliaFlag from '../../../../assets/images/somalia-flag.jpeg';
import somalilandFlag from '../../../../assets/images/somaliland-flag.png';

const CountryHighlights = () => {
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(false);

  // Compact translations focused on essential information
  const translations = {
    en: {
      title: "Choose Your Destination",
      subtitle: "Premium Hotels Across East Africa",
      viewHotels: "Book",
      countries: {
        kenya: "Kenya",
        somalia: "Somalia", 
        ethiopia: "Ethiopia",
        somaliland: "Somaliland",
        djibouti: "Djibouti"
      },
      cities: {
        nairobi: "Nairobi",
        mombasa: "Mombasa", 
        eastleigh: "Eastleigh",
        mogadishu: "Mogadishu",
        baidoa: "Baidoa",
        addisAbaba: "Addis Ababa",
        hargeisa: "Hargeisa",
        djiboutiCity: "Djibouti City"
      }
    },
    so: {
      title: "Dooro Meesha aad Tagayso",
      subtitle: "Huteelada Heer-sare ah Bariga Afrika",
      viewHotels: "Buugi",
      countries: {
        kenya: "Kiinya",
        somalia: "Soomaaliya",
        ethiopia: "Itoobiya", 
        somaliland: "Somaliland",
        djibouti: "Jabuuti"
      },
      cities: {
        nairobi: "Nairobi",
        mombasa: "Mombasa",
        eastleigh: "Eastleigh", 
        mogadishu: "Muqdisho",
        baidoa: "Baydhabo",
        addisAbaba: "Addis Ababa",
        hargeisa: "Hargeysa",
        djiboutiCity: "Magaalada Jabuuti"
      }
    }
  };

  const t = translations[language];

  // Streamlined country data with essential information
  const countryData = [
    {
      id: 'kenya',
      name: t.countries.kenya,
      flag: '🇰🇪',
      flagImage: kenyaFlag,
      cities: [
        { 
          id: 'nairobi-eastleigh', 
          name: "Nairobi/Eastleigh",
          isCapital: false,
          hotelCount: 10
        },
        { 
          id: 'nairobi', 
          name: "Nairobi",
          isCapital: true,
          hotelCount: 10
        },
        { 
          id: 'mombasa', 
          name: t.cities.mombasa,
          hotelCount: 10
        }
      ]
    },
    {
      id: 'somalia',
      name: t.countries.somalia,
      flag: '🇸🇴',
      flagImage: somaliaFlag,
      cities: [
        { 
          id: 'mogadishu', 
          name: t.cities.mogadishu,
          isCapital: true,
          hotelCount: 15
        },
        { 
          id: 'baidoa', 
          name: t.cities.baidoa,
          hotelCount: 5
        }
      ]
    },
    {
      id: 'ethiopia',
      name: t.countries.ethiopia,
      flag: '🇪🇹',
      flagImage: ethiopiaFlag,
      cities: [
        { 
          id: 'addisAbaba', 
          name: t.cities.addisAbaba,
          isCapital: true,
          hotelCount: 18
        }
      ]
    },
    {
      id: 'somaliland',
      name: t.countries.somaliland,
      flag: '🏴',
      flagImage: somalilandFlag,
      cities: [
        { 
          id: 'hargeisa', 
          name: t.cities.hargeisa,
          isCapital: true,
          hotelCount: 7
        }
      ]
    },
    {
      id: 'djibouti',
      name: t.countries.djibouti,
      flag: '🇩🇯',
      flagImage: djiboutiFlag,
      cities: [
        { 
          id: 'djiboutiCity', 
          name: t.cities.djiboutiCity,
          isCapital: true,
          hotelCount: 4
        }
      ]
    }
  ];

  // Simplified city click handler for destination selection
  const handleCityClick = async (countryId, cityId, cityName) => {
    setLoading(true);
    
    try {
      // Simulate navigation to hotel listings
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Here you would typically navigate to the hotel listings page
      console.log(`Navigating to ${countryId}/${cityId} hotels`);
      
      // Example navigation (uncomment when implementing routing):
      // router.push(`/hotels/${countryId}/${cityId}`);
      
    } catch (error) {
      console.error('Navigation error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Language toggle with smooth transition
  const handleLanguageToggle = (newLanguage) => {
    if (newLanguage !== language) {
      setLanguage(newLanguage);
    }
  };

  // Keyboard navigation support
  const handleKeyDown = (e, action) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <section className="country-highlights-section" id="destinations">
      <div className="country-highlights-container">
        
        {/* Compact Language Toggle */}
        <div className="country-highlights-language-toggle" role="tablist">
          <button 
            className={`country-highlights-lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageToggle('en')}
            onKeyDown={(e) => handleKeyDown(e, () => handleLanguageToggle('en'))}
            role="tab"
            aria-selected={language === 'en'}
          >
            EN
          </button>
          <button 
            className={`country-highlights-lang-btn ${language === 'so' ? 'active' : ''}`}
            onClick={() => handleLanguageToggle('so')}
            onKeyDown={(e) => handleKeyDown(e, () => handleLanguageToggle('so'))}
            role="tab"
            aria-selected={language === 'so'}
          >
            SO
          </button>
        </div>

        {/* Compact Headers */}
        <h2 className="country-highlights-title">{t.title}</h2>
        <p className="country-highlights-subtitle">{t.subtitle}</p>
        
        {/* Streamlined Country Grid */}
        <div className="country-highlights-grid" role="tabpanel">
          {countryData.map((country) => (
            <article 
              key={country.id} 
              className="country-highlights-card"
              aria-labelledby={`country-${country.id}`}
            >
              
              {/* Compact Country Header */}
              <header 
                className="country-highlights-header"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${country.flagImage})`
                }}
              >
                <div className="country-highlights-flag-overlay">
                  <span className="country-highlights-flag" role="img" aria-label={`${country.name} flag`}>
                    {country.flag}
                  </span>
                  <h3 className="country-highlights-country-name" id={`country-${country.id}`}>
                    {country.name}
                  </h3>
                </div>
              </header>
              
              {/* Compact Cities List */}
              <div className="country-highlights-content">
                <div className="country-highlights-cities">
                  {country.cities.map((city) => (
                    <div 
                      key={city.id} 
                      className="country-highlights-city-item"
                    >
                      <div className="country-highlights-city-info">
                        <FaMapMarkerAlt className="country-highlights-location-icon" />
                        <span className="country-highlights-city-name">
                          {city.name}
                          {city.isCapital && (
                            <span className="capital-indicator" title="Capital">★</span>
                          )}
                        </span>
                        <span className="hotel-count">{city.hotelCount}</span>
                      </div>
                      
                      <button 
                        className="country-highlights-cta-button"
                        onClick={() => handleCityClick(country.id, city.id, city.name)}
                        onKeyDown={(e) => handleKeyDown(e, () => handleCityClick(country.id, city.id, city.name))}
                        disabled={loading}
                        aria-label={`Book hotels in ${city.name}`}
                      >
                        {loading ? (
                          <FaSpinner className="country-highlights-hotel-icon spinning" />
                        ) : (
                          <FaHotel className="country-highlights-hotel-icon" />
                        )}
                        {t.viewHotels}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Loading Overlay */}
        {loading && (
          <div className="loading-overlay" aria-live="polite">
            <div style={{
              color: '#00FFFF',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <FaSpinner className="spinning" />
              Loading hotels...
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountryHighlights;