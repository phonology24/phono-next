import React, { useEffect, useRef, useState } from 'react';
import "../../styles/dropdownsolutions.css";
import CallIcon from '@mui/icons-material/Call';
import PhoneIcon from '@mui/icons-material/Phone';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CloudIcon from '@mui/icons-material/Cloud';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CallCenterIcon from '@mui/icons-material/HeadsetMic';
import PublicIcon from '@mui/icons-material/Public';

const DropdownMenuProducts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const businessCommunications = [
    {
      name: 'Unified Communications',
      description: 'Enable your customer to call from anywhere.',
      link: '/unified-communication-providers',
      icon: <CallIcon />
    },
    {
      name: 'SIP Trunking',
      description: 'Got a phone? Enjoy digital dial tone on any system.',
      link: '/sip-trunk-providers',
      icon: <PhoneIcon />
    },
    {
      name: 'Virtual Numbers',
      description: "120+ countries' number at your fingertips.",
      link: '/virtual-phone-number-providers',
      icon: <ContactPhoneIcon />
    },
    {
      name: 'Cloud Telephony',
      description: 'Bring your own carrier with provisioning.',
      link: '/cloud-telephony-providers',
      icon: <CloudIcon />
    },
    {
      name: 'Hosted Phone Systems',
      description: 'Complete business phone system, powered by cloud technology.',
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
      description: 'A UIFN number is a single phone number usable across multiple countries.',
      link: '/uifn-number',
      icon: <PublicIcon />
    },

  ];

  const appsSection = [

    {
      name: 'Watel',
      description: 'Whatsapp third-party integration platform for business owners.',
      link: 'https://www.watel.io', // Use the full URL here
      icon: <CallIcon />
    }
  ];

  const placeholderImageUrl = 'https://via.placeholder.com/750x500'; // Placeholder Image URL

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
            <h4>Learn</h4>
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
            <h4>Apps</h4>
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
            <img src={placeholderImageUrl} alt="Placeholder" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenuProducts;
