import Footer from '@/components/Footer'
import BenefitsOfElSalvadorNumber from '@/components/InternationalNumbers/elsalvador/BenefitsOfElSalvadorNumber'
import ElSalvadorEightCards from '@/components/InternationalNumbers/elsalvador/ElSalvadorEightCards'
import ElsalvadorHeader from '@/components/InternationalNumbers/elsalvador/ElsalvadorHeader'
import ElSalvadorSubHeader from '@/components/InternationalNumbers/elsalvador/ElSalvadorSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/elsalvador/FAQAccordion'
import ElSalvadorFeatureCards from '@/components/InternationalNumbers/elsalvador/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/elsalvador/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const page = () => {
  return (
    <div>
      <ElsalvadorHeader />
      <ElSalvadorSubHeader />
      <BenefitsOfElSalvadorNumber />
      <ElSalvadorEightCards />
      <HowToBuy />
      <ElSalvadorFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
