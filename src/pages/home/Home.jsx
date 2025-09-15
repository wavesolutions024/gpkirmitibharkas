import React from 'react'
import Hero from '../../comp/hero/Hero'
import Leaders from '../../comp/leaders/Leaders'
import Schemes from '../../comp/schems/Schemes'
import Services from '../../comp/services/Services'

const Home = () => {
    return (
        <>
         
          <Hero />
          <Leaders/>
          <Schemes/>
          <Services />
        </>
    )
}

export default Home