import AICardsWithImage from '@/components/artificial-intelligence/AICardsWithImage'
import AiVoiceUseCases from '@/components/artificial-intelligence/AiVoiceUseCase';
import AiHero from '@/components/artificial-intelligence/hero'
import TwoCardAi from "@/components/artificial-intelligence/TwoCardAI";
import Footer from '@/components/Footer';

import React from 'react'

const page = () => {
  return (
    <div>
      <AiHero/>
      <AICardsWithImage/>
      <TwoCardAi/>
      <AiVoiceUseCases/>
      <Footer/>
    </div>
  )
}

export default page
