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
    // eslint-disable-next-line
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
            <img
              src="https://i.postimg.cc/7YyCsyss/img-left-2.jpg"
              alt="left"
            />
          </a>
        </div>
        <div className="imgRightUp">
          <a href="/">
            <img
              src="https://i.postimg.cc/W3gNgdv2/img-right-up-2.jpg"
              alt="right"
            />
          </a>
          <div className="imgRightBtm">
            <a href="/">
              <img
                src="https://i.postimg.cc/Gm6nKbz9/img-right-btm-3.jpg"
                alt="right_bottom"
              />
            </a>
            <a href="/">
              <img
                src="https://i.postimg.cc/zB5M2vhD/img-right-btm-4.jpg"
                alt="right_bottom"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MidEventGridImg;
