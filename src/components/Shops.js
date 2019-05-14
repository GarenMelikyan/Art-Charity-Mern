import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

function RenderCharityItem({charity, onClick}) {
  return (
      <Card key={charity.id} onClick={() => onClick(charity.id)}>
          <CardImg width="100%" src={charity.image} alt={charity.name} />
          <CardImgOverlay>
            <CardTitle>{charity.name}</CardTitle>
          </CardImgOverlay>
      </Card>
  )

}
  
const Shops = (props) => {
    const menu = props.charities.map(charity => {
      return (
        <div key={charity.id} className="col-12 col-md-2 m-1">
          <RenderCharityItem charity = {charity} onClick ={props.onClick}/>
        </div>
        );
      });
      return (
        <div className="container">
          <div className="row">{menu}</div>
        </div>
      );
    }

  
export default Shops;
