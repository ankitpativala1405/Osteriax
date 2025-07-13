import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

 function HeroSlider() {
  return (
    <section id="mu-slider">
      <div className="mu-slider-area">
        <Swiper
          spaceBetween={30}
          effect={'fade'}
          pagination={{ clickable: true }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mu-top-slider"
        >
          <SwiperSlide>
            <div className="mu-top-slider-single">
              <img src="Images/slider/1.jpeg" alt="img" />
              <div className="mu-top-slider-content">
                <span className="mu-slider-small-title">Welcome</span>
                <h2 className="mu-slider-title">To The OsteriaX</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                  voluptatem accusamus non quidem, deleniti optio.
                </p>
                <a
                  href="#mu-reservation"
                  className="mu-readmore-btn mu-reservation-btn"
                >
                  BOOK A TABLE
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="mu-top-slider-single">
              <img src="Images/slider/2.jpeg" alt="img" />
              <div className="mu-top-slider-content">
                <span className="mu-slider-small-title">The Elegant</span>
                <h2 className="mu-slider-title">Italian Restaurant</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                  voluptatem accusamus non quidem, deleniti optio.
                </p>
                <a
                  href="#mu-reservation"
                  className="mu-readmore-btn mu-reservation-btn"
                >
                  BOOK A TABLE
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="mu-top-slider-single">
              <img src="Images/slider/3.jpeg" alt="img" />
              <div className="mu-top-slider-content">
                <span className="mu-slider-small-title">Delicious</span>
                <h2 className="mu-slider-title">Spicy Masalas</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
                  voluptatem accusamus non quidem, deleniti optio.
                </p>
                <a
                  href="#mu-reservation"
                  className="mu-readmore-btn mu-reservation-btn"
                >
                  BOOK A TABLE
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}


export default HeroSlider