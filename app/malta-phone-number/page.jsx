import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfMaltaNumber from '@/components/InternationalNumbers/malta/BenefitsOfMaltaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/malta/FAQAccordion'
import MaltaFeatureCards from '@/components/InternationalNumbers/malta/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/malta/HowToBuy'
import MaltaEightCards from '@/components/InternationalNumbers/malta/MaltaEightCards'
import MaltaHeader from '@/components/InternationalNumbers/malta/MaltaHeader'
import MaltaSubHeader from '@/components/InternationalNumbers/malta/MaltaSubHeader'
import React from 'react'

const page = () => {
    return (
        <div>
            <MaltaHeader />
            <MaltaSubHeader />
            <BenefitsOfMaltaNumber />
            <MaltaEightCards />
            <HowToBuy />
            <MaltaFeatureCards />
            <FAQAccordionComponent />
            <PhoneNumbers />
            <Footer />
        </div>

    )
}

export default page
