import AiBenefits from '@/components/AIVoice/AiBenefits'
import AIVoiceApiHeading from '@/components/AIVoice/AIVoiceApiHeading'
import AIVoiceFeatures from '@/components/AIVoice/AIVoiceCards'
import AIVoiceApiSubHeading from '@/components/AIVoice/AIVoiceSubHeading'
import AIUseCases from '@/components/AIVoice/UseCasesForCompanies'
import WhyUse from '@/components/AIVoice/WhyUse'
import Footer from '@/components/Footer'
import React from 'react'

export const metadata = {
  title: 'Voice API for Calls, IVR and SMS | Phonology',
  description: "Add calling, voice messages, IVR and SMS to your app with Phonology's Voice API. Runs on the same network as Phonology's numbers and SIP trunks.",
  alternates: { canonical: '/voice-api' },
};

const page = () => {
    return (
        <div style={{ maxWidth: "85vw", margin: "0 auto" }}>
            <AIVoiceApiHeading />
            <AIVoiceApiSubHeading />
            <WhyUse />
            <AIVoiceFeatures />
            <AiBenefits />
            <AIUseCases />
            <Footer />
        </div>
    )
}

export default page
