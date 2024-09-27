import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSerbiaNumber from '@/components/InternationalNumbers/serbia/BenefitsOfSerbiaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/serbia/FAQAccordion'
import SerbiaFeatureCards from '@/components/InternationalNumbers/serbia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/serbia/HowToBuy'
import SerbiaEightCards from '@/components/InternationalNumbers/serbia/SerbiaEightCards'
import SerbiaHeader from '@/components/InternationalNumbers/serbia/SerbiaHeader'
import SerbiaSubHeader from '@/components/InternationalNumbers/serbia/SerbiaSubHeader'
import React from 'react'
export const metadata = {
  title: 'Get a Serbia Virtual Phone Number | Phonology VoIP Solutions',
  description: 'Expand your business communication with a Serbia virtual phone number. Phonology provides reliable VoIP services with clear calls and global connectivity.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Serbia-virtual-phone-number',
  alternates: {
    canonical: '/serbia-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
  <SerbiaHeader />
  <SerbiaSubHeader />
  <BenefitsOfSerbiaNumber />
  <SerbiaEightCards />
  <HowToBuy />
  <SerbiaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
