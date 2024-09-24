import React from 'react'
import Footer from '@/components/Footer'
import BelgiumEightCards from '@/components/InternationalNumbers/belgium/BelgiumEightCards'
import BelgiumHeader from '@/components/InternationalNumbers/belgium/BelgiumHeader'
import BelgiumSubHeader from '@/components/InternationalNumbers/belgium/BelgiumSubHeader'
import BenefitsOfBelgiumNumber from '@/components/InternationalNumbers/belgium/BenefitsOfBelgiumNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/belgium/FAQAccordion'
import BelgiumFeatureCards from '@/components/InternationalNumbers/belgium/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/belgium/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'

const page = () => {

    return (
        <div>
            <BelgiumHeader />
            <BelgiumSubHeader />
            <BenefitsOfBelgiumNumber />
            <BelgiumEightCards />
            <HowToBuy />
            <BelgiumFeatureCards />
            <FAQAccordionComponent />
            <PhoneNumbers />
            <Footer />
        </div>
    )

}

export default page