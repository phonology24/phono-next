import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfSouthAfricaNumber from '@/components/InternationalNumbers/southafrica/BenefitsOfSouthAfricaNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/southafrica/FAQAccordion'
import SouthAfricaFeatureCards from '@/components/InternationalNumbers/southafrica/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/southafrica/HowToBuy'
import SouthAfricaEightCards from '@/components/InternationalNumbers/southafrica/SouthAfricaEightCards'
import SouthAfricaHeader from '@/components/InternationalNumbers/southafrica/SouthAfricaHeader'
import SouthAfricaSubHeader from '@/components/InternationalNumbers/southafrica/SouthAfricaSubHeader'
import React from 'react'

const page = () => {
    return (
        <div>
            <SouthAfricaHeader />
            <SouthAfricaSubHeader />
            <BenefitsOfSouthAfricaNumber />
            <SouthAfricaEightCards />
            <HowToBuy />
            <SouthAfricaFeatureCards />
            <FAQAccordionComponent />
            <PhoneNumbers />
            <Footer />
        </div>
    )
}

export default page
