import React from 'react'
import { AccessAlarm, Speed, ThumbUp, Build } from '@mui/icons-material'; // You can use these icons or replace them
import '../VoicemailFeaturesPage/VoiceKeyBenefits.css'; // Importing the CSS file for styling

const TfBenefits = () => {
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
             Improved Customer Accessibility
             </h3>
             <p className="key-benefits-card-description">
             Make it easy for customers to reach your business, boosting satisfaction and trust.
             </p>
           </div>
         </div>
         {/* Card 2 */}
         <div className="key-benefits-card">
           <div className="key-benefits-card-content">
             <Speed className="key-benefits-card-icon" />
             <h3 className="key-benefits-card-heading">
             Enhanced Professionalism
             </h3>
             <p className="key-benefits-card-description">
             Build a credible image with local or toll-free numbers that align with your brand's identity.
             </p>
           </div>
         </div>
         {/* Card 3 */}
         <div className="key-benefits-card">
           <div className="key-benefits-card-content">
             <ThumbUp className="key-benefits-card-icon" />
             <h3 className="key-benefits-card-heading">
             Cost-Efficient Communication

             </h3>
             <p className="key-benefits-card-description">
             Enable cost-effective global communication without the need for physical office setups.
             </p>
           </div>
         </div>
         {/* Card 4 */}
         <div className="key-benefits-card">
           <div className="key-benefits-card-content">
             <Build className="key-benefits-card-icon" />
             <h3 className="key-benefits-card-heading">

             Scalable for Growth
             </h3>
             <p className="key-benefits-card-description">
             Expand your operations seamlessly with virtual and toll-free numbers, adapting to new markets effortlessly.
             </p>
           </div>
         </div>
       </div>
     </section>
  )
}

export default TfBenefits
