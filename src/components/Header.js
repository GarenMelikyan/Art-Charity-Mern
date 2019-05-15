import React, { Component, Fragment } from "react";
import { Jumbotron } from "reactstrap";
import Navbar from "./Navbar";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Art and Charity Armenia</h1>
                <p>
                  Select a charity and buy a product from Armenian Artist. 20%
                  of the sale price will go to the charity!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </Fragment>
    );
  }
}

export default Header;
