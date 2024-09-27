import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfIcelandNumber from '@/components/InternationalNumbers/iceland/BenefitsOfIcelandNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/iceland/FAQAccordion'
import IcelandFeatureCards from '@/components/InternationalNumbers/iceland/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/iceland/HowToBuy'
import IcelandEightCards from '@/components/InternationalNumbers/iceland/IcelandEightCards'
import IcelandHeader from '@/components/InternationalNumbers/iceland/IcelandHeader'
import IcelandSubHeader from '@/components/InternationalNumbers/iceland/IcelandSubHeader'
import React from 'react'
export const metadata = {
  title: 'Iceland Virtual Phone Number | Phonology VoIP Solutions',
  description: 'Get an Iceland virtual phone number and experience seamless international communication with Phonology’s cost-effective and reliable VoIP solutions.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Iceland-virtual-phone-number',
  alternates: {
    canonical: '/iceland-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
    <IcelandHeader />
    <IcelandSubHeader />
    <BenefitsOfIcelandNumber />
    <IcelandEightCards />
    <HowToBuy />
    <IcelandFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
</div>

  )
}

export default page
