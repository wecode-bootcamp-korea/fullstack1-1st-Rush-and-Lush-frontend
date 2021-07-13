import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="firstCard">
        <img src={this.props.img} alt="서브1" />
        <p className="itemTitle">{this.props.name}</p>
        <p className="itemDesc">{this.props.desc}</p>
        <p className="itemPrice">￦ {this.props.price.toLocaleString()}</p>
      </div>
    );
  }
}

export default Card;
