import React from 'react'
import { Home, Build, Business, Security } from '@mui/icons-material'; // You can use icons from MUI or replace them with your own
import '../VoicemailFeaturesPage/VoiceKeyFeatures.css'; // Importing the CSS file for styling

const CustomizedReportFeatures = () => {
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
                                Tailored Communication Metrics
                            </h3>
                            <p className="card-description">
                                Generate reports specific to your telephony requirements, such as call handling times, response rates, and abandoned call trends.

                            </p>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="feature-card">
                        <div className="card-content">
                            <Build className="card-icon" />
                            <h3 className="card-heading">

                                Automated Report Scheduling
                            </h3>
                            <p className="card-description">
                                Automate the generation and delivery of reports to receive timely updates without manual intervention, ensuring your team stays on track.
                            </p>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="feature-card">
                        <div className="card-content">
                            <Business className="card-icon" />
                            <h3 className="card-heading">
                                Interactive Telephony Dashboards
                            </h3>
                            <p className="card-description">
                                Access dynamic dashboards that provide a detailed view of your communication performance, enabling you to filter and analyze data effortlessly.
                            </p>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="feature-card">
                        <div className="card-content">
                            <Security className="card-icon" />
                            <h3 className="card-heading">
                                Multi-Format Export for Sharing
                            </h3>
                            <p className="card-description">
                                Export reports in user-friendly formats such as PDF, Excel, or CSV for easy sharing and integration with other business tools.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CustomizedReportFeatures
