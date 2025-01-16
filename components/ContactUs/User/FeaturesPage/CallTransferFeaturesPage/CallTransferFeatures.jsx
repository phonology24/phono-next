import React from 'react'
import { Home, Build, Business, Security } from '@mui/icons-material'; // You can use icons from MUI or replace them with your own
import '../VoicemailFeaturesPage/VoiceKeyFeatures.css'; // Importing the CSS file for styling

const CallTransferFeatures = () => {
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
                                 Blind and Attended Transfers                                 </h3>
                                 <p className="card-description">
                                 Transfer calls directly without interaction (blind transfer) or speaks to the recipient before completing the transfer (attended transfer) for a more personalized touch.
                                 </p>
                             </div>
                         </div>
                         {/* Card 2 */}
                         <div className="feature-card">
                             <div className="card-content">
                                 <Build className="card-icon" />
                                 <h3 className="card-heading">
                                 Internal and External Transfers
                                 </h3>
                                 <p className="card-description">
                                 Seamlessly transfer calls within your organization or to external numbers, ensuring efficient communication across your network.                                 </p>

                                 </div>
                         </div>
                         {/* Card 3 */}
                         <div className="feature-card">
                             <div className="card-content">
                                 <Business className="card-icon" />
                                 <h3 className="card-heading">
                                 Real-Time Monitoring and Control
                                 </h3>
                                 <p className="card-description">
                                 Monitor call transfer activity and gain insights into how calls are being managed, improving operational efficiency.
                                 </p>
                                 </div>
                         </div>
                         {/* Card 4 */}
                         <div className="feature-card">
                             <div className="card-content">
                                 <Security className="card-icon" />
                                 <h3 className="card-heading">
                                 Multi-Device Compatibility
                                 </h3>
                                 <p className="card-description">
                                 Transfer calls effortlessly from your desk phone, softphone, or mobile device, providing flexibility in how calls are managed.
                                 </p>
                             </div>
                         </div>
                     </div>
                 </section>
 </div>
  )
}

export default CallTransferFeatures
