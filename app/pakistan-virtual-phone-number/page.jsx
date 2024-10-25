import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfPakistanNumber from '@/components/InternationalNumbers/pakistan/BenefitsOfPakistanNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/pakistan/FAQAccordion'
import PakistanFeatureCards from '@/components/InternationalNumbers/pakistan/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/pakistan/HowToBuy'
import PakistanEightCards from '@/components/InternationalNumbers/pakistan/PakistanEightCards'
import PakistanHeader from '@/components/InternationalNumbers/pakistan/PakistanHeader'
import PakistanSubHeader from '@/components/InternationalNumbers/pakistan/PakistanSubHeader'
import React from 'react'
export const metadata = {
  title: 'Pakistan Virtual Phone Number | Affordable VoIP by Phonology',
  description: 'Enhance your business communication with a Pakistan virtual phone number. Phonology’s VoIP services offer crystal-clear calls and cost-effective solutions.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Pakistan-virtual-phone-number',
  alternates: {
    canonical: '/pakistan-virtual-phone-number',
  },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
  <PakistanHeader />
  <PakistanSubHeader />
  <BenefitsOfPakistanNumber />
  <PakistanEightCards />
  <HowToBuy />
  <PakistanFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
