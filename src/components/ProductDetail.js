import React, { Component, Fragment } from "react";
import {
  Media,
  Breadcrumb,
  BreadcrumbItem,
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Label,
  Row
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
const productImg = {
  height: "100px",
  width: "120px"
};

const minLength = len => val => val && val.length >= len;
const maxLength = len => val => !val || val.length <= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleComment(values) {
    this.toggleModal();
    this.props.addComment(
      this.props.productId,
      values.rating,
      values.author,
      values.comment
    );
  }

  render() {
    return (
      <Fragment>
        <Button outline onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg"> Submit Comment</span>
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm
              className="container"
              onSubmit={values => this.handleComment(values)}
            >
              <Row className="form-group" md={12}>
                <Label htmlFor="rating">Rating</Label>
                <Control.select
                  model=".rating"
                  className="form-control"
                  id="rating"
                  name="rating"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Control.select>
              </Row>
              <Row className="form-group" md={12}>
                <Label htmlFor="author">Your Name</Label>
                <Control.text
                  model=".author"
                  id="author"
                  name="author"
                  className="form-control"
                  placeholder="Your Name"
                  validators={{
                    minLength: minLength(3),
                    maxLength: maxLength(15)
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    minLength: "At least 3 characters",
                    maxLength: "Must be 15 characters or less"
                  }}
                />
              </Row>
              <Row className="form-group" md={12}>
                <Label htmlFor="comment"> Comment</Label>
                <Control.textarea
                  model=".comment"
                  id="comment"
                  name="comment"
                  rows="6"
                  className="form-control"
                />
              </Row>
              <Row className="form-group" md={12}>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Row>
            </LocalForm>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

const RenderComments = ({ comments, addComment, productId }) => {
  if (comments == null) {
    return <h1> no comments </h1>;
  }
  const list = comments.map(comment => {
    return (
      <li key={comment.id}>
        <p>{comment.comment}</p>
        <p>
          -- {comment.author}, &nbsp;
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit"
          }).format(new Date(comment.date))}
        </p>
      </li>
    );
  });
  return (
    <div className="col-12 col-md-5 m-1">
      <h4> Our Story => Visit our Shop</h4>
      <ul className="list-unstyled">{list}</ul>
      <CommentForm productId={productId} addComment={addComment} />
    </div>
  );
};

const RenderProduct = ({ product }) => {
  if (product != null) {
    return (
      <div className="container">
        <div key={product.id} className="col-12 mt-5">
          <Media tag="li">
            <Media left middle>
              <Media
                style={productImg}
                object
                src={baseUrl + product.image}
                alt={product.name}
              />
            </Media>
            <Media body className="ml-5">
              <Media heading>{product.name}</Media>
              <p>{product.description}</p>
            </Media>
          </Media>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

const ProductDetail = props => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.product != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/shops">Arts and Crafts</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{`${props.product.name}`}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">
          <RenderProduct product={props.product} />
          <RenderComments
            productId={props.product.id}
            comments={props.comments}
            addComment={props.addComment}
          />
        </div>
      </div>
    );
};

export default ProductDetail;
