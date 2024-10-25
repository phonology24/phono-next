import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSouthAfricaNumber from '@/components/InternationalNumbers/southafrica/BenefitsOfSouthAfricaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/southafrica/FAQAccordion'
import SouthAfricaFeatureCards from '@/components/InternationalNumbers/southafrica/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/southafrica/HowToBuy'
import SouthAfricaEightCards from '@/components/InternationalNumbers/southafrica/SouthAfricaEightCards'
import SouthAfricaHeader from '@/components/InternationalNumbers/southafrica/SouthAfricaHeader'
import SouthAfricaSubHeader from '@/components/InternationalNumbers/southafrica/SouthAfricaSubHeader'
import React from 'react'
export const metadata = {
    title: 'South Africa Virtual Phone Number | Phonology VoIP Solutions',
    description: 'Enhance your business communication with a South Africa virtual phone number. Phonology offers reliable VoIP services with scalable, affordable solutions.',
    robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    keywords: 'South-Africa-virtual-phone-number',
    alternates: {
      canonical: '/south-africa-virtual-phone-number',
    },
  };
  
const page = () => {
    return (
        <div style={{maxWidth:"85vw", margin:"0 auto"}}>
            <SouthAfricaHeader />
            <SouthAfricaSubHeader />
            <BenefitsOfSouthAfricaNumber />
            <SouthAfricaEightCards />
            <HowToBuy />
            <SouthAfricaFeatureCards />
            <FAQAccordionComponent />
            <PhoneNumbers />
            <Footer />
        </div>
    )
}

export default page
