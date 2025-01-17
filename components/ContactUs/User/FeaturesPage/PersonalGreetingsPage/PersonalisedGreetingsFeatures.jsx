import React from 'react'
import { Home, Build, Business, Security } from '@mui/icons-material'; // You can use icons from MUI or replace them with your own
import '../VoicemailFeaturesPage/VoiceKeyFeatures.css'; // Importing the CSS file for styling

const PersonalisedGreetingsFeatures = () => {
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
                              Engaging On-Hold Music
                              </h3>
                              <p className="card-description">
                              Keep callers entertained with curated music or informative messages during wait times.
                              </p>
                          </div>
                      </div>
                      {/* Card 2 */}
                      <div className="feature-card">
                          <div className="card-content">
                              <Build className="card-icon" />
                              <h3 className="card-heading">

                              Event-Specific Customizations
                              </h3>
                              <p className="card-description">
                              Update greetings and on-hold messages for holidays, promotions, or special announcements to stay relevant.                            </p>
                          </div>
                      </div>
                      {/* Card 3 */}
                      <div className="feature-card">
                          <div className="card-content">
                              <Business className="card-icon" />
                              <h3 className="card-heading">
                              Simple Management Tools
                              </h3>
                              <p className="card-description">
                              Easily upload, update, or change greetings and music to align with your evolving business needs.

                              </p>
                          </div>
                      </div>
                      {/* Card 4 */}
                      <div className="feature-card">
                          <div className="card-content">
                              <Security className="card-icon" />
                              <h3 className="card-heading">
                              Simple Management Tools
                              </h3>
                              <p className="card-description">
                              Easily upload, update, or change greetings and music to align with your evolving business needs.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>
    </div>
  )
}

export default PersonalisedGreetingsFeatures
