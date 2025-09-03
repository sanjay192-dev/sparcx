import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h1 className="logo-text">SPARCX SOLUTIONS</h1>
            <p>
              Innovating Digital Experiences.
            </p>
            <div className="contact-info">
              <span><i className="fas fa-envelope"></i> info@sparcx.in</span>
            </div>
            <div className="socials">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              {/* Add other social media links as needed */}
            </div>
          </div>

          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/our-work">Our Work</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Sparcx Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
