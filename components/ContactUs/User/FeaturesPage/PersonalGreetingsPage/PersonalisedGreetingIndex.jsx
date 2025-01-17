import React from 'react'
import PersonalisedGreetingsHero from './PersonalisedGreetingsHero'
import Footer from '@/components/Footer'
import PersonalisedGreetingsQuestion from './PersonalisedGreetingsQuestion'
import PersonalisedGreetingsFeatures from './PersonalisedGreetingsFeatures'
import PersonalisedGreetingsBenefits from './PersonalisedGreetingsBenefits'
import PersonalisedGreetingsUseCases from './PersonalisedGreetingsUseCases'

const PersonalisedGreetingIndex = () => {
  return (
    <div>
      <PersonalisedGreetingsHero />
      <PersonalisedGreetingsQuestion />
      <PersonalisedGreetingsFeatures />
      <PersonalisedGreetingsBenefits />
      <PersonalisedGreetingsUseCases />
      <Footer />
    </div>
  )
}

export default PersonalisedGreetingIndex
