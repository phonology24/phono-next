import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfMyanmarNumber from '@/components/InternationalNumbers/myanmar/BenefitsOfMyanmarNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/myanmar/FAQAccordion'
import MyanmarFeatureCards from '@/components/InternationalNumbers/myanmar/FeaturesCards'
import HowToBuy from '@/components/InternationalNumbers/myanmar/HowToBuy'
import MyanmarEightCards from '@/components/InternationalNumbers/myanmar/MyanmarEightCards'
import MyanmarHeader from '@/components/InternationalNumbers/myanmar/MyanmarHeader'
import MyanmarSubHeader from '@/components/InternationalNumbers/myanmar/MyanmarSubHeader'
import React from 'react'
export const metadata = {
  title: 'Myanmar Virtual Phone Number | Phonology VoIP Solutions',
  description: 'Grow your business with a Myanmar virtual phone number. Phonology offers cost-effective and reliable VoIP services for seamless global communication.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Myanmar-virtual-phone-number',
  alternates: {
    canonical: '/myanmar-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
  <MyanmarHeader />
  <MyanmarSubHeader />
  <BenefitsOfMyanmarNumber />
  <MyanmarEightCards />
  <HowToBuy />
  <MyanmarFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
