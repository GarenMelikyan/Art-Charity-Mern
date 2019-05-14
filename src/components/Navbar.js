import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light border mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div className="logo-img" alt="Logo image" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/howitworks">
                  {" "}
                  How it Works
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mentops">
                  {" "}
                  Charity Shops
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/unis">
                  {" "}
                  Artsists and Craftsmen
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Join Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
