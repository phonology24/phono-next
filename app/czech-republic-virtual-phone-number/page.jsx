import Footer from '@/components/Footer'
import BenefitsOfCzechNumber from '@/components/InternationalNumbers/czech/BenefitsOfCzechNumber'
import CzechEightCards from '@/components/InternationalNumbers/czech/CzechEightCards'
import CzechHeader from '@/components/InternationalNumbers/czech/CzechHeader'
import CzechSubHeader from '@/components/InternationalNumbers/czech/CzechSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/czech/FAQAccordion'
import CzechFeatureCards from '@/components/InternationalNumbers/czech/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/czech/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
    title: 'Czech Republic Virtual Phone Number | Phonology VoIP Solutions',
    description: 'Expand your business with a Czech Republic virtual phone number. Phonology provides crystal-clear call quality and seamless VoIP services for global communication.',
    robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    keywords: 'Czech-Republic-virtual-phone-number',
    alternates: {
      canonical: '/czech-republic-virtual-phone-number',
    },
  };
  
const page = () => {
    
    return (
        <div style={{maxWidth:"85vw", margin:"0 auto"}}>
            <CzechHeader />
            <CzechSubHeader />
            <BenefitsOfCzechNumber />
            <CzechEightCards />
            <HowToBuy />
            <CzechFeatureCards />
            <FAQAccordionComponent />
            <PhoneNumbers />
            <Footer />
        </div>

    )
}

export default page
