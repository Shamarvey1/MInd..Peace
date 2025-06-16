// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLeaf, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li>About Us</li>
          <li>Services</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact Information</h3>
        <p>info@stopup.com</p>
        <p>123-4$$-7890</p>
      </div>

      <div className="footer-section social">
        <h3>©2055 StepUp</h3>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLeaf />
          <FaLinkedinIn />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
