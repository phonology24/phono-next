import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfThailandNumber from '@/components/InternationalNumbers/thailand/BenefitsOfThailandNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/thailand/FAQAccordion'
import ThailandFeatureCards from '@/components/InternationalNumbers/thailand/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/thailand/HowToBuy'
import ThailandEightCards from '@/components/InternationalNumbers/thailand/ThailandEightCards'
import ThailandHeader from '@/components/InternationalNumbers/thailand/ThailandHeader'
import ThailandSubHeader from '@/components/InternationalNumbers/thailand/ThailandSubHeader'
import React from 'react'
export const metadata = {
  title: 'Thailand Virtual Phone Number for Business | Phonology VoIP',
  description: 'Enhance your business reach with a Thailand virtual phone number. Phonology offers cost-effective and reliable VoIP solutions tailored for global communication.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Thailand-virtual-phone-number',
  alternates: {
    canonical: '/thailand-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
  <ThailandHeader />
  <ThailandSubHeader />
  <BenefitsOfThailandNumber />
  <ThailandEightCards />
  <HowToBuy />
  <ThailandFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>


  )
}

export default page
