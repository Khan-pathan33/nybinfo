import React from 'react'
import Header from '../General/Header/Header'
import HeroSection from './HeroSection/HeroSection'
import TicketBook from './TicketBook/TicketBook'
import LetUsConnect from './LetUsConnect/LetUsConnect'
import SuggestSection from './SuggestSection/SuggestSection';
import Footer from '../General/Footer/Footer';
const Pages = () => {
  return (
    <div className="flex flex-col gap-9">

      <Header />

      <HeroSection className="mt-10" />

      <TicketBook className="mt-8" />
    <div className=' flex flex-col gap-20'>
      <LetUsConnect/>
      <SuggestSection/>
      <Footer />
    </div>

    </div>
  )
}

export default Pages