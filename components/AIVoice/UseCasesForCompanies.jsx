"use client";
import React, { useState } from 'react';
import './UseCasesAI.css';

const AIUseCases = () => {
  const [selectedTab, setSelectedTab] = useState(0); // State to track the selected tab

  // Content for AI use cases
  const aiTabContent = [
    {
      heading: 'Conversational AI',
      subheading: 'Add seamless voice interactions to your chatbots and customer service applications.',
      paragraph: 'Empower businesses with AI-driven conversational capabilities for enhanced customer experiences. Build chatbots that can understand context, emotions, and intent.',
      bulletPoints: [
        'Enable 24/7 customer support through AI chatbots.',
        'Leverage NLP to process and respond to customer queries naturally.',
        'Enhance user satisfaction with faster resolutions.'
      ],
    },
    {
      heading: 'Virtual Assistants',
      subheading: 'Power responsive and human-like virtual assistants for improved customer engagement.',
      paragraph: 'Create personalized virtual assistants that can manage schedules, set reminders, and provide detailed insights based on user preferences.',
      bulletPoints: [
        'Provide multi-lingual support for global users.',
        'Integrate with existing CRM and productivity tools.',
        'Offer real-time updates and notifications.'
      ],
    },
    {
      heading: 'IoT and Smart Devices',
      subheading: 'Integrate voice commands and interactions into IoT applications to improve user convenience and functionality.',
      paragraph: 'Develop smarter homes and offices by incorporating AI-powered voice control into IoT devices, allowing for seamless automation and control.',
      bulletPoints: [
        'Enable device control through voice commands.',
        'Set automation schedules based on user preferences.',
        'Improve energy efficiency with AI-driven analytics.'
      ],
    },
    {
      heading: 'AI Model Training',
      subheading: 'Use real-world data from voice interactions to refine AI learning algorithms.',
      paragraph: 'Optimize machine learning models by utilizing data-driven insights from voice interactions to improve accuracy and responsiveness.',
      bulletPoints: [
        'Enhance model training with diverse datasets.',
        'Reduce training times with automated workflows.',
        'Increase model accuracy with real-world voice data.'
      ],
    },
  ];

  return (
    <>
      <h2 className="casestudyHeading">Use Cases for AI Companies</h2>
      <div className="use-cases-container">
        {/* Left section with content */}
        <div className="use-cases-content">
          <h2>{aiTabContent[selectedTab].heading}</h2>
          <h3>{aiTabContent[selectedTab].subheading}</h3>
          <p>{aiTabContent[selectedTab].paragraph}</p>
          <ul>
            {aiTabContent[selectedTab].bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        {/* Right section with tabs */}
        <div className="use-cases-tabs">
          {aiTabContent.map((tab, index) => (
            <div
              key={index}
              className={`use-cases-tab ${selectedTab === index ? 'active' : ''}`}
              onClick={() => setSelectedTab(index)} // Change content when tab is clicked
            >
              {tab.heading}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AIUseCases;
