import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './HotelListings.css';

const HotelListings = () => {
  const hotels = [
    {
      name: "Hotel Bilan",
      location: "Eastleigh, 7th Street",
      priceRange: "$30 - $50 per night",
      description: "A modern hotel offering clean, air-conditioned rooms with free Wi-Fi and breakfast. Ideal for business and leisure travelers.",
      amenities: ["Free Wi-Fi", "Breakfast", "24/7 Security", "Conference Room"],
      whatsappNumber: "#", // Changed to placeholder
      adminNumber: "254790958286",  // Admin number to receive copies
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      name: "Al Noor Suites",
      location: "Eastleigh, 12th Street",
      priceRange: "$25 - $45 per night",
      description: "Comfortable suites featuring spacious rooms, private balconies, and a quiet atmosphere for relaxation.",
      amenities: ["Private Balcony", "Air Conditioning", "Restaurant", "Room Service"],
      whatsappLink: "#", // Changed to placeholder
      images: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      name: "Golden Star Hotel",
      location: "Eastleigh, 1st Avenue",
      priceRange: "$35 - $60 per night",
      description: "A premium experience with well-furnished rooms, rooftop dining, and an on-site fitness center.",
      amenities: ["Rooftop Dining", "Fitness Center", "Free Parking", "24/7 Front Desk"],
      whatsappLink: "#", // Changed to placeholder
      images: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      name: "Horizon Palace",
      location: "Eastleigh, 5th Street",
      priceRange: "$20 - $40 per night",
      description: "Budget-friendly accommodation with excellent service and easy access to local markets and transport.",
      amenities: ["Free Wi-Fi", "Laundry Service", "Taxi Booking", "24-Hour Security"],
      whatsappLink: "#", // Changed to placeholder
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      name: "Emerald Inn",
      location: "Eastleigh, 9th Street",
      priceRange: "$40 - $70 per night",
      description: "A stylish hotel with luxurious suites, a rooftop terrace, and excellent customer service.",
      amenities: ["Rooftop Lounge", "Smart TV", "Fine Dining", "Business Center"],
      whatsappLink: "#", // Changed to placeholder
      images: [
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      name: "Bluewave Residency",
      location: "Eastleigh, 3rd Avenue",
      priceRange: "$28 - $55 per night",
      description: "A cozy and affordable stay with modern rooms, a restaurant, and high-speed internet.",
      amenities: ["High-Speed Wi-Fi", "Restaurant", "Laundry Service", "Airport Shuttle"],
      whatsappLink: "#", // Changed to placeholder
      images: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  const getWhatsAppLink = (hotel) => {
    // Return placeholder "#" for all cases
    return "#";
  };

  return (
    <section className="hotel-listings-section" id="hotel-listings">
      <div className="container">
        <h2 className="section-title">Deegaan-Riyo Hotel Network</h2>
        <div className="hotel-grid">
          {hotels.map((hotel, index) => (
            <div className="hotel-card" key={index}>
              <div className="hotel-images">
                {hotel.images.map((image, i) => (
                  <div className="hotel-image" key={i}>
                    <img src={image} alt={`${hotel.name} - view ${i+1}`} />
                  </div>
                ))}
              </div>
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
                  href={getWhatsAppLink(hotel)}
                  className="whatsapp-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> Book Now
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