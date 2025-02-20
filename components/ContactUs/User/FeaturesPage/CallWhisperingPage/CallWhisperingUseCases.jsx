import React from "react";
import "/components/AIVoice/UseCasesAI.css";
import Image from "next/image";
import image from "../../../../../public/Assets/cw1.png"
import image1 from "../../../../../public/Assets/cw2.png"
import image2 from "../../../../../public/Assets/cw3.jpg"
import image3 from "../../../../../public/Assets/cw4.jpg"

const CallWhisperingUseCases = () => {
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
          <h3 className="usecase-title">Onboarding and Training New Agents




          </h3>
          <p className="usecase-content">
            Guide new agents during live calls to build their confidence and improve their communication skills.
          </p>
        </div>
        <div className="usecase-card row">
          <Image className="usecase-image" src={image1} alt="Shop" width={400} height={500} />
          <div>
            <div className="usecase-header">
              {/* <h4>Payment</h4> */}
            </div>
            <h3 className="usecase-title">Sales Call Coaching



            </h3>
            <p className="usecase-content">
              Help sales agents navigate negotiations or complex customer objections for better conversion rates.


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

              Escalation Assistance
            </h3>
            <p className="usecase-content">
              Support agents during calls with frustrated or escalated customers, ensuring effective conflict resolution.
            </p>
          </div>
        </div>
        <div className="usecase-card">
          <div className="usecase-header">
            {/* <h4>Rating</h4> */}
          </div>
          <Image className="usecase-image" src={image3} alt="Shop" width={500} height={500} />
          <h3 className="usecase-title">Quality Assurance and Oversight



          </h3>
          <p className="usecase-content">
            Monitor live calls and provide immediate feedback to maintain consistent service standards.               </p>               </div>
      </div>
    </>
  )
}

export default CallWhisperingUseCases



