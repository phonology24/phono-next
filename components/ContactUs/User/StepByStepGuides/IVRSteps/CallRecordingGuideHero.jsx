import React from 'react';
import {
    LocalPhone,
    Settings,
    CheckCircle,
    Analytics,
    TrendingUp,
    Security,
    School,
} from '@mui/icons-material';
import './CallRecordingGuideHero.css';
import Image from 'next/image';
import SipImage from '/public/Assets/ccc1.png';

const CallRecordingGuideHero = () => {
    return (
        <div className="callRecordingGuide-container">
            <div className="callRecordingGuide-image">
                <Image
                    src={SipImage}
                    alt="Call Recording Guide"
                    width={500}
                    height={500}
                />
            </div>
            <div className="callRecordingGuide-content">
                <h2 className="callRecordingGuide-title">
                    A Simple Guide to Activating and Using Call Recording for Your Team
                </h2>

                <div className="callRecordingSteps">
                    {/* Step 1 */}
                    <div className="step">
                        <LocalPhone className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 1: Activate Call Recording</h3>
                            <p>
                                Start by enabling the call recording feature in your Phonology dashboard:
                                <br />
                                Sign in to your account and go to the “Call Recording” section.
                                <br />
                                Choose whether to record all calls, selected calls, or calls based on specific
                                criteria (e.g., department, agent, or customer type).
                                <br />
                                Customize your settings to include audio quality preferences and storage durations.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="step">
                        <Settings className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 2: Configure Call Recording Preferences</h3>
                            <p>
                                Set up recording preferences to suit your business needs:
                                <br />
                                <strong>Automatic Recording:</strong> Enable auto-recording for all inbound and outbound calls.
                                <br />
                                <strong>Selective Recording:</strong> Record calls based on specific rules, such as priority clients or sensitive calls.
                                <br />
                                <strong>Compliance Settings:</strong> Add disclaimers or notifications to ensure legal compliance in call recording.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="step">
                        <CheckCircle className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 3: Access and Retrieve Recordings</h3>
                            <p>
                                Once activated, recorded calls are securely stored and can be accessed easily:
                                <br />
                                Access the “Recordings” section within your dashboard.
                                <br />
                                Use filters such as date, agent, or call duration to find specific recordings.
                                <br />
                                Download recordings in your preferred format (e.g., MP3) for offline use.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="step">
                        <Analytics className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 4: Utilize Call Recordings for Training</h3>
                            <p>
                                Use recorded calls to improve your team’s performance:
                                <br />
                                <strong>Identify Strengths and Weaknesses:</strong> Review recordings to highlight effective communication and areas for improvement.
                                <br />
                                <strong>Role-Playing:</strong> Share exemplary calls with your team as part of training sessions.
                                <br />
                                <strong>Feedback and Coaching:</strong> Offer actionable insights and guidance using real interaction examples.
                            </p>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="step">
                        <TrendingUp className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 5: Ensure Compliance and Quality Assurance</h3>
                            <p>
                                Call recordings play a crucial role in ensuring compliance and building customer trust:
                                <br />
                                <strong>Compliance Monitoring:</strong> Retain recordings to meet regulatory or legal requirements.
                                <br />
                                <strong>Dispute Resolution:</strong> Use recordings as evidence to resolve disputes or clarify misunderstandings.
                                <br />
                                <strong>Quality Checks:</strong> Regularly review recordings to ensure agents adhere to company guidelines.
                            </p>
                        </div>
                    </div>

                    {/* Step 6 */}
                    <div className="step">
                        <Security className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 6: Storage and Security</h3>
                            <p>
                                Phonology ensures that all recordings are securely stored in compliance with data protection standards:
                                <br />
                                <strong>Cloud Storage:</strong> Access recordings anytime, anywhere.
                                <br />
                                <strong>Retention Policies:</strong> Define how long recordings are stored based on your business requirements.
                                <br />
                                <strong>Encryption:</strong> Protect sensitive information with advanced encryption methods.
                            </p>
                        </div>
                    </div>

                    {/* Step 7 */}
                    <div className="step">
                        <School className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 7: Monitor and Optimize Performance</h3>
                            <p>
                                Utilize analytics to gain valuable insights from your recorded calls:
                                <br />
                                Identify common customer concerns and frequently asked questions.
                                <br />
                                Track agent performance, including response times and problem resolution rates.
                                <br />
                                Use data to refine your communication strategy and improve overall service quality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallRecordingGuideHero;
