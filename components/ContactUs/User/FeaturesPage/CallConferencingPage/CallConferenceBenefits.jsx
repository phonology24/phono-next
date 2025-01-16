import React from 'react'
import { AccessAlarm, Speed, ThumbUp, Build } from '@mui/icons-material'; // You can use these icons or replace them
import '../VoicemailFeaturesPage/VoiceKeyBenefits.css'; // Importing the CSS file for styling


const CallConferenceBenefits = () => {
  return (
        <section className="key-benefits-section">
            <h2 className="key-benefits-heading">
                Key Benefits
            </h2>
            <div className="key-benefits-cards-container">
                {/* Card 1 */}
                <div className="key-benefits-card">
                    <div className="key-benefits-card-content">
                        <AccessAlarm className="key-benefits-card-icon" />
                        <h3 className="key-benefits-card-heading">
                        Improved Collaboration


                        </h3>
                        <p className="key-benefits-card-description">
                        Connect teams, clients, and stakeholders in real-time, enabling seamless communication and faster decision-making.
                        </p>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="key-benefits-card">
                    <div className="key-benefits-card-content">
                        <Speed className="key-benefits-card-icon" />
                        <h3 className="key-benefits-card-heading">
                        Increased Efficiency
                        </h3>
                        <p className="key-benefits-card-description">
                        Replace long email threads with dynamic discussions, saving time and enhancing productivity across your organization.

                        </p>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="key-benefits-card">
                    <div className="key-benefits-card-content">
                        <ThumbUp className="key-benefits-card-icon" />
                        <h3 className="key-benefits-card-heading">
                        Global Connectivity
                        </h3>
                        <p className="key-benefits-card-description">
                        Bring together participants from different locations, ensuring your business stays connected across time zones and regions.
                        </p>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="key-benefits-card">
                    <div className="key-benefits-card-content">
                        <Build className="key-benefits-card-icon" />
                        <h3 className="key-benefits-card-heading">

                        Cost-Effective Solution

                        </h3>
                        <p className="key-benefits-card-description">
                        Reduce travel expenses and logistical challenges by conducting remote meetings without compromising on quality.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallConferenceBenefits
