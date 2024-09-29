import React from 'react';
import { FaGem, FaHome, FaEnvelope, FaPhone, FaPrint } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-light text-muted mt-5">
      {/* Section: Social media */}
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        {/* Left */}
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}

        {/* Right */}
        <div>
          <a href="" className="me-4 text-reset">
            <FaFacebookF />
          </a>
          <a href="" className="me-4 text-reset">
            <FaTwitter />
          </a>
          <a href="" className="me-4 text-reset">
            <FaGoogle />
          </a>
          <a href="" className="me-4 text-reset">
            <FaInstagram />
          </a>
          <a href="" className="me-4 text-reset">
            <FaLinkedin />
          </a>
          <a href="" className="me-4 text-reset">
            <FaGithub />
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}

      {/* Section: Links */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h5 className="text-uppercase fw-bold mb-4">
                {/* <FaGem className="me-3" /> */}
                <img src="https://seeklogo.com/images/R/redbus-logo-13648C0E43-seeklogo.com.png" alt="Logo" className="me-3" style={{ width: '100px', height: '80px' }} />
                    RED BUS
              </h5>
              <p className="text-justify">
             1. redBus is the world's largest online bus ticket booking service trusted by over 25 million happy customers globally. <br />
            2. redBus offers bus ticket booking through its website, iOS and Android mobile apps for all major routes.
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Top bus routes</h6>
              <p className="text-justify">
                <a href="#!" className="text-reset">
               1.Hyderabad to Bangalore Bus

                </a>
              </p>
              <p className="text-justify">
                <a href="#!" className="text-reset">
                2.Bangalore to Chennai Bus

                </a>
              </p>
              <p className="text-justify">
                <a href="#!" className="text-reset">
                3.Pune to Bangalore Bus

                </a>
              </p>
              <p className="text-justify">
                <a href="#!" className="text-reset">
                4.Mumbai to Bangalore Bus
                </a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Pricing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Settings
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Orders
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Help
                </a>
              </p>
            </div>
            {/* Grid column */}

            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <FaHome className="me-3" />
                About RED BUS
              </p>
              <p>
                <FaEnvelope className="me-3" />
                info@redBus.com
              </p>
              <p>
                <FaPhone className="me-3" />
                + 91 9877626473
              </p>
              <p>
                <FaPrint className="me-3" />
                + 91 9772646488
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links */}

      {/* Copyright */}
      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright Red Bus. 
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
        All rights reserved
        </a>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
