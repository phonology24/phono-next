import React from 'react'
import '../../../styles/campaign/ctaButtonDemo.css'
const CallToActionDemoButton = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }  
  return (
    <div>
      <div className="ctaButtonDemoContainer">
        <p className='ctaPDemo'>Strengthen Your Business Communication <br/>
        with an Advanced VoIP Solution Today!</p>
        <button className='ctaBookADemo' onClick={scrollToTop}> Book A Free Demo</button>
      </div>
    </div>
  )
}

export default CallToActionDemoButton
