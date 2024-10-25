import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfTaiwanNumber from '@/components/InternationalNumbers/taiwan/BenefitsOfTaiwanNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/taiwan/FAQAccordion'
import TaiwanFeatureCards from '@/components/InternationalNumbers/taiwan/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/taiwan/HowToBuy'
import TaiwanEightCards from '@/components/InternationalNumbers/taiwan/TaiwanEightCards'
import TaiwanHeader from '@/components/InternationalNumbers/taiwan/TaiwanHeader'
import TaiwanSubHeader from '@/components/InternationalNumbers/taiwan/TaiwanSubHeader'
import React from 'react'
export const metadata = {
  title: 'Taiwan Virtual Phone Number | Phonology VoIP Solutions',
  description: 'Boost your global communication with a Taiwan virtual phone number. Phonology offers reliable VoIP services that provide seamless international calling.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Taiwan-virtual-phone-number',
  alternates: {
    canonical: '/taiwan-virtual-phone-number',
  },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
  <TaiwanHeader />
  <TaiwanSubHeader />
  <BenefitsOfTaiwanNumber />
  <TaiwanEightCards />
  <HowToBuy />
  <TaiwanFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
