
import React from 'react';
import './TestimonialCard.css';
import userImg from '../images/testimonial-user.jpg'; 

function TestimonialCard() {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">Testimonials</h2>
      <div className="testimonial-card">
        <img src={userImg} alt="User" className="testimonial-image" />
        <div className="testimonial-content">
          <p className="testimonial-quote">
            "I've learned to understand my emotional patterns – It's been life-<strong>changing.</strong>"
          </p>
          <p className="testimonial-author">Sarah J.</p>
        </div>
        <div className="testimonial-arrow">&#8250;</div>
      </div>

      <div className="testimonial-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
}

export default TestimonialCard;
