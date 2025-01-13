import React from 'react';
import {
    LocalPhone,
    PersonAdd,
    CheckCircle,
    CallSplit,
    Settings,
    // PhoneInTalk,
    Analytics,
    TrendingUp,
    School,
    HeadsetMic
} from '@mui/icons-material';
import './VirtualNumbersStepsHero.css';
import Image from 'next/image';
import SipImage from '/public/Assets/ccc1.png';

const VirtualNumbersStepsHero = () => {
    return (
        <div className="virtualNumbersSteps-container">
            <div className="sipTrunkSteps-image">
                <Image
                    src={SipImage}
                    alt="SIP Trunking"
                    width={500}
                    height={500}
                />
            </div>
            <div className="virtualNumbersSteps-content">
                <h2 className="virtualNumbersSteps-title">
                    Virtual Numbers Made Simple: A Guide to Activation and Management
                </h2>

                <div className="virtualNumbersSteps">
                    {/* Step 1 */}
                    <div className="step">
                        <LocalPhone className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 1: Choose Your Virtual Number</h3>
                            <p>
                                Choose the virtual number type that best suits your business requirements.
                                <br />
                                <strong>Local Numbers:</strong> Build trust with a local presence.
                                <br />
                                <strong>Toll-Free Numbers:</strong> Let customers call at no cost.
                                <br />
                                <strong>International Numbers:</strong> Expand globally with numbers in
                                target countries.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="step">
                        <PersonAdd className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 2: Sign Up with Phonology</h3>
                            <p>
                                Visit <a href="https://www.phonology.io" target="_blank" rel="noreferrer">phonology.io</a> and create an account. Select the virtual number plan that fits your
                                business size and goals. Then pick your desired number from the available options.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="step">
                        <CheckCircle className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 3: Activate Your Virtual Number</h3>
                            <p>
                                Complete the activation process by entering the required details (business name,
                                contact info), and configuring routing settings (desktop, mobile, or call center).
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="step">
                        <CallSplit className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 4: Configure Call Routing</h3>
                            <p>
                                Set up routing rules for your communication process:
                                <br />
                                <strong>Single Destination Routing:</strong> Forward calls to a single device.
                                <br />
                                <strong>Multi-Destination Routing:</strong> Route calls to multiple devices at once.
                                <br />
                                <strong>Time-Based Routing:</strong> Adjust routing based on business hours or team availability.
                            </p>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="step">
                        <Settings className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 5: Set Up Advanced Features</h3>
                            <p>
                                <strong>Call Recording:</strong> Log calls for quality assurance and compliance.
                                <br />
                                <strong>IVR Integration:</strong> Guide callers to the right department automatically.
                                <br />
                                <strong>Voicemail Setup:</strong> Capture missed calls with voicemail.
                            </p>
                        </div>
                    </div>

                    {/* Step 6 */}
                    <div className="step">
                    <CheckCircle className="step-icon" />
                    <div className="steps-content">
                            <h3 className="step-title">Step 6: Test Your Virtual Number</h3>
                            <p>
                                Make test calls to ensure:
                                <br />
                                Call quality and clarity, proper routing, and the functionality of voicemail or IVR.
                            </p>
                        </div>
                    </div>

                    {/* Step 7 */}
                    <div className="step">
                        <Analytics className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 7: Monitor and Optimize</h3>
                            <p>
                                Use Phonology’s analytics to track call volumes, durations, and patterns.
                                Adjust your routing and settings based on insights to optimize performance.
                            </p>
                        </div>
                    </div>

                    {/* Step 8 */}
                    <div className="step">
                        <TrendingUp className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 8: Scale as Needed</h3>
                            <p>
                                Add more virtual numbers or modify existing ones when your business expands into
                                new markets or needs to handle higher call volumes.
                            </p>
                        </div>
                    </div>

                    {/* Step 9 */}
                    <div className="step">
                        <School className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 9: Provide Team Training</h3>
                            <p>
                                Show your team how to manage virtual numbers, retrieve voicemails, and adjust call
                                routing. Emphasize how virtual numbers streamline communication.
                            </p>
                        </div>
                    </div>

                    {/* Step 10 */}
                    <div className="step">
                        <HeadsetMic className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 10: Access 24/7 Support</h3>
                            <p>
                                Rely on Phonology’s dedicated support team for technical assistance. We’re here
                                to ensure seamless functionality for all your virtual numbers.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default VirtualNumbersStepsHero;
