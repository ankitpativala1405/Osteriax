import React from 'react'

const IndexCom = () => {
  return (
    <>
  <section id="mu-reservation">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-reservation-area">
            <div className="mu-title">
              <span className="mu-subtitle">Make A</span>
              <h2>Reservation</h2>
            </div>
            <div className="mu-reservation-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione quidem autem iusto, perspiciatis, amet, quaerat
                blanditiis ducimus eius recusandae nisi aut totam alias
                consectetur et.
              </p>
              <div className="col-md-6">
                <div className="mu-reservation-left">
                  <form className="mu-reservation-form">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <select className="form-control">
                            <option value={0}>How Many?</option>
                            <option value="1 Person">1 Person</option>
                            <option value="2 People">2 People</option>
                            <option value="3 People">3 People</option>
                            <option value="4 People">4 People</option>
                            <option value="5 People">5 People</option>
                            <option value="6 People">6 People</option>
                            <option value="7 People">7 People</option>
                            <option value="8 People">8 People</option>
                            <option value="9 People">9 People</option>
                            <option value="10 People">10 People</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="datepicker"
                            placeholder="Date"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            cols={30}
                            rows={10}
                            placeholder="Your Message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <button type="submit" className="mu-readmore-btn">
                        Make Reservation
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-md-5 col-md-offset-1">
                <div className="mu-reservation-right">
                  <div className="mu-opening-hour">
                    <h2>Opening Hours</h2>
                    <ul className="list-unstyled">
                      <li>
                        <p>Monday &amp; Tuesday</p>
                        <p>9:00 AM - 4:00 PM</p>
                      </li>
                      <li>
                        <p>Wednesday &amp; Thursday</p>
                        <p>9:00 AM - Midnight</p>
                      </li>
                      <li>
                        <p>Friday &amp; Saturday</p>
                        <p>9:00 AM - Midnight</p>
                      </li>
                      <li>
                        <p>Sunday</p>
                        <p>9:00 AM - 11:00 PM</p>
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
  </section>
  {/* End Reservation section */}
  {/* Start Gallery */}
  <section id="mu-gallery">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-gallery-area">
            <div className="mu-title">
              <span className="mu-subtitle">Discover</span>
              <h2>Our Gallery</h2>
            </div>
            <div className="mu-gallery-content">
              {/* Start gallery image */}
              <div className="mu-gallery-body">
                {/* start single gallery image */}
                <div className="mu-single-gallery col-md-4">
                  <div className="mu-single-gallery-item">
                    <figure className="mu-single-gallery-img">
                      <a className="mu-imglink" href="Images/gallery/1.jpg">
                        <img alt="img" src="Images/gallery/1.jpg" />
                        <div className="mu-single-gallery-info">
                          <img
                            className="mu-view-btn"
                            src="Images/plus.png"
                            alt="plus icon img"
                          />
                        </div>
                      </a>
                    </figure>
                  </div>
                </div>
                {/* End single gallery image */}
                {/* start single gallery image */}
                <div className="mu-single-gallery col-md-4">
                  <div className="mu-single-gallery-item">
                    <figure className="mu-single-gallery-img">
                      <a className="mu-imglink" href="Images/gallery/2.jpg">
                        <img alt="img" src="Images/gallery/2.jpg" />
                        <div className="mu-single-gallery-info">
                          <img
                            className="mu-view-btn"
                            src="Images/plus.png"
                            alt="plus icon img"
                          />
                        </div>
                      </a>
                    </figure>
                  </div>
                </div>
                {/* End single gallery image */}
                {/* start single gallery image */}
                <div className="mu-single-gallery col-md-4">
                  <div className="mu-single-gallery-item">
                    <figure className="mu-single-gallery-img">
                      <a className="mu-imglink" href="Images/gallery/3.jpg">
                        <img alt="img" src="Images/gallery/3.jpg" />
                        <div className="mu-single-gallery-info">
                          <img
                            className="mu-view-btn"
                            src="Images/plus.png"
                            alt="plus icon img"
                          />
                        </div>
                      </a>
                    </figure>
                  </div>
                </div>
                {/* End single gallery image */}
                {/* start single gallery image */}
                <div className="mu-single-gallery col-md-4">
                  <div className="mu-single-gallery-item">
                    <figure className="mu-single-gallery-img">
                      <a className="mu-imglink" href="Images/gallery/4.jpg">
                        <img alt="img" src="Images/gallery/4.jpg" />
                        <div className="mu-single-gallery-info">
                          <img
                            className="mu-view-btn"
                            src="Images/plus.png"
                            alt="plus icon img"
                          />
                        </div>
                      </a>
                    </figure>
                  </div>
                </div>
                {/* End single gallery image */}
                {/* start single gallery image */}
                <div className="mu-single-gallery col-md-4">
                  <div className="mu-single-gallery-item">
                    <figure className="mu-single-gallery-img">
                      <a className="mu-imglink" href="Images/gallery/5.jpg">
                        <img alt="img" src="Images/gallery/5.jpg" />
                        <div className="mu-single-gallery-info">
                          <img
                            className="mu-view-btn"
                            src="Images/plus.png"
                            alt="plus icon img"
                          />
                        </div>
                      </a>
                    </figure>
                  </div>
                </div>
                {/* End single gallery image */}
                {/* start single gallery image */}
                <div className="mu-single-gallery col-md-4">
                  <div className="mu-single-gallery-item">
                    <figure className="mu-single-gallery-img">
                      <a className="mu-imglink" href="Images/gallery/6.jpg">
                        <img alt="img" src="Images/gallery/6.jpg" />
                        <div className="mu-single-gallery-info">
                          <img
                            className="mu-view-btn"
                            src="Images/plus.png"
                            alt="plus icon img"
                          />
                        </div>
                      </a>
                    </figure>
                  </div>
                </div>
                {/* End single gallery image */}
                {/* start single gallery image */}
                <div className="mu-single-gallery col-md-4">
                  <div className="mu-single-gallery-item">
                    <figure className="mu-single-gallery-img">
                      <a className="mu-imglink" href="Images/gallery/7.jpg">
                        <img alt="img" src="Images/gallery/7.jpg" />
                        <div className="mu-single-gallery-info">
                          <img
                            className="mu-view-btn"
                            src="Images/plus.png"
                            alt="plus icon img"
                          />
                        </div>
                      </a>
                    </figure>
                  </div>
                </div>
                {/* End single gallery image */}
                {/* start single gallery image */}
                <div className="mu-single-gallery col-md-4">
                  <div className="mu-single-gallery-item">
                    <figure className="mu-single-gallery-img">
                      <a className="mu-imglink" href="Images/gallery/8.jpg">
                        <img alt="img" src="Images/gallery/8.jpg" />
                        <div className="mu-single-gallery-info">
                          <img
                            className="mu-view-btn"
                            src="Images/plus.png"
                            alt="plus icon img"
                          />
                        </div>
                      </a>
                    </figure>
                  </div>
                </div>
                {/* End single gallery image */}
                {/* start single gallery image */}
                <div className="mu-single-gallery col-md-4">
                  <div className="mu-single-gallery-item">
                    <figure className="mu-single-gallery-img">
                      <a className="mu-imglink" href="Images/gallery/9.jpg">
                        <img alt="img" src="Images/gallery/9.jpg" />
                        <div className="mu-single-gallery-info">
                          <img
                            className="mu-view-btn"
                            src="Images/plus.png"
                            alt="plus icon img"
                          />
                        </div>
                      </a>
                    </figure>
                  </div>
                </div>
                {/* End single gallery image */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Gallery */}
  {/* Start Client Testimonial section */}
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
              {/* testimonial content */}
              <div className="mu-testimonial-content">
                {/* testimonial slider */}
                <ul className="mu-testimonial-slider">
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Client Testimonial section */}
  {/* Start Chef Section */}
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
              <ul className="mu-chef-nav">
                <li>
                  <div className="mu-single-chef">
                    <figure className="mu-single-chef-img">
                      <img src="Images/chef/chef-1.jpg" alt="chef img" />
                    </figure>
                    <div className="mu-single-chef-info">
                      <h4>Simon Jonson</h4>
                      <span>Head Chef</span>
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
                </li>
                <li>
                  <div className="mu-single-chef">
                    <figure className="mu-single-chef-img">
                      <img src="Images/chef/chef-2.jpg" alt="chef img" />
                    </figure>
                    <div className="mu-single-chef-info">
                      <h4>Kelly Wenzel</h4>
                      <span>Pizza Chef</span>
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
                </li>
                <li>
                  <div className="mu-single-chef">
                    <figure className="mu-single-chef-img">
                      <img src="Images/chef/chef-3.jpg" alt="chef img" />
                    </figure>
                    <div className="mu-single-chef-info">
                      <h4>Greg Hong</h4>
                      <span>Grill Chef</span>
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
                </li>
                <li>
                  <div className="mu-single-chef">
                    <figure className="mu-single-chef-img">
                      <img src="Images/chef/chef-4.jpg" alt="chef img" />
                    </figure>
                    <div className="mu-single-chef-info">
                      <h4>Marty Fukuda</h4>
                      <span>Burger Chef</span>
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
                </li>
                <li>
                  <div className="mu-single-chef">
                    <figure className="mu-single-chef-img">
                      <img src="Images/chef/chef-5.jpg" alt="chef img" />
                    </figure>
                    <div className="mu-single-chef-info">
                      <h4>Simon Jonson</h4>
                      <span>Head Chef</span>
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
                </li>
                <li>
                  <div className="mu-single-chef">
                    <figure className="mu-single-chef-img">
                      <img src="Images/chef/chef-1.jpg" alt="chef img" />
                    </figure>
                    <div className="mu-single-chef-info">
                      <h4>Kelly Wenzel</h4>
                      <span>Pizza Chef</span>
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
                </li>
                <li>
                  <div className="mu-single-chef">
                    <figure className="mu-single-chef-img">
                      <img src="Images/chef/chef-2.jpg" alt="chef img" />
                    </figure>
                    <div className="mu-single-chef-info">
                      <h4>Greg Hong</h4>
                      <span>Grill Chef</span>
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
                </li>
                <li>
                  <div className="mu-single-chef">
                    <figure className="mu-single-chef-img">
                      <img src="Images/chef/chef-3.jpg" alt="chef img" />
                    </figure>
                    <div className="mu-single-chef-info">
                      <h4>Marty Fukuda</h4>
                      <span>Burger Chef</span>
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
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Chef Section */}
  {/* Start Contact section */}
  <section id="mu-contact">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-contact-area">
            <div className="mu-title">
              <span className="mu-subtitle">Get In Touch</span>
              <h2>Contact Us</h2>
            </div>
            <div className="mu-contact-content">
              <div className="row">
                <div className="col-md-6">
                  <div className="mu-contact-left">
                    {/* Email message div */}
                    <div id="form-messages" />
                    {/* Start contact form */}
                    <form
                      id="ajax-contact"
                      method="post"
                      action="mailer.php"
                      className="mu-contact-form"
                    >
                      <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Name"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          required=""
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          cols={30}
                          rows={10}
                          placeholder="Type Your Message"
                          required=""
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="mu-send-btn">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mu-contact-right">
                    <div className="mu-contact-widget">
                      <h3>Office Address</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia temporibus corporis ea non consequatur
                        porro corrupti hic voluptatibus assumenda, doloribus.
                      </p>
                      <address>
                        <p>
                          <i className="fa fa-phone" /> (850) 457 6688
                        </p>
                        <p>
                          <i className="fa fa-envelope-o" />
                          contact@markups.io
                        </p>
                        <p>
                          <i className="fa fa-map-marker" />
                          368 St. Panama City, Florida, USA
                        </p>
                      </address>
                    </div>
                    <div className="mu-contact-widget">
                      <h3>Open Hours</h3>
                      <address>
                        <p>
                          <span>Monday - Friday</span> 9.00 am to 12 pm
                        </p>
                        <p>
                          <span>Saturday</span> 9.00 am to 10 pm
                        </p>
                        <p>
                          <span>Sunday</span> 10.00 am to 12 pm
                        </p>
                      </address>
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
  {/* End Contact section */}
  {/* Start Map section */}
  <section id="mu-map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9207.358598888495!2d-85.64847801496286!3d30.183918972289003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0000000000000000%3A0x2320479d70eb6202!2sDillard's!5e0!3m2!1sbn!2sbd!4v1462359735720"
      width="100%"
      height="100%"
      frameBorder={0}
      allowFullScreen=""
    />
  </section>
  {/* End Map section */}
  {/* Start Footer */}
  <footer id="mu-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="mu-footer-area">
            <div className="mu-footer-social">
              <a href="#">
                <span className="fa fa-facebook" />
              </a>
              <a href="#">
                <span className="fa fa-twitter" />
              </a>
              <a href="#">
                <span className="fa fa-google-plus" />
              </a>
              <a href="#">
                <span className="fa fa-linkedin" />
              </a>
              <a href="#">
                <span className="fa fa-youtube" />
              </a>
            </div>
            <div className="mu-footer-copyright">
              <p>
                © Copyright{" "}
                <a rel="nofollow" href="http://markups.io">
                  markups.io
                </a>
                . All right reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>

  )
}

export default IndexCom
