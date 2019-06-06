import React, { Component, Fragment } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardText,
  CardTitle,
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
      this.props.charityId,
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

const RenderComments = ({ comments, addComment, charityId }) => {
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
      <CommentForm charityId={charityId} addComment={addComment} />
    </div>
  );
};

const RenderCharity = ({ charity }) => {
  if (charity != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={charity.image} alt={charity.image} />
          <CardBody>
            <CardTitle>{charity.name}</CardTitle>
            <CardTitle>{charity.label}</CardTitle>
            <CardText>{charity.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return <div />;
  }
};

const CharityDetail = props => {
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
  } else if (props.charity != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/shops">Charity Shops</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{`${props.charity.name}`}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row">
          <RenderCharity charity={props.charity} />
          <RenderComments
            charityId={props.charity.id}
            comments={props.comments}
            addComment={props.addComment}
          />
        </div>
      </div>
    );
};

export default CharityDetail;
