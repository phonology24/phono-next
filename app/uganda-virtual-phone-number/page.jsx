import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfUgandaNumber from '@/components/InternationalNumbers/uganda/BenefitsOfUgandaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/uganda/FAQAccordion'
import UgandaFeatureCards from '@/components/InternationalNumbers/uganda/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/uganda/HowToBuy'
import UgandaEightCards from '@/components/InternationalNumbers/uganda/UgandaEightCards'
import UgandaHeader from '@/components/InternationalNumbers/uganda/UgandaHeader'
import UgandaSubHeader from '@/components/InternationalNumbers/uganda/UgandaSubHeader'
import React from 'react'
export const metadata = {
  title: 'Uganda Virtual Phone Number | Affordable VoIP by Phonology',
  description: 'Grow your business with a Uganda virtual phone number. Phonology provides reliable and cost-effective VoIP services for seamless global communication.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Uganda-virtual-phone-number',
  alternates: {
    canonical: '/uganda-virtual-phone-number',
  },
};

const page = () => {
  return (
    <div>
      <UgandaHeader />
      <UgandaSubHeader />
      <BenefitsOfUgandaNumber />
      <UgandaEightCards />
      <HowToBuy />
      <UgandaFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
