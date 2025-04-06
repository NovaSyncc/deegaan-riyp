import React, { useState, useEffect } from 'react';
import './BookingForm.css';

const BookingForm = ({ isOpen, onClose, selectedHotel, selectedHotelId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    rooms: 1,
    specialRequests: ''
  });
  
  const [selectedHotelState, setSelectedHotel] = useState(null);
  
  // Update useEffect to use the passed hotel directly
  useEffect(() => {
    if (selectedHotel) {
      setSelectedHotel(selectedHotel);
    }
  }, [selectedHotel]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedHotelState) {
      alert("Please select a hotel first before booking.");
      return;
    }

    // Get WhatsApp number from the selected hotel
    let whatsappNumber = selectedHotelState.whatsappNumber || selectedHotelState.adminNumber;
    if (!whatsappNumber) {
      alert("Sorry, WhatsApp contact is not available for this hotel.");
      return;
    }

    // Clean phone number format
    whatsappNumber = whatsappNumber.replace(/[\s\-()]/g, '');
    
    // Ensure number starts with country code
    if (whatsappNumber.startsWith('0')) {
      whatsappNumber = '254' + whatsappNumber.substring(1);
    } else if (!whatsappNumber.startsWith('254')) {
      whatsappNumber = '254' + whatsappNumber;
    }

    // Format dates
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
    };

    // Create the message
    const message = `
Hello ${selectedHotelState.name},

I would like to make a booking:

*Booking Details:*
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Check-in: ${formatDate(formData.checkIn)}
- Check-out: ${formatDate(formData.checkOut)}
- Guests: ${formData.guests}
- Rooms: ${formData.rooms}
${formData.specialRequests ? `- Special requests: ${formData.specialRequests}` : ''}

Thank you!`.trim();

    // Create WhatsApp URL
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: 1,
      rooms: 1,
      specialRequests: ''
    });
    onClose();
  };
  
  // Render the hotel info or placeholder based on selection state
  const renderHotelInfo = () => {
    if (selectedHotelState) {
      return (
        <div className="selected-hotel-info">
          <h3>{selectedHotelState.name}</h3>
          <p className="hotel-location">{selectedHotelState.location}</p>
          <p className="price-range">{selectedHotelState.priceRange}</p>
          <div className="hotel-rating">
            {Array(selectedHotelState.stars).fill().map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>
          {selectedHotelState.amenities && (
            <div className="hotel-amenities">
              <small>Amenities: {selectedHotelState.amenities.slice(0, 3).join(', ')}{selectedHotelState.amenities.length > 3 ? ' +more' : ''}</small>
            </div>
          )}
        </div>
      );
    }
    
    return <div className="no-hotel-selected">Please select a hotel first</div>;
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="booking-form-overlay">
      <div className="booking-form-container">
        <button className="close-button" onClick={onClose}>×</button>
        
        <h2 className="form-title">Book Your Stay</h2>
        
        {renderHotelInfo()}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">FULL NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">PHONE NUMBER</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g., 0712345678"
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="checkIn">CHECK-IN DATE</label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="checkOut">CHECK-OUT DATE</label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                min={formData.checkIn || new Date().toISOString().split('T')[0]}
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="guests">NUMBER OF GUESTS</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="rooms">NUMBER OF ROOMS</label>
              <input
                type="number"
                id="rooms"
                name="rooms"
                min="1"
                value={formData.rooms}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="specialRequests">SPECIAL REQUESTS (OPTIONAL)</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows="3"
              placeholder="Any specific requirements for your stay?"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={!selectedHotelState}
          >
            Book via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;