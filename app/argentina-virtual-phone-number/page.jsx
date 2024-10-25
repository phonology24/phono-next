import Footer from '@/components/Footer'
import ArgentinaEightCards from '@/components/InternationalNumbers/argentina/ArgentinaEightCards'
import ArgentinaHeader from '@/components/InternationalNumbers/argentina/ArgentinaHeader'
import ArgentinaSubHeader from '@/components/InternationalNumbers/argentina/ArgentinaSubHeader'
import BenefitsOfArgentinaNumber from '@/components/InternationalNumbers/argentina/BenefitsOfArgentinaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/argentina/FAQAccordion'
import ArgentinaFeatureCards from '@/components/InternationalNumbers/argentina/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/argentina/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
  title: 'Argentina Virtual Phone Number for Businesses | Phonology VoIP',
  description: 'Expand your communication with an Argentina virtual phone number. Phonology’s VoIP services provide reliable and affordable solutions for international business.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Argentina-virtual-phone-number',
  alternates: {
    canonical: '/argentina-virtual-phone-number',
  },
};

const page = () => {
  return (
    <div style={{maxWidth:"85vw", margin:"0 auto"}}>
      <ArgentinaHeader />
      <ArgentinaSubHeader />
      <BenefitsOfArgentinaNumber />
      <ArgentinaEightCards />
      <HowToBuy />
      <ArgentinaFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>

  )
}

export default page
