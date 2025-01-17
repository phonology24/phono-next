import React from 'react'
import { Home, Build, Business, Security } from '@mui/icons-material'; // You can use icons from MUI or replace them with your own
import '../VoicemailFeaturesPage/VoiceKeyFeatures.css'; // Importing the CSS file for styling

const CallWhisperingFeatures = () => {
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
                                      Real-Time Coaching
                                      </h3>
                                      <p className="card-description">
                                      Supervisors can communicate directly with agents during live calls, providing guidance and support without interrupting the customer.
                                      </p>
                                  </div>
                              </div>
                              {/* Card 2 */}
                              <div className="feature-card">
                                  <div className="card-content">
                                      <Build className="card-icon" />
                                      <h3 className="card-heading">
                                      Discreet Communication
                                      </h3>
                                      <p className="card-description">
                                      Customers remain unaware of the coaching, ensuring a seamless experience while agents receive the help they need.
                                      </p>
                                      </div>
                              </div>
                              {/* Card 3 */}
                              <div className="feature-card">
                                  <div className="card-content">
                                      <Business className="card-icon" />
                                      <h3 className="card-heading">
                                      Integrated Monitoring
                                      </h3>
                                      <p className="card-description">
                                      Easily switch between listening, whispering, and call barging for comprehensive supervision and intervention options.
                                      </p>
                                      </div>
                              </div>
                              {/* Card 4 */}
                              <div className="feature-card">
                                  <div className="card-content">
                                      <Security className="card-icon" />
                                      <h3 className="card-heading">

                                      Customizable Permissions
                                      </h3>
                                      <p className="card-description">
                                      Control access to whispering features, ensuring only authorized personnel can provide coaching during calls.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </section>
      </div>
  )
}

export default CallWhisperingFeatures
