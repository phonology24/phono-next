import React from 'react';
import './KeyBenefits.css'; // Importing the new CSS file for benefits section
import { AccessAlarm, Speed, ThumbUp, Build } from '@mui/icons-material'; // You can use these icons or replace them

const KeyBenefits = () => {
  return (
    <section className="key-benefits-section">
      <h2 className="key-benefits-heading">
        Key Benefits
      </h2>
      <div className="key-benefits-cards-container">
        {/* Card 1 */}
        <div className="key-benefits-card">
          <div className="key-benefits-card-content">
            <AccessAlarm className="key-benefits-card-icon" />
            <h3 className="key-benefits-card-heading">
              Time Efficiency
            </h3>
            <p className="key-benefits-card-description">
              Save time with streamlined processes and faster workflows.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div className="key-benefits-card">
          <div className="key-benefits-card-content">
            <Speed className="key-benefits-card-icon" />
            <h3 className="key-benefits-card-heading">
              High Speed
            </h3>
            <p className="key-benefits-card-description">
              Experience lightning-fast performance that keeps you ahead.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div className="key-benefits-card">
          <div className="key-benefits-card-content">
            <ThumbUp className="key-benefits-card-icon" />
            <h3 className="key-benefits-card-heading">
              Superior Quality
            </h3>
            <p className="key-benefits-card-description">
              Enjoy premium quality with top-tier materials and craftsmanship.
            </p>
          </div>
        </div>
        {/* Card 4 */}
        <div className="key-benefits-card">
          <div className="key-benefits-card-content">
            <Build className="key-benefits-card-icon" />
            <h3 className="key-benefits-card-heading">
              Customization
            </h3>
            <p className="key-benefits-card-description">
              Tailor solutions to your unique needs with flexible options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
