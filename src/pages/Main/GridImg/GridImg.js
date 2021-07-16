import { Component } from "react";
import "./GridImg.scss";

class GridImg extends Component {
  constructor() {
    super();
    this.state = {
      scrollTop: 0,
    };
  }

  handleScroll = e => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.setState({
      scrollTop,
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnMount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    return (
      <div
        className={this.state.scrollTop > 650 ? "GridImg active" : "GridImg"}
      >
        <div className="imgLeft">
          <a href="/">
            <img src="./images/img_left_2.jpg" alt="left" />
          </a>
        </div>
        <div className="imgRightUp">
          <a href="/">
            <img src="./images/img_right_up_2.jpg" alt="right" />
          </a>
          <div className="imgRightBtm">
            <a href="/">
              <img src="./images/img_right_btm_3.jpg" alt="right_bottom" />
            </a>
            <a href="/">
              <img src="./images/img_right_btm_4.jpg" alt="right_bottom" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default GridImg;
