import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfUSATollFreeNumber from '@/components/InternationalNumbers/us-tf/BenefitsOfUSATollFreeNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/us-tf/FAQAccordion'
import USATollFreeFeatureCards from '@/components/InternationalNumbers/us-tf/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/us-tf/HowToBuy'
import USATollFreeEightCards from '@/components/InternationalNumbers/us-tf/USATollFreeEightCards'
import USATollFreeHeader from '@/components/InternationalNumbers/us-tf/USATollFreeHeader'
import USATollFreeSubHeader from '@/components/InternationalNumbers/us-tf/USATollFreeSubHeader'
import React from 'react'
export const metadata = {
    title: 'Get a US Toll-Free Virtual Number | Phonology VoIP Services',
    description: 'Provide your clients with easy access using a US toll-free number. Phonology’s VoIP services offer reliable, scalable, and affordable solutions for your business.',
    robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
    keywords: 'US-Toll-Free-virtual-phone-number',
    alternates: {
      canonical: '/us-toll-free-virtual-phone-number',
    },
  };
  
const page = () => {
    return (
        <div>
            <USATollFreeHeader />
            <USATollFreeSubHeader />
            <BenefitsOfUSATollFreeNumber />
            <USATollFreeEightCards />
            <HowToBuy />
            <USATollFreeFeatureCards />
            <FAQAccordionComponent />
            <PhoneNumbers />
            <Footer />
        </div>
    )
}

export default page
