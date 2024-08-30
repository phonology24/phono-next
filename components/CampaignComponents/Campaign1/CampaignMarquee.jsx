import React from 'react';
import Marquee from 'react-fast-marquee';
import '../../../styles/blog-css/campaignmarquee.css';
import Image from 'next/image';

import CiscoLogo from '../../../public/Assets/cisco-logo.png';
import ElastixLogo from '../../../public/Assets/elastix-logo.png';
import YeaLink from '../../../public/Assets/yealink-logo.png';
import MatrixLogo from '../../../public/Assets/matrix-logo.png';
import GrandstreamLogo from '../../../public/Assets/grandstream-logo.png';
import PolycomLogo from '../../../public/Assets/polycom-logo.png';

const logos = [
  { id: 1, src: CiscoLogo, alt: 'Cisco Logo' },
  { id: 2, src: ElastixLogo, alt: 'Elastix Logo' },
  { id: 3, src: YeaLink, alt: 'YeaLink Logo' },
  { id: 4, src: MatrixLogo, alt: 'Matrix Logo' },
  { id: 5, src: GrandstreamLogo, alt: 'Grandstream Logo' },
  { id: 6, src: PolycomLogo, alt: 'Polycom Logo' },
];

const CampaignMarquee = () => {
  return (<>
    <h2 className='marquee-header-campaign'>Our Partners</h2>
      <Marquee gradient={false} speed={50} style={{ zIndex: -999 }}>
      {logos.map((logo) => (
        <div className="logo-card" key={logo.id}>
          <Image
            src={logo.src}
            alt={logo.alt}
            className="logo-card-image"
            width={1000} // Adjust width as needed
            height={1000} // Adjust height as needed
          />
        </div>
      ))}
    </Marquee>
    </>

  );
};

export default CampaignMarquee;
