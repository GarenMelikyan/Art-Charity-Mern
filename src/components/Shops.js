import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";

function RenderCharityItem({ charity }) {
  return (
    <Card>
      <Link to={`/shops/${charity.id}`}>
        <CardImg
          width="100%"
          src={baseUrl + charity.image}
          alt={charity.name}
        />
        <CardImgOverlay>
          <CardTitle>{charity.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Shops = props => {
  const menu = props.charities.charities.map(charity => {
    return (
      <div key={charity.id} className="col-12 col-md-2 m-1">
        <RenderCharityItem charity={charity} />
      </div>
    );
  });

  if (props.charities.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.charities.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.charities.errMess}</h4>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Charity Shops</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Charity Shops</h3>
            <hr />
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
};

export default Shops;
