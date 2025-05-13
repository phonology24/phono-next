import AICardsWithImage from '@/components/artificial-intelligence/AICardsWithImage'
import AiVoiceUseCases from '@/components/artificial-intelligence/AiVoiceUseCase';
import AiHero from '@/components/artificial-intelligence/hero'
import TwoCardAi from "@/components/artificial-intelligence/TwoCardAI";
import Footer from '@/components/Footer';
import Head from 'next/head';
import Script from 'next/script';
import React from 'react'

export const metadata = {
  title: 'AI Voice Agents for Smarter Customer Conversations',
  description:
    'Boost engagement with AI Voice Agents that handle calls, automate support, and deliver seamless, human-like conversations for your business.',
  robots: 'index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large',
  keywords:
    'ai voice agents,voice ai,ai agents,ai voice agent,ai voice,how to build ai agents,voice agent,voice agents,ai voice comparison,ai,ai agent,voice ai agents,voice ai agent,ai voice assistant,ai agency,24/7 ai voice agents,voice agent ai,real-time voice,ai voice agent n8n,ai voice agents use cases,best ai voice agents 2025,ai voice agent demo',
  alternates: {
    canonical: 'https://www.phonology.io/ai-voice-agents',
  },
};



const page = () => {
  return (
    <div>
       <Head>
        {/* Using metadata */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href={metadata.alternates.canonical} />
        <meta name="robots" content={metadata.robots} />
      </Head>
      <AiHero/>
      <AICardsWithImage/>
      <TwoCardAi/>
      <AiVoiceUseCases/>
      <Footer/>
    </div>
  )
}

export default page
