"use client"
import React, { useState } from 'react'
import './VoicemailUseCases.css';

const VoiceMailUseCases = () => {
    const [selectedTab, setSelectedTab] = useState(0); 

    const tabContent = [
      {
  
        heading: 'Busy Sales Professionals',
        subheading: 'Control your home’s lighting, temperature, and appliances from anywhere.',
        paragraph: 'Sales executives and managers often engaged in meetings or on the move can rely on Voicemail to capture missed calls and follow up promptly.',
        bulletPoints: ['A fully integrated home automation system that allows users to control lighting, climate, and security with their smartphones, voice assistants, or automated schedules.', 'Set up automation schedules for different times of the day.', 'Enhance home security with motion sensors and cameras.'],
      },
      {
        heading: 'Global Teams',
        subheading: ' Leverage real-time data to optimize business operations and strategy',
        paragraph: 'Companies with international operations benefit from Voicemail’s round-the-clock functionality, enabling effective communication across time zones.',
        bulletPoints: ['Predictive analytics for trend forecasting.', 'Integration with existing software and databases.', 'Real-time data dashboards for quick insights'],
      },
      {
        heading: 'Customer Support Departments.',
        subheading: ' Provide users with an intuitive, seamless shopping experience.',
        paragraph: 'Use Voicemail to ensure every customer inquiry is captured, even during peak hours or off-business hours, improving customer satisfaction.',
        bulletPoints: ['Personalized product recommendations based on user behavior.', 'Order tracking and delivery notifications.', 'Mobile-responsive design for shopping on any device.'],
      },
      {
        heading: 'Small Businesses and Startups',
        subheading: ' Provide users with an intuitive, seamless shopping experience.',
        paragraph: 'For growing teams with limited staff, Voicemail ensures that no call is left unattended, allowing you to scale your customer engagement efficiently.',
        bulletPoints: ['Personalized product recommendations based on user behavior.', 'Order tracking and delivery notifications.', 'Mobile-responsive design for shopping on any device.'],
      },
      // Add more use cases up to 10...
    ];
  
    return (<>
        <h2 className='casestudyHeading'>Use Cases</h2>
      <div className="use-cases-container">
        {/* Left section with content */}
  
        <div className="use-cases-content">
          <h2>{tabContent[selectedTab].heading}</h2>
          {/* <h3>{tabContent[selectedTab].subheading}</h3> */}
          <p>{tabContent[selectedTab].paragraph}</p>
          {/* <ul>
            {tabContent[selectedTab].bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul> */}
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

export default VoiceMailUseCases
