// src/services/hotelService.js

/**
 * Fetch all hotels from the data source
 * @returns {Promise<Array>} Array of hotel objects
 */
export const fetchAllHotels = async () => {
  try {
    // Replace with your actual API endpoint or JSON file path
    const response = await fetch('/data/hotels.json');
    if (!response.ok) {
      throw new Error('Failed to fetch hotels');
    }
    const data = await response.json();
    return data.hotels;
  } catch (error) {
    console.error('Error fetching hotels:', error);
    return [];
  }
};

/**
 * Fetch only featured hotels
 * @returns {Promise<Array>} Array of featured hotel objects
 */
export const fetchFeaturedHotels = async () => {
  // Simulating an API call with sample data
  const featuredHotels = [
    {
      id: 1,
      name: "Hotel Bilan",
      description: "A modern hotel offering clean, air-conditioned rooms with free Wi-Fi and breakfast.",
      stars: 4,
      priceFrom: 30,
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 2,
      name: "Al Noor Suites",
      description: "Comfortable suites featuring spacious rooms and private balconies.",
      stars: 4,
      priceFrom: 25,
      images: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 3,
      name: "Golden Star Hotel",
      description: "A premium experience with well-furnished rooms and rooftop dining.",
      stars: 5,
      priceFrom: 35,
      images: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return featuredHotels;
};

/**
 * Find a hotel by its ID
 * @param {number} id Hotel ID
 * @returns {Promise<Object|null>} Hotel object or null if not found
 */
export const findHotelById = async (id) => {
  try {
    const allHotels = await fetchAllHotels();
    return allHotels.find(hotel => hotel.id === id) || null;
  } catch (error) {
    console.error('Error finding hotel by ID:', error);
    return null;
  }
};