import React from 'react';
import './KeyFeatures.css'; // Importing the CSS file
import { Home, Build, Business, Security } from '@mui/icons-material'; // You can use icons from MUI or replace them with your own

const KeyFeatures = () => {
  return (
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
              Home Automation
            </h3>
            <p className="card-description">
              Automate your home for comfort and convenience with smart technology.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="feature-card">
          <div className="card-content">
            <Build className="card-icon" />
            <h3 className="card-heading">
              Customizable Design
            </h3>
            <p className="card-description">
              Tailor your system to suit your needs with flexible design options.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="feature-card">
          <div className="card-content">
            <Business className="card-icon" />
            <h3 className="card-heading">
              Business Solutions
            </h3>
            <p className="card-description">
              Optimize your workspace with our innovative business solutions.
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="feature-card">
          <div className="card-content">
            <Security className="card-icon" />
            <h3 className="card-heading">
              Enhanced Security
            </h3>
            <p className="card-description">
              Keep your home or business safe with top-tier security features.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
