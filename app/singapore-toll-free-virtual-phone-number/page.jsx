import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSingaporeTFNumber from '@/components/InternationalNumbers/singapore-tf/BenefitsOfSingaporeTollFreeNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/singapore-tf/FAQAccordion'
import SingaporeTFFeatureCards from '@/components/InternationalNumbers/singapore-tf/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/singapore-tf/HowToBuy'
import SingaporeTollFreeEightCards from '@/components/InternationalNumbers/singapore-tf/SingaporeTollFreeEightCards'
import SingaporeTFHeader from '@/components/InternationalNumbers/singapore-tf/SingaporeTollFreeHeader'
import SingaporeTFSubHeader from '@/components/InternationalNumbers/singapore-tf/SingaporeTollFreeSubHeader'
import React from 'react'
export const metadata = {
  title: 'Get a Singapore Toll-Free Virtual Number | Phonology VoIP',
  description: 'Enhance customer communication with a Singapore toll-free number. Phonology offers reliable and scalable VoIP solutions to support your business growth.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Singapore-Toll-Free-virtual-phone-number',
  alternates: {
    canonical: '/singapore-toll-free-virtual-phone-number',
  },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
  <SingaporeTFHeader />
  <SingaporeTFSubHeader />
  <BenefitsOfSingaporeTFNumber />
  <SingaporeTollFreeEightCards />
  <HowToBuy />
  <SingaporeTFFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
