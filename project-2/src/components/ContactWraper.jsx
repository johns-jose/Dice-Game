import React from 'react'
import Navigation from './Navigation/Navigation'
import Hero from './Hero/Hero'
import HeroForm from './HeroForm/HeroForm'

function ContactWraper() {
  return (
    <div className='contactWraper'>
        <Navigation />
        <Hero />
        <HeroForm />
    </div>
  )
}

export default ContactWraper