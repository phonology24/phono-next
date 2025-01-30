import React from "react";
import '../VoicemailFeaturesPage/VoicemailUseCases.css'; // Importing the CSS file for styling
import Image from "next/image";
import image from "../../../../../public/Assets/belgium.png"
import image1 from "../../../../../public/Assets/customsup.jpg"
import image2 from "../../../../../public/Assets/sales.jpg"
import image3 from "../../../../../public/Assets/healthcare1.png"
import image4 from "../../../../../public/Assets/ecom.png"
const IVRUseCases = () => {
  return (
    <>
         <h4 className="usecase-h4">Use Cases
         </h4>
       <div className="usecase-container">
         <div className="usecase-card">
           <div className="usecase-header">
             {/* <h4>Conversational AI</h4> */}
           </div>
           <Image className="usecase-image" src={image1} alt="Shop" width={500} height={500} />
           <h3 className="usecase-title">Customer Support Services

           </h3>
           <p className="usecase-content">
           Automate call routing for support teams, ensuring customer issues are directed to the right agents without delay.
           </p>
         </div>
         <div className="usecase-card row">
         <Image className="usecase-image" src={image2} alt="Shop" width={400} height={500} />
         <div>
             <div className="usecase-header">
               {/* <h4>Payment</h4> */}
             </div>
             <h3 className="usecase-title">Sales and Lead Management
             </h3>
             <p className="usecase-content">
             Use IVR to prequalify leads by gathering essential information before routing them to your sales team, improving conversion rates.
   
             </p>
           </div>
         </div>
         <div className="usecase-card row">
         <Image className="usecase-image" src={image3} alt="Shop" width={400} height={500}/>
         <div>
             <div className="usecase-header">
               {/* <h4>Experience</h4> */}
             </div>
             <h3 className="usecase-title">
Healthcare and Appointment Scheduling

             </h3>
             <p className="usecase-content">
             Allow patients to schedule appointments, check test results, or connect with specific departments via an easy-to-use IVR system.
             </p>
           </div>
         </div>
         <div className="usecase-card">
           <div className="usecase-header">
             {/* <h4>Rating</h4> */} 
           </div>
           <Image className="usecase-image" src={image4} alt="Shop" width={500} height={500} />
           <h3 className="usecase-title">E-Commerce and Order Tracking</h3>
           <p className="usecase-content">
           Enable customers to track orders, check delivery status, or update account details through self-service IVR, enhancing convenience.   </p> 
         </div>
       </div>
       </>
  )
}

export default IVRUseCases
