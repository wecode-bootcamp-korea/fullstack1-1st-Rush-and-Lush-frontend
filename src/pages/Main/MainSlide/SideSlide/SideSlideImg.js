import { Component } from "react";
import { Link } from "react-router-dom";

class SideSlideImg extends Component {
  render() {
    const { img } = this.props;
    return (
      <Link to="/">
        <img src={img} alt="사이드 슬라이드" />
      </Link>
    );
  }
}

export default SideSlideImg;
