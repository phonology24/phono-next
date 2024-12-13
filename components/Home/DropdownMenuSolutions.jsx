import React, { useEffect, useState, useRef } from 'react';
import "../../styles/dropdownsolutions.css";
import CallIcon from '@mui/icons-material/Call';

const DropdownMenuSolutions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const businessCommunications = [
    {
      name: 'Watel',
      description: 'Whatsapp third party integration platform for business owners.',
      link: 'www.watel.io',
      icon: <CallIcon />
    },
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
      <button
        className="dropdownToggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        Solutions
      </button>
      {isOpen && (
        <div className="dropdownMenu">
          <div className="dropdownRow">
            <div className="dropdownCol">
              {businessCommunications.map((item, index) => (
                <div className="dropdownItem" key={index}>
                  <a href={item.link}>
                    <div className="icon">
                      {item.icon}
                      {item.name}
                    </div>
                  </a>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenuSolutions;
