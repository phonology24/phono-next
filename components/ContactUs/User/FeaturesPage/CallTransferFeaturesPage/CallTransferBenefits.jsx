import React from 'react'
import { AccessAlarm, Speed, ThumbUp, Build } from '@mui/icons-material'; // You can use these icons or replace them
import '../VoicemailFeaturesPage/VoiceKeyBenefits.css'; // Importing the CSS file for styling
const CallTransferBenefits = () => {
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
               Never Miss a Call

               </h3>
               <p className="key-benefits-card-description">
               Redirect calls to the right person or device, ensuring important opportunities are not lost due to unavailability or location constraints.
               </p>
             </div>
           </div>
           {/* Card 2 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <Speed className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
               Enhanced Customer Satisfaction
               </h3>
               <p className="key-benefits-card-description">
               Sales teams or field agents can have calls forwarded to their mobile devices, ensuring they never miss an important client interaction.
               Provide faster, more efficient responses by routing calls to the appropriate team or individual, reducing customer wait times.
               </p>
               </div>
           </div>
           {/* Card 3 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <ThumbUp className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
               Improved Business Continuity
               </h3>
               <p className="key-benefits-card-description">
               Maintain seamless communication during travel, remote work, or system downtime, ensuring your business stays operational.
               </p>
             </div>
           </div>
           {/* Card 4 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <Build className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
  
               Increased Flexibility

               </h3>
               <p className="key-benefits-card-description">
               Adapt to changing work environments by staying connected on any device, enabling efficient collaboration across distributed teams.
               </p>
             </div>
           </div>
         </div>
       </section>
  )
}

export default CallTransferBenefits
