import React from 'react';
import ToolCard from './ToolCard'; // Make sure ToolCard.js is in the same folder as ToolSection.js
import { FaSpa, FaSmile, FaHeartbeat, FaBell } from 'react-icons/fa';
import './ToolSection.css'; // Assuming you already created this CSS file

// Array of tools
const tools = [
  {
    icon: <FaSpa />,
    title: 'Meditation Tracker',
    description: 'Track your peaceful sessions and stay mindful.',
  },
  {
    icon: <FaSmile />,
    title: 'Mood Journal',
    description: 'Log how you feel daily to understand patterns.',
  },
  {
    icon: <FaHeartbeat />,
    title: 'Breathing Exercises',
    description: 'Practice calm breathing to reduce stress.',
  },
  {
    icon: <FaBell />,
    title: 'Mindfulness Reminders',
    description: 'Set gentle reminders for breaks and reflection.',
  },
];

function ToolSection() {
  return (
    <div>
      <h1>Featured Wellbeing Tools</h1>
      
    <div className="tools-section">
      {tools.map((tool, index) => (
        <ToolCard
          key={index}
          icon={tool.icon}
          title={tool.title}
          description={tool.description}
        />
      ))}
    </div>
    </div>
  );
}

export default ToolSection;
