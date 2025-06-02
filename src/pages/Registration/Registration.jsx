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
      whatYouGet: "What You Can Get",
      listingTitle: "Listing of your Hotel in DeegaanRiyo website",
      listingFeatures: "• Top 10 Best Hotels recognition\n• Professional photo shoot\n• WhatsApp booking integration\n• Customer support & follow-up",
      websiteTitle: "If your Hotel currently don't have a website we build Your Own Website",
      websiteFeatures: "• Beautiful bilingual website (Somali + English)\n• Online booking form for inquiries\n• Mobile-friendly responsive design\n• Direct WhatsApp booking button",
      comboBadge: "SAVE KES 10,000",
      comboTitle: "If you want your Hotel be listed in the Website and also get your OWN website Platform Listing + Website",
      comboDesc: "Get both services together and save money!\nEverything above combined for one special price.",
      completeSystemTitle: "Complete Digital System",
      completeSystemFeatures: "Everything above PLUS:\n• Personal dashboard to track bookings\n• Connect your hotel management system\n• Social media content creation tools",
      monthlySupport: "Monthly Platform Subscription: KES 2,000",
      riskFree: "Platform subscription includes:\n• Monthly customer support\n• Ongoing listing management\n• Regular content updates",
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
      whatYouGet: " Halkaan ka fiirso Qiimaha",
      listingTitle: "Ku daritaanka iyo Diiwaan galinta  hudheelkaaga website-ka DeegaanRiyo",
      listingFeatures: "• Aqoonsiga iyo ka mid noqoshaha 10ka Hudheelka ugu Fiican\n• Sawir-qaadis xirfadeed\n• Kuxariirinta Tooska ah Website iyo Hodhelkaaga sodhawayntiisa Lifaaqidda WhatsApp number ka Hotelkaaga\n• Taageerada macaamiishta iyo raad-raacista",
      websiteTitle: "Haddii hudheelkaagu hadda uusan lahayn website waxaan u dhisaynaa Website-kaaga gaarka ah",
      websiteFeatures: "• Website qurux badan oo laba-luuqadeed ah (Soomaali + Ingiriis)\n• Foom dalabka onlaynka ah ee weydiimaha\n• Naqshad mobile-ku u habboon\n• Badhanka dalabka WhatsApp ee tooska ah",
      comboBadge: "KAYDI KES 10,000",
      comboTitle: "Haddii aad rabto in hudheelkaaga lagu daro Website-ka DEEGAAN_RIYO iyo sidoo kale aad hesho website adiga gaar kuu ah",
      comboDesc: "Hel labada adeeg wada oo lacag kaydi!\nWax walba oo kore ku xusan oo isku-dhafan qiime gaar ah.",
      completeSystemTitle: "Ugu Dambayn Hadii aad rabto Nidaam Dijiitaal Buuxa",
      completeSystemFeatures: "Wax walba oo kore ku xusan IYO:\n• Dashboard shakhsi ah si aad u raad-raacdo dalabka\n• Ku xidh nidaamka maaraynta hudheelkaaga\n• Qalabka abuurista nuxurka warbaahinta bulshada",
      monthlySupport: "Biil-gareynta Platform-ka Bishiiba: KES 2,000",
      riskFree: "Biil-gareynta waxa ku jira:\n• Taageerada macaamiisha bishiiba\n• Maaraynta liiska joogtada ah\n• Cusbooneysiinta nuxurka si joogto ah",
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

  const t = translations[language];

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
            {t.aboutText.split('WhatsApp').map((part, index) => 
              index === 0 ? part : 
              <>
                <span className="whatsapp-text">
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </span>
                {part}
              </>
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

        {/* What You Get */}
        <div className="section">
          <h2 className="section-title">{t.whatYouGet}</h2>
          <div className="pricing-section">
            {/* Platform Listing */}
            <div className="pricing-item">
              <div className="pricing-left">
                <h3 className="pricing-title">Option 1: {t.listingTitle}</h3>
                <div className="pricing-description">
                  {t.listingFeatures.split('\n').map((feature, index) => (
                    <div key={index}>{feature}</div>
                  ))}
                </div>
              </div>
              <div className="pricing-right">
                <div className="price">Pay KES 20,000</div>
              </div>
            </div>
            
            {/* Website */}
            <div className="pricing-item">
              <div className="pricing-left">
                <h3 className="pricing-title">Option 2: {t.websiteTitle}</h3>
                <div className="pricing-description">
                  {t.websiteFeatures.split('\n').map((feature, index) => (
                    <div key={index}>{feature}</div>
                  ))}
                </div>
              </div>
              <div className="pricing-right">
                <div className="price">Pay KES 30,000</div>
              </div>
            </div>
          </div>

          <div className="monthly-fee-box">
            <div className="monthly-fee-text">{t.monthlySupport}</div>
            <div className="risk-free-text">
              {t.riskFree.split('\n').map((text, index) => (
                <div key={index}>
                  {index === 0 ? <strong>{text.split(':')[0]}:</strong> : ''} 
                  {text.split(':').slice(1).join(':')}
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
              <p><strong>{t.email}</strong><br />deegaan@riyo.com</p>
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