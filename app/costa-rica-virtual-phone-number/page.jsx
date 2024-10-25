import Footer from '@/components/Footer'
import BenefitsOfCostaRicaNumber from '@/components/InternationalNumbers/costarica/BenefitsOfCostaRicaNumber'
import CostaRicaEightCards from '@/components/InternationalNumbers/costarica/CostaRicaEightCards'
import CostaRicaHeader from '@/components/InternationalNumbers/costarica/CostaRicaHeader'
import CostaRicaSubHeader from '@/components/InternationalNumbers/costarica/CostaRicaSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/costarica/FAQAccordion'
import CostaRicaFeatureCards from '@/components/InternationalNumbers/costarica/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/costarica/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
  title: 'Costa Rica Virtual Phone Number | Phonology VoIP Solutions',
  description: 'Expand your international presence with a Costa Rica virtual phone number. Phonology offers reliable, cost-effective VoIP solutions tailored for businesses.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Costa-Rica-virtual-phone-number',
  alternates: {
    canonical: '/costa-rica-virtual-phone-number',
  },
};

const page = () => {
  return (
    <div style={{maxWidth:"85vw", margin:"0 auto"}}>
    <CostaRicaHeader />
    <CostaRicaSubHeader />
    <BenefitsOfCostaRicaNumber />
    <CostaRicaEightCards />
    <HowToBuy />
    <CostaRicaFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
  </div>
  )
}

export default page
