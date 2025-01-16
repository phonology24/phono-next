import React from 'react'
import { Home, Build, Business, Security } from '@mui/icons-material'; // You can use icons from MUI or replace them with your own
import '../VoicemailFeaturesPage/VoiceKeyFeatures.css'; // Importing the CSS file for styling

const CallAnalyticsFeatures = () => {
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
                                 Real-Time Data Insights                                 </h3>
                                 <p className="card-description">
                                 Access real-time analytics on call volumes, durations, response times, and more, enabling you to monitor performance as it happens.
                                 </p>
                             </div>
                         </div>
                         {/* Card 2 */}
                         <div className="feature-card">
                             <div className="card-content">
                                 <Build className="card-icon" />
                                 <h3 className="card-heading">
                                 Detailed Reporting Dashboards

                                 </h3>
                                 <p className="card-description">
                                 View intuitive, customizable dashboards with in-depth reports on call patterns, agent activity, and customer engagement metrics.
                                 </p>

                                 </div>
                         </div>
                         {/* Card 3 */}
                         <div className="feature-card">
                             <div className="card-content">
                                 <Business className="card-icon" />
                                 <h3 className="card-heading">
                                 Performance Metrics Tracking
                                 </h3>
                                 <p className="card-description">
                                 Measure key performance indicators (KPIs) such as average call duration, call resolution time, and abandonment rates to evaluate team efficiency.
                                 </p>
                                 </div>
                         </div>
                         {/* Card 4 */}
                         <div className="feature-card">
                             <div className="card-content">
                                 <Security className="card-icon" />
                                 <h3 className="card-heading">
                                 Custom Filters and Segmentation
                                 </h3>
                                 <p className="card-description">
                                 Analyze data based on criteria such as department, period, or customer demographics to gain targeted insights and improve decision-making.
                                 </p>
                             </div>
                         </div>
                     </div>
                 </section>
 </div>
  )
}

export default CallAnalyticsFeatures
