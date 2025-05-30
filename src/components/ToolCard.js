import React from 'react';
import './ToolCard.css'; 

function ToolCard({ icon, title, description }) {
  return (
    <div className="tool-card">
        
      <div className="tool-icon">{icon}</div>
      <h3>{title}</h3>
      <p className='tool-card-discription'>{description}</p>
      <button className="view-button">View Tool</button>
    </div>
  );
}

export default ToolCard;

