import Footer from '@/components/Footer'
import AustraliaTollFreeEightCards from '@/components/InternationalNumbers/australia-tf/AustraliaTollFreeEightCards'
import AustraliaTollFreeHeader from '@/components/InternationalNumbers/australia-tf/AustraliaTollFreeHeader'
import AustraliaTollFreeSubHeader from '@/components/InternationalNumbers/australia-tf/AustraliaTollFreeSubHeader'
import BenefitsOfAustraliaTollFreeNumber from '@/components/InternationalNumbers/australia-tf/BenefitsOfAustraliaTollFreeNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/australia-tf/FAQAccordion'
import AustraliaTollFreeFeatureCards from '@/components/InternationalNumbers/australia-tf/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/australia-tf/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
  title: 'Get an Australia Toll-Free Virtual Number | Phonology VoIP',
  description: 'Offer clients easy access with an Australia toll-free number. Phonology provides reliable VoIP solutions for clear, scalable, and affordable communication.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Australia-Toll-Free-virtual-phone-number',
  alternates: {
    canonical: '/australia-toll-free-virtual-phone-number',
  },
};

const page = () => {
  return (
    <div style={{maxWidth:"85vw", margin:"0 auto"}}>
    <AustraliaTollFreeHeader />
    <AustraliaTollFreeSubHeader />
    <BenefitsOfAustraliaTollFreeNumber />
    <AustraliaTollFreeEightCards />
    <HowToBuy />
    <AustraliaTollFreeFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
  </div>
  )
}

export default page
