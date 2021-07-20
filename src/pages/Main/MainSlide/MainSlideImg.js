import { Component } from "react";
import { Link } from "react-router-dom";
import "./MainSlideImg.scss";

class MainSlideImg extends Component {
  render() {
    return (
      <div className="MainSlideImg">
        <Link className="mainSlideClick" to="/">
          <img
            className={
              this.props.imgIndex === this.props.id
                ? "mainSlideImgs active"
                : "mainSlideImgs"
            }
            src={this.props.img}
            alt="mainSlideImg"
          />
        </Link>
      </div>
    );
  }
}

export default MainSlideImg;
