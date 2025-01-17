import React from 'react'
import { Home, Build, Business, Security } from '@mui/icons-material'; // You can use icons from MUI or replace them with your own
import '../VoicemailFeaturesPage/VoiceKeyFeatures.css'; // Importing the CSS file for styling

const StickyAgentFeatures = () => {
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
                              Caller-Agent Pairing
                              </h3>
                              <p className="card-description">
                              Automatically route returning callers to the agent they spoke with last, ensuring interaction continuity.
                              </p>
                          </div>
                      </div>
                      {/* Card 2 */}
                      <div className="feature-card">
                          <div className="card-content">
                              <Build className="card-icon" />
                              <h3 className="card-heading">

                              Customizable Routing Rules
                              </h3>
                              <p className="card-description">
                              Set preferences to match callers with specific agents based on expertise, availability, or previous interactions.
                              </p>                          </div>
                      </div>
                      {/* Card 3 */}
                      <div className="feature-card">
                          <div className="card-content">
                              <Business className="card-icon" />
                              <h3 className="card-heading">
                              Fallback Mechanism
                              </h3>
                              <p className="card-description">
                              If the preferred agent is unavailable, seamlessly redirect the call to the next best-suited agent or team.

                              </p>
                          </div>
                      </div>
                      {/* Card 4 */}
                      <div className="feature-card">
                          <div className="card-content">
                              <Security className="card-icon" />
                              <h3 className="card-heading">
                              Real-Time Pairing Updates
                              </h3>
                              <p className="card-description">
                              Dynamically update agent assignments to ensure the most accurate and efficient call routing.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>
    </div>
  )
}

export default StickyAgentFeatures
