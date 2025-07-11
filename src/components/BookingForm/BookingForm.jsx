import React, { useState, useEffect } from 'react';
import './BookingForm.css';

const BookingForm = ({ isOpen, onClose, selectedHotel, selectedHotelId }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkInMonth: '',
    checkInDate: '',
    stayDuration: 1,
    guests: 1,
    rooms: 1,
    specialRequests: ''
  });
  
  const [selectedHotelState, setSelectedHotel] = useState(null);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'so' for Somali
  const currentYear = new Date().getFullYear();
  
  // Translation object
  const translations = {
    en: {
      title: "Book Your Stay",
      selectHotel: "Please select a hotel first",
      fullName: "Full Name",
      phone: "Phone Number",
      checkInDate: `Check-in Date (${currentYear})`,
      month: "Month",
      date: "Date",
      days: "Days",
      dayRange: "(1-30 days)",
      guests: "Guests",
      rooms: "Rooms",
      specialRequests: "Special Requests (Optional)",
      specialRequestsPlaceholder: "Any specific requirements?",
      bookButton: "Book via WhatsApp",
      phonePlaceholder: "0712345678",
      whatsappMessage: {
        greeting: "Hello",
        bookingDetails: "*Booking Details:*",
        name: "Name",
        phone: "Phone",
        checkIn: "Check-in",
        checkOut: "Check-out",
        duration: "Duration",
        day: "day",
        days: "days",
        guests: "Guests",
        rooms: "Rooms",
        specialRequests: "Special requests",
        thankYou: "Thank you!",
        platformAttribution: "I am making this booking through DeegaanRiyo platform."
      },
      alerts: {
        selectHotelFirst: "Please select a hotel first before booking.",
        noWhatsApp: "Sorry, WhatsApp contact is not available for this hotel."
      }
    },
    so: {
      title: "Dalbo Joogitaankaaga",
      selectHotel: "Fadlan dooro hotel marka hore",
      fullName: "Magaca Oo Buuxa",
      phone: "Lambarka Telefoonka",
      checkInDate: `Taariikhda Soo Galka (${currentYear})`,
      month: "Bil",
      date: "Taarikh",
      days: "Maalmood",
      dayRange: "(1-30 maalmood)",
      guests: "Marti",
      rooms: "Qolal",
      specialRequests: "Codsiyada Gaarka Ah (Ikhtiyaari)",
      specialRequestsPlaceholder: "Ma jiraan baahiyo gaar ah?",
      bookButton: "Dalbo WhatsApp-ka",
      phonePlaceholder: "0712345678",
      whatsappMessage: {
        greeting: "Salaan",
        bookingDetails: "*Faahfaahinta Dalbashada:*",
        name: "Magac",
        phone: "Telefoon",
        checkIn: "Soo gal",
        checkOut: "Ka bax",
        duration: "Muddada",
        day: "maalin",
        days: "maalmood",
        guests: "Marti",
        rooms: "Qolal",
        specialRequests: "Codsiyada gaarka ah",
        thankYou: "Mahadsanid!",
        platformAttribution: "Waxaan idinka soo dalbaday DeegaanRiyo website-ka."
      },
      alerts: {
        selectHotelFirst: "Fadlan dooro hotel marka hore intaadan dalbayn.",
        noWhatsApp: "Waan ka xumahay, xiriirka WhatsApp-ka looma heli karo hotelkan."
      }
    }
  };
  
  const t = translations[language];
  
  // Device detection function
  const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  // Enhanced WhatsApp URL generation function
  const generateWhatsAppURL = (phoneNumber, message) => {
    // Clean phone number format
    let cleanNumber = phoneNumber.replace(/[\s\-()]/g, '');
    
    // Ensure number starts with country code
    if (cleanNumber.startsWith('0')) {
      cleanNumber = '254' + cleanNumber.substring(1);
    } else if (!cleanNumber.startsWith('254')) {
      cleanNumber = '254' + cleanNumber;
    }

    // Encode the message properly
    const encodedMessage = encodeURIComponent(message);
    
    // Use different URLs based on device type
    if (isMobileDevice()) {
      // Mobile - use api.whatsapp.com
      return `https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodedMessage}`;
    } else {
      // Desktop - use wa.me which works better with WhatsApp Web
      return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    }
  };

  // Alternative method for better desktop compatibility
  const openWhatsAppWithFallback = (phoneNumber, message) => {
    const whatsappURL = generateWhatsAppURL(phoneNumber, message);
    
    // Try to open WhatsApp
    const newWindow = window.open(whatsappURL, '_blank');
    
    // Fallback for desktop if WhatsApp doesn't open properly
    if (!isMobileDevice()) {
      setTimeout(() => {
        // Check if the window is still open after 2 seconds
        if (newWindow && !newWindow.closed) {
          // If window is still open, it might mean WhatsApp Web didn't load properly
          // Try the alternative URL
          const alternativeURL = `https://web.whatsapp.com/send?phone=${phoneNumber.replace(/[\s\-()]/g, '').replace(/^0/, '254')}&text=${encodeURIComponent(message)}`;
          newWindow.location.href = alternativeURL;
        }
      }, 2000);
    }
  };
  
  // Month options - showing only next 6 months for compactness
  const getAvailableMonths = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const availableMonths = [];
    for (let i = 0; i < 6; i++) {
      const monthIndex = (currentMonth + i) % 12;
      const value = (monthIndex + 1).toString().padStart(2, '0');
      availableMonths.push({
        value: value,
        label: months[monthIndex]
      });
    }
    return availableMonths;
  };
  
  // Update useEffect to use the passed hotel directly
  useEffect(() => {
    if (selectedHotel) {
      setSelectedHotel(selectedHotel);
    }
  }, [selectedHotel]);
  
  // Get number of days in selected month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };
  
  // Generate date options based on selected month
  const getDateOptions = () => {
    if (!formData.checkInMonth) return [];
    
    const daysInMonth = getDaysInMonth(parseInt(formData.checkInMonth), currentYear);
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentDate = today.getDate();
    
    const options = [];
    
    // If selected month is current month, start from today
    const startDate = (parseInt(formData.checkInMonth) === currentMonth) ? currentDate : 1;
    
    for (let i = startDate; i <= daysInMonth; i++) {
      options.push({
        value: i.toString().padStart(2, '0'),
        label: i.toString()
      });
    }
    
    return options;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Reset date if month changes
    if (name === 'checkInMonth') {
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
        checkInDate: '' // Reset date when month changes
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };
  
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedHotelState) {
      alert(t.alerts.selectHotelFirst);
      return;
    }

    // Get WhatsApp number from the selected hotel
    let whatsappNumber = selectedHotelState.whatsappNumber || selectedHotelState.adminNumber;
    if (!whatsappNumber) {
      alert(t.alerts.noWhatsApp);
      return;
    }

    // Calculate check-in and check-out dates
    const checkInDate = new Date(currentYear, parseInt(formData.checkInMonth) - 1, parseInt(formData.checkInDate));
    const checkOutDate = new Date(checkInDate);
    checkOutDate.setDate(checkOutDate.getDate() + parseInt(formData.stayDuration));

    // Format dates
    const formatDate = (date) => {
      return date.toLocaleDateString('en-US', { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
    };

    // Build the message WITHOUT leading/trailing newlines
    const message = [
      `${t.whatsappMessage.greeting} ${selectedHotelState.name},`,
      '',
      language === 'so' ? 'Waxaan jeclaan lahaa inaan dalbo:' : 'I would like to make a booking:',
      '',
      t.whatsappMessage.bookingDetails,
      `- ${t.whatsappMessage.name}: ${formData.name}`,
      `- ${t.whatsappMessage.phone}: ${formData.phone}`,
      `- ${t.whatsappMessage.checkIn}: ${formatDate(checkInDate)}`,
      `- ${t.whatsappMessage.checkOut}: ${formatDate(checkOutDate)}`,
      `- ${t.whatsappMessage.duration}: ${formData.stayDuration} ${formData.stayDuration > 1 ? t.whatsappMessage.days : t.whatsappMessage.day}`,
      `- ${t.whatsappMessage.guests}: ${formData.guests}`,
      `- ${t.whatsappMessage.rooms}: ${formData.rooms}`,
      formData.specialRequests ? `- ${t.whatsappMessage.specialRequests}: ${formData.specialRequests}` : '',
      '',
      t.whatsappMessage.thankYou,
      '',
      '---',
      t.whatsappMessage.platformAttribution
    ].filter(Boolean).join('\n');

    // Use the enhanced WhatsApp opening function
    openWhatsAppWithFallback(whatsappNumber, message);

    // Reset form and close modal
    setFormData({
      name: '',
      phone: '',
      checkInMonth: '',
      checkInDate: '',
      stayDuration: 1,
      guests: 1,
      rooms: 1,
      specialRequests: ''
    });
    onClose();
  };
  
  // Compact hotel info renderer
  const renderHotelInfo = () => {
    if (selectedHotelState) {
      return (
        <div className="selected-hotel-info">
          <h3>{selectedHotelState.name}</h3>
          <div className="hotel-location">{selectedHotelState.location}</div>
          <div className="price-range">{selectedHotelState.priceRange}</div>
          <div className="hotel-rating">
            {Array(selectedHotelState.stars).fill().map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>
          {selectedHotelState.amenities && selectedHotelState.amenities.length > 0 && (
            <div className="hotel-amenities">
              {selectedHotelState.amenities.slice(0, 2).join(', ')}{selectedHotelState.amenities.length > 2 ? ' +more' : ''}
            </div>
          )}
        </div>
      );
    }
    
    return <div className="no-hotel-selected">{t.selectHotel}</div>;
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="booking-form-overlay">
      <div className="booking-form-container">
        <button className="close-button" onClick={onClose}>×</button>
        
        {/* Language Toggle */}
        <div className="language-toggle-container">
          <div className="language-toggle">
            <button
              className={`language-button ${language === 'en' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('en')}
              type="button"
            >
              English
            </button>
            <button
              className={`language-button ${language === 'so' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('so')}
              type="button"
            >
              Somali
            </button>
          </div>
        </div>
        
        <h2 className="form-title">{t.title}</h2>
        
        {renderHotelInfo()}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{t.fullName}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">{t.phone}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t.phonePlaceholder}
              required
            />
          </div>
          
          <div className="check-in-section">
            <h4 className="section-title">{t.checkInDate}</h4>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="checkInMonth">{t.month}</label>
                <select
                  id="checkInMonth"
                  name="checkInMonth"
                  value={formData.checkInMonth}
                  onChange={handleChange}
                  required
                >
                  <option value="">{t.month}</option>
                  {getAvailableMonths().map(month => (
                    <option key={month.value} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="checkInDate">{t.date}</label>
                <select
                  id="checkInDate"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleChange}
                  disabled={!formData.checkInMonth}
                  required
                >
                  <option value="">{t.date}</option>
                  {getDateOptions().map(date => (
                    <option key={date.value} value={date.value}>
                      {date.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="stayDuration">
                {t.days}
                <span className="duration-range">{t.dayRange}</span>
              </label>
              <input
                type="number"
                id="stayDuration"
                name="stayDuration"
                min="1"
                max="30"
                value={formData.stayDuration}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="guests">{t.guests}</label>
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
              <label htmlFor="rooms">{t.rooms}</label>
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
            <label htmlFor="specialRequests">{t.specialRequests}</label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows="2"
              placeholder={t.specialRequestsPlaceholder}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={!selectedHotelState}
          >
            {t.bookButton}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;