import React, { Component } from "react";
import Shops from "./Shops";
import Header from "./Header";
import Footer from "./Footer";
import CharityDetail from "./CharityDetail";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Contact from "./ContactComponent";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    charities: state.charities,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
};

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <Home
          charity0={this.props.charities.filter(charity => charity.featured)[0]}
          charity1={this.props.charities.filter(charity => charity.featured)[1]}
          charity2={this.props.charities.filter(charity => charity.featured)[2]}
        />
      );
    };

    const CharityWithId = ({ match }) => {
      return (
        <CharityDetail
          charity={
            this.props.charities.filter(
              charity => charity.id === parseInt(match.params.charityId, 10)
            )[0]
          }
          comments={this.props.comments.filter(
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
            component={() => <Shops charities={this.props.charities} />}
          />
          <Route path="/shops/:charityId" component={CharityWithId} />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
