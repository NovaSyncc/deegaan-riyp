import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState(null);
  const sectionRef = React.useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "Top 5 Hotels in Eastleigh Nairobi: Deegaan-Riyo's Curated Selection",
      excerpt: "Discover the best hotels in Eastleigh serving Somalia's diaspora community. Our rigorous selection process identifies only premium accommodations that excel in service, pricing, and guest satisfaction.",
      fullContent: `
        <h2>Finding the Best Hotels in Eastleigh, Nairobi</h2>
        <p>Eastleigh, often called "Little Mogadishu," is home to one of East Africa's largest Somali communities. As a thriving business and cultural hub, finding quality accommodation that understands the unique needs of the Somali diaspora has been challenging—until now.</p>
        
        <h3>Why Deegaan-Riyo's Top 5 Selection Matters</h3>
        <p>Unlike other platforms that list hundreds of hotels, Deegaan-Riyo maintains an exclusive selection of only the Top 5 Best Hotels in Eastleigh. This curated approach ensures:</p>
        <ul>
          <li>Rigorous quality standards for every listed property</li>
          <li>Cultural sensitivity and understanding of Somali hospitality needs</li>
          <li>Competitive pricing without compromising on service excellence</li>
          <li>Direct WhatsApp booking to eliminate middleman commissions</li>
        </ul>
        
        <h3>What Makes Our Selection Process Unique</h3>
        <p>Every hotel in our Eastleigh collection undergoes comprehensive evaluation covering:</p>
        <ul>
          <li><strong>Service Quality:</strong> Staff professionalism, cultural awareness, and guest care standards</li>
          <li><strong>Competitive Pricing:</strong> Fair rates that provide value without hidden fees</li>
          <li><strong>Guest Satisfaction:</strong> Verified reviews and repeat customer rates</li>
          <li><strong>Facilities:</strong> Modern amenities, cleanliness, and comfort standards</li>
        </ul>
        
        <h3>The Deegaan-Riyo Advantage</h3>
        <p>When you book through Deegaan-Riyo, you're not just finding accommodation—you're connecting with hotels that understand the importance of "deegaan" (homeland) and "riyo" (dreams). Our zero-commission model ensures hotels can offer competitive rates while maintaining exceptional service.</p>
        
        <h3>Supporting Local Business</h3>
        <p>By choosing Deegaan-Riyo's curated selection, you're supporting the thriving Somali business community in Eastleigh while enjoying premium hospitality experiences tailored to your cultural needs.</p>
      `,
      category: "hotels",
      date: "June 3, 2025",
      author: "Abdifatah Hajifarah",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true,
      tags: ["Hotels", "Eastleigh", "Best Hotels", "Nairobi", "Somalia", "Deegaan"]
    },
    {
      id: 2,
      title: "Find Hotels Near Me: Revolutionizing Eastleigh's Hospitality with WhatsApp",
      excerpt: "How Deegaan-Riyo is transforming the 'find hotels near me' experience in Eastleigh using WhatsApp technology to connect travelers with premium Somali-owned accommodations.",
      fullContent: `
        <h2>The Evolution of "Find Hotels Near Me" in Eastleigh</h2>
        <p>When travelers search "find hotels near me" in Eastleigh, they're often overwhelmed by generic booking platforms that don't understand the unique cultural and business dynamics of Little Mogadishu. Deegaan-Riyo changes this narrative.</p>
        
        <h3>WhatsApp: The Game Changer</h3>
        <p>Why WhatsApp? Because it's the communication tool of choice for the global Somali community. Our platform leverages this familiarity to create seamless booking experiences:</p>
        <ul>
          <li>One-tap connection to hotel management</li>
          <li>Real-time availability and pricing</li>
          <li>Direct communication in Somali, English, or Arabic</li>
          <li>Instant booking confirmation</li>
        </ul>
        
        <h3>Beyond Generic Hotel Searches</h3>
        <p>Traditional "find hotels near me" results in Eastleigh often miss the mark. Deegaan-Riyo's curated approach ensures:</p>
        <ul>
          <li>Cultural sensitivity and halal requirements</li>
          <li>Understanding of Somali business customs</li>
          <li>Proximity to key community centers and mosques</li>
          <li>Flexible payment options including mobile money</li>
        </ul>
        
        <h3>Technology Serving Community</h3>
        <p>Our platform represents more than just hotel booking—it's about using technology to strengthen community connections. By choosing Deegaan-Riyo, you're supporting a platform built by the community, for the community.</p>
        
        <h3>The Future of Hospitality in Eastleigh</h3>
        <p>As Eastleigh continues to grow as a major business hub, Deegaan-Riyo is positioned to lead the digital transformation of hospitality services, making quality accommodation accessible to the global Somali diaspora.</p>
      `,
      category: "technology",
      date: "May 28, 2025",
      author: "Ahmed Mohamed",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Technology", "WhatsApp", "Hotels Near Me", "Eastleigh", "Innovation"]
    },
    {
      id: 3,
      title: "Deegaanka Soomaalida: Preserving Somali Hospitality in Nairobi's Eastleigh",
      excerpt: "Exploring how Deegaan-Riyo honors traditional Somali hospitality values while embracing modern technology to serve the diaspora community in Nairobi's Little Mogadishu.",
      fullContent: `
        <h2>Honoring Deegaanka Soomaalida Through Modern Hospitality</h2>
        <p>"Deegaanka Soomaalida" (the Somali homeland) extends beyond geographical boundaries. In Nairobi's Eastleigh, this concept lives through the hospitality industry that serves the global Somali diaspora.</p>
        
        <h3>The Cultural Foundation</h3>
        <p>Somali hospitality is built on core values that Deegaan-Riyo's partner hotels embody:</p>
        <ul>
          <li><strong>Martiqaad:</strong> Generous hospitality that makes guests feel at home</li>
          <li><strong>Sharaf:</strong> Honor and respect in all interactions</li>
          <li><strong>Karaamo:</strong> Dignity and gracious service</li>
          <li><strong>Wadaag:</strong> Community and sharing</li>
        </ul>
        
        <h3>Eastleigh: The Heart of Somali Business</h3>
        <p>Eastleigh has evolved into more than just a neighborhood—it's a global Somali business hub where:</p>
        <ul>
          <li>Traditional Somali architecture meets modern amenities</li>
          <li>Halal dining options are standard, not exceptional</li>
          <li>Prayer facilities are conveniently located</li>
          <li>Multi-lingual staff serve in Somali, Arabic, and English</li>
        </ul>
        
        <h3>Bridging Tradition and Technology</h3>
        <p>Deegaan-Riyo's approach honors traditional Somali values while embracing digital innovation:</p>
        <ul>
          <li>Maintaining personal connections through WhatsApp communication</li>
          <li>Preserving the oral tradition of recommendations and referrals</li>
          <li>Supporting community-owned businesses</li>
          <li>Facilitating cultural exchange and connection</li>
        </ul>
        
        <h3>The Global Somali Network</h3>
        <p>Through Deegaan-Riyo, hotels in Eastleigh connect with Somali travelers worldwide, creating a network that extends from Minneapolis to Melbourne, from London to Dubai—all united by shared values and the pursuit of quality hospitality.</p>
      `,
      category: "culture",
      date: "May 20, 2025",
      author: "Amina Hassan",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Culture", "Somalia", "Deegaan", "Hospitality", "Community"]
    },
    {
      id: 4,
      title: "Islii Hotels: Premium Accommodation Standards in Eastleigh",
      excerpt: "Understanding what makes a hotel 'Islii' (good/excellent) in Eastleigh's competitive hospitality market and how Deegaan-Riyo ensures only the finest establishments make our selection.",
      fullContent: `
        <h2>Defining "Islii" in Eastleigh's Hotel Industry</h2>
        <p>In Somali, "Islii" means good, excellent, or proper. For hotels in Eastleigh, achieving "Islii" status requires more than basic amenities—it demands excellence in service, cultural understanding, and community connection.</p>
        
        <h3>The Islii Standard</h3>
        <p>Deegaan-Riyo's partner hotels achieve Islii status through:</p>
        <ul>
          <li><strong>Exceptional Service:</strong> Staff trained in Somali hospitality traditions</li>
          <li><strong>Cultural Sensitivity:</strong> Understanding of Islamic practices and customs</li>
          <li><strong>Quality Facilities:</strong> Modern amenities with cultural considerations</li>
          <li><strong>Community Integration:</strong> Active participation in local Somali business networks</li>
        </ul>
        
        <h3>Why Islii Matters in Hospitality</h3>
        <p>For Somali travelers, finding truly "Islii" accommodation means:</p>
        <ul>
          <li>Halal dining options without compromise</li>
          <li>Prayer facilities and Qibla direction</li>
          <li>Cultural events and community celebrations</li>
          <li>Business-friendly environments for diaspora entrepreneurs</li>
        </ul>
        
        <h3>The Deegaan-Riyo Quality Assurance Process</h3>
        <p>Our rigorous evaluation ensures every listed hotel meets Islii standards:</p>
        <ul>
          <li>Comprehensive facility inspections</li>
          <li>Staff cultural competency assessments</li>
          <li>Guest satisfaction surveys</li>
          <li>Community feedback integration</li>
        </ul>
        
        <h3>Continuous Improvement</h3>
        <p>Maintaining Islii status requires ongoing commitment. Deegaan-Riyo partners with hotels to provide:</p>
        <ul>
          <li>Regular quality assessments</li>
          <li>Staff training programs</li>
          <li>Guest feedback analysis</li>
          <li>Community engagement initiatives</li>
        </ul>
        
        <h3>The Impact of Islii Standards</h3>
        <p>By maintaining Islii standards, Eastleigh's hotel industry continues to evolve, attracting not just Somali travelers but international visitors seeking authentic cultural experiences in one of Africa's most dynamic business districts.</p>
      `,
      category: "quality",
      date: "May 15, 2025",
      author: "Omar Ali",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Quality", "Islii", "Standards", "Excellence", "Hotels"]
    },
    {
      id: 5,
      title: "Hudheel Business Travel: Connecting Eastleigh to Global Somali Markets",
      excerpt: "How Deegaan-Riyo serves the growing Hudheel (business travel) market, connecting Somali entrepreneurs with quality accommodation in Eastleigh's thriving commercial district.",
      fullContent: `
        <h2>Hudheel: The Backbone of Somali Business Travel</h2>
        <p>"Hudheel" represents the essential business travel that connects Somali entrepreneurs across global markets. Eastleigh serves as a crucial hub for this network, and quality accommodation is essential for successful business operations.</p>
        
        <h3>Eastleigh's Role in Global Somali Commerce</h3>
        <p>Eastleigh has become a critical node in the global Somali business network, facilitating:</p>
        <ul>
          <li>Import/export operations across East Africa</li>
          <li>Financial services and remittance businesses</li>
          <li>Technology and telecommunications ventures</li>
          <li>Real estate and construction projects</li>
        </ul>
        
        <h3>Understanding Hudheel Travelers' Needs</h3>
        <p>Business travelers in Eastleigh require accommodations that support their professional activities:</p>
        <ul>
          <li>Reliable internet connectivity for international communications</li>
          <li>Business centers and meeting facilities</li>
          <li>Flexible check-in/check-out times for varying flight schedules</li>
          <li>Proximity to major business districts and markets</li>
        </ul>
        
        <h3>Deegaan-Riyo's Business Travel Solutions</h3>
        <p>Our platform addresses the unique needs of Hudheel travelers:</p>
        <ul>
          <li>Corporate rates and extended stay packages</li>
          <li>Direct hotel communication for special requests</li>
          <li>Locations near key business centers</li>
          <li>Cultural amenities that make long stays comfortable</li>
        </ul>
        
        <h3>Supporting Somali Entrepreneurship</h3>
        <p>By providing quality accommodation options, Deegaan-Riyo supports the broader Somali entrepreneurial ecosystem:</p>
        <ul>
          <li>Reducing travel costs through competitive pricing</li>
          <li>Eliminating booking commissions to maximize value</li>
          <li>Facilitating business networking through community connections</li>
          <li>Supporting local Somali-owned hospitality businesses</li>
        </ul>
        
        <h3>The Future of Hudheel Travel</h3>
        <p>As Somali businesses continue to expand globally, Eastleigh's role as a business hub will only grow. Deegaan-Riyo is committed to evolving with these needs, ensuring that quality accommodation remains accessible to the entrepreneurial Somali diaspora.</p>
      `,
      category: "business",
      date: "May 8, 2025",
      author: "Fatima Hussein",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Business", "Hudheel", "Travel", "Entrepreneurship", "Commerce"]
    },
    {
      id: 6,
      title: "Digital Transformation of Somalia's Hospitality Industry",
      excerpt: "Examining how technology platforms like Deegaan-Riyo are revolutionizing hotel booking and hospitality services across Somalia and the diaspora communities.",
      fullContent: `
        <h2>Technology Meets Tradition in Somali Hospitality</h2>
        <p>The hospitality industry serving Somalia and its diaspora communities is undergoing a digital transformation that honors traditional values while embracing modern efficiency.</p>
        
        <h3>The Digital Divide Challenge</h3>
        <p>Historically, Somali hospitality businesses faced challenges in digital adoption:</p>
        <ul>
          <li>Limited access to international booking platforms</li>
          <li>High commission fees from third-party booking sites</li>
          <li>Language barriers in global platforms</li>
          <li>Lack of culturally appropriate booking systems</li>
        </ul>
        
        <h3>Deegaan-Riyo's Solution</h3>
        <p>Our platform addresses these challenges through:</p>
        <ul>
          <li>Zero-commission booking model</li>
          <li>Multi-language support (Somali, Arabic, English)</li>
          <li>WhatsApp integration for familiar communication</li>
          <li>Community-focused quality standards</li>
        </ul>
        
        <h3>Impact Across East Africa</h3>
        <p>Deegaan-Riyo's approach is creating positive change across multiple cities:</p>
        <ul>
          <li><strong>Nairobi Eastleigh:</strong> Streamlined booking for business travelers</li>
          <li><strong>Mogadishu:</strong> Supporting reconstruction through tourism</li>
          <li><strong>Addis Ababa:</strong> Connecting Ethiopian-Somali communities</li>
          <li><strong>Djibouti:</strong> Facilitating regional business travel</li>
          <li><strong>Hargeisa:</strong> Promoting Somaliland's tourism potential</li>
        </ul>
        
        <h3>Empowering Hotel Owners</h3>
        <p>Our platform empowers hotel owners by:</p>
        <ul>
          <li>Providing digital marketing without technical complexity</li>
          <li>Offering professional photography and content creation</li>
          <li>Delivering performance analytics and insights</li>
          <li>Facilitating direct customer relationships</li>
        </ul>
        
        <h3>Looking Ahead</h3>
        <p>The future of Somali hospitality lies in combining technological innovation with cultural authenticity. Deegaan-Riyo is committed to leading this transformation while preserving the essence of Somali hospitality traditions.</p>
      `,
      category: "technology",
      date: "April 30, 2025",
      author: "Ahmed Mohamed",
      image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["Technology", "Digital Transformation", "Somalia", "Innovation"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'hotels', name: 'Hotels & Accommodation' },
    { id: 'technology', name: 'Technology' },
    { id: 'culture', name: 'Culture & Community' },
    { id: 'business', name: 'Business & Travel' },
    { id: 'quality', name: 'Quality & Standards' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const openFullPost = (post) => {
    setSelectedPost(post);
    document.body.style.overflow = 'hidden';
  };

  const closeFullPost = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="blog-section" ref={sectionRef}>
        <div className="container">
          <h2 className="section-title">Deegaan-Riyo Insights</h2>
          <div className="neon-line"></div>
          
          <p className="intro-text">
            Discover insights about the best hotels in Eastleigh, Nairobi, and how Deegaan-Riyo is revolutionizing hospitality for Somalia's global diaspora community through technology and cultural understanding.
          </p>
          
          <div className="category-filter">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {activeCategory === 'all' && featuredPost && (
            <div className="featured-post">
              <div className="featured-image">
                <img src={featuredPost.image} alt={featuredPost.title} />
                <div className="featured-tag">Featured</div>
              </div>
              <div className="featured-content">
                <div className="post-meta">
                  <span className="post-date">{featuredPost.date}</span>
                  <span className="post-author">By {featuredPost.author}</span>
                  <span className="post-category">{categories.find(cat => cat.id === featuredPost.category)?.name}</span>
                </div>
                <h3 className="featured-title">{featuredPost.title}</h3>
                <p className="featured-excerpt">{featuredPost.excerpt}</p>
                <div className="post-tags">
                  {featuredPost.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <button 
                  onClick={() => openFullPost(featuredPost)}
                  className="read-more-btn"
                >
                  Read Full Article
                </button>
              </div>
            </div>
          )}
          
          <div className="blog-grid">
            {filteredPosts
              .filter(post => activeCategory !== 'all' || post.id !== featuredPost?.id)
              .map(post => (
                <div className="blog-card" key={post.id}>
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} />
                    <div className="image-glow"></div>
                  </div>
                  <div className="blog-content">
                    <div className="post-meta">
                      <span className="post-date">{post.date}</span>
                      <span className="post-category">{categories.find(cat => cat.id === post.category)?.name}</span>
                    </div>
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="post-tags">
                      {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="card-footer">
                      <span className="post-author">By {post.author}</span>
                      <button 
                        onClick={() => openFullPost(post)}
                        className="read-more-link"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          
          <div className="blog-cta">
            <h3 className="cta-title">Ready to Experience Premium Hospitality?</h3>
            <p>Discover the best hotels in Eastleigh, Nairobi, and across East Africa's major Somali communities.</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-btn primary">Find Hotels Now</a>
              <a href="mailto:deegaan@deegaanriyo.online" className="cta-btn secondary">Contact Support</a>
            </div>
          </div>
        </div>
      </section>

      {/* Full Post Modal */}
      {selectedPost && (
        <div className="post-modal-overlay" onClick={closeFullPost}>
          <div className="post-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{selectedPost.title}</h2>
              <button className="close-btn" onClick={closeFullPost}>×</button>
            </div>
            <div className="modal-content">
              <div className="post-meta">
                <span className="post-date">{selectedPost.date}</span>
                <span className="post-author">By {selectedPost.author}</span>
                <span className="post-category">{categories.find(cat => cat.id === selectedPost.category)?.name}</span>
              </div>
              <div className="post-tags">
                {selectedPost.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div 
                className="full-content"
                dangerouslySetInnerHTML={{ __html: selectedPost.fullContent }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;