import AIVoiceApiHeading from '@/components/AIVoice/AIVoiceApiHeading'
import AIVoiceApiSubHeading from '@/components/AIVoice/AIVoiceSubHeading'
import DemoForm from '@/components/DemoRequestForm'
import Footer from '@/components/Footer'
import HostedPbxCards from '@/components/HostedNumbers/HostedPbxCards'
import React from 'react'

const page = () => {
    return (
        <div style={{ maxWidth: "85vw", margin: "0 auto" }}>
            <AIVoiceApiHeading />
            <AIVoiceApiSubHeading />
            <HostedPbxCards />
            <DemoForm />
            <Footer />
        </div>
    )
}

export default page
