"use client"
import React from 'react'
import CampaignHeader from './CampaignComponents/Campaign1/CampaignHeader'
import CampaignProducts from './CampaignComponents/Campaign1/CampaignProducts'
import CampaignTwoCards from './CampaignComponents/Campaign1/CampaignTwoCards'
import HostedPbxCards from './HostedNumbers/HostedPbxCards'
import CampaignEightCards from './CampaignComponents/Campaign1/CampaignEightCards'
import CampaignEightCards2 from './CampaignComponents/Campaign1/CampaignEightCards2'
import CallToActionDemoButton from './CampaignComponents/Campaign1/CallToActionDemoButton'
import FreetrialComponent from './CampaignComponents/Campaign1/FreetrialComponent'
import CampaignMarquee from './CampaignComponents/Campaign1/CampaignMarquee'
import CompanyNumbers from './CampaignComponents/Campaign1/CompanyNumbers'
import ReportSection from './CampaignComponents/Campaign1/ReportSection'

const Campaign1 = () => {
  return (
<div >
<CampaignHeader/>      
<CampaignMarquee/>
<CampaignTwoCards/>
<CompanyNumbers/>
<ReportSection/>
<CampaignEightCards/>
<CallToActionDemoButton/>
<CampaignProducts/>
<CampaignEightCards2/>
<FreetrialComponent/>
<HostedPbxCards/>
    </div>
  )
}

export default Campaign1
