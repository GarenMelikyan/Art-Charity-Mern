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

function RenderProductItem({ product }) {
  return (
    <Card>
      <Link to={`/products/${product.id}`}>
        <CardImg
          width="100%"
          src={baseUrl + product.image}
          alt={product.name}
        />
        <CardImgOverlay>
          <CardTitle>{product.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

const Products = props => {
  const menu = props.products.products.map(product => {
    return (
      <div key={product.id} className="col-12 col-md-2 m-1">
        <RenderProductItem product={product} />
      </div>
    );
  });

  if (props.products.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.products.errMess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.products.errMess}</h4>
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
            <BreadcrumbItem active>Our Products</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Our Products</h3>
            <hr />
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
};

export default Products;
