import React from 'react'
import { AccessAlarm, Speed, ThumbUp, Build } from '@mui/icons-material'; // You can use these icons or replace them
import '../VoicemailFeaturesPage/VoiceKeyBenefits.css'; // Importing the CSS file for styling

const CallRecBenefits = () => {
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
               Enhanced Quality Assurance

               </h3>
               <p className="key-benefits-card-description">
               Monitor and review calls to identify areas for improvement, ensuring consistent service quality across your team.               </p>
             </div>
           </div>
           {/* Card 2 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <Speed className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
               Dispute Resolution
               </h3>
               <p className="key-benefits-card-description">
               Use call recordings as evidence to clarify misunderstandings, resolve conflicts, and maintain transparency with customers.

               </p>
               </div>
           </div>
           {/* Card 3 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <ThumbUp className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
               Compliance and Legal Security
               </h3>
               <p className="key-benefits-card-description">
               Stay compliant with industry regulations and legal requirements by securely storing and documenting call interactions.
               </p>
             </div>
           </div>
           {/* Card 4 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <Build className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
  
               Training and Development

               </h3>
               <p className="key-benefits-card-description">
               Leverage recorded calls for agent training, highlighting best practices, and addressing gaps to improve team performance.
               </p>
             </div>
           </div>
         </div>
       </section>
  )
}

export default CallRecBenefits
