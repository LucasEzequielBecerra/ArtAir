import React from 'react'
import Carousel from '../Carousel/Carousel'

import Section from '../Section/Section'

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