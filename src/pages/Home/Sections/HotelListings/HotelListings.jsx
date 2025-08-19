import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaGlobe, FaMapMarkerAlt } from 'react-icons/fa';
import './HotelListings.css';
import BookingForm from '../../../../components/BookingForm/BookingForm';
import yareConf from '../../../../assets/images/yareconf.jpg';
import yareL from '../../../../assets/images/yarel.jpg';
import yarePool from '../../../../assets/images/yarepool.jpg';
import yareRoom from '../../../../assets/images/yareroom.jpg';
import yareRoom2 from '../../../../assets/images/yareroom2.jpg';
import yareSeats from '../../../../assets/images/yareseats.jpg';
import bushraImage from '../../../../assets/images/bushra.png';
// Import Bushra hotel images for slideshow
import bushraImage1 from '../../../../assets/images/bushra/1.jpg';
import bushraImage3 from '../../../../assets/images/bushra/3.jpg';
import bushraCafe from '../../../../assets/images/bushra/cafe.jpg';
import bushraDeluxe1 from '../../../../assets/images/bushra/Deluxe1.jpg';
import bushraDouble from '../../../../assets/images/bushra/Double.png';
import bushraReception from '../../../../assets/images/bushra/reception.jpg';
import bushraSingle1 from '../../../../assets/images/bushra/Single1.jpg';
import bushraTwin1 from '../../../../assets/images/bushra/Twin1.png';
import bushraView from '../../../../assets/images/bushra/view.jpg';
// Import Urban hotel images for slideshow
import urbanImage1 from '../../../../assets/images/urban/11.jpg';
import urbanImage2 from '../../../../assets/images/urban/12.jpg';
import urbanImage3 from '../../../../assets/images/urban/33.png';
import urbanBed1 from '../../../../assets/images/urban/bed1.jpg';
import urbanBed2 from '../../../../assets/images/urban/bed2.jpg';
import urbanBed3 from '../../../../assets/images/urban/bed3.jpg';
import urbanDouble from '../../../../assets/images/urban/double.jpg';
import urbanFood from '../../../../assets/images/urban/food.png';
import urbanSofa from '../../../../assets/images/urban/sofa.jpg';
import urbanView1 from '../../../../assets/images/urban/veiw1.jpg';
import urbanView from '../../../../assets/images/urban/view.jpg';
import { useNavigate } from 'react-router-dom';
// Import Baraka hotel images
import facility16 from '../../../../assets/images/baraka/facility-16.jpg';
import facility17 from '../../../../assets/images/baraka/facility-17.jpg';
import room2 from '../../../../assets/images/baraka/room2.jpg';
import room3 from '../../../../assets/images/baraka/room3.jpg';
import room4_1 from '../../../../assets/images/baraka/room4 (1).jpg';
import room4 from '../../../../assets/images/baraka/room4.jpg';
import room20 from '../../../../assets/images/baraka/room-20.jpg';
import room21 from '../../../../assets/images/baraka/room-21.jpg';
import room26 from '../../../../assets/images/baraka/room-26.jpg';
import room27 from '../../../../assets/images/baraka/room-27.jpg';
// Import HYYAT GOLDEN HOTEL images
import hyyatBed1 from '../../../../assets/images/hyyat/bed1.jpg';
import hyyatDeluxeKing from '../../../../assets/images/hyyat/deluxeking.jpg';
import hyyatGoldenHotelEntrance from '../../../../assets/images/hyyat/hyyatgoldenhotelentrance.jpg';
import hyyatGoldenReception from '../../../../assets/images/hyyat/hyyatgoldenreception.jpg';
import hyyatPreview from '../../../../assets/images/hyyat/hyyatpreview.jpg';
import hyyatMasjid from '../../../../assets/images/hyyat/masjid.jpg';
import hyyatNic from '../../../../assets/images/hyyat/nic.jpg';
import hyyatResta from '../../../../assets/images/hyyat/resta.jpg';
import hyyatResta1 from '../../../../assets/images/hyyat/resta1.jpg';
import hyyatSuperiorSingle from '../../../../assets/images/hyyat/superiorsingle.jpg';
import hyyatTwin from '../../../../assets/images/hyyat/twin.jpg';

const HotelListings = () => {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [language, setLanguage] = useState('en');
  const [expandedHotels, setExpandedHotels] = useState({});
  const [currentSlides, setCurrentSlides] = useState({});
  const [showComingSoonPopup, setShowComingSoonPopup] = useState(false);
  const [selectedCountryName, setSelectedCountryName] = useState('');
  const navigate = useNavigate();

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
      comingSoon: "Coming to Platform",
      comingSoonMessage: "We are excited to announce that this hotel will be joining our booking platform soon! Stay tuned for updates when booking becomes available.",
      closePopup: "Got it!",
      placeholderHotelName: "Deegaan-Riyo Hotel",
      placeholderDescription: "We're bringing premium hospitality to this amazing destination. Our new hotel will feature world-class amenities and exceptional service. Opening soon!",
      learnMore: "Learn More",
      furnished: "Furnished Apartment",
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
      comingSoon: "Waa ku biiri Platform-ka",
      comingSoonMessage: "Waxaan ku faraxsanahay inaan ku dhawaaqno in huteelkani uu dhowaan ku biiri doono boggeena bukashada! Sug warbixinnada marka bukashada la heli karo.",
      closePopup: "Waan Fahmay!",
      placeholderHotelName: "Huteelka Deegaan-Riyo",
      placeholderDescription: "Waxaan keenayaa martiqaad heer sare ah meeshan cajiibka ah. Huteelkayagu cusub wuxuu lahaan doonaa adeegyo heer caalami ah iyo adeeg aad u fiican. Dhowaan waa furaysaa!",
      learnMore: "Wax Badan Ogow",
      furnished: "Guriga la Qalabeeyey",
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

  // Create placeholder image
  const createPlaceholderImage = () => {
    return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23080F1A'/%3E%3Cg opacity='0.1'%3E%3Cpath d='M100 100h200v100H100z' fill='%2300FFFF'/%3E%3Cpath d='M150 120h100v20H150z' fill='%2300FFFF'/%3E%3Cpath d='M150 150h60v10H150z' fill='%2300FFFF'/%3E%3C/g%3E%3Ctext x='200' y='160' text-anchor='middle' fill='%2300FFFF' font-family='Arial' font-size='20' font-weight='bold'%3EComming Soon%3C/text%3E%3C/svg%3E";
  };

  const hotels = [
    // Real hotel #1 - Yare Towers (with Furnished Apartment patch)
    {
      id: 1,
      name: "Yare Towers Hotel",
      location: t.cities.nairobi,
      city: "nairobi",
      country: "kenya",
      priceRange: "Ksh 7,000 - Ksh 9,000",
      description: language === 'en'
        ? "Luxury furnished apartments featuring spacious rooms with daily, weekly, and monthly rates. Choose from 1 bedroom to 2-bedroom executive suites. Enjoy premium amenities including a swimming pool and rooftop area."
        : "Guryaha la qalabeeyey ee raaxada leh oo leh qolal ballaaran oo leh qiimayaal maalinle, todobaadle, iyo bile ah. Dooro qolal 1 ilaa 2 qol. Ku raaxayso adeegyada heer sare ah oo ay ku jiraan berkadda dabaasha iyo aagga saqafka.",
      amenities: language === 'en'
        ? ["Furnished Apartments", "24/7 Reception", "Swimming Pool", "Rooftop Area", "Restaurants", "Free Wi-Fi", "Conference Room"]
        : ["Guryaha la Qalabeeyey", "Soo dhaweyn 24/7", "Berkadda Dabaasha", "Aagga Saqafka", "Makhaayadaha", "Wi-Fi Bilaash", "Qolka Shirarka"],
      roomTypes: [
        {
          type: "1 Bedroom",
          daily: "Ksh 7,000",
          weekly: "Ksh 35,000",
          monthly: "Ksh 130,000"
        },
        {
          type: "2-Bedroom Standard",
          daily: "Ksh 8,000",
          weekly: "Ksh 40,000",
          monthly: "Ksh 140,000"
        },
        {
          type: "2-Bedroom Executive",
          daily: "Ksh 9,000",
          weekly: "Ksh 43,000",
          monthly: "Ksh 150,000"
        }
      ],
      whatsappNumber: "254703422456",
      images: [
        yareRoom,
        yarePool,
        yareL,
        yareRoom2,
        yareConf,
        yareSeats
      ],
      isComingSoon: false,
      isFurnishedApartment: true
    },
    // Real hotel #2 - Urban Point Hotel
    {
      id: 2,
      name: "Urban Point Hotel",
      location: t.cities.nairobi,
      city: "nairobi",
      country: "kenya",
      priceRange: "Ksh 5,000 - Ksh 8,500",
      description: language === 'en'
        ? "Nestled in the vibrant heart of Eastleigh, Urban Point Hotel is where quality Kenyan hospitality meets unparalleled luxury and comfort. 99 spacious contemporary rooms and suites designed to exceed the highest standards of comfort."
        : "Ku dhex yaal wadnaha firfircoon ee Eastleigh, Huteel Urban Point waa meesha ay martiqaadka Kiinya ee tayada leh uu la kulmo raaxada aan la barbar dhigi karin. 99 qolal ballaaran oo casri ah.",
      amenities: language === 'en'
        ? ["99 Contemporary Rooms", "Global Cuisine", "Prime Eastleigh Location", "Business Facilities", "24/7 Concierge", "Free Wi-Fi"]
        : ["99 Qolal Casri ah", "Cunto Heer Caalami ah", "Goobta Muhiimka ah", "Xarumaha Ganacsiga", "Adeegga 24/7", "Wi-Fi Bilaash"],
      roomTypes: [
        {
          type: "Standard Suite",
          daily: "Ksh 5,000",
          weekly: "Contact for rates",
          monthly: "Contact for rates"
        },
        {
          type: "Standard Double Suite",
          daily: "Ksh 6,000",
          weekly: "Contact for rates",
          monthly: "Contact for rates"
        },
        {
          type: "Deluxe Twin Bed",
          daily: "Ksh 7,000",
          weekly: "Contact for rates",
          monthly: "Contact for rates"
        },
        {
          type: "VIP Suite",
          daily: "Ksh 7,500",
          weekly: "Contact for rates",
          monthly: "Contact for rates"
        },
        {
          type: "Deluxe Triple Bed",
          daily: "Ksh 8,500",
          weekly: "Contact for rates",
          monthly: "Contact for rates"
        }
      ],
      whatsappNumber: "254742555222",
      images: [
        urbanBed1,
        urbanBed2,
        urbanView1,
        urbanImage1,
        urbanDouble,
        urbanBed3,
        urbanSofa,
        urbanFood,
        urbanView
      ],
      isComingSoon: false
    },
    // Real hotel #3 - Baraka Tower Hotel
    {
      id: 3,
      name: "Baraka Tower Hotel",
      location: t.cities.nairobi,
      city: "nairobi",
      country: "kenya",
      priceRange: "Ksh 4,000 - Ksh 9,000",
      description: language === 'en'
        ? "Welcome to Baraka Tower Hotel, Eastleigh's premier luxury destination. We offer discerning business travelers a serene environment for work and relaxation. Indulge in exquisite culinary delights at our all-day dining restaurant."
        : "Ku soo dhowow Baraka Tower Hotel, oo ah goobta ugu qaalisan ee raaxada ee Eastleigh. Waxaan u soo bandhignaa socdaalayaasha ganacsiga jawi degan oo ay ku shaqeeyaan oo ay ku nastaan.",
      amenities: language === 'en'
        ? ["Premier Luxury Location", "All-Day Dining Restaurant", "Business & Meeting Facilities", "Free Wi-Fi Throughout", "24/7 Reception Service", "Safe & Secure Environment"]
        : ["Goob Raaxo ah oo Heer Sare ah", "Makhaayadda Maalinta oo dhan", "Goobaha Shaqada & Kulamada", "Wi-Fi Bilaash ah Meel kasta", "Adeegga Soo dhaweynta 24/7", "Deegaan Ammaan ah"],
      roomTypes: [
        {
          type: "Standard Room",
          singleRate: "Ksh 4,000",
          doubleRate: "Ksh 5,000"
        },
        {
          type: "Deluxe Room",
          singleRate: "Ksh 6,500",
          doubleRate: "Ksh 7,500"
        },
        {
          type: "Executive Room",
          singleRate: "Ksh 7,000",
          doubleRate: "Ksh 8,000"
        },
        {
          type: "The Suite",
          singleRate: "Ksh 8,000",
          doubleRate: "Ksh 9,000"
        }
      ],
      whatsappNumber: "254712511311",
      website: "https://barakatowerhotel.com/",
      googleMaps: "https://maps.app.goo.gl/Tf1TGHZDfgTbyTcKA",
      images: [
        room2,
        room3,
        room4,
        room4_1,
        room20,
        room21,
        room26,
        room27,
        facility16,
        facility17
      ],
      isComingSoon: false
    },
    // Real hotel #4 - Bushra Hotel
    {
      id: 4,
      name: "Bushra Hotel",
      location: t.cities.nairobi,
      city: "nairobi",
      country: "kenya",
      priceRange: "Ksh 2,500 - Ksh 4,000",
      description: language === 'en'
        ? "Experience exceptional quality and value at Bushra Hotel, perfectly located in the prime area of Eastleigh. What sets us apart is our unmatched quality-to-price ratio, prime location, and on-site Masjid for our Muslim guests."
        : "Ku raaxayso tayada iyo qiimaha gaar ah ee Huteel Bushra, oo si fiican ugu dhex yaal aagga muhiimka ah ee Eastleigh. Waxa naga kala saara saamiga tayada iyo qiimaha, goobta muhiimka ah, iyo masjidka gudaha huteelka.",
      amenities: language === 'en'
        ? ["Prime Location in Eastleigh", "Exceptional Quality for Price", "On-site Masjid", "Restaurant & Cafe", "24/7 Reception", "Free Wi-Fi"]
        : ["Meel Heer-sare ah Eastleigh", "Tayada Fiican ee Qiimaha", "Masjid Gudaha Huteelka", "Makhaayadda & Cafe", "Soo dhaweyn 24/7", "Wi-Fi Bilaash"],
      roomTypes: [
        {
          type: "Standard Double Room",
          daily: "Ksh 2,500",
          weekly: "Contact for rates",
          monthly: "Contact for rates"
        },
        {
          type: "Standard Room",
          daily: "Ksh 3,000",
          weekly: "Contact for rates",
          monthly: "Contact for rates"
        },
        {
          type: "Deluxe Twin Bed",
          daily: "Ksh 3,000",
          weekly: "Contact for rates",
          monthly: "Contact for rates"
        },
        {
          type: "VIP Room",
          daily: "Ksh 4,000",
          weekly: "Contact for rates",
          monthly: "Contact for rates"
        }
      ],
      whatsappNumber: "254720972757",
      images: [
        bushraSingle1,
        bushraDeluxe1,
        bushraView,
        bushraImage1,
        bushraReception,
        bushraTwin1,
        bushraDouble,
        bushraCafe,
        bushraImage3
      ],
      isComingSoon: false
    },
    // Real hotel #5 - HYYAT GOLDEN HOTEL (Updated with correct info)
    {
      id: 5,
      name: "HYYAT GOLDEN HOTEL",
      location: t.cities.nairobi,
      city: "nairobi",
      country: "kenya",
      priceRange: "KES 2,000 - KES 4,500",
      description: language === 'en'
        ? "Experience exceptional hospitality at HYYAT Golden Hotel in the heart of Eastleigh, Nairobi. Our 9-floor establishment offers premium rooms with modern amenities, halal dining, masjid facilities, and secure underground parking for business and leisure travelers."
        : "La kulaan martiqaad cajiib ah HYYAT Golden Hotel ee wadnaha Eastleigh, Nairobi. Dhismahayaga 9 dabaqad ah wuxuu bixiyaa qolal heer sare ah oo leh adeegyo casri ah, cunto xalaal, adeegyada masjidka, iyo gaadhi ammaan ah hoosta dhulka.",
      amenities: language === 'en'
        ? ["9-Floor Hotel Building", "Restaurant & Halal Dining", "On-site Masjid", "Underground Parking", "24/7 Reception", "Free High-Speed WiFi", "Conference & Meeting Rooms", "Room Service", "Laundry & Dry Cleaning", "Air Conditioning All Rooms", "Daily Housekeeping", "Safe Deposit Boxes"]
        : ["Dhisme Huteel 9 Dabaqad", "Maqaayad & Cunto Xalaal", "Masjidka Gudaha", "Gaadhi Hoosta Dhulka", "Soo dhaweyn 24/7", "WiFi Dhaqso Sare oo Bilaash", "Qolalka Shirarka & Kulanada", "Adeegga Qolka", "Adeegga Maydaha & Nadiifinta", "Qaboojinta Hawada Dhammaan Qolalka", "Nadiifinta Maalinlaha", "Sanduuqyada Kaydka Ammaan"],
      roomTypes: [
        {
          type: "Classic King Suite",
          daily: "KES 2,000",
          size: "25 sqm",
          guests: "2 guests"
        },
        {
          type: "Superior King Suite",
          daily: "KES 2,500",
          size: "30 sqm",
          guests: "2 guests"
        },
        {
          type: "Deluxe King Suite",
          daily: "KES 2,800",
          size: "35 sqm",
          guests: "2 guests"
        },
        {
          type: "Twin Comfort Room",
          daily: "KES 2,500",
          size: "28 sqm",
          guests: "2 guests"
        },
        {
          type: "Family Executive Suite",
          daily: "KES 4,500",
          size: "45 sqm",
          guests: "4 guests"
        }
      ],
      whatsappNumber: "254701387612",
      email: "info@hyyatgoldenhotel.online",
      website: "https://hyyatgoldenhotel.online",
      images: [
        hyyatGoldenHotelEntrance,
        hyyatGoldenReception,
        hyyatDeluxeKing,
        hyyatBed1,
        hyyatSuperiorSingle,
        hyyatTwin,
        hyyatMasjid,
        hyyatResta,
        hyyatResta1,
        hyyatNic,
        hyyatPreview
      ],
      isComingSoon: false,
      location_details: "Centre of Eastleigh Nairobi, 11th Street Second Avenue"
    },
    // Coming Soon hotel - Crown Point Hotel
    {
      id: 6,
      name: "Crown Point Hotel",
      location: t.cities.nairobi,
      city: "nairobi", 
      country: "kenya",
      priceRange: t.comingSoon,
      description: language === 'en'
        ? "Crown Point Hotel is coming soon to the Deegaan-Riyo platform! This premium hotel will feature world-class amenities and exceptional service in the heart of Eastleigh. Stay tuned for booking availability and special opening rates."
        : "Crown Point Hotel ayaa dhowaan ku iman doona platform-ka Deegaan-Riyo! Huteelkani heer sare ah wuxuu lahaan doonaa adeegyo heer caalami ah iyo adeeg gaar ah ee wadnaha Eastleigh. Sug heli karista bukashada iyo qiimayaalka furitaanka gaarka ah.",
      amenities: language === 'en'
        ? ["Premium Location", "Modern Facilities", "World-Class Service", "Business Center", "Restaurant & Dining", "Coming Soon"]
        : ["Meel Heer-sare ah", "Xarumo Casri ah", "Adeeg Heer Caalami ah", "Xarunta Ganacsiga", "Maqaayad & Cunto", "Waa Imanaya"],
      whatsappNumber: "254700000000", // Placeholder
      images: [
        createPlaceholderImage(),
        createPlaceholderImage()
      ],
      isComingSoon: true,
      isPlaceholder: false
    }
  ];

  const handleBookNowClick = (hotel) => {
    if (hotel.isComingSoon) {
      setSelectedCountryName(countryData[hotel.country]?.name || hotel.country);
      setShowComingSoonPopup(true);
      return;
    }
    setSelectedHotel(hotel);
    setIsBookingFormOpen(true);
  };

  const closeBookingForm = () => {
    setIsBookingFormOpen(false);
    setSelectedHotel(null);
  };

  const closeComingSoonPopup = () => {
    setShowComingSoonPopup(false);
    setSelectedCountryName('');
  };

  const toggleHotelExpansion = (hotelId, hotelName, isComingSoon) => {
    if (isComingSoon) {
      const hotel = filteredHotels.find(h => h.id === hotelId);
      if (hotel) {
        setSelectedCountryName(countryData[hotel.country]?.name || hotel.country);
      }
      setShowComingSoonPopup(true);
      return;
    }
    
    if (hotelName === "Yare Towers Hotel") {
      navigate('/yare');
    } else if (hotelName === "Urban Point Hotel") {
      navigate('/urban');
    } else if (hotelName === "Baraka Tower Hotel") {
      navigate('/baraka');
    } else if (hotelName === "Bushra Hotel") {
      navigate('/bushra');
    } else if (hotelName === "HYYAT GOLDEN HOTEL") {
      navigate('/hyyat');
    } else {
      setExpandedHotels(prev => ({
        ...prev,
        [hotelId]: !prev[hotelId]
      }));
    }
  };

  const changeSlide = (hotelId, index) => {
    setCurrentSlides(prev => ({
      ...prev,
      [hotelId]: index
    }));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlides(prev => {
        const newSlides = { ...prev };
        hotels.forEach(hotel => {
          if (hotel.images.length > 2) {
            const current = prev[hotel.id] || 0;
            newSlides[hotel.id] = (current + 1) % hotel.images.length;
          }
        });
        return newSlides;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Function to create placeholder hotel for countries without real hotels
  const createPlaceholderHotel = (country, city) => {
    const countryName = countryData[country]?.name || country;
    const cityName = city ? countryData[country]?.cities.find(c => c.id === city)?.name : 
                     countryData[country]?.cities[0]?.name || countryName;
    
    return {
      id: `placeholder-${country}-${city || 'main'}`,
      name: t.placeholderHotelName,
      location: cityName,
      city: city || countryData[country]?.cities[0]?.id,
      country: country,
      priceRange: t.comingSoon,
      description: t.placeholderDescription,
      amenities: language === 'en'
        ? ["Premium Location", "World-Class Service", "Modern Facilities", "Coming Soon"]
        : ["Meel Heer-sare ah", "Adeeg Heer Caalami ah", "Xarumo Casri ah", "Waa Imanaya"],
      whatsappNumber: "254700000000",
      images: [
        createPlaceholderImage(),
        createPlaceholderImage()
      ],
      isComingSoon: true,
      isPlaceholder: true
    };
  };

  // Get filtered hotels with placeholders for countries without real hotels
  const getFilteredHotels = () => {
    let filtered = hotels.filter(hotel => {
      if (!selectedCountry) return true;
      if (selectedCountry && !selectedCity) return hotel.country === selectedCountry;
      return hotel.country === selectedCountry && hotel.city === selectedCity;
    });

    // If a country is selected but has no hotels, show placeholder
    if (selectedCountry && filtered.length === 0) {
      const placeholderHotel = createPlaceholderHotel(selectedCountry, selectedCity);
      filtered = [placeholderHotel];
    }

    return filtered;
  };

  const filteredHotels = getFilteredHotels();

  // Helper function to get hotel images
  const getHotelImages = (hotel) => {
    if (hotel.name === "Yare Towers Hotel") {
      return [yareRoom, yarePool, yareL, yareRoom2, yareConf, yareSeats];
    } else if (hotel.name === "Urban Point Hotel") {
      return [urbanBed2, urbanImage2, urbanBed1, urbanView1, urbanImage1, urbanDouble, urbanBed3, urbanSofa, urbanFood, urbanView];
    } else if (hotel.name === "Baraka Tower Hotel") {
      return [room2, room3, room4, room4_1, room20, room21, room26, room27, facility16, facility17];
    } else if (hotel.name === "Bushra Hotel") {
      return [bushraSingle1, bushraDeluxe1, bushraView, bushraImage1, bushraReception, bushraTwin1, bushraDouble, bushraCafe, bushraImage3];
    } else if (hotel.name === "HYYAT GOLDEN HOTEL") {
      return [
        hyyatGoldenHotelEntrance,
        hyyatGoldenReception,
        hyyatDeluxeKing,
        hyyatBed1,
        hyyatSuperiorSingle,
        hyyatTwin,
        hyyatMasjid,
        hyyatResta,
        hyyatResta1,
        hyyatNic,
        hyyatPreview
      ];
    } else if (hotel.name === "Crown Point Hotel") {
      return [createPlaceholderImage(), createPlaceholderImage()];
    }
    return hotel.images.length > 0 ? hotel.images : [createPlaceholderImage()];
  };

  return (
    <section className="deegaan-hotel-listings-section" id="hotel-listings">
      <div className="deegaan-container">
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

        <div className="deegaan-filters">
          <div className="deegaan-filter-group">
            <FaGlobe className="deegaan-filter-icon" />
            <select
              value={selectedCountry}
              onChange={(e) => {
                setSelectedCountry(e.target.value);
                setSelectedCity('');
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
          {filteredHotels.map((hotel) => {
            const hotelImages = getHotelImages(hotel);
            
            return (
              <div className={`deegaan-hotel-card ${hotel.isComingSoon ? 'coming-soon' : ''}`} key={hotel.id}>
                <div className="deegaan-hotel-images">
                  {window.innerWidth <= 768 ? (
                    <div className="deegaan-hotel-images-slideshow">
                      {hotelImages.map((image, i) => (
                        <div
                          className={`deegaan-hotel-image-slide ${i === (currentSlides[hotel.id] || 0) ? 'active' : ''}`}
                          key={i}
                        >
                          <img src={image} alt={`${hotel.name} - view ${i+1}`} />
                        </div>
                      ))}
                      {hotel.isComingSoon && (
                        <div className="deegaan-coming-soon-overlay">
                          <div className="deegaan-coming-soon-badge">
                            {t.comingSoon}
                          </div>
                        </div>
                      )}
                      {hotel.isFurnishedApartment && (
                        <div className="deegaan-furnished-apartment-patch">
                          <div className="deegaan-furnished-badge">
                            {t.furnished}
                          </div>
                        </div>
                      )}
                      <div className="deegaan-slideshow-controls">
                        {hotelImages.map((_, i) => (
                          <div
                            key={i}
                            className={`deegaan-slideshow-dot ${i === (currentSlides[hotel.id] || 0) ? 'active' : ''}`}
                            onClick={() => changeSlide(hotel.id, i)}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    // Desktop view - show first two images
                    <>
                      {hotelImages.slice(0, 2).map((image, i) => (
                        <div className="deegaan-hotel-image" key={i}>
                          <img src={image} alt={`${hotel.name} - view ${i+1}`} />
                        </div>
                      ))}
                      {hotel.isComingSoon && (
                        <div className="deegaan-coming-soon-overlay">
                          <div className="deegaan-coming-soon-badge">
                            {t.comingSoon}
                          </div>
                        </div>
                      )}
                      {hotel.isFurnishedApartment && (
                        <div className="deegaan-furnished-apartment-patch">
                          <div className="deegaan-furnished-badge">
                            {t.furnished}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
                <div className="deegaan-hotel-content">
                  <h3
                    className="deegaan-hotel-name"
                    data-hotel={
                      hotel.name === "Yare Towers Hotel" ? "yare-towers" :
                      hotel.name === "Urban Point Hotel" ? "urban-point" :
                      hotel.name === "Baraka Tower Hotel" ? "baraka-tower" :
                      hotel.name === "Bushra Hotel" ? "bushra" :
                      hotel.name === "HYYAT GOLDEN HOTEL" ? "hyyat-golden" :
                      hotel.name === "Crown Point Hotel" ? "crown-point" :
                      hotel.isPlaceholder ? "placeholder" : "riyo"
                    }
                  >
                    {hotel.name}
                  </h3>
                  <div className="deegaan-hotel-location">
                    <i className="deegaan-location-icon">📍</i>
                    <span>{hotel.location}</span>
                  </div>
                  <div className="deegaan-hotel-price">
                    {hotel.isComingSoon ? hotel.priceRange : `${hotel.priceRange} ${t.perNight}`}
                  </div>
                  <p
                    className="deegaan-hotel-description"
                    style={{
                      maxHeight: expandedHotels[hotel.id] ? 'none' : '3em',
                      overflow: 'hidden',
                      position: 'relative'
                    }}
                  >
                    {hotel.description}
                  </p>
                  <button
                    className="deegaan-read-more-btn"
                    onClick={() => toggleHotelExpansion(hotel.id, hotel.name, hotel.isComingSoon)}
                  >
                    {hotel.name === "Yare Towers Hotel" ?
                      (language === 'en' ? 'View Full Hotel Info' : 'Arag Macluumaadka Huteelka oo Dhan') :
                      hotel.name === "Urban Point Hotel" ?
                        (language === 'en' ? 'View Full Hotel Info' : 'Arag Macluumaadka Huteelka oo Dhan') :
                        hotel.name === "Baraka Tower Hotel" ?
                          (language === 'en' ? 'View Full Hotel Info' : 'Arag Macluumaadka Huteelka oo Dhan') :
                        hotel.name === "Bushra Hotel" ?
                          (language === 'en' ? 'View Full Hotel Info' : 'Arag Macluumaadka Huteelka oo Dhan') :
                        hotel.name === "HYYAT GOLDEN HOTEL" ?
                          (language === 'en' ? 'View Full Hotel Info' : 'Arag Macluumaadka Huteelka oo Dhan') :
                        hotel.name === "Crown Point Hotel" ?
                          t.learnMore :
                          hotel.isComingSoon ?
                            t.learnMore :
                            (expandedHotels[hotel.id] ?
                              (language === 'en' ? 'Show Less' : 'Itus Yar') :
                              (language === 'en' ? 'Read More' : 'Sii Akhri')
                            )
                    }
                  </button>
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
            );
          })}
        </div>
      </div>

      {/* Enhanced Coming Soon Popup */}
      {showComingSoonPopup && (
        <div className="deegaan-coming-soon-popup" onClick={closeComingSoonPopup}>
          <div className="deegaan-coming-soon-popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="deegaan-popup-icon">
              🏨
            </div>
            <h3 className="deegaan-popup-title">
              {t.comingSoon} {selectedCountryName && `to ${selectedCountryName}`}
            </h3>
            <p className="deegaan-popup-message">
              {t.comingSoonMessage}
            </p>
            <button className="deegaan-popup-close-btn" onClick={closeComingSoonPopup}>
              {t.closePopup}
            </button>
          </div>
        </div>
      )}

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