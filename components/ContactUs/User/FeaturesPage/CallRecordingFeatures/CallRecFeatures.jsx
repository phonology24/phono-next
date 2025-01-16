import React from 'react'
import { AccessAlarm, Speed, ThumbUp, Build } from '@mui/icons-material'; // You can use these icons or replace them
import '../VoicemailFeaturesPage/VoiceKeyBenefits.css'; // Importing the CSS file for styling

const CallRecFeatures = () => {
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
               High-Quality Audio Capture

               </h3>
               <p className="key-benefits-card-description">
               Record calls in crystal-clear audio, ensuring every detail of the conversation is accurately captured for future review.
               </p>
             </div>
           </div>
           {/* Card 2 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <Speed className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
               Secure Storage and Access
               </h3>
               <p className="key-benefits-card-description">
               Store call recordings securely in the cloud or on-premises, with easy access through a centralized portal for authorized personnel.

               </p>
               </div>
           </div>
           {/* Card 3 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <ThumbUp className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
               Customizable Recording Rules
               </h3>
               <p className="key-benefits-card-description">
               Choose which calls to record based on criteria such as agent, department, or customer type, tailoring the feature to your business needs.
               </p>
             </div>
           </div>
           {/* Card 4 */}
           <div className="key-benefits-card">
             <div className="key-benefits-card-content">
               <Build className="key-benefits-card-icon" />
               <h3 className="key-benefits-card-heading">
  
               Advanced Search and Playback

               </h3>
               <p className="key-benefits-card-description">
               Quickly locate and playback recordings with searchable metadata, such as date, time, or participant, saving time and improving efficiency.
               </p>
             </div>
           </div>
         </div>
       </section>
  )
}

export default CallRecFeatures
