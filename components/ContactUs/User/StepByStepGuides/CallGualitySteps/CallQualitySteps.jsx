import React from 'react';
import {
    Call,
    Assessment,
    BarChart,
    Wifi,
    Headset,
    Insights,
    Feedback,
    Help,
    Support,
} from '@mui/icons-material';
import './CallQualityMonitoringGuide.css'; 
import Image from 'next/image';
import CallQualityImage from '/public/Assets/ccc1.png';

const CallQualityMonitoringGuide = () => {
    return (
        <div className="callQualityMonitoringGuide-container">
            <div className="callQualityMonitoringGuide-image">
                <Image
                    src={CallQualityImage}
                    alt="Call Quality Monitoring Guide"
                    width={500}
                    height={500}
                />
            </div>
            <div className="callQualityMonitoringGuide-content">
                <h2 className="callQualityMonitoringGuide-title">
                    Ensuring Superior Call Quality: How to Monitor and Optimize Performance
                </h2>

                <div className="callQualitySteps">
                    {/* Step 1 */}
                    <div className="step">
                        <Call className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 1: Why Monitor Call Quality?</h3>
                            <p>
                                Monitoring call quality is essential to identify issues like poor audio clarity,
                                dropped calls, or long connection times. Ensuring consistent quality helps enhance
                                customer satisfaction, improve team productivity, and reduce disruptions during
                                critical interactions.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="step">
                        <Assessment className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 2: Access Phonology’s Call Monitoring Tools</h3>
                            <p>
                                Log in to your Phonology dashboard to access real-time and historical call monitoring
                                features:
                                <br />
                                Navigate to the “Call Analytics” or “Performance Monitoring” section to review metrics
                                like call duration, packet loss, jitter, and latency.
                                <br />
                                Filter results by team, department, or time frame for detailed insights.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="step">
                        <BarChart className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 3: Analyze Key Metrics</h3>
                            <p>
                                Key metrics for evaluating call quality include:
                                <br />
                                <strong>MOS:</strong> Mean Opinion Score measures overall call quality on a scale of 1 to 5.
                                <br />
                                <strong>Jitter:</strong> Tracks inconsistencies in data packet delivery.
                                <br />
                                <strong>Latency:</strong> Monitors delays between sending and receiving audio.
                                <br />
                                <strong>Packet Loss:</strong> Identifies missing audio data that affects clarity.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="step">
                        <Wifi className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 4: Identify and Address Common Issues</h3>
                            <p>
                                Use monitoring data to resolve call quality issues:
                                <br />
                                Verify network bandwidth to handle call traffic efficiently.
                                <br />
                                Enable QoS settings to prioritize voice traffic.
                                <br />
                                Keep hardware and software updated to avoid compatibility issues.
                            </p>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="step">
                        <Headset className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 5: Train and Support Your Team</h3>
                            <p>
                                Provide your team with best practices to ensure consistent call quality:
                                <br />
                                Use noise-canceling headsets and maintain a stable internet connection.
                                <br />
                                Train team members to promptly report issues for faster resolution.
                            </p>
                        </div>
                    </div>

                    {/* Step 6 */}
                    <div className="step">
                        <Insights className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 6: Optimize Performance with Analytics</h3>
                            <p>
                                Use Phonology’s analytics tools to:
                                <br />
                                Track peak call periods and adjust resource allocation accordingly.
                                <br />
                                Assess agent performance using metrics like average handle time and resolution rates.
                            </p>
                        </div>
                    </div>

                    {/* Step 7 */}
                    <div className="step">
                        <Feedback className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 7: Implement Call Quality Feedback Loops</h3>
                            <p>
                                Regularly review monitoring data and customer feedback:
                                <br />
                                Schedule routine quality checks to ensure consistency.
                                <br />
                                Share monitoring insights with your team to promote accountability.
                            </p>
                        </div>
                    </div>

                    {/* Step 8 */}
                    <div className="step">
                        <Help className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 8: Utilize Phonology’s Advanced Features</h3>
                            <p>
                                Leverage tools like call recording, live monitoring, and IVR integration to:
                                <br />
                                Review recurring issues, provide immediate assistance, and streamline call flow.
                            </p>
                        </div>
                    </div>

                    {/* Step 9 */}
                    <div className="step">
                        <Support className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 9: Stay Proactive with 24/7 Support</h3>
                            <p>
                                Phonology offers dedicated support to troubleshoot and resolve call quality issues
                                quickly, ensuring optimal performance at all times.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallQualityMonitoringGuide;
