import React from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

const RenderComments = ({ comments }) => {
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
  const charity = props.charity;
  if (charity == null) {
    return <div />;
  }
  return (
    <div className="row">
      <RenderCharity charity={props.charity} />
      <RenderComments comments={props.comments} />
    </div>
  );
};

export default CharityDetail;
