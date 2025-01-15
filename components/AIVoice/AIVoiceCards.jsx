"use client"
import React from 'react';
import './AiVoiceFeatures.css'; // Importing the CSS file
import { Home, Build, Business, Security } from '@mui/icons-material'; // You can use icons from MUI or replace them with your own
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import TtyIcon from '@mui/icons-material/Tty';
import HdrStrongIcon from '@mui/icons-material/HdrStrong';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const AIVoiceFeatures = () => {
  return (
    <section className="ai-voice-features">
      <h2 className="ai-main-heading">
        Key Features of AI Voice
      </h2>
      <div className="ai-cards-container">
        {/* Card 1 */}
        <div className="ai-feature-card">
          <div className="ai-card-content">
            <IntegrationInstructionsIcon className="ai-card-icon" />
            <h3 className="ai-card-heading">
            Advanced NLP Integration
            </h3>
            <p className="ai-card-description">
            Enable your AI applications to understand and respond to user queries in real time with our NLP technology.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="ai-feature-card">
          <div className="ai-card-content">
            <HdrStrongIcon className="ai-card-icon" />
            <h3 className="ai-card-heading">
               Dynamic Text-to-Speech (TTS)

            </h3>
            <p className="ai-card-description">
            Generate natural voice responses tailored to your application’s tone, delivering engaging and brand-aligned interactions            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="ai-feature-card">
          <div className="ai-card-content">
            <TtyIcon className="ai-card-icon" />
            <h3 className="ai-card-heading">
            Real-Time Speech Recognition
            </h3>
            <p className="ai-card-description">
            nstantly convert spoken language into text for fast, accurate communication with your AI platform.
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="ai-feature-card">
          <div className="ai-card-content">
            <AltRouteIcon className="ai-card-icon" />
            <h3 className="ai-card-heading">
            Intelligent Call Routing
            </h3>
            <p className="ai-card-description">
            Leverage AI to route calls based on user intent, preferences, or geographic location.
            </p>
          </div>
        </div>
        <div className="ai-feature-card">
          <div className="ai-card-content">
            <FilterNoneIcon className="ai-card-icon" />
            <h3 className="ai-card-heading">
            Multi-Language and Accent Support
            </h3>
            <p className="ai-card-description">
            Communicate effectively with global users by providing voice services in multiple languages.
            </p>
          </div>
        </div>
        <div className="ai-feature-card">
          <div className="ai-card-content">
            <AutoGraphIcon className="ai-card-icon" />
            <h3 className="ai-card-heading">
            Actionable Insights with Analytics
            </h3>
            <p className="ai-card-description">
            Gain valuable data from user interactions to train AI algorithms and improve overall system performance.
                        </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIVoiceFeatures;
