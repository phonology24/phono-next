import UifnPage from '@/components/UifnPage.jsx'
import VirtualNumber from '@/components/VirtualNumber'
import React from 'react'

export const metadata = {
  title: 'UIFN Numbers: One Toll-Free Number for Many Countries | Phonology',
  description: 'Get a Universal International Freephone Number (UIFN): one toll-free number your customers can call free from multiple countries.',
  alternates: { canonical: '/uifn-number' },
};

const page = () => {
  return (
<div style={{maxWidth:"85vw", margin:"0 auto"}}>
   <UifnPage/>
    </div>
  )
}

export default page
