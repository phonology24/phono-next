"use client"
import React from 'react';
// import '../../styles/virtualnumbers.css';
// import AssistantPhotoIcon from '@mui/icons-material/AssistantPhoto';
import PublicIcon from '@mui/icons-material/Public';
import PinDropIcon from '@mui/icons-material/PinDrop';
import DialpadIcon from '@mui/icons-material/Dialpad';

const SubHeadingVirtualNumbers = () => {
  return (
    <div className="sub-heading-container">
      <h2 className="main-heading">A diverse range of Corporate
<br></br> Telephone Numbers you can get in <span className='ltr-gradient'> Phonology </span></h2>
      <div className="section-container">
        <div className="card">
          <PublicIcon className="icon" />
          <h3 className="sub-heading">International Numbers</h3>
          <p className="paragraph">
          Acquire nationwide voice calls at a standard cost. Manage calls from other countries and establish an international presence for your business.
                      </p>
        </div>
        <div className="card">
          <DialpadIcon className="icon" />
          <h3 className="sub-heading">Toll Free Numbers</h3>
          <p className="paragraph">
          Enhance your brand recall with a memorable phone number. Our toll-free numbers are reliable, portable, and scalable, all offered at a great low price.            </p>
        </div>
        <div className="card">
          <PinDropIcon className="icon" />
          <h3 className="sub-heading">Local Numbers</h3>
          <p className="paragraph">
          Opt for voice and SMS-enabled numbers to localize your business. Obtain a local phone number. The setup process is quick and straightforward.
           </p>
        </div>
      </div>
    </div>
  );
}

export default SubHeadingVirtualNumbers;
