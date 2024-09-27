import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfHongKongNumber from '@/components/InternationalNumbers/hong-kong/BenefitsOfHongKongNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/hong-kong/FAQAccordion'
import HongKongFeatureCards from '@/components/InternationalNumbers/hong-kong/FeatureCards'
import HongKongEightCards from '@/components/InternationalNumbers/hong-kong/HongKongEightCards'
import HongKongHeader from '@/components/InternationalNumbers/hong-kong/HongKongHeader'
import HongKongSubHeader from '@/components/InternationalNumbers/hong-kong/HongKongSubHeader'
import HowToBuy from '@/components/InternationalNumbers/hong-kong/howToBuy'
import React from 'react'
export const metadata = {
  title: 'Hong Kong Virtual Phone Number | Reliable VoIP by Phonology',
  description: 'Expand your global presence with a Hong Kong virtual phone number. Phonology offers affordable VoIP services for clear, reliable communication.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Hong-Kong-virtual-phone-number',
  alternates: {
    canonical: '/hong-kong-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
  <HongKongHeader />
  <HongKongSubHeader />
  <BenefitsOfHongKongNumber />
  <HongKongEightCards />
  <HowToBuy />
  <HongKongFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
