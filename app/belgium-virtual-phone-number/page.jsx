import React from 'react'
import Footer from '@/components/Footer'
import BelgiumEightCards from '@/components/InternationalNumbers/belgium/BelgiumEightCards'
import BelgiumHeader from '@/components/InternationalNumbers/belgium/BelgiumHeader'
import BelgiumSubHeader from '@/components/InternationalNumbers/belgium/BelgiumSubHeader'
import BenefitsOfBelgiumNumber from '@/components/InternationalNumbers/belgium/BenefitsOfBelgiumNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/belgium/FAQAccordion'
import BelgiumFeatureCards from '@/components/InternationalNumbers/belgium/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/belgium/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
export const metadata = {
    title: 'Get a Belgium Virtual Phone Number | Phonology',
    description: 'Boost your business with a Belgium virtual phone number. Connect globally, manage calls efficiently, and enjoy crystal-clear communication with Phonology\'s VoIP services.',
    robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    keywords: 'Belgium-virtual-phone-number',
    alternates: {
      canonical: '/belgium-virtual-phone-number',
    },
  };
  
const page = () => {

    return (
        <div>
            <BelgiumHeader />
            <BelgiumSubHeader />
            <BenefitsOfBelgiumNumber />
            <BelgiumEightCards />
            <HowToBuy />
            <BelgiumFeatureCards />
            <FAQAccordionComponent />
            <PhoneNumbers />
            <Footer />
        </div>
    )

}

export default page