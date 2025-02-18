import React from "react";
import '../VoicemailFeaturesPage/VoicemailUseCases.css'; // Importing the CSS file for styling
import Image from "next/image";
import image from "../../../../../public/Assets/col.jpg"
import image1 from "../../../../../public/Assets/peeps.jpg"
import image2 from "../../../../../public/Assets/doc-on-phone.jpg"
import image3 from "../../../../../public/Assets/team-collab.jpg"
const CustomizedReportsUseCases = () => {
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
                    <h3 className="usecase-title">Customer Support and Escalations



                    </h3>
                    <p className="usecase-content">
                        Quickly transfer calls to the appropriate support agent or manager to resolve customer issues without unnecessary wait times.
                    </p>
                </div>
                <div className="usecase-card row">
                    <Image className="usecase-image" src={image1} alt="Shop" width={400} height={500} />
                    <div>
                        <div className="usecase-header">
                            {/* <h4>Payment</h4> */}
                        </div>
                        <h3 className="usecase-title">Sales and Lead Management


                        </h3>
                        <p className="usecase-content">
                            Connect leads to the right sales representatives instantly, improving response times and boosting conversion rates.

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
                            Healthcare and Service Coordination


                        </h3>
                        <p className="usecase-content">
                            Allow patients or clients to reach specific departments or specialists seamlessly through well-managed call transfers.
                        </p>
                    </div>
                </div>
                <div className="usecase-card">
                    <div className="usecase-header">
                        {/* <h4>Rating</h4> */}
                    </div>
                    <Image className="usecase-image" src={image3} alt="Shop" width={500} height={500} />
                    <h3 className="usecase-title">Team Collaboration in Distributed Workplaces

                    </h3>
                    <p className="usecase-content">
                        Transfer calls between remote team members to ensure smooth communication, no matter where your team is located.
                    </p>
                </div>
            </div>
        </>
  )
}

export default CustomizedReportsUseCases
