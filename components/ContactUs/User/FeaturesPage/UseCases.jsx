"use client"
import React, { useState } from 'react';
import './UseCases.css';

const UseCases = () => {
  const [selectedTab, setSelectedTab] = useState(0); // State to track the selected tab

  // Content for each tab
  const tabContent = [
    {

      heading: 'Transform your home into a smart living space.',
      subheading: 'Control your home’s lighting, temperature, and appliances from anywhere.',
      paragraph: 'A fully integrated home automation system that allows users to control lighting, climate, and security with their smartphones, voice assistants, or automated schedules.',
      bulletPoints: ['A fully integrated home automation system that allows users to control lighting, climate, and security with their smartphones, voice assistants, or automated schedules.', 'Set up automation schedules for different times of the day.', 'Enhance home security with motion sensors and cameras.'],
    },
    {
      heading: 'Turn raw data into actionable insights',
      subheading: ' Leverage real-time data to optimize business operations and strategy',
      paragraph: 'A Business Intelligence solution that aggregates data from various sources and provides visual analytics to help business owners and managers make informed decisions.',
      bulletPoints: ['Predictive analytics for trend forecasting.', 'Integration with existing software and databases.', 'Real-time data dashboards for quick insights'],
    },
    {
      heading: 'Simplifying online shopping.',
      subheading: ' Provide users with an intuitive, seamless shopping experience.',
      paragraph: 'A user-friendly e-commerce platform that offers a smooth and personalized shopping experience, featuring advanced search, easy checkout, and secure payment methods.',
      bulletPoints: ['Personalized product recommendations based on user behavior.', 'Order tracking and delivery notifications.', 'Mobile-responsive design for shopping on any device.'],
    },
    // Add more use cases up to 10...
  ];

  return (<>
      <h2 className='casestudyHeading'>Our Case Studies</h2>
    <div className="use-cases-container">
      {/* Left section with content */}

      <div className="use-cases-content">
        <h2>{tabContent[selectedTab].heading}</h2>
        <h3>{tabContent[selectedTab].subheading}</h3>
        <p>{tabContent[selectedTab].paragraph}</p>
        <ul>
          {tabContent[selectedTab].bulletPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Right section with tabs */}
      <div className="use-cases-tabs">
        {tabContent.map((tab, index) => (
          <div
            key={index}
            className={`use-cases-tab ${selectedTab === index ? 'active' : ''}`}
            onClick={() => setSelectedTab(index)} // Change content when tab is hovered
          >
            {tab.heading}
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default UseCases;
