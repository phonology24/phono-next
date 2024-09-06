import React from 'react';
import '../../../styles/campaign/valueproposition.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CostIcon from '../../../public/Assets/iconcost.png'
import CommIcon from '../../../public/Assets/iconvn.png'
import PBXIcon from '../../../public/Assets/iconpbx.png'
import Image from 'next/image';
const ValueProposition = () => {
  return (
    <div className="value-proposition-section">
      <h2 className="value-proposition-title">Value Proposition</h2>
      <div className="value-proposition-items">
        <div className="value-proposition-item">
          <div className="icon-circle1">
            <Image src={CostIcon} alt="Cost Icon" width={150} height={150} />
          </div>
          <p><strong style={{fontSize:"20px"}}>Cost-Effective Excellence<br /> </strong>We ensure you get the best of both worlds—superior technology and smart, efficient pricing.</p>
        </div>
        <div className="value-proposition-item">
          <div className="icon-circle1">
            <Image src={CommIcon} alt="Cost Icon" width={150} height={150} />
          </div>
          <p> <strong style={{fontSize:"20px"}}>Instant Communication, Zero Disruption</strong>
            <br />We make sure your business stays connected around the clock with uninterrupted service and flawless call quality.</p>
        </div>
        <div className="value-proposition-item">
          <div className="icon-circle1">
            <Image src={PBXIcon} alt="Cost Icon" width={150} height={150} />
          </div>
          <p><strong style={{fontSize:"20px"}}>Worldwide Reach, No Boundaries <br /></strong>
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
