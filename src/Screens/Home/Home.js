import React from 'react'
import Card from './Components/Card/Card'
import Carousel from './Components/Carousel/Carousel'
import Philosophy from './Components/Philosophy/Philosophy'

const Home = () => {
  return (
    <div className='Home'>
        <Carousel />
        <Card />
        <Philosophy />
    </div>
  )
}

export default Home