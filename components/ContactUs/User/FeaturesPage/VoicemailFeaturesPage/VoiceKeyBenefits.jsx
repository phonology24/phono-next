import React from 'react'
import './VoiceKeyBenefits.css'; // Importing the new CSS file for benefits section
import { AccessAlarm, Speed, ThumbUp, Build } from '@mui/icons-material'; // You can use these icons or replace them

const VoiceKeyBenefits = () => {
  return (
 <section className="key-benefits-section">
      <h2 className="key-benefits-heading">
      4 Key Benefits of Phonology’s Voicemail

      </h2>
      <div className="key-benefits-cards-container">
        {/* Card 1 */}
        <div className="key-benefits-card">
          <div className="key-benefits-card-content">
            <AccessAlarm className="key-benefits-card-icon" />
            <h3 className="key-benefits-card-heading">
            Enhanced Productivity
            </h3>
            <p className="key-benefits-card-description">
            Save time with features like transcription and centralized storage, allowing your team to focus on priorities without missing key messages.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="key-benefits-card">
          <div className="key-benefits-card-content">
            <Speed className="key-benefits-card-icon" />
            <h3 className="key-benefits-card-heading">
            Uninterrupted Communication
            </h3>
            <p className="key-benefits-card-description">
            Never miss an opportunity to connect, even when you’re unavailable. Voicemail captures every message, ensuring your responsiveness.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="key-benefits-card">
          <div className="key-benefits-card-content">
            <ThumbUp className="key-benefits-card-icon" />
            <h3 className="key-benefits-card-heading">
            Improved Professionalism
            </h3>
            <p className="key-benefits-card-description">
            Tailored greetings and reliable Voicemail functionality reflect your business's commitment to quality and customer service.
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="key-benefits-card">
          <div className="key-benefits-card-content">
            <Build className="key-benefits-card-icon" />
            <h3 className="key-benefits-card-heading">
            Global Accessibility
            </h3>
            <p className="key-benefits-card-description">
            Manage your voicemails from anywhere worldwide, catering to businesses operating across time zones or on the go.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VoiceKeyBenefits
