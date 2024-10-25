import Footer from '@/components/Footer'
import BenefitsOfGeorgiaNumber from '@/components/InternationalNumbers/georgia/BenefitsOfGeorgiaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/georgia/FAQAccordion'
import GeorgiaFeatureCards from '@/components/InternationalNumbers/georgia/FeatureCards'
import GeorgiaEightCards from '@/components/InternationalNumbers/georgia/GeorgiaEightCards'
import GeorgiaHeader from '@/components/InternationalNumbers/georgia/GeorgiaHeader'
import GeorgiaSubHeader from '@/components/InternationalNumbers/georgia/GeorgiaSubHeader'
import HowToBuy from '@/components/InternationalNumbers/georgia/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
  title: 'Georgia Virtual Phone Number | Affordable VoIP by Phonology',
  description: 'Get a Georgia virtual phone number and enhance your business communication. Phonology provides reliable VoIP solutions for businesses of all sizes.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Georgia-virtual-phone-number',
  alternates: {
    canonical: '/georgia-virtual-phone-number',
  },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
    <GeorgiaHeader />
    <GeorgiaSubHeader />
    <BenefitsOfGeorgiaNumber />
    <GeorgiaEightCards />
    <HowToBuy />
    <GeorgiaFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
</div>

  )
}

export default page
