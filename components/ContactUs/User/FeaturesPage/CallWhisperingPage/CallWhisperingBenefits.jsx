import React from 'react'
import { AccessAlarm, Speed, ThumbUp, Build } from '@mui/icons-material'; // You can use these icons or replace them
import '../VoicemailFeaturesPage/VoiceKeyBenefits.css'; // Importing the CSS file for styling
const CallWhisperingBenefits = () => {
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
               Improved Agent Performance

               </h3>
               <p className="key-benefits-card-description">
               Real-time guidance helps agents handle difficult situations more effectively, boosting their confidence and success rates.               </p>
             </div>
           </div>
           {/* Card 2 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <Speed className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
               Enhanced Customer Satisfaction
               </h3>
               <p className="key-benefits-card-description">Support agents during complex interactions to ensure quicker and more accurate resolutions for customers.


               </p>
               </div>
           </div>
           {/* Card 3 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <ThumbUp className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">

               Better Training Opportunities
               </h3>
               <p className="key-benefits-card-description">
               Train new agents by offering on-the-spot feedback and demonstrating best practices during live calls.               </p>
             </div>
           </div>
           {/* Card 4 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <Build className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">  

               Consistent Service Quality
               </h3>
               <p className="key-benefits-card-description">
               Maintain high standards by ensuring agents have the support they need to handle calls professionally.
               </p>
             </div>
           </div>
         </div>
       </section>
  )
}

export default CallWhisperingBenefits
