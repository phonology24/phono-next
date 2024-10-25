import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfUKNumber from '@/components/InternationalNumbers/uk/BenefitsOfUKNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/uk/FAQAccordion'
import UKFeatureCards from '@/components/InternationalNumbers/uk/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/uk/HowToBuy'
import UKEightCards from '@/components/InternationalNumbers/uk/UKEightCards'
import UKHeader from '@/components/InternationalNumbers/uk/UKHeader'
import UKSubHeader from '@/components/InternationalNumbers/uk/UKSubHeader'
import React from 'react'
export const metadata = {
  title: 'UK Virtual Phone Number | Reliable VoIP Solutions by Phonology',
  description: 'Strengthen your business communication with a UK virtual phone number. Phonology’s VoIP services offer unlimited calling with reliable and cost-effective solutions.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'UK-virtual-phone-number',
  alternates: {
    canonical: '/uk-virtual-phone-number',
  },
};

const page = () => {
  return (
    <div style={{maxWidth:"85vw", margin:"0 auto"}}>
      <UKHeader/>
      <UKSubHeader/>
      <BenefitsOfUKNumber/>
      <UKEightCards/>
      <HowToBuy/>
      <UKFeatureCards/>
      <FAQAccordionComponent/>
      <PhoneNumbers/>
      <Footer/>
    </div>
  )
}

export default page
