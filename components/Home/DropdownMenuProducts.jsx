import React, { useEffect, useRef, useState } from 'react';
import "../../styles/dropdownsolutions.css";
import CallIcon from '@mui/icons-material/Call';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CloudIcon from '@mui/icons-material/Cloud';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CallCenterIcon from '@mui/icons-material/HeadsetMic';
import PublicIcon from '@mui/icons-material/Public';
import drop from "../../public/Assets/drop.png"
import Image from 'next/image';

const DropdownMenuProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const businessCommunications = [
    {
      name: 'Unified Communications',
      description: 'One platform for all your voice, video, and collaboration needs.',
      link: '/unified-communication-providers',
      icon: <CallIcon />
    },
    {
      name: 'SIP Trunking',
      description: 'Scalable and affordable voice solutions designed to meet your business needs.',
      link: '/sip-trunk-providers',
      icon: <PhoneIcon />
    },
    {
      name: 'Virtual Numbers',
      description: "Reach customers worldwide using local and toll-free numbers.",
      link: '/virtual-phone-number-providers',
      icon: <ContactPhoneIcon />
    },
    {
      name: 'Cloud Telephony',
      description: 'Reliable and efficient cloud telephony for effortless business communication.',
      link: '/cloud-telephony-providers',
      icon: <CloudIcon />
    },
    {
      name: 'Hosted Phone Systems',
      description: 'Scalable, cloud-hosted call center solutions.',
      link: '/hosted-pbx-providers',
      icon: <PhoneAndroidIcon />
    },
    {
      name: 'Hosted Call Centers',
      description: 'A business phone system enhanced with call center features.',
      link: '/call-center-solution',
      icon: <CallCenterIcon />
    },
    {
      name: 'UIFN Numbers',
      description: ' Global customer access through one easy-to-use toll-free number.',
      link: '/uifn-number',
      icon: <PublicIcon />
    },

  ];

  const appsSection = [

    {
      name: 'Whatsapp Business',
      description: 'Whatsapp third-party integration platform for business owners.',
      link: '/whatsapp-business', // Use the full URL here
      icon: <CallIcon />
    },
    {
      name: 'Watel',
      description: 'Whatsapp third-party integration platform for business owners.',
      link: 'https://www.watel.io', // Use the full URL here
      icon: <CallIcon />
    },
    {
      name: 'Voice API',
      description: 'Whatsapp third-party integration platform for business owners.',
      link: '/voice-api', // Use the full URL here
      icon: <CallIcon />
    },
    {
      name: 'AI Voice Agent',
      description: 'Whatsapp third-party integration platform for business owners.',
      link: '/ai-voice-agents', // Use the full URL here
      icon: <CallIcon />
    }
  ];


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdownContainer" ref={dropdownRef}>
      <button className="dropdownToggle" onClick={() => setIsOpen(!isOpen)}>
        Solutions
      </button>
      {isOpen && (
        <div className="dropdownMenu">
          {/* Products Section */}
          <div className="dropdownCol">
            <h4></h4>
            {businessCommunications.map((item, index) => (
              <div className="dropdownItem" key={index}>
                <a href={item.link}>
                  <div className="icon">{item.icon} {item.name}</div>
                </a>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          {/* Apps Section */}
          <div className="dropdownCol">
            <h4></h4>
            {appsSection.map((app, index) => (
              <div className="dropdownItem" key={index}>
                <a href={app.link} target="_blank" rel="noopener noreferrer">
                  {app.name}</a>
                <p>{app.description}</p>
              </div>
            ))}
          </div>

          {/* Placeholder Image Section */}
          <div className="dropdownCol image-section">
            <Image src={drop} alt="Placeholder"  height={1000} width={1000}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenuProducts;
