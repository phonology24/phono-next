import React from 'react'
import '../../../styles/campaign/freetrialComponent.css'
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
const FreetrialComponent = () => {
  return (
    <div>
      <div className="freetrialcontainer">
        <p className='Headingvoipform'>Feel Free to Connect With Us!</p>
        <button className='freeTrialButtonCampaign'>
            Get A Free Trial <ArrowOutwardOutlinedIcon/>
        </button>
         {/* <div className='listfreetrial'> 
          <p><NearMeOutlinedIcon/>&nbsp;Instant setup</p>
          <p><NearMeOutlinedIcon/>&nbsp;Real-time reporting</p>
          <p><NearMeOutlinedIcon/>&nbsp;CRM integrations</p>
          <p><NearMeOutlinedIcon/>&nbsp;Cloud telephony suite</p>
          <p><NearMeOutlinedIcon/>&nbsp;99.99% uptime</p>
          <p><NearMeOutlinedIcon/>&nbsp;Market-friendly pricing</p>
        </div>  */}
      </div>
    </div>
  )
}

export default FreetrialComponent
