import Footer from '@/components/Footer'
import BenefitsOfColombiaNumber from '@/components/InternationalNumbers/colombia/BenefitsOfColombiaNumber'
import ColombiaEightCards from '@/components/InternationalNumbers/colombia/ColombiaEightCards'
import ColombiaHeader from '@/components/InternationalNumbers/colombia/ColombiaHeader'
import ColombiaSubHeader from '@/components/InternationalNumbers/colombia/ColumbiaSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/colombia/FAQAccordion'
import ColombiaFeatureCards from '@/components/InternationalNumbers/colombia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/colombia/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
  title: 'Colombia Virtual Phone Number | Phonology VoIP Services',
  description: 'Expand your global communication with a Colombia virtual phone number. Phonology provides cost-effective and reliable VoIP solutions tailored for businesses.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Colombia-virtual-phone-number',
  alternates: {
    canonical: '/colombia-virtual-phone-number',
  },
};

const page = () => {
  return (
    <div style={{maxWidth:"85vw", margin:"0 auto"}}>
      <ColombiaHeader />
      <ColombiaSubHeader />
      <BenefitsOfColombiaNumber />
      <ColombiaEightCards />
      <HowToBuy />
      <ColombiaFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
