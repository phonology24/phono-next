import React from 'react'
import '../../../styles/campaign/freetrialComponent.css'
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';

const FreetrialComponent = () => {
  return (
    <div>
      <div className="freetrialcontainer">
        <p className='Headingvoipform'>Need we say more?</p>
        <div className='listfreetrial'>
          <p><NearMeOutlinedIcon/>&nbsp;Instant setup</p>
          <p><NearMeOutlinedIcon/>&nbsp;Real-time reporting</p>
          <p><NearMeOutlinedIcon/>&nbsp;CRM integrations</p>
          <p><NearMeOutlinedIcon/>&nbsp;Cloud telephony suite</p>
          <p><NearMeOutlinedIcon/>&nbsp;99.99% uptime</p>
          <p><NearMeOutlinedIcon/>&nbsp;Market-friendly pricing</p>
        </div>
        <button className='freeTrialButtonCampaign'>
            Get A Free Trial
        </button>
      </div>
    </div>
  )
}

export default FreetrialComponent
