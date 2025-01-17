import React from 'react'
import { Home, Build, Business, Security } from '@mui/icons-material'; // You can use icons from MUI or replace them with your own
import '../VoicemailFeaturesPage/VoiceKeyFeatures.css'; // Importing the CSS file for styling


const TfFeatures = () => {
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
                               Global Reach with Local Presence
                               </h3>
                               <p className="card-description">
                               Use virtual numbers to establish a local identity in any region, making it easier for customers to connect with your business.

</p>
                           </div>
                       </div>
                       {/* Card 2 */}
                       <div className="feature-card">
                           <div className="card-content">
                               <Build className="card-icon" />
                               <h3 className="card-heading">
 

                               Customer-Friendly Toll-Free Numbers
                               </h3>
                               <p className="card-description">
                               Provide toll-free numbers to encourage customer inquiries by eliminating call charges for your audience.
                               </p>                          </div>
                       </div>
                       {/* Card 3 */}
                       <div className="feature-card">
                           <div className="card-content">
                               <Business className="card-icon" />
                               <h3 className="card-heading">
                               Flexible Call Routing
                               </h3>
                               <p className="card-description">
                               Route calls from virtual or toll-free numbers to any device, department, or location for efficient handling.
 
                               </p>
                           </div>
                       </div>
                       {/* Card 4 */}
                       <div className="feature-card">
                           <div className="card-content">
                               <Security className="card-icon" />
                               <h3 className="card-heading">
                               Advanced Analytics and Tracking                               </h3>
                               <p className="card-description">
                               Monitor call data, including volume and duration, to gain insights and optimize your communication strategy.
                               </p>
                           </div>
                       </div>
                   </div>
               </section>
     </div>
  )
}

export default TfFeatures
