import React, { useState } from 'react';
import { FaWhatsapp, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import './HotelListings.css';
import BookingForm from '../../../../components/BookingForm/BookingForm';

const HotelListings = () => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [language, setLanguage] = useState('en'); // 'en' for English, 'so' for Somali

  // Translation object
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

  // Countries and their cities
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
    // Nairobi Hotels
    {
      id: 1,
      name: "Hotel HEBEL One",
      location: t.cities.nairobi,
      city: "nairobi",
      country: "kenya",
      priceRange: "$30 - $50",
      description: language === 'en' 
        ? "Premier hotel offering modern amenities, spacious rooms, and exceptional service. Features include air conditioning and complimentary breakfast."
        : "Huteel heer-sare ah oo bixiya adeegyo casri ah, qolal ballaaran, iyo adeeg aad u fiican. Waxaa ka mid ah qaboojiye iyo quraac bilaash ah.",
      amenities: language === 'en' 
        ? ["Free Wi-Fi", "Breakfast", "24/7 Security", "Conference Room"]
        : ["Wi-Fi Bilaash", "Quraac", "Ilaalinta 24/7", "Qolka Shirarka"],
      whatsappNumber: "254790958286",
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 2,
      name: "Hotel HEBEL Two", 
      location: t.cities.nairobi,
      city: "nairobi",
      country: "kenya",
      priceRange: "$25 - $45",
      description: language === 'en'
        ? "Elegant hotel with contemporary design, offering comfortable stays with excellent amenities and friendly service."
        : "Huteel qurux badan oo leh naqshad casri ah, oo bixiya deggan raaxo leh oo leh adeegyo fiican iyo adeeg saaxiibtinimada ah.",
      amenities: language === 'en'
        ? ["Private Balcony", "Air Conditioning", "Restaurant", "Room Service"]
        : ["Balcony Gaar ah", "Qaboojiye", "Makhaayadda", "Adeegga Qolka"],
      whatsappNumber: "254790958286",
      images: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    // Mogadishu Hotels
    {
      id: 3,
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
    // Addis Ababa Hotels
    {
      id: 4,
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
    // Djibouti Hotels
    {
      id: 5,
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
    // Hargeisa Hotels
    {
      id: 6,
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

  // Filter hotels based on selected country and city
  const filteredHotels = hotels.filter(hotel => {
    if (!selectedCountry) return true;
    if (selectedCountry && !selectedCity) return hotel.country === selectedCountry;
    return hotel.country === selectedCountry && hotel.city === selectedCity;
  });

  return (
    <section className="deegaan-hotel-listings-section" id="hotel-listings">
      <div className="deegaan-container">
        {/* Language Toggle */}
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
        
        {/* Country and City Selection */}
        <div className="deegaan-filters">
          <div className="deegaan-filter-group">
            <FaGlobe className="deegaan-filter-icon" />
            <select 
              value={selectedCountry} 
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setSelectedCity(''); // Reset city when country changes
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
          {filteredHotels.map((hotel) => (
            <div className="deegaan-hotel-card" key={hotel.id}>
              <div className="deegaan-hotel-images">
                {hotel.images.map((image, i) => (
                  <div className="deegaan-hotel-image" key={i}>
                    <img src={image} alt={`${hotel.name} - view ${i+1}`} />
                  </div>
                ))}
              </div>
              <div className="deegaan-hotel-content">
                <h3 className="deegaan-hotel-name">{hotel.name}</h3>
                <div className="deegaan-hotel-location">
                  <i className="deegaan-location-icon">📍</i>
                  <span>{hotel.location}</span>
                </div>
                <div className="deegaan-hotel-price">{hotel.priceRange} {t.perNight}</div>
                <p className="deegaan-hotel-description">{hotel.description}</p>
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
          ))}
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

export default HotelListings;