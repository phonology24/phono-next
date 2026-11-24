import DemoForm from '@/components/DemoRequestForm'
import Footer from '@/components/Footer'
import SixCards from '@/components/WhatsappBusiness/SixCards'
import WhatsappBusinessHero from '@/components/WhatsappBusiness/WhatsappBusinessHero'
import WhatsappBusinessTwoCards from '@/components/WhatsappBusiness/WhatsappBusinessTwoCards'
import React from 'react'

export const metadata = {
  title: 'WhatsApp Business API Platform | Watel by Phonology',
  description: "Send WhatsApp messages, automate replies and support customers at scale with Watel, Phonology's WhatsApp Business API platform.",
  alternates: { canonical: '/whatsapp-business' },
};

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
