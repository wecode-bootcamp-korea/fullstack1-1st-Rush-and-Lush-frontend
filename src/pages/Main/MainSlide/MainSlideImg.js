import { Component } from "react";
import { Link } from "react-router-dom";
import "./MainSlideImg.scss";

class MainSlideImg extends Component {
  render() {
    const { imgIndex, id, img } = this.props;
    return (
      <div className="MainSlideImg">
        <Link className="mainSlideClick" to="/">
          <img
            className={
              imgIndex === id ? "mainSlideImgs active" : "mainSlideImgs"
            }
            src={img}
            alt="mainSlideImg"
          />
        </Link>
      </div>
    );
  }
}

export default MainSlideImg;
