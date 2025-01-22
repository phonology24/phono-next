import React from "react";
import '../VoicemailFeaturesPage/VoicemailUseCases.css'; // Importing the CSS file for styling
import Image from "next/image";
import image from "../../../../../public/Assets/belgium.png"

const PersonalisedGreetingsUseCases = () => {
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
           <h3 className="usecase-title">Customer Support Centers


           </h3>
           <p className="usecase-content">
           Welcome customers with a professional greeting and keep them engaged with helpful updates during hold times.
           </p>
         </div>
         <div className="usecase-card row">
         <Image className="usecase-image" src={image} alt="Shop" width={400} height={500} />
         <div>
             <div className="usecase-header">
               {/* <h4>Payment</h4> */}
             </div>
             <h3 className="usecase-title">Marketing Campaigns

             </h3>
             <p className="usecase-content">
             Announce special promotions, new products, or upcoming events while callers wait.
   
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
             E-Commerce Businesses

             </h3>
             <p className="usecase-content">
             Inform callers about sales, delivery options, or FAQs through on-hold messages.
             </p>
           </div>
         </div>
         <div className="usecase-card">
           <div className="usecase-header">
             {/* <h4>Rating</h4> */} 
           </div>
           <Image className="usecase-image" src={image} alt="Shop" width={500} height={500} />
           <h3 className="usecase-title">Healthcare Clinics


           </h3>
           <p className="usecase-content">
           Use personalized greetings and music to share health tips or inform patients about services while on hold.  </p> 
         </div>
       </div>
       </>
  )
}

export default PersonalisedGreetingsUseCases
