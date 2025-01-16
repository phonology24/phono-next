import React from 'react'
import { AccessAlarm, Speed, ThumbUp, Build } from '@mui/icons-material'; // You can use these icons or replace them
import '../VoicemailFeaturesPage/VoiceKeyBenefits.css'; // Importing the CSS file for styling
const CallQueueingBenefits = () => {
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
               Improved Customer Experience

               </h3>
               <p className="key-benefits-card-description">
               Keep callers informed and engaged with estimated wait times and personalized messages, reducing frustration and improving satisfaction.
               </p>
             </div>
           </div>
           {/* Card 2 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <Speed className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
               Efficient Call Handling

               </h3>
               <p className="key-benefits-card-description">
               Organize high call volumes effectively, reducing bottlenecks and enabling your team to manage calls systematically.

               </p>
               </div>
           </div>
           {/* Card 3 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <ThumbUp className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
               Maximized Agent Productivity
               </h3>
               <p className="key-benefits-card-description">
               Distribute calls evenly among available agents, ensuring no team member is overwhelmed while optimizing your resources.

</p>
             </div>
           </div>
           {/* Card 4 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <Build className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
  
               Reduced Missed Calls

               </h3>
               <p className="key-benefits-card-description">
               Prevent call drops by keeping callers in a structured queue, ensuring every inquiry is addressed and no opportunity is lost.

</p>
             </div>
           </div>
         </div>
       </section>
  )
}

export default CallQueueingBenefits
