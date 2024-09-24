import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfPanamaNumber from '@/components/InternationalNumbers/panama/BenefitsOfPanamaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/panama/FAQAccordion'
import PanamaFeatureCards from '@/components/InternationalNumbers/panama/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/panama/HowToBuy'
import PanamaEightCards from '@/components/InternationalNumbers/panama/PanamaEightCards'
import PanamaHeader from '@/components/InternationalNumbers/panama/PanamaHeader'
import PanamaSubHeader from '@/components/InternationalNumbers/panama/PanamaSubHeader'
import React from 'react'

const page = () => {
  return (
    <div>
      <PanamaHeader />
      <PanamaSubHeader />
      <BenefitsOfPanamaNumber />
      <PanamaEightCards />
      <HowToBuy />
      <PanamaFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
