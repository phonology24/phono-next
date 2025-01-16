import React from 'react'
import { Home, Build, Business, Security } from '@mui/icons-material'; // You can use icons from MUI or replace them with your own
import '../VoicemailFeaturesPage/VoiceKeyFeatures.css'; // Importing the CSS file for styling

const CallBargingFeatures = () => {
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
                                    Real-Time Call Intervention
                                    </h3>
                                    <p className="card-description">
                                    Join active calls instantly to provide guidance, address concerns, or take over when necessary, ensuring critical issues are resolved promptly.
                                    </p>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="feature-card">
                                <div className="card-content">
                                    <Build className="card-icon" />
                                    <h3 className="card-heading">
                                    Supervisor Alerts and Notifications
                                    </h3>
                                    <p className="card-description">
                                    Supervisors receive notifications for flagged or escalated calls, enabling them to intervene in real-time and maintain service quality.
                                 </p>
                                    </div>
                            </div>
                            {/* Card 3 */}
                            <div className="feature-card">
                                <div className="card-content">
                                    <Business className="card-icon" />
                                    <h3 className="card-heading">
                                    Integrated Call Monitoring
                                    </h3>
                                    <p className="card-description">
                                    Listen to live calls discreetly and seamlessly barge in when required, ensuring minimal disruption while improving the customer experience
                                    </p>                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="feature-card">
                                <div className="card-content">
                                    <Security className="card-icon" />
                                    <h3 className="card-heading">
                                    Role-Based Access Control
                                    </h3>
                                    <p className="card-description">
                                    Limit call barging capabilities to authorized personnel, ensuring sensitive customer interactions remain secure and professionally managed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
    </div>
  )
}

export default CallBargingFeatures
