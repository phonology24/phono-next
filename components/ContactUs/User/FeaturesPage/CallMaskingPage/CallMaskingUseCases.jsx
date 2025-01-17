import React from "react";
import "/components/AIVoice/UseCasesAI.css";
import Image from "next/image";
import image from "../../../../../public/Assets/belgium.png"

const CallMaskingUseCases = () => {
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
                  <h3 className="usecase-title">E-Commerce and Delivery Services

 
       
                  </h3>
                  <p className="usecase-content">
                  Connect delivery personnel and customers without sharing personal contact details, ensuring privacy for both parties.
                  </p>
                </div>
                <div className="usecase-card row">
                <Image className="usecase-image" src={image} alt="Shop" width={400} height={500} />
                <div>
                    <div className="usecase-header">
                      {/* <h4>Payment</h4> */}
                    </div>
                    <h3 className="usecase-title">Customer Support Centers

 
                    </h3>
                    <p className="usecase-content">
                    Enable agents to assist customers securely while maintaining professional boundaries.

          
                    </p>
                  </div>
                </div>
                <div className="usecase-card row">
                <Image className="usecase-image" src={image} alt="Shop" width={400} height={500}/>
                <div>
                    <div className="usecase-header">
                      {/* <h4>Experience</h4> */}
                    </div>
                    <h3 className="usecase-title">
                    Ride-Sharing Platforms       
                    </h3>
                    <p className="usecase-content">
                    Facilitate communication between drivers and passengers while keeping personal numbers confidential.
                    </p>
                  </div>
                </div>
                <div className="usecase-card">
                  <div className="usecase-header">
                    {/* <h4>Rating</h4> */} 
                  </div>
                  <Image className="usecase-image" src={image} alt="Shop" width={500} height={500} />
                  <h3 className="usecase-title">Healthcare and Teleconsultation

 
                  </h3>
                  <p className="usecase-content">
                  Allow doctors and patients to communicate privately, ensuring a secure and professional interaction.                  </p>               </div>
              </div>
              </>
  )
}

export default CallMaskingUseCases
