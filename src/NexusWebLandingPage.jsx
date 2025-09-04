import React, { useEffect, useMemo, useState } from "react";

export default function NexusWebLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const header = document.getElementById("header");
    const onScroll = () => {
      if (!header) return;
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();
    if (!targetId || targetId === "#") return;
    const el = document.querySelector(targetId);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    e.currentTarget.reset();
  };

  // Inline style for nav-links to support mobile toggle while preserving desktop layout
  const navLinksStyle = useMemo(() => {
    return menuOpen ? { display: "flex" } : {};
  }, [menuOpen]);

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Header & Navigation */}
      <header id="header">
        <div className="container nav-container">
          <div className="logo">NexusWeb</div>
          <ul className="nav-links" style={navLinksStyle}>
            <li>
              <a href="#services" onClick={(e) => handleAnchorClick(e, "#services")}>Services</a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleAnchorClick(e, "#about")}>About</a>
            </li>
            <li>
              <a href="#why-us" onClick={(e) => handleAnchorClick(e, "#why-us")}>Why Us</a>
            </li>
            <li>
              <a href="#testimonials" onClick={(e) => handleAnchorClick(e, "#testimonials")}>Testimonials</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleAnchorClick(e, "#contact")}>Contact</a>
            </li>
          </ul>
          <button className="mobile-menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Open menu">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <h1>Transform Your Digital Presence With Expert Web Development</h1>
          <p>
            We create stunning, high-performance websites and applications that drive growth and engage your audience.
          </p>
          <a href="#contact" className="btn btn-primary" onClick={(e) => handleAnchorClick(e, "#contact")}>
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Comprehensive web development solutions tailored to your business needs</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3>Custom Web Development</h3>
              <p>
                Bespoke websites and web applications built with cutting-edge technologies to meet your specific requirements.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Responsive Design</h3>
              <p>Websites that look beautiful and function perfectly on all devices, from desktops to smartphones.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <h3>E-Commerce Solutions</h3>
              <p>
                Powerful online stores with secure payment processing, inventory management, and marketing tools.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>SEO Optimization</h3>
              <p>
                Comprehensive search engine optimization to increase your visibility and drive organic traffic.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              <h3>Performance Optimization</h3>
              <p>
                Lightning-fast websites with optimized code, images, and assets for superior user experience.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Web Security</h3>
              <p>
                Robust security measures to protect your website and user data from threats and vulnerabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <div className="container">
          <div className="section-title">
            <h2>About NexusWeb</h2>
            <p>We are a team of passionate developers and designers creating digital excellence</p>
          </div>
          <div className="stats-container">
            <div className="stat">
              <div className="stat-number">150+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat">
              <div className="stat-number">50+</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat">
              <div className="stat-number">12+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us</h2>
            <p>Discover what makes our web development services stand out from the competition</p>
          </div>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="feature-content">
                <h3>Premium Quality</h3>
                <p>We deliver exceptional quality in every project, paying attention to every detail.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="feature-content">
                <h3>On-Time Delivery</h3>
                <p>
                  We understand the value of time and always deliver projects within the agreed timeframe.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-headset"></i>
              </div>
              <div className="feature-content">
                <h3>24/7 Support</h3>
                <p>Our dedicated support team is always available to assist you with any issues.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="feature-content">
                <h3>Innovative Solutions</h3>
                <p>
                  We stay ahead of industry trends to provide cutting-edge solutions for your business.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-lock"></i>
              </div>
              <div className="feature-content">
                <h3>Secure Development</h3>
                <p>
                  Security is our priority, and we implement best practices to protect your digital assets.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">
                <i className="fas fa-dollar-sign"></i>
              </div>
              <div className="feature-content">
                <h3>Competitive Pricing</h3>
                <p>We offer high-quality services at competitive prices with no hidden costs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section testimonials">
        <div className="container">
          <div className="section-title">
            <h2>Client Testimonials</h2>
            <p>Hear what our clients have to say about our web development services</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "NexusWeb transformed our outdated website into a modern, responsive platform. Our conversion rates increased by 40% within the first month!"
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div className="author-details">
                  <h4>John Doe</h4>
                  <p>CEO, TechSolutions Inc.</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "The team at NexusWeb delivered an exceptional e-commerce solution that has significantly boosted our online sales. Their attention to detail is impressive."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">SM</div>
                <div className="author-details">
                  <h4>Sarah Miller</h4>
                  <p>Founder, FashionHub</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>
                  "We've been working with NexusWeb for over three years. Their technical expertise and reliable support have been invaluable to our business growth."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">RJ</div>
                <div className="author-details">
                  <h4>Robert Johnson</h4>
                  <p>Marketing Director, GrowthLab</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>Get in touch with us to discuss your project requirements</p>
          </div>
          <div className="contact-container">
            <div className="contact-info">
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h3>Location</h3>
                  <p>123 Web Street, Digital City, 10001</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>info@nexusweb.com</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form id="contactForm" onSubmit={onSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea id="message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <div className="footer-logo">NexusWeb</div>
              <p>
                We create exceptional digital experiences that drive growth and engagement for businesses worldwide.
              </p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="footer-links">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">App Development</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Digital Marketing</a></li>
                <li><a href="#">SEO Services</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Contact</h3>
              <ul>
                <li><a href="#">Support</a></li>
                <li><a href="#">Sales</a></li>
                <li><a href="#">Partnerships</a></li>
                <li><a href="#">Emergency</a></li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2023 NexusWeb. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
