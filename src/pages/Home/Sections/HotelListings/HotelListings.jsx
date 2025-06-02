import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './HotelListings.css';
import BookingForm from '../../../../components/BookingForm/BookingForm';

const HotelListings = () => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const hotels = [
    {
      id: 1,
      name: "Hotel HEBEL One",
      location: "Eastleigh, Section 1",
      priceRange: "$30 - $50 per night",
      description: "Premier hotel offering modern amenities, spacious rooms, and exceptional service. Features include air conditioning and complimentary breakfast.",
      amenities: ["Free Wi-Fi", "Breakfast", "24/7 Security", "Conference Room"],
      whatsappNumber: "254790958286",
      adminNumber: "254790958286",
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 2,
      name: "Hotel HEBEL Two",
      location: "Eastleigh, Section 2",
      priceRange: "$25 - $45 per night",
      description: "Elegant hotel with contemporary design, offering comfortable stays with excellent amenities and friendly service.",
      amenities: ["Private Balcony", "Air Conditioning", "Restaurant", "Room Service"],
      whatsappNumber: "254790958286",
      images: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 3,
      name: "Hotel HEBEL Three",
      location: "Eastleigh, Section 3",
      priceRange: "$35 - $60 per night",
      description: "Luxury hotel featuring premium amenities, rooftop dining, and state-of-the-art fitness facilities.",
      amenities: ["Rooftop Dining", "Fitness Center", "Free Parking", "24/7 Front Desk"],
      whatsappNumber: "254790958286",
      images: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 4,
      name: "Hotel HEBEL Four",
      location: "Eastleigh, Section 4",
      priceRange: "$20 - $40 per night",
      description: "Affordable comfort with excellent accessibility, perfect for both business and leisure travelers.",
      amenities: ["Free Wi-Fi", "Laundry Service", "Taxi Booking", "24-Hour Security"],
      whatsappNumber: "254790958286",
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 5,
      name: "Hotel HEBEL Five",
      location: "Eastleigh, Section 5",
      priceRange: "$40 - $70 per night",
      description: "Upscale hotel offering premium suites with modern amenities and professional business services.",
      amenities: ["Rooftop Lounge", "Smart TV", "Fine Dining", "Business Center"],
      whatsappNumber: "254790958286",
      images: [
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 6,
      name: "Hotel HEBEL Six",
      location: "Eastleigh, Section 6",
      priceRange: "$28 - $55 per night",
      description: "Modern hotel with comprehensive amenities, featuring high-speed internet and excellent dining options.",
      amenities: ["High-Speed Wi-Fi", "Restaurant", "Laundry Service", "Airport Shuttle"],
      whatsappNumber: "254790958286",
      images: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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

  return (
    <section className="hotel-listings-section" id="hotel-listings">
      <div className="container">
        <h2 className="section-title">Deegaan-Riyo Hotel Network</h2>
        <div className="hotel-grid">
          {hotels.map((hotel) => (
            <div className="hotel-card" key={hotel.id}>
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
                <button 
                  className="whatsapp-button"
                  onClick={() => handleBookNowClick(hotel)}
                >
                  <FaWhatsapp /> Book Now
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
          selectedHotelId={selectedHotel.id}  // Pass the ID
          selectedHotel={selectedHotel}       // Pass the entire hotel object
        />
      )}
    </section>
  );
};

export default HotelListings;