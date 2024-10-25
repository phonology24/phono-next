import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfUAENumber from '@/components/InternationalNumbers/uae/BenefitsOfUAENumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/uae/FAQAccordion'
import UAEFeatureCards from '@/components/InternationalNumbers/uae/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/uae/HowToBuy'
import UAEEightCards from '@/components/InternationalNumbers/uae/UAEEightCards'
import UAEHeader from '@/components/InternationalNumbers/uae/UAEHeader'
import UAESubHeader from '@/components/InternationalNumbers/uae/UAESubHeader'
import React from 'react'
export const metadata = {
  title: 'Get a UAE Virtual Phone Number | Phonology VoIP Services',
  description: 'Boost your business communication with a UAE virtual phone number. Phonology provides reliable, scalable, and cost-effective VoIP solutions for global reach.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'UAE-virtual-phone-number',
  alternates: {
    canonical: '/uae-virtual-phone-number',
  },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
  <UAEHeader />
  <UAESubHeader />
  <BenefitsOfUAENumber />
  <UAEEightCards />
  <HowToBuy />
  <UAEFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
