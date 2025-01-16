import React from 'react'
import { Home, Build, Business, Security } from '@mui/icons-material'; // You can use icons from MUI or replace them with your own
import '../VoicemailFeaturesPage/VoiceKeyFeatures.css'; // Importing the CSS file for styling

const IVRKeyFeatures = () => {
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
                              Customizable Menus
                              </h3>
                              <p className="card-description">
                              Design intuitive call menus tailored to your business needs, enabling callers to connect to the right department or service quickly.
                              </p>
                          </div>
                      </div>
                      {/* Card 2 */}
                      <div className="feature-card">
                          <div className="card-content">
                              <Build className="card-icon" />
                              <h3 className="card-heading">
                              Professional Greetings
                              </h3>
                              <p className="card-description">
                              Record personalized welcome messages and on-hold prompts to create a polished and professional experience for your callers.
                              </p>
                          </div>
                      </div>
                      {/* Card 3 */}
                      <div className="feature-card">
                          <div className="card-content">
                              <Business className="card-icon" />
                              <h3 className="card-heading">
                              Multi-Language Support
                              </h3>
                              <p className="card-description">
                              Cater to a diverse audience by offering IVR menus and prompts in multiple languages, ensuring inclusivity and better engagement.
                              </p>
                          </div>
                      </div>
                      {/* Card 4 */}
                      <div className="feature-card">
                          <div className="card-content">
                              <Security className="card-icon" />
                              <h3 className="card-heading">
                              Real-Time Call Routing
                              </h3>
                              <p className="card-description">
                              Automatically route calls to the appropriate team or individual based on the caller’s input, reducing wait times and improving efficiency.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>
    </div>
  )
}

export default IVRKeyFeatures
