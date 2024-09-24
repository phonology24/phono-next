import Footer from '@/components/Footer'
import BenefitsOfCzechNumber from '@/components/InternationalNumbers/czech/BenefitsOfCzechNumber'
import CzechEightCards from '@/components/InternationalNumbers/czech/CzechEightCards'
import CzechHeader from '@/components/InternationalNumbers/czech/CzechHeader'
import CzechSubHeader from '@/components/InternationalNumbers/czech/CzechSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/czech/FAQAccordion'
import CzechFeatureCards from '@/components/InternationalNumbers/czech/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/czech/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const page = () => {
    return (
        <div>
            <CzechHeader />
            <CzechSubHeader />
            <BenefitsOfCzechNumber />
            <CzechEightCards />
            <HowToBuy />
            <CzechFeatureCards />
            <FAQAccordionComponent />
            <PhoneNumbers />
            <Footer />
        </div>

    )
}

export default page
