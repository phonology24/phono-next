import React from 'react';
import '../../../styles/campaign/valueproposition.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
const ValueProposition = () => {
  return (
    <div className="value-proposition-section">
      <h2 className="value-proposition-title">YOUR VALUE PROPOSITION</h2>
      <div className="value-proposition-items">
        <div className="value-proposition-item">
          <div className="icon-circle1">
<FavoriteIcon/>
          </div>
          <p><strong>How will this help</strong> solve the customer's issues in the future</p>
        </div>
        <div className="value-proposition-item">
          <div className="icon-circle1">
          <FavoriteIcon/>
          </div>
          <p>How will your product <strong>change your customer's life</strong></p>
        </div>
        <div className="value-proposition-item">
          <div className="icon-circle1">

<FavoriteIcon/>
          </div>
          <p>How will your product <strong>change your customer's life</strong></p>
        </div>
      </div>
      <div className="ctavp-button">
        <button>FIND OUT MORE</button>
      </div>
    </div>
  );
};

export default ValueProposition;
