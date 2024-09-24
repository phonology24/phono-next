import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfUSATollFreeNumber from '@/components/InternationalNumbers/us-tf/BenefitsOfUSATollFreeNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/us-tf/FAQAccordion'
import USATollFreeFeatureCards from '@/components/InternationalNumbers/us-tf/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/us-tf/HowToBuy'
import USATollFreeEightCards from '@/components/InternationalNumbers/us-tf/USATollFreeEightCards'
import USATollFreeHeader from '@/components/InternationalNumbers/us-tf/USATollFreeHeader'
import USATollFreeSubHeader from '@/components/InternationalNumbers/us-tf/USATollFreeSubHeader'
import React from 'react'

const page = () => {
    return (
        <div>
            <USATollFreeHeader />
            <USATollFreeSubHeader />
            <BenefitsOfUSATollFreeNumber />
            <USATollFreeEightCards />
            <HowToBuy />
            <USATollFreeFeatureCards />
            <FAQAccordionComponent />
            <PhoneNumbers />
            <Footer />
        </div>
    )
}

export default page
