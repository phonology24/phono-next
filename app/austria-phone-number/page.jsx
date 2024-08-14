import Footer from '@/components/Footer'
import AustriaEightCards from '@/components/InternationalNumbers/austria/AustriaEightCards'
import AustriaHeader from '@/components/InternationalNumbers/austria/AustriaHeader'
import AustriaSubHeader from '@/components/InternationalNumbers/austria/AustriaSubHeader'
import BenefitsOfAustriaNumber from '@/components/InternationalNumbers/austria/BenefitsOfAustriaNumber'
import PhoneNumbers from '@/components/InternationalNumbers/GetInternationalNumbersComponent'
import React from 'react'

const page = () => {
  return (
    <div>
      <AustriaHeader/>
      <AustriaSubHeader/>
      <BenefitsOfAustriaNumber/>
      <AustriaEightCards/>
      <PhoneNumbers/>
      <Footer/>
    </div>
  )
}

export default page