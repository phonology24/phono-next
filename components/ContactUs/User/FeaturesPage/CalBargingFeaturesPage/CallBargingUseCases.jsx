import React from "react";
import '../VoicemailFeaturesPage/VoicemailUseCases.css'; // Importing the CSS file for styling
import Image from "next/image";
import image from "../../../../../public/Assets/cb1.jpg"
import image1 from "../../../../../public/Assets/cb2.png"
import image2 from "../../../../../public/Assets/cb3.jpg"
import image3 from "../../../../../public/Assets/cb4.jpg"

const CallBargingUseCases = () => {
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
                 <h3 className="usecase-title">Customer Support Escalations


      
                 </h3>
                 <p className="usecase-content">
                 Help agents handle escalated calls by joining conversations and resolving complex issues directly, ensuring customer satisfaction.
                 </p>
               </div>
               <div className="usecase-card row">
               <Image className="usecase-image" src={image1} alt="Shop" width={400} height={500} />
               <div>
                   <div className="usecase-header">
                     {/* <h4>Payment</h4> */}
                   </div>
                   <h3 className="usecase-title">Sales Team Coaching


                   </h3>
                   <p className="usecase-content">
                   Provide real-time coaching for sales representatives during critical calls to maximize conversion opportunities and refine sales techniques.
         
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
                   Training and Onboarding
      
                   </h3>
                   <p className="usecase-content">
                   Guide new hires during their live calls, offering instant feedback and support to build their confidence and competence.
                   </p>
                 </div>
               </div>
               <div className="usecase-card">
                 <div className="usecase-header">
                   {/* <h4>Rating</h4> */} 
                 </div>
                 <Image className="usecase-image" src={image3} alt="Shop" width={500} height={500} />
                 <h3 className="usecase-title">Quality Assurance Monitoring


                 </h3>
                 <p className="usecase-content">
                 Oversee live customer interactions to ensure agents adhere to company policies and maintain high service standards.
                                  </p>               </div>
             </div>
             </>
  )
}

export default CallBargingUseCases
