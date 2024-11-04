import React from 'react';
import '../../styles/directrouting.css';
import DirectRoutingImage from '../../public/Assets/hosted1.png'
import Image from 'next/image';

const DirectRouteConnection = () => {
  return (
    <div className="directRouteContainer">
      <div className="directRouteText">
        <h2 className='direcrRouteh2'>Enhance Productivity with Integrated <br></br><span className='gradient-ltr'> Remote Team Communication</span></h2>
        <p className='direcrRoutep'>
          Boost your team’s productivity with Phonology’s all-in-one remote communication platform
          , designed to centralize every tool your team needs to collaborate seamlessly. Your
          team can effortlessly connect across devices and time zones, using advanced voice,
          video, and instant messaging features. Real-time collaboration becomes second
          nature—whether it’s hosting virtual meetings, automatically routing calls, or
          integrating with your CRM. No more location barriers. We bring your team
          closer together, ensuring smooth communication, automated workflows,
          and perfectly coordinated efforts.
        </p>
        <button className='directRouteButton'>Contact Support</button>
      </div>
      <div className="directRouteImage">
        <Image
          src={DirectRoutingImage}
          alt="Description of the image"
        />
      </div>

    </div>
  );
};

export default DirectRouteConnection;
