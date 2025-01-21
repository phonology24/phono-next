import React from 'react'
import "/components/AIVoice/UseCasesAI.css";
import Image from "next/image";
import image from "../../../../../public/Assets/belgium.png"
const TfUseCases = () => {
  return (
     <>
          <h4 className="usecase-h4">Use Cases
          </h4>
        <div className="usecase-container">
          <div className="usecase-card">
            <div className="usecase-header">
              {/* <h4>Conversational AI</h4> */}
            </div>
            <Image className="usecase-image" src={image} alt="Shop" width={500} height={500} />
            <h3 className="usecase-title">Global Business Expansion 
            </h3>
            <p className="usecase-content">
            Use virtual numbers to create a local presence in international markets, fostering trust and accessibility for global clients.

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
              Offer toll-free numbers for customer inquiries, ensuring easy and cost-free communication for your audience.
    
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

              Marketing Campaign Tracking
 
              </h3>
              <p className="usecase-content">
              Assign unique virtual numbers to campaigns to measure their effectiveness and track responses.
              </p>
            </div>
          </div>
          <div className="usecase-card">
            <div className="usecase-header">
              {/* <h4>Rating</h4> */} 
            </div>
            <Image className="usecase-image" src={image} alt="Shop" width={500} height={500} />
            <h3 className="usecase-title">
            E-Commerce and Retail Support
 
 
 
            </h3>
            <p className="usecase-content">
            Provide customers with toll-free numbers for inquiries related to orders, returns, or product information. </p> 
          </div>
        </div>
        </>
  )
}

export default TfUseCases
