import React, { Component } from "react";
import Shops from "./Shops";
import Navbar from "./Navbar";
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
        <Navbar />
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
      </div>
    );
  }
}

export default Main;
