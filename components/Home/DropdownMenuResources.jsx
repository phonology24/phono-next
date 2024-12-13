import React, { useEffect, useRef, useState } from 'react';
import "../../styles/dropdownresources.css";
import CallIcon from '@mui/icons-material/Call';

const DropdownMenuResources = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref to track the dropdown container

  // Data sets
  const businessCommunications = [
    {
      name: 'Blogs',
      description: 'Read our blogs on business communication solutions and more.',
      link: '/phonology-blogs',
      icon: <CallIcon />
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the dropdown container
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Add event listener for clicks
    document.addEventListener('click', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdownContainer1" ref={dropdownRef}>
      <button
        className="dropdownToggle1"
        onClick={() => setIsOpen(!isOpen)}
      >
        Resources
      </button>
      {isOpen && (
        <div className="dropdownMenu1">
          <div className="dropdownRow1">
            <div className="dropdownCol1">
              <h4>Documents</h4>

              {businessCommunications.map((item, index) => (
                <div className="dropdownItem1" key={index}>
                  <a href={item.link}>
                    <div className="icon1">{item.icon} {item.name}</div>
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

export default DropdownMenuResources;
