import React from 'react'
import Navbar from '../components/Navbar'
import HeroSlider from '../components/HeroSlider'
import AboutUs from '../components/AboutUs'
import Counter from '../components/Counter'
import RestaurantMenu from '../components/RestaurantMenu'
import Reservation from '../components/Reservation'
import Gallery from '../components/Gallery'
import Testimonial from '../components/Testimonial'
import Chef from '../components/Chef'
import Contact from '../components/Contact'
import Map from '../components/Map'
import Footer from '../components/Footer'

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
      <Reservation />
      <Gallery />
      <Testimonial />
      <Chef />
      <Contact />
      <Map />
      <Footer />
    </div>
  )
}

export default IndexPage
