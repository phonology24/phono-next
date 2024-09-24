import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSpainNumber from '@/components/InternationalNumbers/spain/BenefitsOfSpainNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/spain/FAQAccordion'
import SpainFeatureCards from '@/components/InternationalNumbers/spain/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/spain/HowToBuy'
import SpainEightCards from '@/components/InternationalNumbers/spain/SpainEightCards'
import SpainHeader from '@/components/InternationalNumbers/spain/SpainHeader'
import SpainSubHeader from '@/components/InternationalNumbers/spain/SpainSubHeader'
import React from 'react'

const page = () => {
    return (
        <div>
            <SpainHeader />
            <SpainSubHeader />
            <BenefitsOfSpainNumber />
            <SpainEightCards />
            <HowToBuy />
            <SpainFeatureCards />
            <FAQAccordionComponent />
            <PhoneNumbers />
            <Footer />
        </div>
    )
}

export default page
