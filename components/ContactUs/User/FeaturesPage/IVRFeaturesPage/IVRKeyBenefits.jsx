import React from 'react'
import { AccessAlarm, Speed, ThumbUp, Build } from '@mui/icons-material'; // You can use these icons or replace them
import '../VoicemailFeaturesPage/VoiceKeyBenefits.css'; // Importing the CSS file for styling

const IVRKeyBenefits = () => {
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
             Enhanced Customer Experience
             </h3>
             <p className="key-benefits-card-description">
             Reduce wait times and connect customers to the right person or department seamlessly, ensuring quicker resolutions.
             </p>
           </div>
         </div>
         {/* Card 2 */}
         <div className="key-benefits-card">
           <div className="key-benefits-card-content">
             <Speed className="key-benefits-card-icon" />
             <h3 className="key-benefits-card-heading">
             24/7 Availability
             </h3>
             <p className="key-benefits-card-description">
             Provide round-the-clock support with IVR, allowing customers to access information or leave messages even outside business hours.
             </p>
           </div>
         </div>
         {/* Card 3 */}
         <div className="key-benefits-card">
           <div className="key-benefits-card-content">
             <ThumbUp className="key-benefits-card-icon" />
             <h3 className="key-benefits-card-heading">
             Increased Efficiency
             </h3>
             <p className="key-benefits-card-description">
             Automate repetitive tasks like FAQs and call routing, freeing up your team to focus on more critical tasks and reducing operational costs.
             </p>
           </div>
         </div>
         {/* Card 4 */}
         <div className="key-benefits-card">
           <div className="key-benefits-card-content">
             <Build className="key-benefits-card-icon" />
             <h3 className="key-benefits-card-heading">

             Professional Brand Image
             </h3>
             <p className="key-benefits-card-description">
             Impress callers with a well-structured IVR system that showcases your business's professionalism and commitment to service excellence.
             </p>
           </div>
         </div>
       </div>
     </section>
  )
}

export default IVRKeyBenefits
