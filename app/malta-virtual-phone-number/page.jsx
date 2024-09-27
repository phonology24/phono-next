import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfMaltaNumber from '@/components/InternationalNumbers/malta/BenefitsOfMaltaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/malta/FAQAccordion'
import MaltaFeatureCards from '@/components/InternationalNumbers/malta/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/malta/HowToBuy'
import MaltaEightCards from '@/components/InternationalNumbers/malta/MaltaEightCards'
import MaltaHeader from '@/components/InternationalNumbers/malta/MaltaHeader'
import MaltaSubHeader from '@/components/InternationalNumbers/malta/MaltaSubHeader'
import React from 'react'
export const metadata = {
    title: 'Malta Virtual Phone Number | Affordable VoIP by Phonology',
    description: 'Strengthen your business communication with a Malta virtual phone number. Phonology’s VoIP services are reliable, scalable, and cost-effective.',
    robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    keywords: 'Malta-virtual-phone-number',
    alternates: {
      canonical: '/malta-virtual-phone-number',
    },
  };
  
const page = () => {
    return (
        <div>
            <MaltaHeader />
            <MaltaSubHeader />
            <BenefitsOfMaltaNumber />
            <MaltaEightCards />
            <HowToBuy />
            <MaltaFeatureCards />
            <FAQAccordionComponent />
            <PhoneNumbers />
            <Footer />
        </div>

    )
}

export default page
