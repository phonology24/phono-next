import Footer from '@/components/Footer'
import BenefitsOfBulgariaNumber from '@/components/InternationalNumbers/bulgaria/BenefitsOfBulgariaNumber'
import BulgariaEightCards from '@/components/InternationalNumbers/bulgaria/BulgariaEightCards'
import BulgariaHeader from '@/components/InternationalNumbers/bulgaria/BulgariaHeader'
import BulgariaSubHeader from '@/components/InternationalNumbers/bulgaria/BulgariaSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/bulgaria/FAQAccordion'
import BulgariaFeatureCards from '@/components/InternationalNumbers/bulgaria/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/bulgaria/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
  title: 'Bulgaria Virtual Phone Number | Phonology VoIP Solutions',
  description: 'Expand your business reach with a Bulgaria virtual phone number. Phonology’s VoIP services offer reliable call forwarding and low-cost communication solutions.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Bulgaria-virtual-phone-number',
  alternates: {
    canonical: '/bulgaria-virtual-phone-number',
  },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
    <BulgariaHeader />
    <BulgariaSubHeader />
    <BenefitsOfBulgariaNumber />
    <BulgariaEightCards />
    <HowToBuy />
    <BulgariaFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
</div>

  )
}

export default page
