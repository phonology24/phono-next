import React from 'react'
import { AccessAlarm, Speed, ThumbUp, Build } from '@mui/icons-material'; // You can use these icons or replace them
import '../VoicemailFeaturesPage/VoiceKeyBenefits.css'; 

const CustomizedReportBenefits = () => {
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
               Enhanced Communication Insights

               </h3>
               <p className="key-benefits-card-description">
               Gain a deep understanding of your call data to identify trends, optimize performance, and improve customer interactions.

</p>
             </div>
           </div>
           {/* Card 2 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <Speed className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
               Efficient Resource Management               </h3>
               <p className="key-benefits-card-description">
               Use detailed reports to allocate resources effectively, ensuring better call handling and agent productivity.

               </p>
               </div>
           </div>
           {/* Card 3 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <ThumbUp className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">

               Real-Time Decision-Making
               </h3>
               <p className="key-benefits-card-description">
               Access up-to-date insights to adapt quickly to evolving customer demands and operational challenges.
               </p>
             </div>
           </div>
           {/* Card 4 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <Build className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
  

               Improved Business Performance

               </h3>
               <p className="key-benefits-card-description">
               Track key metrics to refine your telephony strategy, boost customer satisfaction, and drive long-term success.
               </p>
             </div>
           </div>
         </div>
       </section>
  )
}

export default CustomizedReportBenefits
