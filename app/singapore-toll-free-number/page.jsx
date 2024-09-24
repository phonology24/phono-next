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

const page = () => {
  return (
<div>
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
