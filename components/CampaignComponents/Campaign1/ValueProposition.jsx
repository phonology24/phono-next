import React from 'react';
import '../../../styles/campaign/valueproposition.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
const ValueProposition = () => {
  return (
    <div className="value-proposition-section">
      <h2 className="value-proposition-title">Value Proposition</h2>
      <div className="value-proposition-items">
        <div className="value-proposition-item">
          <div className="icon-circle1">
<FavoriteIcon/>
          </div>
          <p><strong>Cost-Effective Excellence<br/> </strong>Top-tier telecom services at the best prices.</p>
        </div>
        <div className="value-proposition-item">
          <div className="icon-circle1">
          <FavoriteIcon/>
          </div>
          <p> <strong>Instant Communication, Zero Disruption</strong>
            <br/>We make sure your business stays connected around the clock with uninterrupted service and flawless call quality.</p>
        </div>
        <div className="value-proposition-item">
          <div className="icon-circle1">

<FavoriteIcon/>
          </div>
          <p><strong>Worldwide Reach, No Boundaries <br/></strong>
          We bridge the gap between your business and the world, offering seamless global communication. 
          </p>
        </div>
      </div>
      <div className="ctavp-button">
        <button>FIND OUT MORE</button>
      </div>
    </div>
  );
};

export default ValueProposition;
