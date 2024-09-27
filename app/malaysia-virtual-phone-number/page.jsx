import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfMalaysiaNumber from '@/components/InternationalNumbers/malaysia/BenefitsOfMalaysiaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/malaysia/FAQAccordion'
import MalaysiaFeatureCards from '@/components/InternationalNumbers/malaysia/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/malaysia/HowToBuy'
import MalaysiaEightCards from '@/components/InternationalNumbers/malaysia/MalaysiaEightCards'
import MalaysiaHeader from '@/components/InternationalNumbers/malaysia/MalaysiaHeader'
import MalaysiaSubHeader from '@/components/InternationalNumbers/malaysia/MalaysiaSubHeader'
import React from 'react'
export const metadata = {
  title: 'Get a Malaysia Virtual Phone Number | Phonology VoIP Services',
  description: 'Boost your global communication with a Malaysia virtual phone number. Phonology provides reliable, affordable VoIP solutions to suit your business needs.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Malaysia-virtual-phone-number',
  alternates: {
    canonical: '/malaysia-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
  <MalaysiaHeader />
  <MalaysiaSubHeader />
  <BenefitsOfMalaysiaNumber />
  <MalaysiaEightCards />
  <HowToBuy />
  <MalaysiaFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
