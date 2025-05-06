import React from 'react';
import './HeroSection.css';
import heroImage from '../images/pexels-noellegracephotos-906097.jpg';

function HeroSection() {
  return (
    <div className="hero-container">
      <img src={heroImage} alt="Meditation" className="hero-bg" />
      <div className="hero-content">
        <div className="hero-text">
          <h1>Track your mental wellness. Take control of your peace of mind.</h1>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
          <textarea placeholder="Message" name="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default HeroSection;
