import Footer from '@/components/Footer'
import BenefitsOfBrazilNumber from '@/components/InternationalNumbers/brazil/BenefitsOfBrazilNumber'
import BrazilEightCards from '@/components/InternationalNumbers/brazil/BrazilEightCards'
import BrazilHeader from '@/components/InternationalNumbers/brazil/BrazilHeader'
import BrazilSubHeader from '@/components/InternationalNumbers/brazil/BrazilSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/brazil/FAQAccordion'
import BrazilFeatureCards from '@/components/InternationalNumbers/brazil/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/brazil/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
  title: 'Get a Brazil Virtual Phone Number | Phonology VoIP Solutions',
  description: 'Enhance your business communication with a Brazil virtual phone number. Phonology provides scalable, reliable, and affordable VoIP services for global reach.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Brazil-virtual-phone-number',
  alternates: {
    canonical: '/brazil-virtual-phone-number',
  },
};

const page = () => {
  return (
    <div style={{maxWidth:"85vw", margin:"0 auto"}}>
      <BrazilHeader />
      <BrazilSubHeader />
      <BenefitsOfBrazilNumber />
      <BrazilEightCards />
      <HowToBuy />
      <BrazilFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
