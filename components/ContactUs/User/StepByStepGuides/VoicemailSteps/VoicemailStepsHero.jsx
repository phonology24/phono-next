import React from 'react';
import {
    Settings,
    RecordVoiceOver,
    Notifications,
    Archive,
    Insights,
    TrendingUp,
    Security,
} from '@mui/icons-material';
import './VoicemailSetupGuideHero.css';
import Image from 'next/image';
import VoicemailImage from '/public/Assets/ccc1.png';

const VoicemailSetupGuideHero = () => {
    return (
        <div className="voicemailSetupGuide-container">
            <div className="voicemailSetupGuide-image">
                <Image
                    src={VoicemailImage}
                    alt="Voicemail Setup Guide"
                    width={500}
                    height={500}
                />
            </div>
            <div className="voicemailSetupGuide-content">
                <h2 className="voicemailSetupGuide-title">
                    Voicemail Setup Made Simple: Configure, Personalize, and Retrieve Messages
                </h2>

                <div className="voicemailSetupSteps">
                    {/* Step 1 */}
                    <div className="step">
                        <Settings className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 1: Configure Your Voicemail Settings</h3>
                            <p>
                                Get started by activating voicemail in your Phonology account:
                                <br />
                                Sign in to your dashboard and access the “Voicemail” section.
                                <br />
                                Enable voicemail for specific lines or all incoming calls.
                                <br />
                                Set up storage preferences to define how long messages should be retained.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="step">
                        <RecordVoiceOver className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 2: Personalize Your Greetings</h3>
                            <p>
                                Make a professional impression with customized voicemail greetings:
                                <br />
                                Record a welcoming message, such as: “Thank you for calling [Your Business Name].
                                We’re currently unavailable, but please leave a message, and we’ll get back to you shortly.”
                                <br />
                                Leverage Phonology’s features to design multilingual greetings that cater to a diverse audience.
                                <br />
                                Update your greetings periodically to reflect holidays, promotions, or business updates.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="step">
                        <Notifications className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 3: Access and Retrieve Voicemail Messages</h3>
                            <p>
                                Stay on top of your missed calls with easy access to voicemails:
                                <br />
                                <strong>Real-Time Notifications:</strong> Receive email or SMS alerts for new voicemail messages.
                                <br />
                                <strong>Dashboard Access:</strong> Go to the “Voicemail” tab in your dashboard to view a list of recorded messages.
                                <br />
                                <strong>Playback Options:</strong> Listen to voicemails directly in your dashboard or download them for offline review.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="step">
                        <Archive className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 4: Manage and Organize Your Voicemails</h3>
                            <p>
                                Keep your voicemails organized for easy reference:
                                <br />
                                Use filters like date, caller ID, or line to find specific messages.
                                <br />
                                Archive important voicemails for future use.
                                <br />
                                Delete old or irrelevant messages to maintain storage efficiency.
                            </p>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="step">
                        <Insights className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 5: Leverage Voicemail for Business Insights</h3>
                            <p>
                                Maximize the value of your voicemails:
                                <br />
                                Identify recurring customer issues to improve products or services.
                                <br />
                                Use voicemail feedback to refine your communication strategy.
                                <br />
                                Share important messages with team members for collaborative responses.
                            </p>
                        </div>
                    </div>

                    {/* Step 6 */}
                    <div className="step">
                        <TrendingUp className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 6: Monitor and Optimize Performance</h3>
                            <p>
                                Enhance the efficiency of your voicemail system:
                                <br />
                                Analyze voicemail metrics, such as response times and message volumes.
                                <br />
                                Make sure your greetings and notifications meet customer expectations.
                                <br />
                                Regularly review and update settings to meet evolving business needs.
                            </p>
                        </div>
                    </div>

                    {/* Step 7 */}
                    <div className="step">
                        <Security className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 7: Ensure Security and Compliance</h3>
                            <p>
                                Phonology ensures your voicemails are securely stored and accessible only by authorized users:
                                <br />
                                <strong>Protect messages with advanced encryption.</strong>
                                <br />
                                Define access controls for team members handling voicemails.
                                <br />
                                Retain voicemails in compliance with legal and industry standards.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VoicemailSetupGuideHero;
