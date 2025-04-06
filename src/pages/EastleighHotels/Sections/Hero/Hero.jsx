import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import BookingForm from '../../../../components/BookingForm/BookingForm';
import './Hero.css';

const hotels = [
  {
    id: 1,
    name: "Neon Heights",
    description: "Stunning city view, free Wi-Fi & breakfast included",
    priceFrom: 75,
    stars: 4,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80"
    ],
    whatsappNumber: "254790958286"
  },
  {
    id: 2,
    name: "Cyber Suite",
    description: "Urban retreat with smart amenities & rooftop pool",
    priceFrom: 120,
    stars: 5,
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578541031144-dec595cfece5?auto=format&fit=crop&q=80"
    ],
    whatsappNumber: "254790958287"
  },
  {
    id: 3,
    name: "Pixel Lodge",
    description: "Cozy rooms with tech upgrades & complimentary bar",
    priceFrom: 95,
    stars: 4,
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80"
    ],
    whatsappNumber: "254790958288"
  },
  {
    id: 4,
    name: "Digital Oasis",
    description: "Modern comfort with panoramic views & spa access",
    priceFrom: 110,
    stars: 5,
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80"
    ],
    whatsappNumber: "254790958289"
  },
  {
    id: 5,
    name: "Quantum Inn",
    description: "Minimalist design with maximum comfort & gym",
    priceFrom: 85,
    stars: 4,
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80"
    ],
    whatsappNumber: "254790958290"
  },
  {
    id: 6,
    name: "Matrix Hotel",
    description: "VR gaming lounge, tech-forward rooms & cafe",
    priceFrom: 130,
    stars: 5,
    images: [
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80"
    ],
    whatsappNumber: "254790958291"
  },
  {
    id: 7,
    name: "Byte Resort",
    description: "Riverside views, eco-friendly & breakfast buffet",
    priceFrom: 70,
    stars: 3,
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1580041065738-e72023775cdc?auto=format&fit=crop&q=80"
    ],
    whatsappNumber: "254790958292"
  },
  {
    id: 8,
    name: "Synth Suites",
    description: "Live music venue, artsy rooms & craft cocktails",
    priceFrom: 90,
    stars: 4,
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1615460549969-36fa19521a4f?auto=format&fit=crop&q=80"
    ],
    whatsappNumber: "254790958293"
  },
  {
    id: 9,
    name: "Neon Nest",
    description: "Compact but luxurious rooms with smart controls",
    priceFrom: 65,
    stars: 3,
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&q=80"
    ],
    whatsappNumber: "254790958294"
  },
  {
    id: 10,
    name: "Cyber Central",
    description: "Business center, conference rooms & urban views",
    priceFrom: 100,
    stars: 4,
    images: [
      "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1562790879-dfde0c489689?auto=format&fit=crop&q=80"
    ],
    whatsappNumber: "254790958295"
  },
  {
    id: 11,
    name: "Glow Gardens",
    description: "Serene courtyard, luxury amenities & spa treatments",
    priceFrom: 115,
    stars: 5,
    images: [
      "https://images.unsplash.com/photo-1573052905904-34ad8c27f0cc?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571003123935-2f6e22a5d2fd?auto=format&fit=crop&q=80"
    ],
    whatsappNumber: "254790958296"
  },
  {
    id: 12,
    name: "Pixel Palace",
    description: "Historic building with modern tech & fine dining",
    priceFrom: 150,
    stars: 5,
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
    ],
    whatsappNumber: "254790958297"
  }
];

const Hero = () => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleBookNowClick = (hotel) => {
    setSelectedHotel(hotel);
    setIsBookingFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsBookingFormOpen(false);
    setSelectedHotel(null);
  };

  // Render stars based on rating
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < count ? "star active" : "star"}>★</span>
      );
    }
    return stars;
  };

  return (
    <div className="hotel-booking">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="neon-text">Direct Hotel Bookings in Eastleigh via WhatsApp</h1>
          <p>Connect directly with hotel receptions - No booking fees, no middlemen!</p>
          <a href="#hotels" className="cta-button">View Hotels</a>
        </div>
      </section>

      {/* Hotels Grid Section */}
      <section id="hotels" className="hotels-section">
        <h2 className="section-title neon-text">Featured Hotels</h2>
        <div className="hotels-grid">
          {hotels.map((hotel) => (
            <div className="hotel-card" key={hotel.id}>
              <div className="image-container">
                <div className="image-grid">
                  <div className="image-item">
                    <img src={hotel.images[0]} alt={`${hotel.name} view 1`} />
                  </div>
                  <div className="image-item">
                    <img src={hotel.images[1]} alt={`${hotel.name} view 2`} />
                  </div>
                </div>
              </div>
              <div className="hotel-info">
                <h3>{hotel.name}</h3>
                <p className="description">{hotel.description}</p>
                <div className="stars">{renderStars(hotel.stars)}</div>
                <p className="price">From ${hotel.priceFrom} per night</p>
                <button 
                  className="whatsapp-button"
                  onClick={() => handleBookNowClick(hotel)}
                  type="button"
                >
                  <FaWhatsapp /> Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form Modal */}
      {isBookingFormOpen && selectedHotel && (
        <div className="booking-form-overlay">
          <BookingForm
            isOpen={isBookingFormOpen}
            onClose={handleCloseForm}
            selectedHotel={selectedHotel}
            selectedHotelId={selectedHotel.id}
          />
        </div>
      )}
    </div>
  );
};

export default Hero;