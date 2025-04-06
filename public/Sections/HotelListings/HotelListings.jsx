import React from 'react';
import './HotelListings.css';

const HotelListings = () => {
  const hotels = [
    {
      name: "Hotel Bilan",
      location: "Eastleigh, 7th Street",
      priceRange: "$30 - $50 per night",
      description: "A modern hotel offering clean, air-conditioned rooms with free Wi-Fi and breakfast. Ideal for business and leisure travelers.",
      amenities: ["Free Wi-Fi", "Breakfast", "24/7 Security", "Conference Room"],
      whatsappLink: "https://wa.me/254712345678"
    },
    {
      name: "Al Noor Suites",
      location: "Eastleigh, 12th Street",
      priceRange: "$25 - $45 per night",
      description: "Comfortable suites featuring spacious rooms, private balconies, and a quiet atmosphere for relaxation.",
      amenities: ["Private Balcony", "Air Conditioning", "Restaurant", "Room Service"],
      whatsappLink: "https://wa.me/254798765432"
    },
    {
      name: "Golden Star Hotel",
      location: "Eastleigh, 1st Avenue",
      priceRange: "$35 - $60 per night",
      description: "A premium experience with well-furnished rooms, rooftop dining, and an on-site fitness center.",
      amenities: ["Rooftop Dining", "Fitness Center", "Free Parking", "24/7 Front Desk"],
      whatsappLink: "https://wa.me/254723456789"
    },
    {
      name: "Horizon Palace",
      location: "Eastleigh, 5th Street",
      priceRange: "$20 - $40 per night",
      description: "Budget-friendly accommodation with excellent service and easy access to local markets and transport.",
      amenities: ["Free Wi-Fi", "Laundry Service", "Taxi Booking", "24-Hour Security"],
      whatsappLink: "https://wa.me/254798123456"
    },
    {
      name: "Emerald Inn",
      location: "Eastleigh, 9th Street",
      priceRange: "$40 - $70 per night",
      description: "A stylish hotel with luxurious suites, a rooftop terrace, and excellent customer service.",
      amenities: ["Rooftop Lounge", "Smart TV", "Fine Dining", "Business Center"],
      whatsappLink: "https://wa.me/254789654321"
    },
    {
      name: "Bluewave Residency",
      location: "Eastleigh, 3rd Avenue",
      priceRange: "$28 - $55 per night",
      description: "A cozy and affordable stay with modern rooms, a restaurant, and high-speed internet.",
      amenities: ["High-Speed Wi-Fi", "Restaurant", "Laundry Service", "Airport Shuttle"],
      whatsappLink: "https://wa.me/254701234567"
    }
  ];

  return (
    <section className="hotel-listings-section">
      <div className="container">
        <h2 className="section-title">Deegaan-Riyo Hotel Network</h2>
        <div className="hotel-grid">
          {hotels.map((hotel, index) => (
            <div className="hotel-card" key={index}>
              <div className="hotel-content">
                <h3 className="hotel-name">{hotel.name}</h3>
                <div className="hotel-location">
                  <i className="location-icon">📍</i>
                  <span>{hotel.location}</span>
                </div>
                <div className="hotel-price">{hotel.priceRange}</div>
                <p className="hotel-description">{hotel.description}</p>
                <div className="hotel-amenities">
                  <h4>Amenities</h4>
                  <div className="amenities-list">
                    {hotel.amenities.map((amenity, i) => (
                      <span className="amenity" key={i}>{amenity}</span>
                    ))}
                  </div>
                </div>
                <a 
                  href={hotel.whatsappLink} 
                  className="whatsapp-button" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="whatsapp-icon">💬</i> Book via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotelListings;