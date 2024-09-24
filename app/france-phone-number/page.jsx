import Footer from '@/components/Footer'
import BenenfitsOfFranceNumber from '@/components/InternationalNumbers/france/BenenfitsOfFranceNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/france/FAQAccordion'
import FranceFeatureCards from '@/components/InternationalNumbers/france/FeatureCards'
import FranceEightCards from '@/components/InternationalNumbers/france/FranceEightCards'
import FranceHeader from '@/components/InternationalNumbers/france/FranceHeader'
import FranceSubHeader from '@/components/InternationalNumbers/france/FranceSubHeader'
import HowToBuy from '@/components/InternationalNumbers/france/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const page = () => {
  return (
<div>
    <FranceHeader />
    <FranceSubHeader />
    <BenenfitsOfFranceNumber/>
    <FranceEightCards />
    <HowToBuy />
    <FranceFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
</div>

  )
}

export default page
