import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import CharityDetail from "./CharityDetail";

class Shops extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: null
    };
  }

  onSelectedDish(dish) {
    this.setState({
      selectedDish: dish
    });
  }

  render() {
    const menu = this.props.charities.map(charity => {
      return (
        <div key={charity.id} className="col-12 col-md-2 m-1">
          <Card key={charity.id} onClick={() => this.props.onClick(charity.id)}>
            <CardImg width="100%" src={charity.image} alt={charity.name} />
            <CardImgOverlay>
              <CardTitle>{charity.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <CharityDetail charity={this.state.selectedDish} />
      </div>
    );
  }
}

export default Shops;
