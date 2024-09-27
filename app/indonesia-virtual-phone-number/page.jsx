import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfIndonesiaNumber from '@/components/InternationalNumbers/indonesia/BenefitsOfIndonesiaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/indonesia/FAQAccordion'
import IndonesiaFeatureCards from '@/components/InternationalNumbers/indonesia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/indonesia/HowToBuy'
import IndonesiaEightCards from '@/components/InternationalNumbers/indonesia/IndonesiaEightCards'
import IndonesiaHeader from '@/components/InternationalNumbers/indonesia/IndonesiaHeader'
import IndonesiaSubHeader from '@/components/InternationalNumbers/indonesia/IndonesiaSubHeader'
import React from 'react'
export const metadata = {
  title: 'Indonesia Virtual Phone Number for Business | Phonology VoIP',
  description: 'Get an Indonesia virtual phone number to enhance your global communication. Phonology offers reliable and cost-effective VoIP services.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Indonesia-virtual-phone-number',
  alternates: {
    canonical: '/indonesia-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
  <IndonesiaHeader />
  <IndonesiaSubHeader />
  <BenefitsOfIndonesiaNumber />
  <IndonesiaEightCards />
  <HowToBuy />
  <IndonesiaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
