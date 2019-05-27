import React, { Component } from "react";
import Shops from "./Shops";
import Header from "./Header";
import Footer from "./Footer";
import { CHARITIES } from "../shared/charities";
import { PRODUCTS } from "../shared/products";
import CharityDetail from "./CharityDetail";
import Home from "./HomeComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import Contact from "./ContactComponent";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charities: CHARITIES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      selectedCharity: null
    };
  }

  onCharitySelect(charityId) {
    this.setState({ selectedCharity: charityId });
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          charity0={this.state.charities.filter(charity => charity.featured)[0]}
          charity1={this.state.charities.filter(charity => charity.featured)[1]}
          charity2={this.state.charities.filter(charity => charity.featured)[2]}
        />
      );
    };

    const CharityWithId = ({ match }) => {
      return (
        <CharityDetail
          charity={
            this.state.charities.filter(
              charity => charity.id === parseInt(match.params.charityId, 10)
            )[0]
          }
          comments={this.state.comments.filter(
            comment =>
              comment.charityId === parseInt(match.params.charityId, 10)
          )}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/contact" component={Contact} />
          <Route
            exact
            path="/shops"
            component={() => <Shops charities={this.state.charities} />}
          />
          <Route path="/shops/:charityId" component={CharityWithId} />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;
