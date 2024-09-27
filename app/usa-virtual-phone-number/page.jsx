import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfUSANumber from '@/components/InternationalNumbers/USA/BenefitsOfUSANumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/USA/FAQAccordion'
import USAFeatureCards from '@/components/InternationalNumbers/USA/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/USA/HowToBuy'
import USAEightCards from '@/components/InternationalNumbers/USA/USAEightCards'
import USAHeader from '@/components/InternationalNumbers/USA/USAHeader'
import USASubHeader from '@/components/InternationalNumbers/USA/USASubHeader'
import React from 'react'
export const metadata = {
  title: 'United States Virtual Phone Number | Phonology VoIP Solutions',
  description: 'Boost your business communication with a United States virtual phone number. Phonology’s VoIP services provide reliable, scalable, and affordable international communication.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'United-States-virtual-phone-number',
  alternates: {
    canonical: '/united-states-virtual-phone-number',
  },
};

const page = () => {
  return (
    <div>
      <USAHeader />
      <USASubHeader />
      <BenefitsOfUSANumber />
      <USAEightCards />
      <HowToBuy />
      <USAFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
