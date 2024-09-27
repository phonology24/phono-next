import React from 'react'
import Footer from '@/components/Footer'
import BenefitsOfDenmarkNumber from '@/components/InternationalNumbers/denmark/BenefitsOfDenmarkNumber'
import DenmarkEightCards from '@/components/InternationalNumbers/denmark/DenmarkEightCards'
import DenmarkHeader from '@/components/InternationalNumbers/denmark/DenmarkHeader'
import DenmarkSubHeader from '@/components/InternationalNumbers/denmark/DenmarkSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/denmark/FAQAccordion'
import DenmarkFeatureCards from '@/components/InternationalNumbers/denmark/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/denmark/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
export const metadata = {
    title: 'Get a Denmark Virtual Phone Number | Phonology',
    description: 'Need a Denmark virtual phone number for your business? Phonology offers reliable VoIP solutions to help you manage international calls effortlessly.',
    robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    keywords: 'Denmark-virtual-phone-number',
    alternates: {
      canonical: '/denmark-virtual-phone-number',
    },
  };
  
const page = () => {
    return (
        <div>
            <DenmarkHeader />
            <DenmarkSubHeader />
            <BenefitsOfDenmarkNumber />
            <DenmarkEightCards />
            <HowToBuy />
            <DenmarkFeatureCards />
            <FAQAccordionComponent />
            <PhoneNumbers />
            <Footer />
        </div>

    )
}

export default page
