import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfPanamaNumber from '@/components/InternationalNumbers/panama/BenefitsOfPanamaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/panama/FAQAccordion'
import PanamaFeatureCards from '@/components/InternationalNumbers/panama/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/panama/HowToBuy'
import PanamaEightCards from '@/components/InternationalNumbers/panama/PanamaEightCards'
import PanamaHeader from '@/components/InternationalNumbers/panama/PanamaHeader'
import PanamaSubHeader from '@/components/InternationalNumbers/panama/PanamaSubHeader'
import React from 'react'
export const metadata = {
  title: 'Panama Virtual Phone Number | Affordable VoIP Solutions by Phonology',
  description: 'Expand your global communication with a Panama virtual phone number. Phonology offers reliable and cost-effective VoIP services to keep your business connected.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Panama-virtual-phone-number',
  alternates: {
    canonical: '/panama-virtual-phone-number',
  },
};

const page = () => {
  return (
    <div style={{maxWidth:"85vw", margin:"0 auto"}}>
      <PanamaHeader />
      <PanamaSubHeader />
      <BenefitsOfPanamaNumber />
      <PanamaEightCards />
      <HowToBuy />
      <PanamaFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
