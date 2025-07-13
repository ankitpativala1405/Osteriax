import React from 'react'

const HeroSlider = () => {
  return (
    <>
      <section id="mu-slider">
        <div className="mu-slider-area">
          <div className="mu-top-slider">
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
          </div>
        </div>
      </section>

    </>
  )
}

export default HeroSlider
