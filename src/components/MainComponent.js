import React, { Component } from "react";
import Shops from "./Shops";
import Products from "./Products";
import Header from "./Header";
import Footer from "./Footer";
import CharityDetail from "./CharityDetail";
import ProductDetail from "./ProductDetail";
import Home from "./HomeComponent";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Contact from "./ContactComponent";
import { connect } from "react-redux";
import {
  addComment,
  fetchCharities,
  fetchComments,
  fetchProducts
} from "../redux/ActionCreators";
import { actions } from "react-redux-form";

const mapStateToProps = state => {
  return {
    charities: state.charities,
    comments: state.comments,
    promotions: state.promotions,
    products: state.products
  };
};

const mapDispatchToProps = dispatch => ({
  addComment: (charityId, rating, author, comment) =>
    dispatch(addComment(charityId, rating, author, comment)),
  fetchCharities: () => {
    dispatch(fetchCharities());
  },
  fetchProducts: () => {
    dispatch(fetchProducts());
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
    this.props.fetchProducts();
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
          charitiesLoading={this.props.charities.isLoading}
          charitiesErrMess={this.props.charities.errMess}
          product0={
            this.props.products.products.filter(product => product.featured)[0]
          }
          product1={
            this.props.products.products.filter(product => product.featured)[1]
          }
          product2={
            this.props.products.products.filter(product => product.featured)[2]
          }
          productsLoading={this.props.products.isLoading}
          productsErrMess={this.props.products.errMess}
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

    const ProductWithId = ({ match }) => {
      return (
        <ProductDetail
          product={
            this.props.products.products.filter(
              product => product.id === parseInt(match.params.productId, 10)
            )[0]
          }
          isLoading={this.props.products.isLoading}
          errMess={this.props.products.errMess}
          comments={this.props.comments.comments.filter(
            comments =>
              comments.productId === parseInt(match.params.productId, 10)
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
          <Route
            exact
            path="/products"
            component={() => <Products products={this.props.products} />}
          />
          <Route exact path="/products/:productId" component={ProductWithId} />
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
