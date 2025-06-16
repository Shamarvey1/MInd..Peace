// src/components/FeatureSection.jsx
import React from 'react';
import './Featuredsection.css';
import phoneImg from '../images/phone-illustration.png';
import womanImg from '../images/woman-illustration.png';

function Featuredsection() {
  return (
    <div className="feature-container">
      <div className="feature-card">
        <img src={phoneImg} alt="Phone Illustration" className="feature-image" />
        <div className="feature-text">
          <h2>Personalized insights for users</h2>
          <p><strong>Preference to</strong> metimize accuracy for users</p>
          <p>Phemienlize data on personnal matoiction trockers easier sems Linagay petio.</p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="feature-card column-reverse">
        <div className="feature-text">
          <h2>Emotional balance check-ins</h2>
        </div>
        <img src={womanImg} alt="Woman Illustration" className="feature-image" />
      </div>
    </div>
  );
}

export default Featuredsection;
