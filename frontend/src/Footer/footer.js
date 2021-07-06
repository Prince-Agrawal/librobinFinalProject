import React from "react";

import "./footer.css";
import { Link } from "react-router-dom";
function Footer(props) {
  return (
    <div className="jumbotron" id="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5 className="footer-links">Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/home"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutUs"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5 className="footer-links">Our Address</h5>
            <address>
              <div className="footer-address">
                {" "}
                <i class="fa fa-globe footer-contact-icon"></i> Online Avaliable
              </div>

              <div className="footer-address">
                <i className="fa fa-phone fa-lg footer-contact-icon"></i> +91
                63775 52654
              </div>

              <div className="footer-address">
                {" "}
                <i className="fa fa-fax fa-lg footer-contact-icon"></i> +91
                99290 45582
              </div>

              <div className="footer-address">
                <i className="fa fa-envelope fa-lg footer-contact-icon"></i><a href="mailto:librobin2020@gmail.com" style={{ color: "white", textDecoration: "none" }}>librobin2020@gmail.com</a>
              </div>
              
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              {/*<a
                className="btn btn-social-icon btn-google footer-social-icon"
                href="http://google.com/+"
              >
                <i className="fa fa-google-plus"></i>
            </a>*/}
              <a
                className="btn btn-social-icon btn-facebook footer-social-icon"
                href="https://www.facebook.com/LibroBin-112602720369151"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin footer-social-icon"
                href="https://www.linkedin.com/company/47589226/admin/"
              >
                <i className="fa fa-linkedin"></i>
              </a>

              <a
                className="btn btn-social-icon footer-social-icon"
                href="mailto:librobin2020@gmail.com"
              >
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p className="footer-links">© Copyright 2020 LibroBin </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
