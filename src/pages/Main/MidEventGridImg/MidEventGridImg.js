import { Component } from "react";
import "./MidEventGridImg.scss";

class MidEventGridImg extends Component {
  constructor() {
    super();
    this.state = {
      scrollTop: 0,
    };
  }

  handleScroll = e => {
    const scrollTop = ("scroll", e.target.scrollingElement.scrollTop);
    this.setState({ scrollTop });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnMount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    const { scrollTop } = this.state;
    const showImgScrollTop = 650;
    return (
      <div
        className={
          scrollTop > showImgScrollTop
            ? "MidEventGridImg active"
            : "MidEventGridImg"
        }
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

export default MidEventGridImg;
