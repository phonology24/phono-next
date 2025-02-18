import React from "react";
import '../VoicemailFeaturesPage/VoicemailUseCases.css'; // Importing the CSS file for styling
import Image from "next/image";
import image from "../../../../../public/Assets/colleague.jpg"
import image1 from "../../../../../public/Assets/client.avif"
import image2 from "../../../../../public/Assets/dd.jpg"
import image3 from "../../../../../public/Assets/crysis.jpg"

const CallConferenceUSeCases = () => {
    return (
        <>
            <h4 className="usecase-h4">
                Use Cases
            </h4>
            <div className="usecase-container">
                <div className="usecase-card">
                    <div className="usecase-header">
                        {/* <h4>Conversational AI</h4> */}
                    </div>
                    <Image className="usecase-image" src={image} alt="Shop" width={500} height={500} />
                    <h3 className="usecase-title">Team Collaboration




                    </h3>
                    <p className="usecase-content">
                        Host regular team meetings to discuss projects, share updates, and align goals, regardless of team members’ locations.
                    </p>
                </div>
                <div className="usecase-card row">
                    <Image className="usecase-image" src={image1} alt="Shop" width={400} height={500} />
                    <div>
                        <div className="usecase-header">
                            {/* <h4>Payment</h4> */}
                        </div>
                        <h3 className="usecase-title">Client Presentations and Sales Pitches


                        </h3>
                        <p className="usecase-content">
                            Deliver impactful client presentations or sales pitches with multiple participants, showcasing your professionalism and expertise.

                        </p>
                    </div>
                </div>
                <div className="usecase-card row">
                    <Image className="usecase-image" src={image2} alt="Shop" width={400} height={500} />
                    <div>
                        <div className="usecase-header">
                            {/* <h4>Experience</h4> */}
                        </div>
                        <h3 className="usecase-title">
                            Remote Training Sessions

                        </h3>
                        <p className="usecase-content">
                            Conduct virtual training for employees or customers, providing real-time guidance and interaction in a structured format.
                        </p>
                    </div>
                </div>
                <div className="usecase-card">
                    <div className="usecase-header">
                        {/* <h4>Rating</h4> */}
                    </div>
                    <Image className="usecase-image" src={image3} alt="Shop" width={500} height={500} />
                    <h3 className="usecase-title">Crisis and Decision Management



                    </h3>
                    <p className="usecase-content">
                        Quickly assemble key stakeholders for urgent discussions, ensuring timely decisions during critical business scenarios.                                  </p>               </div>
            </div>
        </>
    )
}

export default CallConferenceUSeCases
