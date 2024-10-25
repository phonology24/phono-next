import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSouthKoreaNumber from '@/components/InternationalNumbers/southkorea/BenefitsOfSouthKoreaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/southkorea/FAQAccordion'
import SouthKoreaFeatureCards from '@/components/InternationalNumbers/southkorea/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/southkorea/HowToBuy'
import SouthKoreaEightCards from '@/components/InternationalNumbers/southkorea/SouthKoreaEightCards'
import SouthKoreaHeader from '@/components/InternationalNumbers/southkorea/SouthKoreaHeader'
import SouthKoreaSubHeader from '@/components/InternationalNumbers/southkorea/SouthKoreaSubHeader'
import React from 'react'
export const metadata = {
  title: 'South Korea Virtual Phone Number | Phonology VoIP Services',
  description: 'Expand your business presence with a South Korea virtual phone number. Phonology provides affordable and reliable VoIP services for global communication.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'South-Korea-virtual-phone-number',
  alternates: {
    canonical: '/south-korea-virtual-phone-number',
  },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
  <SouthKoreaHeader />
  <SouthKoreaSubHeader />
  <BenefitsOfSouthKoreaNumber />
  <SouthKoreaEightCards />
  <HowToBuy />
  <SouthKoreaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
