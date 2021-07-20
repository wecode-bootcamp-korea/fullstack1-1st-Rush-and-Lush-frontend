import { Component } from "react";
import { Link } from "react-router-dom";

class BtmSlideImg extends Component {
  render() {
    const { imgIndex, id, img } = this.props;
    return (
      <Link className={imgIndex === id ? "btmSlide active" : "btmSlide"} to="/">
        <img src={img} alt="btmSlide" />
      </Link>
    );
  }
}

export default BtmSlideImg;
