import React from 'react'
import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfIrelandNumber from '@/components/InternationalNumbers/ireland/BenefitsOfIrelandNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/ireland/FAQAccordion'
import IrelandFeatureCards from '@/components/InternationalNumbers/ireland/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/ireland/HowToBuy'
import IrelandEightCards from '@/components/InternationalNumbers/ireland/IrelandEightCards'
import IrelandHeader from '@/components/InternationalNumbers/ireland/IrelandHeader'
import IrelandSubHeader from '@/components/InternationalNumbers/ireland/irelandSubHeader'
export const metadata = {
    title: 'Get an Ireland Virtual Phone Number | Phonology VoIP',
    description: 'Boost your business with an Ireland virtual phone number. Phonology’s VoIP services offer clear call quality, affordable rates, and global connectivity.',
    robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    keywords: 'Ireland-virtual-phone-number',
    alternates: {
      canonical: '/ireland-virtual-phone-number',
    },
  };
  
const page = () => {
    return (
        <div style={{maxWidth:"85vw", margin:"0 auto"}}>
            <IrelandHeader />
            <IrelandSubHeader />
            <BenefitsOfIrelandNumber />
            <IrelandEightCards />
            <HowToBuy />
            <IrelandFeatureCards />
            <FAQAccordionComponent />
            <PhoneNumbers />
            <Footer />
        </div>

    )
}

export default page