import Footer from '@/components/Footer'
import BahrainEightCards from '@/components/InternationalNumbers/bahrain/BahrainEightCards'
import BahrainHeader from '@/components/InternationalNumbers/bahrain/BahrainHeader'
import BahrainSubHeader from '@/components/InternationalNumbers/bahrain/BahrainSubHeader'
import BenefitsOfBahrainNumber from '@/components/InternationalNumbers/bahrain/BenefitsOfBahrainNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/bahrain/FAQAccordion'
import BahrainFeatureCards from '@/components/InternationalNumbers/bahrain/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/bahrain/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
  title: 'Bahrain Virtual Phone Number | Phonology VoIP Solutions',
  description: 'Get a Bahrain virtual phone number for your business and enjoy clear communication. Phonology provides reliable, scalable, and cost-effective VoIP solutions.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Bahrain-virtual-phone-number',
  alternates: {
    canonical: '/bahrain-virtual-phone-number',
  },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
  <BahrainHeader />
  <BahrainSubHeader />
  <BenefitsOfBahrainNumber />
  <BahrainEightCards />
  <HowToBuy />
  <BahrainFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
