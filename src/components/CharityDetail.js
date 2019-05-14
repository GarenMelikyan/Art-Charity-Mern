import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

class CharityDetail extends Component {
  renderComments(comments) {
    if (comments == null) {
      return <div />;
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
      </div>
    );
  }

  renderDish(charity) {
    if (charity != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg width="100%" src={charity.image} alt={charity.name} />
            <CardBody>
              <CardTitle>{charity.name}</CardTitle>
              <CardText>{charity.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    const charity = this.props.charity;
    if (charity == null) {
      return <div />;
    }
    const dishItem = this.renderDish(charity);
    const commentItem = this.renderComments(charity.comments);
    return (
      <div className="row">
        {dishItem}
        {commentItem}
      </div>
    );
  }
}

export default CharityDetail;
