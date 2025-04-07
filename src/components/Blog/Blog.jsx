import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
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
      title: "Transforming Eastleigh's Hospitality with WhatsApp Technology",
      excerpt: "How Deegaan-Riyo is using everyday tools to bridge the gap between travelers and local hotels.",
      category: "technology",
      date: "April 3, 2025",
      author: "Abdifatah Hajifarah",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      title: "The Vision Behind RiyO: Creating Economic Opportunities Through Tech",
      excerpt: "Learn about our journey and mission to reshape industries through accessible technology solutions.",
      category: "company",
      date: "March 27, 2025",
      author: "Ahmed Mohamed",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "How Small Hotels Are Competing in the Digital Age",
      excerpt: "Case studies of hotels in Eastleigh that have transformed their booking process through Deegaan-Riyo.",
      category: "business",
      date: "March 15, 2025",
      author: "Amina Hassan",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "The Future of Mobile-First Booking Platforms",
      excerpt: "Trends and predictions for how technology will continue to evolve the hospitality industry.",
      category: "technology",
      date: "March 3, 2025",
      author: "Omar Ali",
      image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Sustainability in Tech: RiyO's Commitment to Ethical Development",
      excerpt: "How we're building technology solutions with social and environmental responsibility in mind.",
      category: "company",
      date: "February 22, 2025",
      author: "Fatima Hussein",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "WhatsApp as a Business Tool: Innovative Applications",
      excerpt: "Creative ways businesses are leveraging WhatsApp beyond messaging to drive growth and engagement.",
      category: "technology",
      date: "February 10, 2025",
      author: "Ahmed Mohamed",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'technology', name: 'Technology' },
    { id: 'company', name: 'Company News' },
    { id: 'business', name: 'Business Insights' }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section className="blog-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Latest from RiyO</h2>
        <div className="neon-line"></div>
        
        <p className="intro-text">
          Insights, updates, and stories about how RiyO and its ventures are reshaping industries through technology and innovation.
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
              <a href={`/blog/${featuredPost.id}`} className="read-more-btn">Read Article</a>
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
                  <div className="card-footer">
                    <span className="post-author">By {post.author}</span>
                    <a href={`/blog/${post.id}`} className="read-more-link">Read More</a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        
        <div className="blog-cta">
          <h3 className="cta-title">Want more insights?</h3>
          <p>Subscribe to our newsletter to get the latest updates directly to your inbox.</p>
          <a href="#newsletter" className="cta-btn">Subscribe Now</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;