import { Component } from "react";
import { Link } from "react-router-dom";
import "./MainSlideImg.scss";

class MainSlideImg extends Component {
  render() {
    const { imgId, id, img } = this.props;
    return (
      <div className="MainSlideImg">
        <Link className="mainSlideClick" to="/">
          <img
            className={"mainSlideImgs" + (imgId === id ? " active" : "")}
            src={img}
            alt="mainSlideImg"
          />
        </Link>
      </div>
    );
  }
}

export default MainSlideImg;
