import Footer from '@/components/Footer'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import BenefitsOfUKTFNumber from '@/components/InternationalNumbers/uk-tf/BenefitsOfUKTFNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/uk-tf/FAQAccordion'
import UKTFFeatureCards from '@/components/InternationalNumbers/uk-tf/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/uk-tf/HowToBuy'
import UKTFEightCards from '@/components/InternationalNumbers/uk-tf/UKTFEightCards'
import UKTFHeader from '@/components/InternationalNumbers/uk-tf/UKTFHeader'
import UKTFSubHeader from '@/components/InternationalNumbers/uk-tf/UKTFSubHeader'
import React from 'react'
export const metadata = {
  title: 'Get a UK Toll-Free Virtual Number | Phonology',
  description: 'Offer your clients a hassle-free way to contact you with a UK toll-free virtual number. Phonology’s VoIP solutions are affordable and easy to manage.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'UK-Toll-Free-virtual-phone-number',
  alternates: {
    canonical: '/uk-toll-free-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
  <UKTFHeader />
  <UKTFSubHeader />
  <BenefitsOfUKTFNumber />
  <UKTFEightCards />
  <HowToBuy />
  <UKTFFeatureCards />
  <FAQAccordionComponent />
  <PhoneNumbers />
  <Footer />
</div>

  )
}

export default page
