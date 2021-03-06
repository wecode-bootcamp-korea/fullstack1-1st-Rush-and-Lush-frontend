import { Component } from "react";
import { Link } from "react-router-dom";

class BtmSlideImg extends Component {
  render() {
    const { imgId, id, img } = this.props;
    return (
      <Link className={"btmSlide" + (imgId === id ? " active" : "")} to="/">
        <img src={img} alt="btmSlide" />
      </Link>
    );
  }
}

export default BtmSlideImg;
