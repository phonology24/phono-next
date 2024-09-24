import React from 'react'
import Footer from '@/components/Footer'
import BenefitsOfDenmarkNumber from '@/components/InternationalNumbers/denmark/BenefitsOfDenmarkNumber'
import DenmarkEightCards from '@/components/InternationalNumbers/denmark/DenmarkEightCards'
import DenmarkHeader from '@/components/InternationalNumbers/denmark/DenmarkHeader'
import DenmarkSubHeader from '@/components/InternationalNumbers/denmark/DenmarkSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/denmark/FAQAccordion'
import DenmarkFeatureCards from '@/components/InternationalNumbers/denmark/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/denmark/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'

const page = () => {
    return (
        <div>
            <DenmarkHeader />
            <DenmarkSubHeader />
            <BenefitsOfDenmarkNumber />
            <DenmarkEightCards />
            <HowToBuy />
            <DenmarkFeatureCards />
            <FAQAccordionComponent />
            <PhoneNumbers />
            <Footer />
        </div>

    )
}

export default page
