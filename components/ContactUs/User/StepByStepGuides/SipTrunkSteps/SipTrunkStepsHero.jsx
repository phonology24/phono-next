import React from 'react';
import {
    CheckCircle,
    PersonAdd,
    Settings,
    NetworkCheck,
    Call,
    Route,
    Analytics,
    School,
    Headset
} from '@mui/icons-material';
import Image from 'next/image';
import SipImage from '/public/Assets/ccc1.png';
import './SipTrunkStepsHero.css';

const SipTrunkStepsHero = () => {
    return (
        <div className="sipTrunkSteps-container">
            {/* Image on top */}
            <div className="sipTrunkSteps-image">
                <Image
                    src={SipImage}
                    alt="SIP Trunking"
                    width={500}
                    height={500}
                />
            </div>

            <div className="sipTrunkSteps-content">
                <h2 className="sipTrunkSteps-title">
                    Setting Up Your SIP Trunk with Phonology: A Straightforward Guide
                </h2>

                {/* Step-by-step guide with icons */}
                <div className="sipTrunkSteps">

                    <div className="step">
                        <CheckCircle className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 1: Understand Your Business Needs</h3>
                            <p>
                                Start by assessing how many concurrent calls you expect to handle.
                                Check if your current PBX system supports SIP compatibility. Need help
                                deciding? Our team will diligently guide you.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <PersonAdd className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 2: Create Your Phonology Account</h3>
                            <p>
                                Visit www.phonology.io and sign up for an account. Select a SIP trunking
                                plan tailored to your business size and goals.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <Settings className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 3: Get Your SIP Trunk Details</h3>
                            <p>
                                Once you’ve signed up, we’ll provide you with everything you need:
                                SIP server address, login credentials, port numbers, and additional
                                configuration settings.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <NetworkCheck className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 4: Configure Your PBX or Telephony System</h3>
                            <p>
                                Access your current PBX or IP-PBX system and enter the SIP trunk
                                settings provided by Phonology. Need step-by-step guidance? Our
                                support team is available just a call away.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <Call className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 5: Prepare Your Network</h3>
                            <p>
                                Verify that your network is prepared to support SIP trunking by
                                checking your bandwidth, configuring your firewall, and activating
                                Quality of Service (QoS) settings.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <Route className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 6: Test Your Connection</h3>
                            <p>
                                Conduct a test call using your newly configured SIP trunk to verify
                                call quality, connection stability, and proper routing.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <Analytics className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 7: Set Call Routing Rules</h3>
                            <p>
                                Customize call routing to route calls to specific teams or departments
                                and set time-based forwarding for after-hours support.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <School className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 8: Monitor and Optimize Performance</h3>
                            <p>
                                Use Phonology’s built-in analytics tools to track call quality,
                                usage, and identify areas for improvement.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <Headset className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 9: Train Your Team</h3>
                            <p>
                                Provide your team with a quick tutorial on the new system and share
                                tips for making the most of the SIP trunk’s features.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <Headset className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 10: Enjoy 24/7 Support</h3>
                            <p>
                                If you encounter any issues, Phonology’s dedicated support team is
                                always here to help. Stay connected and scalable with Phonology.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SipTrunkStepsHero;
