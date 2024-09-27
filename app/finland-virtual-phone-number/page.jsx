import Footer from '@/components/Footer'
import BenefitsOfFinlandNumber from '@/components/InternationalNumbers/finland/BenefitsOfFinlandNumber'
import FAQAccordionComponent from '@/components/InternationalNumbers/finland/FAQAccordion'
import FinlandFeatureCards from '@/components/InternationalNumbers/finland/FeatureCards'
import FinlandEightCards from '@/components/InternationalNumbers/finland/FinlandEightCards'
import FinlandHeader from '@/components/InternationalNumbers/finland/FinlandHeader'
import FinlandSubHeader from '@/components/InternationalNumbers/finland/FinlandSubHeader'
import HowToBuy from '@/components/InternationalNumbers/finland/HowtToBuy'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'
export const metadata = {
  title: 'Finland Virtual Phone Number for Global Businesses | Phonology',
  description: 'Get a Finland virtual phone number to simplify your communication. Phonology’s VoIP services provide reliable call forwarding and global connectivity.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords: 'Finland-virtual-phone-number',
  alternates: {
    canonical: '/finland-virtual-phone-number',
  },
};

const page = () => {
  return (
<div>
    <FinlandHeader />
    <FinlandSubHeader />
    <BenefitsOfFinlandNumber />
    <FinlandEightCards />
    <HowToBuy />
    <FinlandFeatureCards />
    <FAQAccordionComponent />
    <PhoneNumbers />
    <Footer />
</div>

  )
}

export default page
