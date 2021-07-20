import { Component } from "react";

class Card extends Component {
  render() {
    const { img, name, desc, price } = this.props;
    return (
      <div className="firstCard">
        <img src={img} alt="itemcard" />
        <p className="itemTitle">{name}</p>
        <p className="itemDesc">{desc}</p>
        <p className="itemPrice">￦ {price.toLocaleString()}</p>
      </div>
    );
  }
}

export default Card;
