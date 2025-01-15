import AiBenefits from '@/components/AIVoice/AiBenefits'
import AIVoiceApiHeading from '@/components/AIVoice/AIVoiceApiHeading'
import AIVoiceFeatures from '@/components/AIVoice/AIVoiceCards'
import AIVoiceApiSubHeading from '@/components/AIVoice/AIVoiceSubHeading'
import AIUseCases from '@/components/AIVoice/UseCasesForCompanies'
import DemoForm from '@/components/DemoRequestForm'
import Footer from '@/components/Footer'
import HostedPbxCards from '@/components/HostedNumbers/HostedPbxCards'
import React from 'react'

const page = () => {
    return (
        <div style={{ maxWidth: "85vw", margin: "0 auto" }}>
            <AIVoiceApiHeading />
            <AIVoiceApiSubHeading />
            <AIVoiceFeatures />
            <AiBenefits />
            <AIUseCases />
            <Footer />
        </div>
    )
}

export default page
