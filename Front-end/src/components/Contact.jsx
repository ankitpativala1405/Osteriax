import React, { useState } from 'react'


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Sending contact form...', formData);

    const res = await fetch("http://localhost:8090/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });


    const data = await res.json();
    console.log(data);
  };

  return (
    <>
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
                          className="mu-contact-form"
                          onSubmit={handleSubmit}
                        >
                          <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              placeholder="Name"
                              required
                              value={formData.name} onChange={handleChange}
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
                              required
                              value={formData.email} onChange={handleChange}
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
                              required
                              value={formData.subject} onChange={handleChange}
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
                              value={formData.message} onChange={handleChange}
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

    </>
  )
}

export default Contact
