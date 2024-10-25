import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfNewZealandNumber from '@/components/InternationalNumbers/newzealand/BenefitsOfNewZealandNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/newzealand/FAQAccordion'
import NewZealandFeatureCards from '@/components/InternationalNumbers/newzealand/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/newzealand/HowToBuy'
import NewZealandEightCards from '@/components/InternationalNumbers/newzealand/NewZealandEightCards'
import NewZealandHeader from '@/components/InternationalNumbers/newzealand/NewZealandHeader'
import NewZealandSubHeader from '@/components/InternationalNumbers/newzealand/NewZealandSubHeader'
import React from 'react'
export const metadata = {
  title: 'New Zealand Virtual Phone Number | Affordable VoIP by Phonology',
  description: 'Grow your business with a New Zealand virtual phone number. Phonology offers reliable and cost-effective VoIP solutions for seamless global communication.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'New-Zealand-virtual-phone-number',
  alternates: {
    canonical: '/new-zealand-virtual-phone-number',
  },
};

const page = () => {
  return (
    <div style={{maxWidth:"85vw", margin:"0 auto"}}>
      <NewZealandHeader />
      <NewZealandSubHeader />
      <BenefitsOfNewZealandNumber />
      <NewZealandEightCards />
      <HowToBuy />
      <NewZealandFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
