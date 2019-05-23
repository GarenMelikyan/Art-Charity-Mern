import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="#">How it works</Link>
              </li>
              <li>
                <Link to="shops">Charities</Link>
              </li>
              <li>
                <Link to="#">Artist and Craftsman</Link>
              </li>
              <li>
                <Link to="contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              10, Korun Street
              <br />
              Yerevan, Armenia
              <i className="fa fa-phone fa-lg" />: +374 1 555555
              <br />
              14 Chatterton Court
              <br />
              London, UK
              <i className="fa fa-phone fa-lg" />: +44 207 1234567
              <br />
              <i className="fa fa-envelope fa-lg" />:{" "}
              <a href="mailto:contact@charity.am">contact@charity.am</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook" />
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin" />
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter" />
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube" />
              </a>
              <a className="btn btn-social-icon" href="mailto:">
                <i className="fa fa-envelope-o" />
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2019 Art and Charity Armenia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
