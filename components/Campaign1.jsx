"use client"
import React from 'react'
import CampaignHeader from './CampaignComponents/Campaign1/CampaignHeader'
import CampaignProducts from './CampaignComponents/Campaign1/CampaignProducts'
import CampaignTwoCards from './CampaignComponents/Campaign1/CampaignTwoCards'
import HostedPbxCards from './HostedNumbers/HostedPbxCards'
import CampaignEightCards from './CampaignComponents/Campaign1/CampaignEightCards'
import CampaignEightCards2 from './CampaignComponents/Campaign1/CampaignEightCards2'
const Campaign1 = () => {
  return (
    <div>
<CampaignHeader/>      
<CampaignTwoCards/>
<CampaignEightCards/>
<CampaignProducts/>
<CampaignEightCards2/>
<HostedPbxCards/>
    </div>
  )
}

export default Campaign1
