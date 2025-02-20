import React from 'react'
import '../VoicemailFeaturesPage/VoicemailUseCases.css'; // Importing the CSS file for styling
import Image from "next/image";
import image from "../../../../../public/Assets/sa1.jpg"
import image1 from "../../../../../public/Assets/sa2.jpg"
import image2 from "../../../../../public/Assets/sa3.jpg"
import image3 from "../../../../../public/Assets/sa4.jpg"
const StickyAgentUseCases = () => {
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
           <h3 className="usecase-title">Customer Retention Programs



           </h3>
           <p className="usecase-content">
           Assign returning customers to the same agent for a personalized touch, improving loyalty and satisfaction.
           </p>
         </div>
         <div className="usecase-card row">
         <Image className="usecase-image" src={image1} alt="Shop" width={400} height={500} />
         <div>
             <div className="usecase-header">
               {/* <h4>Payment</h4> */}
             </div>
             <h3 className="usecase-title">Technical Support Teams


             </h3>
             <p className="usecase-content">
             Connect customers with agents already familiar with their technical issues, ensuring faster resolutions.
   
             </p>
           </div>
         </div>
         <div className="usecase-card row">
         <Image className="usecase-image" src={image2} alt="Shop" width={400} height={500}/>
         <div>
             <div className="usecase-header">
               {/* <h4>Experience</h4> */}
             </div>
             <h3 className="usecase-title">
             Account Management Services

             </h3>
             <p className="usecase-content">
             Maintain strong client relationships by assigning dedicated account managers for all interactions.
             </p>
           </div>
         </div>
         <div className="usecase-card">
           <div className="usecase-header">
             {/* <h4>Rating</h4> */} 
           </div>
           <Image className="usecase-image" src={image3} alt="Shop" width={500} height={500} />
           <h3 className="usecase-title">VIP Customer Support



           </h3>
           <p className="usecase-content">
           Offer premium customers a consistent point of contact for all their queries, enhancing their experience. </p> 
         </div>
       </div>
       </>
  )
}

export default StickyAgentUseCases
