import React, { useEffect, useRef, useState } from 'react';
import './Registration.css';

const Registration = () => {
  const websiteQrRef = useRef(null);
  const whatsappQrRef = useRef(null);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'so' for Somali

  const translations = {
    en: {
      logo: "DEEGAAN-RIYO",
      tagline: "Top 10 Best Hotels in Eastleigh - Curated Excellence",
      aboutTitle: "About Deegaan-Riyo",
      aboutText: "Deegaan-Riyo showcases only the Top 10 Best Hotels in Eastleigh - a curated selection of excellence. We help guests discover premium stays, then connect them instantly with hotels through a seamless, commission-free process. Our mission is to give your hotel prestigious digital recognition, attract quality bookings, and build trust through beauty, clarity, and convenience.",
      limitedSlots: "🏆 LIMITED TO TOP 10 HOTELS ONLY 🏆",
      slotsRemaining: "SLOTS REMAINING",
      curatedSelection: "Curated Selection",
      curatedDesc: "Customers browse only the finest hotels",
      directBookings: "Direct Bookings",
      directDesc: "One-tap WhatsApp connection to your hotel",
      zeroCommissions: "Zero Commissions",
      zeroDesc: "Keep 100% of your booking revenue",
      prestigiousRecognition: "Prestigious Recognition",
      prestigiousDesc: "Featured among Eastleigh's elite hotels",
      howItWorks: "How It Works",
      step1Title: "Premium Listing",
      step1Desc: "We showcase your hotel with professional photos as one of the Top 10 Best",
      step2Title: "Quality Customer Discovery",
      step2Desc: "Guests browse our curated selection and choose their perfect premium stay",
      step3Title: "Direct WhatsApp Contact",
      step3Desc: "Customers connect directly with your hotel - no middleman, no commissions",
      step4Title: "Ongoing Partnership",
      step4Desc: "We provide continuous support and help grow your bookings",
      whatYouGet: "Premium Onboarding Package",
      listingTitle: "All-Inclusive Digital Presence Package",
      listingFeatures: "• Premium listing in Top 10 Best Hotels\n• Professional photo shoot\n• Custom website development OR website revamp\n• WhatsApp booking integration\n• Bilingual content (Somali + English)\n• 1 year platform subscription\n• Dedicated customer support\n• Monthly performance reports",
      monthlySupport: "Annual Platform Subscription Included",
      riskFree: "Package includes:\n• Professional website development/revamp\n• Premium listing management\n• Year-round customer support\n• Regular content updates\n• Monthly performance analytics",
      pricingNote: "Early bird slots are now taken. Current onboarding fee:",
      price: "KES 50,000",
      existingWebsite: "Already have a website? We'll revamp it to match our premium standards!",
      contactTitle: "Join the Top 10 Today!",
      whatsapp: "WhatsApp:",
      email: "Email:",
      website: "Website:",
      whatsNext: "What's Next?",
      nextStep1: "1. Contact us via WhatsApp",
      nextStep2: "2. Schedule your photo shoot",
      nextStep3: "3. Launch your prestigious listing",
      nextStep4: "4. Start receiving quality bookings!",
      visitPlatform: "Visit Platform",
      whatsappChat: "WhatsApp Chat",
      scanToVisit: "Scan to visit",
      scanToChat: "Scan to chat"
    },
    so: {
      logo: "DEEGAAN-RIYO",
      tagline: "10ka Hudheelka ugu Fiican Islii Nairobi - Xulka Hotels ka Eastleigh",
      aboutTitle: "Ku saabsan Deegaan-Riyo",
      aboutText: "Deegaan-Riyo waxay soo bandhigtaa kaliya 10-ka Hudheel ee ugu Fiican ISLII - Hoteelo leh Adeeg heer sare ah. Waxaan ka caawinnaa martida inay helaan Hudheeladda ugu heerka sareeya, kadibna si degdeg ah ugu xirno hudheeladda iyagoo adeegsanaya  WhatsApp aan kharash lahayn. Ujeedkeennu waa inaan hudheelada siino sharaf dhijitaal ah, soo jiidasho dalabyo heer sare ah, oo dhisno kalsoonida iyagoo adeegsanaya website qurux badan, caddaalad, iyo qaab dalbasho ugu fudud ---FASTEST BOOKING--.",
      limitedSlots: "🏆 liiska 10 ka Hotel oogu wanagsan Islii 🏆",
      slotsRemaining: "6 BOOS OO KALIYA AYAA HARAY",
      curatedSelection: "Xulka Hudheelada",
      curatedDesc: "Macaamiishu waxay DeeganRuiyo website ka arkayan kaliya hudheeladka ugu fiican",
      directBookings: "Dalabyo Toos ah",
      directDesc: "Hal-taabasho oo WhatsApp ah ayeey kula xiriiri hudheelkaas",
      zeroCommissions: "Qarash La'aan",
      zeroDesc: "Hotel kaaga wuxuu save gareeye 100% dakhliga dalabashada 'Booking Fees' Marka la barbar dhigo Websites kale ee HOTEL BOOKINGS sameeyo",
      prestigiousRecognition: "Aqoonsi Sharaf leh",
      prestigiousDesc: "Ka mid noqoshada Liiska HOTELS ka oogu sharafta leh ee ISLII (Eastleigh)",
      howItWorks: "Sida ay u Shaqeyso",
      step1Title: "Diiwan galin Heer Sare ah",
      step1Desc: "Waxaa lagu darayaa Hotelkaaga Liiska Hotelada oogu wanagnsan anagoo soo bandhigiayno sawiro iyo adeegyada hotelkaaga",
      step2Title: "Helitaanka Macaamiil Tayo leh",
      step2Desc: "Martida waxay eegaanLiiska hoteladaas la xushay waxayna dooranayaan meesha ugu habboon",
      step3Title: "Xiriir Toos ah WhatsApp",
      step3Desc: "Macaamiishu si toos ah ayay ula xiriirayaan hudheelkaaga - dhexdhexaadiye la'aan, kharash la'aan",
      step4Title: "Is-kaashi Joogto ah",
      step4Desc: "Waxaan bixinnaa taageero joogto ah waxaana kaa caawinnaa kobcinta dalabadaada",
      whatYouGet: "Xirmo Diiwaangelin Premium ah – Fududeysan oo La Fahmi Karo",
      listingTitle: "Xirmo Dijital ah oo dhameystiran (Complete Digital Package)",
      listingFeatures: "Waxaad heli doontaa adeegyo badan oo sareeya sida:\n\n" +
        "✅ Liiska Hudheelada ugu Fiican – 10-ka hotel ee ugu wanaagsan ayaa lagu dari doonaa liiska Premium-ka si ay u helaan macaamiil badan.\n\n" +
        "📸 Sawirro Xirfad Leh (Professional Photography) – Sawirro tayo sare leh oo loo isticmaali karo website, social media, iwm.\n\n" +
        "🌐 Website Cusub ama Update-ka Website-ka Hore – Haddii aadan lahayn website, mid cusub ayaan kuu sameyneynaa. Haddii aad horey u lahayd, waan casriyeyn doonnaa si uu u noqdo mid casri ah (modern & premium).\n\n" +
        "💬 WhatsApp Order Integration – Waxaan ku xiri doonnaa website-kaaga WhatsApp si macaamiishu si fudud uga dalban karaan.\n\n" +
        "🌍 Content Laba Luuqadood ah (Somali + English) – Website-ka ama content-ka waxaa lagu qori doonaa af Soomaali iyo Ingiriis.\n\n" +
        "🛠️ Diiwaangelinta Platform Sannadlaha – Adeeggan wuxuu kaa caawinayaa in la suuq geeyo (promote) ganacsigaaga muddo 1 sano ah.\n\n" +
        "🤝 Taageero Macaamiil Gaar ah (Dedicated Support) – Hel taageero gaar ah mar kasta oo aad u baahato.\n\n" +
        "📊 Warbixinnada Bishiiba (Monthly Performance Reports) – Warbixin kuu sheegaysa sida website-kaaga iyo ganacsigaagu u shaqeynayo bishiiba mar.",
      monthlySupport: "Diiwaangelinta Platform Sannadlaha waa ka mid ah xirmada – ma jiro kharash dheeri ah.",
      riskFree: "Xirmaddu waxay ka kooban tahay:\n• Horumarinta/casriyeynta website-ka xirfadeed\n• Maareynta liiska premium\n• Taageero macaamiil oo sanadka oo dhan ah\n• Cusbooneysiinta nuxurka joogtada ah\n• Falanqaynta waxqabadka bisha bisha",
      pricingNote: "Boosaska qiimaha jaban hore ayaa la qaatay",
      price: "KES 50,000",
      existingWebsite: "Hore ma u lahayd website?\n→ Haa: Waan u casriyeeyn doonaa si uu ula jaanqaado adeegyada Premium-ka.\n→ Maya: Mid cusub ayaan kuu dhisi doonnaa!",
      contactTitle: "Ku Biir 10ka Maanta!",
      whatsapp: "WhatsApp:",
      email: "Email:",
      website: "Website:",
      whatsNext: "Maxaa Xiga?",
      nextStep1: "1. Nala soo xiriir WhatsApp",
      nextStep2: "2. Meel ka dhig sawir-qaadista",
      nextStep3: "3. Bilow liiskaaga sharaf leh",
      nextStep4: "4. Bilow helitaanka dalabyo tayo leh!",
      visitPlatform: "Booqo Platform-ka",
      whatsappChat: "WhatsApp Sheeko",
      scanToVisit: "Scan si aad u booqato",
      scanToChat: "Scan si aad ula sheekaasato"
    }
  };

  // Add this before the return statement to ensure we have valid translations
  const t = translations[language] || translations['en']; // Fallback to English if translation is missing

  useEffect(() => {
    // Load QR code library dynamically
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js';
    script.onload = () => {
      generateQR('website-qr', 'https://www.deegaanriyo.online');
      generateQR('whatsapp-qr', 'https://wa.link/ak0pqk');
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const generateQR = (canvasId, text) => {
    const canvas = document.getElementById(canvasId);
    if (!canvas || !window.qrcode) return;
    
    const ctx = canvas.getContext('2d');
    
    const qr = window.qrcode(0, 'M');
    qr.addData(text);
    qr.make();
    
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const modules = qr.getModuleCount();
    const cellSize = canvas.width / modules;
    
    ctx.fillStyle = '#000000';
    for (let row = 0; row < modules; row++) {
      for (let col = 0; col < modules; col++) {
        if (qr.isDark(row, col)) {
          ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
        }
      }
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'so' : 'en');
  };

  return (
    <div className="page">
      <div className="content">
        {/* Language Toggle */}
        <div className="language-toggle">
          <button 
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            English
          </button>
          <button 
            className={`lang-btn ${language === 'so' ? 'active' : ''}`}
            onClick={() => setLanguage('so')}
          >
            Soomaali
          </button>
        </div>

        {/* Header */}
        <div className="header">
          <div className="logo">{t.logo}</div>
          <div className="tagline">{t.tagline}</div>
        </div>

        {/* About Section */}
        <div className="section">
          <h2 className="section-title">{t.aboutTitle}</h2>
          <div className="about-text">
            {t.aboutText && t.aboutText.split('WhatsApp').map((part, index) => 
              index === 0 ? part : 
              <React.Fragment key={index}>
                <span className="whatsapp-text">
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </span>
                {part}
              </React.Fragment>
            )}
          </div>

          <div className="prestige-box">
            <div className="prestige-text">{t.limitedSlots}</div>
            <div className="slots-remaining">
              <span className="slots-number">6</span> {t.slotsRemaining}
            </div>
          </div>

          <div className="benefits-row">
            <div className="benefit-item">
              <div className="benefit-icon">🔍</div>
              <h5>{t.curatedSelection}</h5>
              <p>{t.curatedDesc}</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📱</div>
              <h5>{t.directBookings}</h5>
              <p>{t.directDesc}</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💸</div>
              <h5>{t.zeroCommissions}</h5>
              <p>{t.zeroDesc}</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🎯</div>
              <h5>{t.prestigiousRecognition}</h5>
              <p>{t.prestigiousDesc}</p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="section">
          <h2 className="section-title">{t.howItWorks}</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4>{t.step1Title}</h4>
                <p>{t.step1Desc}</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4>{t.step2Title}</h4>
                <p>{t.step2Desc}</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4>{t.step3Title}</h4>
                <p>{t.step3Desc}</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4>{t.step4Title}</h4>
                <p>{t.step4Desc}</p>
              </div>
            </div>
          </div>
        </div>

        {/* What You Get Section */}
        <div className="section">
          <h2 className="section-title">{t.whatYouGet}</h2>
          <div className="pricing-section">
            <div className="pricing-item premium">
              <div className="pricing-left">
                <h3 className="pricing-title">{t.listingTitle}</h3>
                <div className="pricing-description">
                  {t.listingFeatures && t.listingFeatures.split('\n').map((feature, index) => (
                    <div key={index} className="feature-item">{feature}</div>
                  ))}
                </div>
                <div className="existing-website-note">
                  {t.existingWebsite}
                </div>
              </div>
              <div className="pricing-right">
                <div className="pricing-note">{t.pricingNote}</div>
                <div className="price">{t.price}</div>
              </div>
            </div>
          </div>

          <div className="monthly-fee-box">
            <div className="monthly-fee-text">{t.monthlySupport}</div>
            <div className="risk-free-text">
              {t.riskFree && t.riskFree.split('\n').map((text, index) => (
                <div key={index} className="benefit-item">
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <h3 className="contact-title">{t.contactTitle}</h3>
          <div className="contact-grid">
            <div className="contact-info">
              <p><strong>{t.whatsapp}</strong><br />+254 712 221 079</p>
              <p><strong>{t.email}</strong><br />deegaan@deegaanriyo.online</p>
              <p><strong>{t.website}</strong><br />www.deegaanriyo.online</p>
            </div>
            
            <div className="next-steps">
              <p><strong>{t.whatsNext}</strong></p>
              <p>{t.nextStep1}</p>
              <p>{t.nextStep2}</p>
              <p>{t.nextStep3}</p>
              <p>{t.nextStep4}</p>
            </div>

            <div className="qr-container">
              <div className="qr-code">
                <h6>{t.visitPlatform}</h6>
                <canvas id="website-qr" ref={websiteQrRef} width="60" height="60"></canvas>
                <p>{t.scanToVisit}</p>
              </div>
              <div className="qr-code">
                <h6>{t.whatsappChat}</h6>
                <canvas id="whatsapp-qr" ref={whatsappQrRef} width="60" height="60"></canvas>
                <p>{t.scanToChat}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;