import React from 'react'
import { AccessAlarm, Speed, ThumbUp, Build } from '@mui/icons-material'; // You can use these icons or replace them
import '../VoicemailFeaturesPage/VoiceKeyBenefits.css'; // Importing the CSS file for styling

const StickyAgentBenefits = () => {
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
             Personalized Customer Experience
             </h3>
             <p className="key-benefits-card-description">
             Strengthen customer relationships by maintaining continuity and familiarity in interactions.
             </p>
           </div>
         </div>
         {/* Card 2 */}
         <div className="key-benefits-card">
           <div className="key-benefits-card-content">
             <Speed className="key-benefits-card-icon" />
             <h3 className="key-benefits-card-heading">
             Faster Issue Resolution             </h3>
             <p className="key-benefits-card-description">
             Minimize the need for customers to repeat their concerns, reducing call handling times.
             </p>
           </div>
         </div>
         {/* Card 3 */}
         <div className="key-benefits-card">
           <div className="key-benefits-card-content">
             <ThumbUp className="key-benefits-card-icon" />
             <h3 className="key-benefits-card-heading">
             Increased Customer Satisfaction

             </h3>
             <p className="key-benefits-card-description">
             Provide a seamless and efficient service experience, leading to higher customer retention rates.
             </p>
           </div>
         </div>
         {/* Card 4 */}
         <div className="key-benefits-card">
           <div className="key-benefits-card-content">
             <Build className="key-benefits-card-icon" />
             <h3 className="key-benefits-card-heading">

             Improved Agent Efficiency
             </h3>
             <p className="key-benefits-card-description">
             Enable agents to handle repeat callers more effectively by leveraging prior knowledge of their concerns.
             </p>
           </div>
         </div>
       </div>
     </section>
  )
}

export default StickyAgentBenefits
