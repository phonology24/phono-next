import React from 'react';
import {
    Call,
    Settings,
    Tune,
    QueueMusic,
    PersonAdd,
    Analytics,
    Build,
    School,
    Update,
} from '@mui/icons-material';
import './CallQueueManagementGuideHero.css';
import Image from 'next/image';
import CallQueueImage from '/public/Assets/ccc1.png';

const CallQueueManagementGuideHero = () => {
    return (
        <div className="callQueueManagementGuide-container">
            <div className="callQueueManagementGuide-image">
                <Image
                    src={CallQueueImage}
                    alt="Call Queue Management Guide"
                    width={500}
                    height={500}
                />
            </div>
            <div className="callQueueManagementGuide-content">
                <h2 className="callQueueManagementGuide-title">
                    A Complete Guide to Effective Call Queue Management for Better Customer Experience
                </h2>

                <div className="callQueueSteps">
                    {/* Step 1 */}
                    <div className="step">
                        <Call className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 1: Understand Call Queues</h3>
                            <p>
                                Call queues handle incoming calls by organizing them into a virtual line, ensuring
                                they are attended to as soon as an agent is available. This ensures no call goes
                                unanswered, even during peak times, and provides a structured way to handle large call volumes.
                            </p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="step">
                        <Settings className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 2: Activate Call Queue Management</h3>
                            <p>
                                Start by enabling the call queue feature in your Phonology dashboard:
                                <br />
                                Once you log in, make sure to click on the “Call Queue” tab.
                                <br />
                                Turn on call queue functionality for specific departments, teams, or phone lines.
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="step">
                        <Tune className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 3: Configure Queue Settings</h3>
                            <p>
                                Customize the behavior of your call queues to align with your business needs:
                                <br />
                                <strong>Queue Priority:</strong> Set priorities for specific call types, such as support or sales inquiries.
                                <br />
                                <strong>Max Queue Size:</strong> Set the maximum number of callers allowed in the queue at once.
                                <br />
                                <strong>Queue Overflow Rules:</strong> Specify what happens when the queue is full, such as forwarding calls to voicemail or another department.
                            </p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="step">
                        <QueueMusic className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 4: Personalize Hold Experiences</h3>
                            <p>
                                Keep customers actively engaged while they wait in the queue:
                                <br />
                                <strong>Custom Hold Music:</strong> Add music that represents your brand’s identity.
                                <br />
                                <strong>Recorded Messages:</strong> Share helpful information, updates, or estimated wait times with callers.
                                <br />
                                <strong>Callback Options:</strong> Allow customers to request a callback rather than waiting in the queue.
                            </p>
                        </div>
                    </div>

                    {/* Step 5 */}
                    <div className="step">
                        <PersonAdd className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 5: Assign Agents to Queues</h3>
                            <p>
                                Make sure calls are directed to the appropriate agents:
                                <br />
                                Add agents to specific queues based on their expertise or department.
                                <br />
                                Utilize skills-based routing to connect customers with the most qualified agents.
                                <br />
                                Set agent availability rules to avoid routing calls to unavailable team members.
                            </p>
                        </div>
                    </div>

                    {/* Step 6 */}
                    <div className="step">
                        <Analytics className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 6: Monitor Queue Performance</h3>
                            <p>
                                Use Phonology’s analytics tools to track and optimize your call queues:
                                <br />
                                Measure average wait times and call durations.
                                <br />
                                Monitor peak call times to adjust staffing as needed.
                                <br />
                                Identify bottlenecks and make improvements to reduce customer wait times.
                            </p>
                        </div>
                    </div>

                    {/* Step 7 */}
                    <div className="step">
                        <Build className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 7: Test and Fine-Tune Your Queues</h3>
                            <p>
                                Before going live, test your queue settings to ensure everything runs smoothly:
                                <br />
                                Simulate high call volumes to check system performance.
                                <br />
                                Review music and messages to ensure quality.
                                <br />
                                Ensure overflow and callback options are functioning as intended.
                            </p>
                        </div>
                    </div>

                    {/* Step 8 */}
                    <div className="step">
                        <School className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 8: Provide Training for Your Team</h3>
                            <p>
                                Educate your agents on the updated call queue system:
                                <br />
                                Explain how the queues work and how calls are prioritized.
                                <br />
                                Share tips for handling queued calls efficiently and maintaining customer satisfaction.
                            </p>
                        </div>
                    </div>

                    {/* Step 9 */}
                    <div className="step">
                        <Update className="step-icon" />
                        <div className="steps-content">
                            <h3 className="step-title">Step 9: Regularly Update Your Call Queue Settings</h3>
                            <p>
                                As your business evolves, periodically review and update your call queue configurations to accommodate changing needs:
                                <br />
                                Adjust queue sizes and priorities based on customer feedback and analytics.
                                <br />
                                Update hold music and recorded messages regularly to ensure they remain relevant.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallQueueManagementGuideHero;
