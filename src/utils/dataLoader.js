/**
 * Data loading utilities for hotels, translations, and country data
 */

import hotelsData from '../data/hotels.json';
import translationsData from '../data/translations.json';
import countryDataRaw from '../data/countryData.json';

// Cache for processed data
let processedCountryData = null;

/**
 * Get all hotels data
 * @returns {Array} Array of hotel objects
 */
export const getHotels = () => {
  return hotelsData.hotels;
};

/**
 * Get hotel by ID
 * @param {number} hotelId - Hotel ID
 * @returns {Object|null} Hotel object or null if not found
 */
export const getHotelById = (hotelId) => {
  return hotelsData.hotels.find(hotel => hotel.id === hotelId) || null;
};

/**
 * Get hotel by slug
 * @param {string} slug - Hotel slug
 * @returns {Object|null} Hotel object or null if not found
 */
export const getHotelBySlug = (slug) => {
  return hotelsData.hotels.find(hotel => hotel.slug === slug) || null;
};

/**
 * Get translations for a specific language
 * @param {string} language - Language code ('en' or 'so')
 * @returns {Object} Translation object
 */
export const getTranslations = (language = 'en') => {
  return translationsData[language] || translationsData.en;
};

/**
 * Get all available languages
 * @returns {Array} Array of language codes
 */
export const getAvailableLanguages = () => {
  return Object.keys(translationsData);
};

/**
 * Process country data with translations
 * @param {string} language - Language code ('en' or 'so')
 * @returns {Object} Processed country data with translated names
 */
export const getCountryData = (language = 'en') => {
  if (processedCountryData && processedCountryData.language === language) {
    return processedCountryData.data;
  }

  const translations = getTranslations(language);
  const processed = {};

  Object.entries(countryDataRaw).forEach(([countryKey, countryData]) => {
    processed[countryKey] = {
      name: translations.countries[countryData.nameKey] || countryData.nameKey,
      cities: countryData.cities.map(city => ({
        id: city.id,
        name: translations.cities[city.nameKey] || city.nameKey
      }))
    };
  });

  processedCountryData = {
    language,
    data: processed
  };

  return processed;
};

/**
 * Filter hotels by country and city
 * @param {Array} hotels - Array of hotel objects
 * @param {string} selectedCountry - Selected country code
 * @param {string} selectedCity - Selected city code
 * @returns {Array} Filtered hotels array
 */
export const filterHotels = (hotels, selectedCountry, selectedCity) => {
  if (!selectedCountry) return hotels;
  
  return hotels.filter(hotel => {
    if (selectedCountry && !selectedCity) {
      return hotel.country === selectedCountry;
    }
    return hotel.country === selectedCountry && hotel.city === selectedCity;
  });
};

/**
 * Create placeholder hotel for countries without real hotels
 * @param {string} country - Country code
 * @param {string} city - City code (optional)
 * @param {string} language - Language code
 * @returns {Object} Placeholder hotel object
 */
export const createPlaceholderHotel = (country, city, language = 'en') => {
  const translations = getTranslations(language);
  const countryData = getCountryData(language);
  
  const countryName = countryData[country]?.name || country;
  const cityName = city ? 
    countryData[country]?.cities.find(c => c.id === city)?.name : 
    countryData[country]?.cities[0]?.name || countryName;
  
  return {
    id: `placeholder-${country}-${city || 'main'}`,
    name: translations.placeholderHotelName,
    slug: `placeholder-${country}`,
    city: city || countryData[country]?.cities[0]?.id,
    country: country,
    priceRange: translations.comingSoon,
    descriptions: {
      [language]: translations.placeholderDescription
    },
    amenities: {
      [language]: language === 'en' ? 
        ["Premium Location", "World-Class Service", "Modern Facilities", "Coming Soon"] :
        ["Meel Heer-sare ah", "Adeeg Heer Caalami ah", "Xarumo Casri ah", "Waa Imanaya"]
    },
    whatsappNumber: "254700000000",
    images: ["placeholder.svg", "placeholder.svg"],
    isComingSoon: true,
    isPlaceholder: true
  };
};