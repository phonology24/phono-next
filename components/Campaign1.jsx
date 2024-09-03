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
import BenefitsComponent from './CampaignComponents/Campaign1/CampaignBenefits'
import ValueProposition from './CampaignComponents/Campaign1/ValueProposition'
import SocialProof from './CampaignComponents/Campaign1/SocialProof'
import Footer from './Footer'

const Campaign1 = () => {
  return (
<div >
<CampaignHeader/>      
<CampaignMarquee/>
<CampaignTwoCards/>
<CallToActionDemoButton/> 
<CompanyNumbers/>
<ReportSection/>
<CampaignEightCards/>
<BenefitsComponent/>
<ValueProposition/>
<SocialProof/>
{/* <CampaignProducts/> */}
{/* <CampaignEightCards2/> */}
<FreetrialComponent/>
<Footer/>
{/* <HostedPbxCards/> */}
    </div>
  )
}

export default Campaign1
