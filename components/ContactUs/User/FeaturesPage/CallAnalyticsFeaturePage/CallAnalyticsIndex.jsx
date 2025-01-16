import React from 'react'
import CallAnalyticsHero from './CallAnalyticsHero'
import CallAnalyticsQuestion from './CallAnalyticsQuestion'
import CallAnalyticsFeatures from './CallAnalyticsFeatures'
import CallAnalyticsBenefits from './CallAnalyticsBenefits'
import CallAnalyticsUseCases from './CallAnalyticsUseCases'
import Footer from '@/components/Footer'

const CallAnalyticsIndex = () => {
  return (
    <div>
      <CallAnalyticsHero />
      <CallAnalyticsQuestion />
      <CallAnalyticsFeatures />
        <CallAnalyticsBenefits />
        <CallAnalyticsUseCases />
        <Footer />
    </div>
  )
}

export default CallAnalyticsIndex
