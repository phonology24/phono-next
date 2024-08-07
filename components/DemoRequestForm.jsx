import React from 'react';
import '../styles/demoform.css';
import Link  from 'next/link';

const DemoForm = () => {
  return (
    <div className="demo-form-container">
      <h3 className="demo-form-header">Schedule a demo and experience<span className='black'>  How It Works.</span></h3>
      {/* <form className="demo-form">
        <h3 className="demo-form-subheader">Request a Demo</h3>
        <input type="text" className="demo-form-input" placeholder="First Name" />
        <input type="text" className="demo-form-input" placeholder="Last Name" />
        <input type="email" className="demo-form-input" placeholder="Email" />
        <input type="text" className="demo-form-input" placeholder="Company Name" />
        <input type="tel" className="demo-form-input" placeholder="Phone Number" /> */}
   <Link href="https://zfrmz.in/YvgRqHLcIoEZUB5fd8L8" target="_blank" rel="noopener noreferrer nofollow">
          <button  className="demo-form-button">Request Demo</button>
        </Link>
      {/* </form> */}
    </div>
  );
}

export default DemoForm;
