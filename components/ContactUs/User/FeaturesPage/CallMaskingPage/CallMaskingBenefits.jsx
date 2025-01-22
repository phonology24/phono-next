import React from 'react'
import { AccessAlarm, Speed, ThumbUp, Build } from '@mui/icons-material'; 
import '../VoicemailFeaturesPage/VoiceKeyBenefits.css'; 
const CallMaskingBenefits = () => {
return (
   <section className="key-benefits-section">
         <h2 className="key-benefits-heading">
         Key Benefits  
         </h2>
         <div className="key-benefits-cards-container">
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <AccessAlarm className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
               Enhanced Privacy

               </h3>
               <p className="key-benefits-card-description">
               Protect both customer and agent phone numbers, ensuring safe and secure communication.
               </p>
             </div>
           </div>

           {/* Card 2 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <Speed className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
               Improved Trust and Professionalism               </h3>
               <p className="key-benefits-card-description">Build credibility by offering secure interactions that respect personal boundaries.

               </p>
               </div>
           </div>

           {/* Card 3 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <ThumbUp className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
               Dispute Resolution
               </h3>
               <p className="key-benefits-card-description">
               Maintain transparency with recorded and monitored masked calls to resolve conflicts effectively.
               </p>
             </div>
           </div>
           
           {/* Card 4 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <Build className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">  
               Scalable for Growing Businesses
               </h3>
               <p className="key-benefits-card-description">
               Easily implement call masking as the scale of your operation, ensuring consistent privacy protection.
               </p>
             </div>
           </div>
         </div>
       </section>
  )
}

export default CallMaskingBenefits
