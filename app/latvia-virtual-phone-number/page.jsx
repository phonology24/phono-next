import React from 'react'
import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfLatviaNumber from '@/components/InternationalNumbers/latvia/BenefitsOfLatviaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/latvia/FAQAccordion'
import LatviaFeatureCards from '@/components/InternationalNumbers/latvia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/latvia/HowToBuy'
import LatviaEightCards from '@/components/InternationalNumbers/latvia/LatviaEightCards'
import LatviaHeader from '@/components/InternationalNumbers/latvia/LatviaHeader'
import LatviaSubHeader from '@/components/InternationalNumbers/latvia/LatviaSubHeader'
export const metadata = {
  title: 'Latvia Virtual Phone Number for Business | Phonology VoIP',
  description: 'Get a Latvia virtual phone number and streamline your communication with Phonology’s reliable and cost-effective VoIP services.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Latvia-virtual-phone-number',
  alternates: {
    canonical: '/latvia-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
    <LatviaHeader />
    <LatviaSubHeader />
    <BenefitsOfLatviaNumber />
    <LatviaEightCards />
    <HowToBuy />
    <LatviaFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
</div>

  )
}

export default page
