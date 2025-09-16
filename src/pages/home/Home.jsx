import React from 'react'
import Hero from '../../comp/hero/Hero'
import Leaders from '../../comp/leaders/Leaders'
import Schemes from '../../comp/schems/Schemes'
import Services from '../../comp/services/Services'
import Mahasanvad from '../../comp/mahasanvad/Mahasanvad'

const Home = () => {
    return (
        <>
         
          <Hero />
          <Leaders/>
          <Schemes/>
          <Mahasanvad />
          <Services />
        </>
    )
}

export default Home