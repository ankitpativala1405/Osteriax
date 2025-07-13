import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const chefs = [
  {
    name: 'Simon Jonson',
    role: 'Head Chef',
    image: 'Images/chef/chef-1.jpg',
  },
  {
    name: 'Kelly Wenzel',
    role: 'Pizza Chef',
    image: 'Images/chef/chef-2.jpg',
  },
  {
    name: 'Greg Hong',
    role: 'Grill Chef',
    image: 'Images/chef/chef-3.jpg',
  },
  {
    name: 'Marty Fukuda',
    role: 'Burger Chef',
    image: 'Images/chef/chef-4.jpg',
  },
  {
    name: 'Simon Jonson',
    role: 'Head Chef',
    image: 'Images/chef/chef-1.jpg',
  },
  {
    name: 'Kelly Wenzel',
    role: 'Pizza Chef',
    image: 'Images/chef/chef-2.jpg',
  },
  {
    name: 'Greg Hong',
    role: 'Grill Chef',
    image: 'Images/chef/chef-3.jpg',
  },
  {
    name: 'Marty Fukuda',
    role: 'Burger Chef',
    image: 'Images/chef/chef-4.jpg',
  },
];

const Chef = () => {
  return (
    <section id="mu-chef">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="mu-chef-area">
              <div className="mu-title">
                <span className="mu-subtitle">Our Professionals</span>
                <h2>MASTER CHEFS</h2>
              </div>
              <div className="mu-chef-content">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={30}
                  navigation={true}
                  pagination={{ clickable: true }}
                  breakpoints={{
                    1024: { slidesPerView: 4 },
                    768: { slidesPerView: 2 },
                    480: { slidesPerView: 1 },
                  }}
                  modules={[Navigation, Pagination]}
                  className="mu-chef-slider"
                >
                  {chefs.map((chef, index) => (
                    <SwiperSlide key={index}>
                      <div className="mu-single-chef">
                        <figure className="mu-single-chef-img">
                          <img src={chef.image} alt="chef img" />
                        </figure>
                        <div className="mu-single-chef-info">
                          <h4>{chef.name}</h4>
                          <span>{chef.role}</span>
                        </div>
                        <div className="mu-single-chef-social">
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fa fa-google-plus" />
                          </a>
                          <a href="#">
                            <i className="fa fa-linkedin" />
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chef;
