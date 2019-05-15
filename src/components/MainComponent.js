import React, { Component } from "react";
import Shops from "./Shops";
import Header from "./Header";
import Footer from "./Footer";
import { CHARITIES } from "../shared/charities";
import CharityDetail from "./CharityDetail";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charities: CHARITIES,
      selectedCharity: null
    };
  }

  onCharitySelect(charityId) {
    this.setState({ selectedCharity: charityId });
  }

  render() {
    return (
      <div>
        <Header />
        <Shops
          charities={this.state.charities}
          onClick={charityId => this.onCharitySelect(charityId)}
        />
        <div className="container">
          <CharityDetail
            charity={
              this.state.charities.filter(
                charity => charity.id === this.state.selectedCharity
              )[0]
            }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
