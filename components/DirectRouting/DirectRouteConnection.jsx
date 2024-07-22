import React from 'react';
import '../../styles/directrouting.css';
import DirectRoutingImage from '../../public/Assets/teamsinfographic.svg'
import Image from 'next/image';

const DirectRouteConnection = () => {
  return (
    <div className="directRouteContainer">
      <div className="directRouteText">
        <h2 className='direcrRouteh2'>Connect <br></br><span className='gradient-ltr'> Microsoft Teams</span><br></br> to Any Service</h2>
        <p className='direcrRoutep'>
          Our Direct Routing solution is intentionally hybrid, seamlessly integrating with all our white-label VoIP services.
          Phonology for Microsoft goes beyond the basics, providing advanced features such as cross-dialing between a customer-owned PBX
          using a Phonology-powered SIP Trunk, Hosted Phone System, or Contact Center.
          This flexibility enables IT teams to gradually transition from one system to another or connect
          multiple locations using different systems.
        </p>
        <button className='directRouteButton'>Contact Support</button>
      </div>

      <div className="directRouteImage">
        <Image
          src={DirectRoutingImage}
          alt="Description of the image"
          style={{ width: '600px', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default DirectRouteConnection;
