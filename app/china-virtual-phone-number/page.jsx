import Footer from '@/components/Footer'
import BenefitsOfChinaNumber from '@/components/InternationalNumbers/china/BenefitsOfChinaNumber'
import ChinaEightCards from '@/components/InternationalNumbers/china/ChinaEightCards'
import ChinaHeader from '@/components/InternationalNumbers/china/ChinaHeader'
import ChinaSubHeader from '@/components/InternationalNumbers/china/ChinaSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/china/FAQAccordion'
import ChinaFeatureCards from '@/components/InternationalNumbers/china/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/china/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
  title: 'Get a China Virtual Phone Number | Phonology VoIP Services',
  description: 'Boost your business communication with a China virtual phone number. Phonology’s VoIP solutions ensure affordable and seamless global calling.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'China-virtual-phone-number',
  alternates: {
    canonical: '/china-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
  <ChinaHeader />
  <ChinaSubHeader />
  <BenefitsOfChinaNumber />
  <ChinaEightCards />
  <HowToBuy />
  <ChinaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
