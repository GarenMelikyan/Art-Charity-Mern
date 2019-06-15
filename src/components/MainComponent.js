import React, { Component } from "react";
import Shops from "./Shops";
import Header from "./Header";
import Footer from "./Footer";
import CharityDetail from "./CharityDetail";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Contact from "./ContactComponent";
import { connect } from "react-redux";
import {
  addComment,
  fetchCharities,
  fetchComments
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";

const mapStateToProps = state => {
  return {
    charities: state.charities,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
};

const mapDispatchToProps = dispatch => ({
  addComment: (charityId, rating, author, comment) =>
    dispatch(addComment(charityId, rating, author, comment)),
  fetchCharities: () => {
    dispatch(fetchCharities());
  },
  fetchComments: () => dispatch(fetchComments()),
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  }
});

class Main extends Component {
  componentDidMount() {
    this.props.fetchCharities();
    this.props.fetchComments();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          charity0={
            this.props.charities.charities.filter(
              charity => charity.featured
            )[0]
          }
          charitiesLoading={this.props.charities.isLoading}
          charitiesErrMess={this.props.charities.errMess}
          charity1={
            this.props.charities.charities.filter(
              charity => charity.featured
            )[1]
          }
          charity2={
            this.props.charities.charities.filter(
              charity => charity.featured
            )[2]
          }
        />
      );
    };

    const CharityWithId = ({ match }) => {
      return (
        <CharityDetail
          charity={
            this.props.charities.charities.filter(
              charity => charity.id === parseInt(match.params.charityId, 10)
            )[0]
          }
          isLoading={this.props.charities.isLoading}
          errMess={this.props.charities.errMess}
          comments={this.props.comments.comments.filter(
            comments =>
              comments.charityId === parseInt(match.params.charityId, 10)
          )}
          commentsErrMess={this.props.comments.errMess}
          addComment={this.props.addComment}
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/contact"
            component={() => (
              <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
            )}
          />
          <Route
            exact
            path="/shops"
            component={() => <Shops charities={this.props.charities} />}
          />
          <Route exact path="/shops/:charityId" component={CharityWithId} />
          <Redirect to="/home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
