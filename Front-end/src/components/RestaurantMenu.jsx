import React from 'react'

const RestaurantMenu = () => {
  return (
    <>
      <section id="mu-restaurant-menu">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mu-restaurant-menu-area">
                <div className="mu-title">
                  <span className="mu-subtitle">Discover</span>
                  <h2>OUR MENU</h2>
                </div>
                <div className="mu-restaurant-menu-content">
                  <ul className="nav nav-tabs mu-restaurant-menu">
                    <li className="active">
                      <a href="#breakfast" data-toggle="tab">
                        Breakfast
                      </a>
                    </li>
                    <li>
                      <a href="#meals" data-toggle="tab">
                        Meals
                      </a>
                    </li>
                    <li>
                      <a href="#snacks" data-toggle="tab">
                        Snacks
                      </a>
                    </li>
                    <li>
                      <a href="#desserts" data-toggle="tab">
                        Desserts
                      </a>
                    </li>
                    <li>
                      <a href="#drinks" data-toggle="tab">
                        Drinks
                      </a>
                    </li>
                  </ul>
                  {/* Tab panes */}
                  <div className="tab-content">
                    <div className="tab-pane fade in active" id="breakfast">
                      <div className="mu-tab-content-area">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mu-tab-content-left">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-1.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-2.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$11.95</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-1.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mu-tab-content-right">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-1.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-2.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$11.95</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-1.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="meals">
                      <div className="mu-tab-content-area">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mu-tab-content-left">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-3.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-4.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$11.95</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-3.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mu-tab-content-right">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-4.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-3.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$11.95</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-4.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="snacks">
                      <div className="mu-tab-content-area">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mu-tab-content-left">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-5.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-6.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$11.95</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-5.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mu-tab-content-right">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-5.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-6.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$11.95</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-5.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="desserts">
                      <div className="mu-tab-content-area">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mu-tab-content-left">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-7.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-8.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$11.95</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-7.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mu-tab-content-right">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-8.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-7.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$11.95</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-8.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="drinks">
                      <div className="mu-tab-content-area">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mu-tab-content-left">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-9.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-10.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$11.95</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-9.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mu-tab-content-right">
                              <ul className="mu-menu-item-nav">
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-9.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">English Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-10.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Chines Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$11.95</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img
                                          className="media-object"
                                          src="Images/menu/item-9.jpg"
                                          alt="img"
                                        />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <h4 className="media-heading">
                                        <a href="#">Indian Breakfast</a>
                                      </h4>
                                      <span className="mu-menu-price">$15.85</span>
                                      <p>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. Facere nulla aliquid
                                        praesentium dolorem commodi illo.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default RestaurantMenu
