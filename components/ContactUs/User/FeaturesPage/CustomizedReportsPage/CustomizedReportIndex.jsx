import React from 'react'
import CustomizedReportFeatures from './CustomizedReportFeatures'
import CustomizedReportsHero from './CustomizedReportsHero'
import CustomizedReportsQuestion from './CustomizedReportsQuestion'
import CustomizedReportBenefits from './CustomizedReportBenefits'
import CustomizedReportsUseCases from './CustomizedReportsUseCases'
import Footer from '@/components/Footer'

const CustomizedReportIndex = () => {
  return (
    <div>
      <CustomizedReportsHero />
      <CustomizedReportsQuestion />
      <CustomizedReportFeatures />
    <CustomizedReportBenefits />
    <CustomizedReportsUseCases /> 
    <Footer />
    </div>
  )
}

export default CustomizedReportIndex
