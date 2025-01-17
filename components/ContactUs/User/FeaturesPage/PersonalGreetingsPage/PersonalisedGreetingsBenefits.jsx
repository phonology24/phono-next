import React from 'react'
import { AccessAlarm, Speed, ThumbUp, Build } from '@mui/icons-material'; // You can use these icons or replace them
import '../VoicemailFeaturesPage/VoiceKeyBenefits.css'; // Importing the CSS file for styling

const PersonalisedGreetingsBenefits = () => {
  return (
 <section className="key-benefits-section">
       <h2 className="key-benefits-heading">
       Key Benefits

 
       </h2>
       <div className="key-benefits-cards-container">
         {/* Card 1 */}
         <div className="key-benefits-card">
           <div className="key-benefits-card-content">
             <AccessAlarm className="key-benefits-card-icon" />
             <h3 className="key-benefits-card-heading">
             Enhanced Professionalism
             </h3>
             <p className="key-benefits-card-description">
             Impress callers with polished, branded messages that reinforce your company’s image.
             </p>
           </div>
         </div>
         {/* Card 2 */}
         <div className="key-benefits-card">
           <div className="key-benefits-card-content">
             <Speed className="key-benefits-card-icon" />
             <h3 className="key-benefits-card-heading">
             Increased Caller Engagement
             </h3>
             <p className="key-benefits-card-description">
             Keep callers informed or entertained during hold times, reducing frustration and enhancing satisfaction.
             </p>
           </div>
         </div>
         {/* Card 3 */}
         <div className="key-benefits-card">
           <div className="key-benefits-card-content">
             <ThumbUp className="key-benefits-card-icon" />
             <h3 className="key-benefits-card-heading">
             Brand Consistency

             </h3>
             <p className="key-benefits-card-description">
             Reflect your company’s tone and values in every customer interaction with personalized messaging.
             </p>
           </div>
         </div>
         {/* Card 4 */}
         <div className="key-benefits-card">
           <div className="key-benefits-card-content">
             <Build className="key-benefits-card-icon" />
             <h3 className="key-benefits-card-heading">

             Flexible Customization
             </h3>
             <p className="key-benefits-card-description">
             Adapt messages and music quickly to align with campaigns, seasons, or events.
             </p>
           </div>
         </div>
       </div>
     </section>
  )
}

export default PersonalisedGreetingsBenefits
