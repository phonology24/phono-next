import DemoForm from '@/components/DemoRequestForm'
import Footer from '@/components/Footer'
import SixCards from '@/components/WhatsappBusiness/SixCards'
import WhatsappBusinessHero from '@/components/WhatsappBusiness/WhatsappBusinessHero'
import WhatsappBusinessTwoCards from '@/components/WhatsappBusiness/WhatsappBusinessTwoCards'
import React from 'react'

const page = () => {
    return (
        <div style={{ maxWidth: "85vw", margin: "0 auto" }}>
            <WhatsappBusinessHero />
            <SixCards />
            <WhatsappBusinessTwoCards />
            <DemoForm />
            <Footer />
        </div>
    )
}

export default page
