import React from 'react'
import '../../../styles/campaign/campaignproducts.css'

const CampaignProducts = () => {
    return (
        <div className="virtual-number-cards-container">
          <h2 className="vn-main-heading">
         Our Products
                </h2>
          <div className="vn-section-container">
            <div className="vn-card">
              <h2 className="vn-card-heading">SIP Trunk</h2>
              <p className="vn-card-paragraph">
              Boost call handling productivity, elevate client adventure, and smooth operational administration for ultimate results.
              </p>
              <ul className="vn-bullet-points">
                <li> Inbound campaigns</li>
                <li>Outbound campaigns</li>
                <li>Local presence</li>
              </ul>
            </div>
            <div className="vn-card">
              <h2 className="vn-card-heading">Virtual Numbers</h2>
              <p className="vn-card-paragraph">
              Ease external coupling, blend across assorted pathways, and ensure scalability for your blueprint.
              </p>
              <ul className="vn-bullet-points">
                <li>Virtual Identity</li>
                <li> Inbound Flows</li>
              </ul>
            </div>
            <div className="vn-card">
              <h2 className="vn-card-heading">Cloud PBX</h2>
              <p className="vn-card-paragraph">
              We serve external interaction, vocal routing, and assessing.
                        </p>
              <ul className="vn-bullet-points">
                <li> Virtual presence in any state / country</li>
                <li>Toll-free Numbers</li>
                <li> Remote lines</li>
              </ul>
            </div>
            <div className="vn-card">
              <h2 className="vn-card-heading">UCaas / CPaaS</h2>
              <p className="vn-card-paragraph">
              Provide localized entry, optimize vocal routing, and extend value-added facilities to boost the all-inclusive venture for your clientele.
                     </p>
              <ul className="vn-bullet-points">
                <li>Expanded coverage</li>
                <li>Better pricing</li>
              </ul>
            </div>
          </div>
        </div>
      );
}

export default CampaignProducts
