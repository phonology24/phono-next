import React from "react";
import '../VoicemailFeaturesPage/VoicemailUseCases.css'; // Importing the CSS file for styling
import Image from "next/image";
import image from "../../../../../public/Assets/cq1.jpg"
import image1 from "../../../../../public/Assets/cq2.png"
import image2 from "../../../../../public/Assets/cq3.jpg"
import image3 from "../../../../../public/Assets/cq4.jpg"
import image4 from "../../../../../public/Assets/cq5.jpg"

const CallQueueingUseCases = () => {
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
                    <Image className="usecase-image" src={image2} alt="Shop" width={500} height={500} />
                    <h3 className="usecase-title">Customer Support Centers




                    </h3>
                    <p className="usecase-content">
                    Manage high volumes of support calls during peak hours, ensuring every customer is attended to without delays or frustration.
                    </p>
                </div>
                <div className="usecase-card row">
                    <Image className="usecase-image" src={image1} alt="Shop" width={400} height={500} />
                    <div>
                        <div className="usecase-header">
                            {/* <h4>Payment</h4> */}
                        </div>
                        <h3 className="usecase-title">Sales and Lead Generation



                        </h3>
                        <p className="usecase-content">
                        Keep leads engaged in a queue while connecting them to the next available sales representative, ensuring no potential opportunity is missed.

                        </p>
                    </div>
                </div>
                <div className="usecase-card row">
                    <Image className="usecase-image" src={image3} alt="Shop" width={400} height={500} />
                    <div>
                        <div className="usecase-header">
                            {/* <h4>Experience</h4> */}
                        </div>
                        <h3 className="usecase-title">
                        Healthcare and Appointment Scheduling


                        </h3>
                        <p className="usecase-content">
                        Organize patient inquiries and appointment requests efficiently, reducing wait times and improving service delivery.
                        </p>
                    </div>
                </div>
                <div className="usecase-card">
                    <div className="usecase-header">
                        {/* <h4>Rating</h4> */}
                    </div>
                    <Image className="usecase-image" src={image4} alt="Shop" width={500} height={500} />
                    <h3 className="usecase-title">E-Commerce and Order Management


                    </h3>
                    <p className="usecase-content">
                    Handle inquiries about orders, shipping, or returns systematically, providing customers with a smooth and reliable service experience.                    </p>
                </div>
            </div>
        </>
  )
}

export default CallQueueingUseCases
