import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSwitzerlandNumber from '@/components/InternationalNumbers/switzerland/BenefitsOfSwitzerlandNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/switzerland/FAQAccordion'
import SwitzerlandFeatureCards from '@/components/InternationalNumbers/switzerland/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/switzerland/howToBuy'
import SwitzerlandEightCards from '@/components/InternationalNumbers/switzerland/SwitzerlandEightCards'
import SwitzerlandHeader from '@/components/InternationalNumbers/switzerland/SwitzerlandHeader'
import SwitzerlandSubHeader from '@/components/InternationalNumbers/switzerland/SwitzerlandSubHeader'
import React from 'react'
export const metadata = {
  title: 'Switzerland Virtual Phone Number | Phonology VoIP Solutions',
  description: 'Enhance your global business presence with a Switzerland virtual phone number. Phonology’s VoIP services are affordable, scalable, and reliable.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Switzerland-virtual-phone-number',
  alternates: {
    canonical: '/switzerland-virtual-phone-number',
  },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
  <SwitzerlandHeader />
  <SwitzerlandSubHeader />
  <BenefitsOfSwitzerlandNumber />
  <SwitzerlandEightCards />
  <HowToBuy />
  <SwitzerlandFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
