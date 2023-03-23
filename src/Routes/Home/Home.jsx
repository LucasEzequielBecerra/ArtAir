import React from 'react'
import Carousel from '../../components/Carousel/Carousel'

import Section from '../../Routes/Section/Section'

const Home = () => {
  
  return (
    <>

      <Carousel/>
      <Section home sectionName={'Novedades'}/>
      <Section home sectionName={'Ofertas'}/>

    </>


  )
}

export default Home