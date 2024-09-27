import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfHungaryNumber from '@/components/InternationalNumbers/hungary/BenefitsOfHungaryNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/hungary/FAQAccordion'
import HungaryFeatureCards from '@/components/InternationalNumbers/hungary/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/hungary/HowToBuy'
import HungaryEightCards from '@/components/InternationalNumbers/hungary/HungaryEightCards'
import HungaryHeader from '@/components/InternationalNumbers/hungary/HungaryHeader'
import HungarySubHeader from '@/components/InternationalNumbers/hungary/HungarySubHeader'
import React from 'react'
export const metadata = {
    title: 'Get a Hungary Virtual Phone Number | Phonology',
    description: 'Strengthen your global reach with a Hungary virtual phone number. Phonology’s VoIP services offer clear, affordable, and reliable communication.',
    robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    keywords: 'Hungary-virtual-phone-number',
    alternates: {
      canonical: '/hungary-virtual-phone-number',
    },
  };
  
const page = () => {
    return (
        <div>
            <HungaryHeader />
            <HungarySubHeader />
            <BenefitsOfHungaryNumber />
            <HungaryEightCards />
            <HowToBuy />
            <HungaryFeatureCards />
            <FAQAccordionComponent />
            <PhoneNumbers />
            <Footer />
        </div>

    )
}

export default page
