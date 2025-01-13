import React from 'react';
import {
    Flag,
    RecordVoiceOver,
    Map,
    Settings,
    Link as LinkIcon,
    CheckCircle,
    Analytics,
    School,
    Campaign,
    HeadsetMic
} from '@mui/icons-material';
import './IVRStepsHero.css';
import SipImage from '/public/Assets/ccc1.png';
import Image from 'next/image';

const IVRStepsHero = () => {
    return (
        <div className="ivrSteps-container">
                        <div className="sipTrunkSteps-image">
                            <Image
                                src={SipImage}
                                alt="SIP Trunking"
                                width={500}
                                height={500}
                            />
                        </div>
            <div className="ivrSteps-content">
                <h2 className="ivrSteps-title">
                    Setting Up Your IVR with Phonology: A Step-by-Step Guide
                </h2>

                {/* Step-by-step guide with icons */}
                <div className="ivrSteps">

                    <div className="step">
                        <Flag className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 1: Define Your IVR Goals</h3>
                            <p>
                                Identify what you want to achieve with your IVR system
                                (e.g., call routing, self-service options). Plan your menu structure.
                                Example: <br />
                                “Press 1 for Sales.” <br />
                                “Press 2 for Support.” <br />
                                “Press 3 for Billing.”
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <RecordVoiceOver className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 2: Create Customized Greetings</h3>
                            <p>
                                Write a professional, branded welcome message, such as:
                                <br />
                                “Thank you for calling [Your Business Name]. Please make a selection
                                from the options provided in the menu.”
                                <br />
                                Record audio prompts using a professional voice-over service or
                                a built-in recorder. Include multi-language options if needed.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <Map className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 3: Map Call Routing Rules</h3>
                            <p>
                                Assign each menu option to the correct department or team.
                                Set up fallback options:
                                <br />
                                If no input is received, repeat the menu or forward the call to voicemail.
                                <br />
                                If all agents are busy, direct calls to an alternate queue or callback system.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <Settings className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 4: Configure Advanced Features</h3>
                            <p>
                                <strong>Call Recording:</strong> Enable recording for training and
                                quality assurance.
                                <br />
                                <strong>Voicemail Integration:</strong> Allow callers to leave messages
                                when no agents are available.
                                <br />
                                <strong>Real-Time Updates:</strong> Ensure your IVR system
                                reflects current business hours or announcements.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <LinkIcon className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 5: Connect Your IVR to Your CRM</h3>
                            <p>
                                Connect your IVR with your CRM to recognize returning customers
                                and offer tailored menu options based on previous interactions.
                                Use integrations for data-driven routing and better service.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <CheckCircle className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 6: Test Your IVR System</h3>
                            <p>
                                Simulate various scenarios to ensure smooth call routing.
                                Verify audio quality of greetings, prompts, menu navigation,
                                and routing to the correct teams or voicemail.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <Analytics className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 7: Optimize for Performance</h3>
                            <p>
                                Use Phonology’s analytics tools to monitor call flow patterns,
                                customer wait times, menu performance, and drop-off rates.
                                Gather feedback from callers to continuously improve.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <School className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 8: Train Your Team</h3>
                            <p>
                                Brief your team on how the IVR system works.
                                Share tips on handling escalated calls or retrieving voicemails.
                                Emphasize how IVR streamlines customer interactions.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <Campaign className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 9: Announce Your New IVR System</h3>
                            <p>
                                Inform customers about the new system via email or social media.
                                Encourage them to use the IVR for faster, more efficient support.
                            </p>
                        </div>
                    </div>

                    <div className="step">
                        <HeadsetMic className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 10: Enjoy 24/7 Support</h3>
                            <p>
                                Rely on Phonology’s expert support team for any IVR-related issues
                                or updates. Regularly update your system as your business evolves.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default IVRStepsHero;
