import React from 'react'
import Header from './Header'
import '../../styles/Home.css'
import CarBooking from './CarBooking'
import StatisticsSection from './Strip'
import Article from './Article'
import Guest from './Guest'
import Background from './Background'
import Footer from './Footer'
import AvailableCars from '../AvailableCars/AvailableCars'

const Home = () => {
  return (
    <div>
      <Background />
      <StatisticsSection/>
     <AvailableCars/>
      <Article/>
      <Guest/>
      <Footer/>
    </div>
  )
}

export default Home
