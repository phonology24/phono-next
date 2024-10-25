import Footer from '@/components/Footer'
import BenefitsOfElSalvadorNumber from '@/components/InternationalNumbers/elsalvador/BenefitsOfElSalvadorNumber'
import ElSalvadorEightCards from '@/components/InternationalNumbers/elsalvador/ElSalvadorEightCards'
import ElsalvadorHeader from '@/components/InternationalNumbers/elsalvador/ElsalvadorHeader'
import ElSalvadorSubHeader from '@/components/InternationalNumbers/elsalvador/ElSalvadorSubHeader'
import FAQAccordionComponent from '@/components/InternationalNumbers/elsalvador/FAQAccordion'
import ElSalvadorFeatureCards from '@/components/InternationalNumbers/elsalvador/FeatureCards'
import HowToBuy from '@/components/InternationalNumbers/elsalvador/HowToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
  title: 'Get an El Salvador Virtual Phone Number | Phonology VoIP',
  description: 'Enhance your business communication with an El Salvador virtual phone number. Phonology provides reliable VoIP solutions for seamless international connectivity.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'El-Salvador-virtual-phone-number',
  alternates: {
    canonical: '/el-salvador-virtual-phone-number',
  },
};

const page = () => {
  return (
    <div style={{maxWidth:"85vw", margin:"0 auto"}}>
      <ElsalvadorHeader />
      <ElSalvadorSubHeader />
      <BenefitsOfElSalvadorNumber />
      <ElSalvadorEightCards />
      <HowToBuy />
      <ElSalvadorFeatureCards />
      <FAQAccordionComponent />
      <PhoneNumbers />
      <Footer />
    </div>
  )
}

export default page
