import React, { useState } from 'react';

const Reservation = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    people: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      people: '',
      date: '',
      message: '',
    });
  };

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
                      <form className="mu-reservation-form" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Full Name"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Email"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <select
                                name="people"
                                value={formData.people}
                                onChange={handleChange}
                                className="form-control"
                                required
                              >
                                <option value="">How Many?</option>
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
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Date"
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-control"
                                cols={30}
                                rows={5}
                                placeholder="Your Message"
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
    </>
  );
};

export default Reservation;
