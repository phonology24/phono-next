import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSingaporeNumber from '@/components/InternationalNumbers/singapore/BenefitsOfSingaporeNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/singapore/FAQAccordion'
import SingaporeFeatureCards from '@/components/InternationalNumbers/singapore/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/singapore/HowToBuy'
import SingaporeEightCards from '@/components/InternationalNumbers/singapore/SingaporeEightCards'
import SingaporeHeader from '@/components/InternationalNumbers/singapore/SingaporeHeader'
import SingaporeSubHeader from '@/components/InternationalNumbers/singapore/SingaporeSubHeader'
import React from 'react'
export const metadata = {
  title: 'Singapore Virtual Phone Number | Reliable VoIP by Phonology',
  description: 'Grow your business with a Singapore virtual phone number. Phonology provides reliable and cost-effective VoIP services to help you stay connected globally.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Singapore-virtual-phone-number',
  alternates: {
    canonical: '/singapore-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
  <SingaporeHeader />
  <SingaporeSubHeader />
  <BenefitsOfSingaporeNumber />
  <SingaporeEightCards />
  <HowToBuy />
  <SingaporeFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
