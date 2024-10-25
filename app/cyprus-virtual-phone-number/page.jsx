import Footer from '@/components/Footer'
import BenefitsOfCyprusNumber from '@/components/InternationalNumbers/cyprus/BenefitsOfCyprusNumber'
import CyprusEightCards from '@/components/InternationalNumbers/cyprus/CyprusEightCards'
import CyprusHeader from '@/components/InternationalNumbers/cyprus/CyprusHeader'
import CyprusSubHeader from '@/components/InternationalNumbers/cyprus/CyprusSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/cyprus/FAQAccordion'
import CyprusFeatureCards from '@/components/InternationalNumbers/cyprus/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/cyprus/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
  title: 'Cyprus Virtual Phone Number | Cost-Effective VoIP by Phonology',
  description: 'Get a Cyprus virtual phone number and take your business global. Enjoy affordable, reliable, and scalable VoIP services from Phonology.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Cyprus-virtual-phone-number',
  alternates: {
    canonical: '/cyprus-virtual-phone-number',
  },
};

const page = () => {
  return (
    <div style={{maxWidth:"85vw", margin:"0 auto"}}>
    <CyprusHeader />
    <CyprusSubHeader />
    <BenefitsOfCyprusNumber />
    <CyprusEightCards />
    <HowToBuy />
    <CyprusFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
  </div>
  
  )
}

export default page
