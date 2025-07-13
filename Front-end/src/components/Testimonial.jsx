import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonial = () => {
  return (
    <>
      <section id="mu-client-testimonial">
        <div className="mu-overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="mu-client-testimonial-area">
                  <div className="mu-title">
                    <span className="mu-subtitle">Testimonials</span>
                    <h2>What Customers Say</h2>
                  </div>
                  <div className="mu-testimonial-content">


                    <Swiper
                      spaceBetween={30}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      className="mySwiper mu-testimonial-slider"
                    >
                      <SwiperSlide>
                        <li>
                          <div className="mu-testimonial-single">
                            <div className="mu-testimonial-info">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Cupiditate consequuntur ducimus cumque iure modi
                                nesciunt recusandae eligendi vitae voluptatibus,
                                voluptatum tempore, ipsum nisi perspiciatis. Rerum
                                nesciunt fuga ab natus, dolorem?
                              </p>
                            </div>
                            <div className="mu-testimonial-bio">
                              <p>- David Muller</p>
                            </div>
                          </div>
                        </li>
                      </SwiperSlide>
                      <SwiperSlide>
                        <li>
                          <div className="mu-testimonial-single">
                            <div className="mu-testimonial-info">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Cupiditate consequuntur ducimus cumque iure modi
                                nesciunt recusandae eligendi vitae voluptatibus,
                                voluptatum tempore, ipsum nisi perspiciatis. Rerum
                                nesciunt fuga ab natus, dolorem?
                              </p>
                            </div>
                            <div className="mu-testimonial-bio">
                              <p>- David Muller</p>
                            </div>
                          </div>
                        </li>
                      </SwiperSlide>
                      <SwiperSlide>
                        <li>
                          <div className="mu-testimonial-single">
                            <div className="mu-testimonial-info">
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Cupiditate consequuntur ducimus cumque iure modi
                                nesciunt recusandae eligendi vitae voluptatibus,
                                voluptatum tempore, ipsum nisi perspiciatis. Rerum
                                nesciunt fuga ab natus, dolorem?
                              </p>
                            </div>
                            <div className="mu-testimonial-bio">
                              <p>- David Muller</p>
                            </div>
                          </div>
                        </li>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Testimonial
