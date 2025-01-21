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
      Powerful Features of Phonology’s Voice API
      </h2>
      <div className="ai-cards-container">
        {/* Card 1 */}
        <div className="ai-feature-card">
          <div className="ai-card-content">
            <IntegrationInstructionsIcon className="ai-card-icon" />
            <h3 className="ai-card-heading">
            Call Management
            </h3>
            <p className="ai-card-description">
            Easily manage phone calls with advanced call-handling tools, ensuring smooth communication.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="ai-feature-card">
          <div className="ai-card-content">
            <HdrStrongIcon className="ai-card-icon" />
            <h3 className="ai-card-heading">
            Global Reach

            </h3>
            <p className="ai-card-description">
            Leverage VoIP phone APIs to connect with customers worldwide using local and toll-free numbers.
            </p>
            </div>
        </div>
        {/* Card 3 */}
        <div className="ai-feature-card">
          <div className="ai-card-content">
            <TtyIcon className="ai-card-icon" />
            <h3 className="ai-card-heading">
            Programmable IVR
            </h3>
            <p className="ai-card-description">
            Customize voice calling APIs to build intelligent menus that streamline caller interactions.            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="ai-feature-card">
          <div className="ai-card-content">
            <AltRouteIcon className="ai-card-icon" />
            <h3 className="ai-card-heading">
            Real-Time Call Analytics
            </h3>
            <p className="ai-card-description">
            Use real-time insights to track call performance and identify areas for improvement.
            </p>
          </div>
        </div>
        <div className="ai-feature-card">
          <div className="ai-card-content">
            <FilterNoneIcon className="ai-card-icon" />
            <h3 className="ai-card-heading">
            Voice Transcription
            </h3>
            <p className="ai-card-description">
            Convert voice messages into text for easy documentation and analysis.
            </p>
          </div>
        </div>
        <div className="ai-feature-card">
          <div className="ai-card-content">
            <AutoGraphIcon className="ai-card-icon" />
            <h3 className="ai-card-heading">
            Secure and Scalable
            </h3>
            <p className="ai-card-description">
            Phonology ensures enterprise-grade security and scalability for businesses of all sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIVoiceFeatures;
