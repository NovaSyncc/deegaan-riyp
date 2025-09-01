/**
 * Utility functions for dynamic image loading
 */

// Cache for loaded images to improve performance
const imageCache = new Map();

/**
 * Dynamically load hotel image with caching
 * @param {string} hotelSlug - Hotel slug (e.g., 'yare-towers')
 * @param {string} imageName - Image filename (e.g., 'yareroom.jpg')
 * @returns {string} Image URL or placeholder
 */
export const getHotelImage = (hotelSlug, imageName) => {
  const cacheKey = `${hotelSlug}/${imageName}`;
  
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey);
  }
  
  const imagePath = `/images/hotels/${hotelSlug}/${imageName}`;
  imageCache.set(cacheKey, imagePath);
  
  return imagePath;
};

/**
 * Get all images for a hotel
 * @param {Object} hotel - Hotel object with slug and images array
 * @returns {Array} Array of image URLs
 */
export const getHotelImages = (hotel) => {
  if (!hotel.images || hotel.images.length === 0) {
    return [createPlaceholderImage()];
  }
  
  return hotel.images.map(imageName => 
    getHotelImage(hotel.slug, imageName)
  );
};

/**
 * Create placeholder SVG image for missing/coming soon hotels
 * @returns {string} Data URL for placeholder SVG
 */
export const createPlaceholderImage = () => {
  return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23080F1A'/%3E%3Cg opacity='0.1'%3E%3Cpath d='M100 100h200v100H100z' fill='%2300FFFF'/%3E%3Cpath d='M150 120h100v20H150z' fill='%2300FFFF'/%3E%3Cpath d='M150 150h60v10H150z' fill='%2300FFFF'/%3E%3C/g%3E%3Ctext x='200' y='160' text-anchor='middle' fill='%2300FFFF' font-family='Arial' font-size='20' font-weight='bold'%3EComming Soon%3C/text%3E%3C/svg%3E";
};

/**
 * Preload images for better performance
 * @param {Array} imageUrls - Array of image URLs to preload
 */
export const preloadImages = (imageUrls) => {
  imageUrls.forEach(url => {
    if (!url.startsWith('data:')) {
      const img = new Image();
      img.src = url;
    }
  });
};

/**
 * Handle image loading errors by falling back to placeholder
 * @param {Event} event - Image error event
 */
export const handleImageError = (event) => {
  event.target.src = createPlaceholderImage();
  console.warn('Failed to load image:', event.target.src);
};