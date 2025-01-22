import React from 'react'
import './VoiceKeyFeatures.css'; // Importing the CSS file
import { Home, Build, Business, Security } from '@mui/icons-material'; // You can use icons from MUI or replace them with your own

const VoiceKeyFeatures = () => {
    return (
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
                            Voicemail-to-Email Transcription
                        </h3>
                        <p className="card-description">
                            Automatically convert voicemails into text and deliver them to your email, enabling quick and easy message reviews without the need to listen.
                        </p>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="feature-card">
                    <div className="card-content">
                        <Build className="card-icon" />
                        <h3 className="card-heading">
                            Customizable Greeting
                        </h3>
                        <p className="card-description">
                            Create personalized greetings for different teams, departments, or scenarios, adding a professional and personal touch to your communication.
                        </p>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="feature-card">
                    <div className="card-content">
                        <Business className="card-icon" />
                        <h3 className="card-heading">
                            Multi-Device Access
                        </h3>
                        <p className="card-description">
                            Retrieve and manage your voicemails from any device—smartphone, desktop, tablet, or VoIP system—for seamless access wherever you are.
                        </p>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="feature-card">
                    <div className="card-content">
                        <Security className="card-icon" />
                        <h3 className="card-heading">
                            Real-Time Notifications
                        </h3>
                        <p className="card-description">
                            Stay informed with instant alerts for every new message, sent via email, SMS, or mobile app, ensuring you never miss important communication.              </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VoiceKeyFeatures
