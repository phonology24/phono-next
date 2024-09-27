import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfUkraineNumber from '@/components/InternationalNumbers/ukraine/BenefitsOfUkraineNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/ukraine/FAQAccordion'
import UkraineFeatureCards from '@/components/InternationalNumbers/ukraine/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/ukraine/HowToBuy'
import UkraineEightCards from '@/components/InternationalNumbers/ukraine/UkraineEightCards'
import UkraineHeader from '@/components/InternationalNumbers/ukraine/UkraineHeader'
import UkraineSubHeader from '@/components/InternationalNumbers/ukraine/UkraineSubHeader'
import React from 'react'
export const metadata = {
  title: 'Ukraine Virtual Phone Number | Reliable VoIP by Phonology',
  description: 'Enhance your business with a Ukraine virtual phone number. Phonology’s VoIP services offer seamless, affordable, and reliable international communication.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Ukraine-virtual-phone-number',
  alternates: {
    canonical: '/ukraine-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
  <UkraineHeader />
  <UkraineSubHeader />
  <BenefitsOfUkraineNumber />
  <UkraineEightCards />
  <HowToBuy />
  <UkraineFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
