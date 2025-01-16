import React from 'react'
import { Home, Build, Business, Security } from '@mui/icons-material'; // You can use icons from MUI or replace them with your own
import '../VoicemailFeaturesPage/VoiceKeyFeatures.css'; // Importing the CSS file for styling

const CallForwardKEyFeatures = () => {
  return (
    <div>
       <section className="key-features">
                        <h2 className="main-heading">
      
                        Key Features
                        </h2>
                        <div className="cards-container">
                            {/* Card 1 */}
                            <div className="feature-card">
                                <div className="card-content">
                                    <Home className="card-icon" />
                                    <h3 className="card-heading">
                                    Flexible Routing Options
                                    </h3>
                                    <p className="card-description">
                                    Forward calls to mobile devices, landlines, voicemail, or alternate numbers, ensuring every call is handled promptly.
                                    </p>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="feature-card">
                                <div className="card-content">
                                    <Build className="card-icon" />
                                    <h3 className="card-heading">
                                    Sequential and Simultaneous Ringing
                                    </h3>
                                    <p className="card-description">
                                    Configure calls to ring on multiple devices simultaneously or in a defined sequence, giving you maximum flexibility in how calls are answered.                                    </p>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="feature-card">
                                <div className="card-content">
                                    <Business className="card-icon" />
                                    <h3 className="card-heading">
                                    Time-Based Forwarding
                                    </h3>
                                    <p className="card-description">
                                    Set call forwarding rules based on business hours, holidays, or specific time zones to provide round-the-clock coverage.                                    </p>
                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="feature-card">
                                <div className="card-content">
                                    <Security className="card-icon" />
                                    <h3 className="card-heading">
                                    Advanced Caller Insights
                                    </h3>
                                    <p className="card-description">
                                    Access caller information and forwarding logs to track call activity and improve response strategies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
    </div>
  )
}

export default CallForwardKEyFeatures
