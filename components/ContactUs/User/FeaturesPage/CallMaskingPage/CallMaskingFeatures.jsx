import React from 'react'
import { Home, Build, Business, Security } from '@mui/icons-material'; // You can use icons from MUI or replace them with your own
import '../VoicemailFeaturesPage/VoiceKeyFeatures.css'; // Importing the CSS file for styling
const CallMaskingFeatures = () => {
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
                                    Dynamic Number Masking
                                    </h3>
                                    <p className="card-description">
                                    Generate unique, temporary phone numbers to connect customers and agents without revealing personal details.
                                    </p>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="feature-card">
                                <div className="card-content">
                                    <Build className="card-icon" />
                                    <h3 className="card-heading">
                                    Secure Call Routing
                                    </h3>
                                    <p className="card-description">
                                    Redirect calls securely through Phonology’s system to maintain privacy and prevent unauthorized access.
                                    </p>
                                    </div>
                            </div>
                            {/* Card 3 */}
                            <div className="feature-card">
                                <div className="card-content">
                                    <Business className="card-icon" />
                                    <h3 className="card-heading">
                                    Call Tracking and Monitoring
                                    </h3>
                                    <p className="card-description">
                                    Track masked calls with detailed analytics to monitor performance, resolve issues, and improve operations.
                                                </p>
                                    </div>
                            </div>
                            {/* Card 4 */}
                            <div className="feature-card">
                                <div className="card-content">
                                    <Security className="card-icon" />
                                    <h3 className="card-heading">
                                    Customizable Masking Settings
                                    </h3>
                                    <p className="card-description">
                                    Set rules for masking based on scenarios such as timeframes, user roles, or specific call flows, tailoring the solution to your business needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
    </div>
  )
}

export default CallMaskingFeatures
