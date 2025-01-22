import React from "react";
import '../VoicemailFeaturesPage/VoicemailUseCases.css'; // Importing the CSS file for styling
import Image from "next/image";
import image from "../../../../../public/Assets/belgium.png"

const CallForwardingUseCases = () => {
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
                 <h3 className="usecase-title">Remote Teams and Telecommuting

      
                 </h3>
                 <p className="usecase-content">
                 Forward calls to remote employees, ensuring seamless connectivity and collaboration, regardless of location.
                 </p>
               </div>
               <div className="usecase-card row">
               <Image className="usecase-image" src={image} alt="Shop" width={400} height={500} />
               <div>
                   <div className="usecase-header">
                     {/* <h4>Payment</h4> */}
                   </div>
                   <h3 className="usecase-title">On-the-Go Professionals

                   </h3>
                   <p className="usecase-content">
                   Sales teams or field agents can have calls forwarded to their mobile devices, ensuring they never miss an important client interaction.
         
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
                   Customer Support Availability
      
                   </h3>
                   <p className="usecase-content">
                   Ensure 24/7 customer support by forwarding after-hours calls to on-call agents or alternate support centers.
                   </p>
                 </div>
               </div>
               <div className="usecase-card">
                 <div className="usecase-header">
                   {/* <h4>Rating</h4> */} 
                 </div>
                 <Image className="usecase-image" src={image} alt="Shop" width={500} height={500} />
                 <h3 className="usecase-title">Business Continuity Planning

                 </h3>
                 <p className="usecase-content">
                 Redirect calls during system outages or office relocations to ensure uninterrupted communication and minimize downtime.
                 </p>               </div>
             </div>
             </>
  )
}

export default CallForwardingUseCases
