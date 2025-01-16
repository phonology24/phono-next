import React from 'react'
import { Home, Build, Business, Security } from '@mui/icons-material'; // You can use icons from MUI or replace them with your own
import '../VoicemailFeaturesPage/VoiceKeyFeatures.css'; // Importing the CSS file for styling

const CallConferencingFeatures = () => {
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
                                    High-Quality Audio
                                    </h3>
                                    <p className="card-description">
                                    Experience crystal-clear audio, ensuring all participants communicate effectively, even in large group discussions.
                                    </p>
                                </div>
                            </div>
                            {/* Card 2 */}
                            <div className="feature-card">
                                <div className="card-content">
                                    <Build className="card-icon" />
                                    <h3 className="card-heading">
                                    Participant Management
                                    </h3>
                                    <p className="card-description">
                                    Easily manage participants by adding, muting, or removing attendees to maintain control and ensure productive meetings.
                                    </p>
                                    </div>
                            </div>
                            {/* Card 3 */}
                            <div className="feature-card">
                                <div className="card-content">
                                    <Business className="card-icon" />
                                    <h3 className="card-heading">
                                    Secure Conference Access
                                    </h3>
                                    <p className="card-description">
                                    Protect your calls with secure PINs and authentication, ensuring only authorized participants can join.
                                    </p>                                </div>
                            </div>
                            {/* Card 4 */}
                            <div className="feature-card">
                                <div className="card-content">
                                    <Security className="card-icon" />
                                    <h3 className="card-heading">
                                    Scalable Conference Sizes
                                    </h3>
                                    <p className="card-description">
                                    Host small team meetings or large-scale conferences with support for multiple participants, tailored to your business needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
    </div>
  )
}

export default CallConferencingFeatures
