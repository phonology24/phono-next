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

const page = () => {
  return (
<div>
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
