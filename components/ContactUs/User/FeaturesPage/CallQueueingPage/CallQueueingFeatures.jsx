import React from 'react'
import { Home, Build, Business, Security } from '@mui/icons-material'; // You can use icons from MUI or replace them with your own
import '../VoicemailFeaturesPage/VoiceKeyFeatures.css'; // Importing the CSS file for styling

const CallQueueingFeatures = () => {
  return (
 <div>
    <section className="key-features">
                     <h2 className="main-heading">
   
                     Key Features
                     </h2>
                     <div className="cards-container">
                         {/* Card 1 */}
                         <div className="feature-card">
                             <div className="card-content">
                                 <Home className="card-icon" />
                                 <h3 className="card-heading">
                                 Dynamic Queue Management
                                 </h3>
                                 <p className="card-description">
                                 Automatically organize and prioritize calls in the queue based on urgency, caller type, or business rules, ensuring high-priority calls are handled first.
                                 </p>
                             </div>
                         </div>
                         {/* Card 2 */}
                         <div className="feature-card">
                             <div className="card-content">
                                 <Build className="card-icon" />
                                 <h3 className="card-heading">
                                 Real-Time Queue Monitoring

                                 </h3>
                                 <p className="card-description">
                                 Monitor queue performance, agent availability, and call durations in real time, giving you full control over your call flow.
</p>

                                 </div>
                         </div>
                         {/* Card 3 */}
                         <div className="feature-card">
                             <div className="card-content">
                                 <Business className="card-icon" />
                                 <h3 className="card-heading">
                                 Customizable On-Hold Messages
                                 </h3>
                                 <p className="card-description">
                                 Engage callers with personalized on-hold messages, music, or updates to provide a professional and informative experience while they wait.
                                 </p>
                                 </div>
                         </div>
                         {/* Card 4 */}
                         <div className="feature-card">
                             <div className="card-content">
                                 <Security className="card-icon" />
                                 <h3 className="card-heading">
                                 Overflow Routing                                 </h3>
                                 <p className="card-description">
                                 Automatically redirect calls to alternate queues, teams, or voicemail when wait times exceed a predefined limit, ensuring no caller is left unattended.
                                 </p>
                             </div>
                         </div>
                     </div>
                 </section>
 </div>
  )
}

export default CallQueueingFeatures
