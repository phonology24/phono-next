import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSwedenNumber from '@/components/InternationalNumbers/sweden/BenefitsOfSwedenNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/sweden/FAQAccordion'
import SwedenFeatureCards from '@/components/InternationalNumbers/sweden/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/sweden/HowToBuy'
import SwedenEightCards from '@/components/InternationalNumbers/sweden/SwedenEightCards'
import SwedenHeader from '@/components/InternationalNumbers/sweden/SwedenHeader'
import SwedenSubHeader from '@/components/InternationalNumbers/sweden/SwedenSubHeader'
import React from 'react'
export const metadata = {
  title: 'Sweden Virtual Phone Number | Affordable VoIP Solutions',
  description: 'Boost your business communication with a Sweden virtual phone number. Phonology offers reliable VoIP services to keep you connected anywhere in the world.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Sweden-virtual-phone-number',
  alternates: {
    canonical: '/sweden-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
  <SwedenHeader />
  <SwedenSubHeader />
  <BenefitsOfSwedenNumber />
  <SwedenEightCards />
  <HowToBuy />
  <SwedenFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
