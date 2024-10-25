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
export const metadata = {
  title: 'Get a France Virtual Phone Number | Phonology VoIP Solutions',
  description: 'Secure a France virtual phone number for your business and enjoy seamless international communication. Phonology’s VoIP plans are affordable and reliable.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'France-virtual-phone-number',
  alternates: {
    canonical: '/france-virtual-phone-number',
  },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
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
