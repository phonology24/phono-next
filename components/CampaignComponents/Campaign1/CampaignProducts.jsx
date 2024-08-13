import React from 'react'
import '../../../styles/campaign/campaignproducts.css'

const CampaignProducts = () => {
    return (
        <div className="virtual-number-cards-container">
          <h3 className="vn-main-heading">
         Our Products
                </h3>
          <div className="vn-section-container">
            <div className="vn-card">
              <h3 className="vn-card-heading">SIP Trunk</h3>
              <p className="vn-card-paragraph">
              An internet-based phone line enables businesses to handle calls more efficiently and cost-effectively.
                            </p>
              <ul className="vn-bullet-points">
                <li> Cost-Effective</li>
                <li>Scalable</li>
                <li>Flexible</li>
              </ul>
            </div>
            <div className="vn-card">
              <h3 className="vn-card-heading">Virtual Numbers</h3>
              <p className="vn-card-paragraph">
              Virtual phone numbers  let businesses manage calls from anywhere in the world , providing a local presence and enhancing customer reach.
                            </p>
              <ul className="vn-bullet-points">
                <li>Remote work support</li>
                <li>Increased Accessibility</li>
                <li>Global Reach</li>
              </ul>
            </div>
            <div className="vn-card">
              <h3 className="vn-card-heading">Cloud PBX</h3>
              <p className="vn-card-paragraph">
              Internet-based phone system that manages business calls and communications without traditional hardware.     
                          </p>
              <ul className="vn-bullet-points">
                <li> Cost Savings</li>
                <li>Disaster Recovery</li>
                <li>Enhanced Security</li>
              </ul>
            </div>
            <div className="vn-card">
              <h3 className="vn-card-heading">UCaas / CPaaS</h3>
              <p className="vn-card-paragraph">
              Provide cloud-based tools for seamless business communication, integrating voice, video, messaging, and more into one platform.
                                  </p>
              <ul className="vn-bullet-points">
                <li>Integrated Communication</li>
                <li>Scalable Solutions</li>
                <li>Cost Efficiency</li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default CampaignProducts
