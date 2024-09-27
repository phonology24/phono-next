import Footer from '@/components/Footer'
import BenefitsOfChileNumber from '@/components/InternationalNumbers/chile/BenefitsOfChileNumber'
import ChileEightCards from '@/components/InternationalNumbers/chile/ChileEightCards'
import ChileHeader from '@/components/InternationalNumbers/chile/ChileHeader'
import ChileSubHeader from '@/components/InternationalNumbers/chile/ChileSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/chile/FAQAccordion'
import ChileFeatureCards from '@/components/InternationalNumbers/chile/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/chile/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
  title: 'Chile Virtual Phone Number | Affordable VoIP by Phonology',
  description: 'Get a Chile virtual phone number and boost your business communication. Phonology offers reliable VoIP solutions to keep you connected internationally.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Chile-virtual-phone-number',
  alternates: {
    canonical: '/chile-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
      <ChileHeader />
      <ChileSubHeader />
      <BenefitsOfChileNumber />
      <ChileEightCards />
      <HowToBuy />
      <ChileFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
