import React from 'react'
import { AccessAlarm, Speed, ThumbUp, Build } from '@mui/icons-material'; // You can use these icons or replace them
import '../VoicemailFeaturesPage/VoiceKeyBenefits.css'; // Importing the CSS file for styling

const CallAnalyticsBenefits = () => {
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
               Improved Decision-Making

               </h3>
               <p className="key-benefits-card-description">
               Use data-driven insights to identify patterns, predict trends, and optimize communication strategies for better outcomes.
               </p>
             </div>
           </div>
           {/* Card 2 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <Speed className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
               Enhanced Customer Experience


               </h3>
               <p className="key-benefits-card-description">
               Pinpoint areas for improvement in customer interactions, ensuring faster resolution times and more personalized support.

               </p>
               </div>
           </div>
           {/* Card 3 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <ThumbUp className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
               Increased Team Productivity
               </h3>
               <p className="key-benefits-card-description">
               Track agent performance and call handling efficiency, allowing you to address bottlenecks and improve workflow.

</p>
             </div>
           </div>
           {/* Card 4 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <Build className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
  
               Scalable Communication Optimization

               </h3>
               <p className="key-benefits-card-description">
               Adapt and optimize your communication processes as your business grows, ensuring consistent performance and service quality.

</p>
             </div>
           </div>
         </div>
       </section>
  )
}

export default CallAnalyticsBenefits
