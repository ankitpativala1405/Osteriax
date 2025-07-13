import React from 'react'
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import AboutUs from '../components/AboutUs'
import Counter from '../components/Counter'
import RestaurantMenu from '../components/RestaurantMenu'

const IndexPage = () => {
  return (
    <div>
      <a className="scrollToTop" href="#">
        <i className="fa fa-angle-up" />
      </a>
      <Navbar />
      <HeroSlider />
      <AboutUs />
      <Counter />
      <RestaurantMenu />

    </div>
  )
}

export default IndexPage
