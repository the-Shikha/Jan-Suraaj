import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import HeroSection from './HeroSection'
import HelpJanta from './HelpJanta'
import "i18next";
import VotePage from './Votepage'

const Body = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-yellow-100">
  <HeroSection>
    <HelpJanta>
      <VotePage/>
    </HelpJanta>
  </HeroSection>
  
</main>


        <Footer />
    </div>
  )
}

export default Body