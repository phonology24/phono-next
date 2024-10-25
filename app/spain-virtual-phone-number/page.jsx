import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSpainNumber from '@/components/InternationalNumbers/spain/BenefitsOfSpainNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/spain/FAQAccordion'
import SpainFeatureCards from '@/components/InternationalNumbers/spain/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/spain/HowToBuy'
import SpainEightCards from '@/components/InternationalNumbers/spain/SpainEightCards'
import SpainHeader from '@/components/InternationalNumbers/spain/SpainHeader'
import SpainSubHeader from '@/components/InternationalNumbers/spain/SpainSubHeader'
import React from 'react'
export const metadata = {
    title: 'Get a Spain Virtual Phone Number | Phonology VoIP Services',
    description: 'Expand your communication reach with a Spain virtual phone number. Phonology’s VoIP services provide reliable, clear, and cost-effective global calling.',
    robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    keywords: 'Spain-virtual-phone-number',
    alternates: {
      canonical: '/spain-virtual-phone-number',
    },
  };
  
const page = () => {
    return (
        <div style={{maxWidth:"85vw", margin:"0 auto"}}>
            <SpainHeader />
            <SpainSubHeader />
            <BenefitsOfSpainNumber />
            <SpainEightCards />
            <HowToBuy />
            <SpainFeatureCards />
            <FAQAccordionComponent />
            <PhoneNumbers />
            <Footer />
        </div>
    )
}

export default page
