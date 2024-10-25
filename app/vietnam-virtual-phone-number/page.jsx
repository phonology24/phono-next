import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfVietnamNumber from '@/components/InternationalNumbers/vietnam/BenefitsOfVietnamNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/vietnam/FAQAccordion'
import VietnamFeatureCards from '@/components/InternationalNumbers/vietnam/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/vietnam/HowToBuy'
import VietnamEightCards from '@/components/InternationalNumbers/vietnam/VietnamEightCards'
import VietnamHeader from '@/components/InternationalNumbers/vietnam/VietnamHeader'
import VietnamSubHeader from '@/components/InternationalNumbers/vietnam/VietnamSubHeader'
import React from 'react'
export const metadata = {
  title: 'Vietnam Virtual Phone Number | Phonology VoIP Solutions',
  description: 'Grow your business reach with a Vietnam virtual phone number. Phonology provides cost-effective and reliable VoIP services for global communication.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Vietnam-virtual-phone-number',
  alternates: {
    canonical: '/vietnam-virtual-phone-number',
  },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
  <VietnamHeader />
  <VietnamSubHeader />
  <BenefitsOfVietnamNumber />
  <VietnamEightCards />
  <HowToBuy />
  <VietnamFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
