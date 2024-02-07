import React from 'react'

const Contact = () => {
  return (
    <>
<>
  {/* contact section start */}
  <section className="contact-section pb-md-5 pb-0">
    <div className="container">
      <div className="col-lg-6">
        <div className="breadcrumb-content">
          <div>
            <h2 style={{ color: "#449cc0" }}>Contact us</h2>
            <p style={{ color: "#449cc0" }}>
              Email us with any questions, we would be happy to answer your
              question.{" "}
            </p>
          </div>
        </div>
      </div>
      <ul className="contact-box">
        <li>
          <div
            className="contact-icon"
            style={{ color: "#449cc0", backgroundColor: "#449cc0" }}
          >
            <img
              src="assets/svg/contact/message.svg"
              className="img-fluid"
              alt="message"
            />
          </div>
          <h3 style={{ color: "#449cc0" }}>Mail id</h3>
          <h4>contact@megabot.com</h4>
          <h4>inquiry@megabot.com</h4>
        </li>
        <li>
          <div className="contact-icon" style={{ backgroundColor: "#449cc0" }}>
            <img
              src="assets/svg/contact/contact.svg"
              className="img-fluid"
              alt="message"
            />
          </div>
          <h3 style={{ color: "#449cc0" }}>Contact no.</h3>
          <h4>(406) 555-0120</h4>
          <h4>(684) 555-0102</h4>
        </li>
        <li>
          <div className="contact-icon" style={{ backgroundColor: "#449cc0" }}>
            <img
              src="assets/svg/contact/route.svg"
              className="img-fluid"
              alt="message"
            />
          </div>
          <h3 style={{ color: "#449cc0" }}>Address 1</h3>
          <h4>2118 Thornridge Cir.</h4>
          <h4>Syracuse, Connecticut 35624</h4>
        </li>
        <li>
          <div className="contact-icon" style={{ backgroundColor: "#449cc0" }}>
            <img
              src="assets/svg/contact/address.svg"
              className="img-fluid"
              alt="message"
            />
          </div>
          <h3 style={{ color: "#449cc0" }}>Address 2</h3>
          <h4>2972 Westheimer Rd. Santa </h4>
          <h4>Ana, Illinois 85486 </h4>
        </li>
      </ul>
      <div className="contact-details">
        <div className="row g-lg-5 g-4">
          <div className="col-xl-7 col-lg-6">
            <form className="auth-form">
              <div className="row g-5">
                <div className="col-sm-12 ">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="email" className="form-control" id="name" />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="col-12">
                  <label htmlFor="phoneNumber" className="form-label">
                    Phone number
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="phoneNumber"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Additional Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <a
                    href="#"
                    data-cursor="pointer"
                    className="btn-solid"
                    style={{ backgroundColor: "#449cc0", border: "#449cc0" }}
                  >
                    Send message
                  </a>
                </div>
              </div>
            </form>
          </div>
          {/* <div className="col-xl-5 col-lg-6">
            <div className="map-sec">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79567.57700797812!2d-112.12049328183899!3d33.42503734906143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ%2C%20USA!5e0!3m2!1sen!2sin!4v1683867729748!5m2!1sen!2sin" />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </section>
  {/* contact section end */}
</>

    </>
  )
}

export default Contact