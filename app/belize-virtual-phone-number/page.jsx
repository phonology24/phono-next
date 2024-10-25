import Footer from '@/components/Footer'
import BenefitsOfBelizeNumber from '@/components/InternationalNumbers/belize/BenefitsOfBelizeNumber'
import BelizeEightCards from '@/components/InternationalNumbers/belize/BelizeEightCards'
import BelizeHeader from '@/components/InternationalNumbers/belize/BelizeHeader'
import BelizeSubHeader from '@/components/InternationalNumbers/belize/BelizeSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/belize/FAQAccordion'
import BelizeFeatureCards from '@/components/InternationalNumbers/belize/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/belize/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
  title: 'Belize Virtual Phone Number for Businesses | Phonology VoIP',
  description: 'Get a Belize virtual phone number and enjoy seamless global communication. Phonology provides reliable VoIP services to help your business thrive internationally.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Belize-virtual-phone-number',
  alternates: {
    canonical: '/belize-virtual-phone-number',
  },
};

const BelizePhoneNumbersPage = () => {
  return (
    <div style={{maxWidth:"85vw", margin:"0 auto"}}>
      <BelizeHeader />
      <BelizeSubHeader />
      <BenefitsOfBelizeNumber />
      <BelizeEightCards />
      <HowToBuy />
      <BelizeFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default BelizePhoneNumbersPage
