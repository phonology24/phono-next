import React from 'react'
import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfIrelandNumber from '@/components/InternationalNumbers/ireland/BenefitsOfIrelandNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/ireland/FAQAccordion'
import IrelandFeatureCards from '@/components/InternationalNumbers/ireland/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/ireland/HowToBuy'
import IrelandEightCards from '@/components/InternationalNumbers/ireland/IrelandEightCards'
import IrelandHeader from '@/components/InternationalNumbers/ireland/IrelandHeader'
import IrelandSubHeader from '@/components/InternationalNumbers/ireland/irelandSubHeader'

const page = () => {
    return (
        <div>
            <IrelandHeader />
            <IrelandSubHeader />
            <BenefitsOfIrelandNumber />
            <IrelandEightCards />
            <HowToBuy />
            <IrelandFeatureCards />
            <FAQAccordionComponent />
            <PhoneNumbers />
            <Footer />
        </div>

    )
}

export default page