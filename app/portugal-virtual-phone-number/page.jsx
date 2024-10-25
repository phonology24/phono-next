import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfPortugalNumber from '@/components/InternationalNumbers/portugal/BenefitsOfPortugalNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/portugal/FAQAccordion'
import PortugalFeatureCards from '@/components/InternationalNumbers/portugal/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/portugal/HowToBuy'
import PortugalEightCards from '@/components/InternationalNumbers/portugal/PortugalEightCards'
import PortugalHeader from '@/components/InternationalNumbers/portugal/PortugalHeader'
import PortugalSubHeader from '@/components/InternationalNumbers/portugal/PortugalSubHeader'
import React from 'react'
export const metadata = {
  title: 'Get a Portugal Virtual Phone Number | Phonology VoIP',
  description: 'Reach your global clients easily with a Portugal virtual phone number. Phonology provides cost-effective and reliable VoIP services tailored for your business.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Portugal-virtual-phone-number',
  alternates: {
    canonical: '/portugal-virtual-phone-number',
  },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
  <PortugalHeader />
  <PortugalSubHeader />
  <BenefitsOfPortugalNumber />
  <PortugalEightCards />
  <HowToBuy />
  <PortugalFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
