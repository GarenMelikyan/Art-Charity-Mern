import React from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { Loading } from "./LoadingComponent";

function RenderCard({ item, isLoading, errMess }) {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      <Card>
        <Link to={`/shops/${item.id}`}>
          <CardImg src={item.image} alt={item.name} />
          <CardBody>
            <CardTitle>{item.name}</CardTitle>
          </CardBody>
        </Link>
      </Card>
    );
}
function Home(props) {
  return (
    <div className="container">
      <Jumbotron>
        <div className="row">
          <div className="col-12 col-sm-6">
            <h1>Art and Charity Armenia</h1>
            <p>
              Buy art work from an Armenian artist and 20% of the sale price
              will go to the charity of your choice!
            </p>
          </div>
          <div className="col-12 col-sm-6">
            <h1>Special Sale Item Description</h1>
            <p>Special Sale goes here!</p>
          </div>
        </div>
      </Jumbotron>
      <div className="container">
        <h3> Browse charity sales </h3>
        <div className="row align-items-start">
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.charity0}
              isLoading={props.charitiesLoading}
              errMess={props.charitiesErrMess}
            />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.charity1}
              isLoading={props.charitiesLoading}
              errMess={props.charitiesErrMess}
            />
          </div>
          <div className="col-12 col-md m-1">
            <RenderCard
              item={props.charity2}
              isLoading={props.charitiesLoading}
              errMess={props.charitiesErrMess}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
