import Footer from '@/components/Footer'
import ArgentinaEightCards from '@/components/InternationalNumbers/argentina/ArgentinaEightCards'
import ArgentinaHeader from '@/components/InternationalNumbers/argentina/ArgentinaHeader'
import ArgentinaSubHeader from '@/components/InternationalNumbers/argentina/ArgentinaSubHeader'
import BenefitsOfArgentinaNumber from '@/components/InternationalNumbers/argentina/BenefitsOfArgentinaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/argentina/FAQAccordion'
import ArgentinaFeatureCards from '@/components/InternationalNumbers/argentina/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/argentina/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const page = () => {
  return (
    <div>
      <ArgentinaHeader />
      <ArgentinaSubHeader />
      <BenefitsOfArgentinaNumber />
      <ArgentinaEightCards />
      <HowToBuy />
      <ArgentinaFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>

  )
}

export default page
