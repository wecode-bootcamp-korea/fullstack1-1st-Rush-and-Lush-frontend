import { Component } from "react";
import { Link } from "react-router-dom";
import "./MainSlideImg.scss";

class MainSlideImg extends Component {
  constructor() {
    super();
    this.state = {
      imgIndex: 1,
    };
  }

  imgSlideNext = () => {
    this.state.imgIndex > 2
      ? this.setState({ imgIndex: 1 })
      : this.setState({ imgIndex: this.state.imgIndex + 1 });
  };

  imgSlidePrev = () => {
    this.setState({
      imgIndex: 3,
    });
    this.state.imgIndex <= 1
      ? this.setState({ imgIndex: 3 })
      : this.setState({ imgIndex: this.state.imgIndex - 1 });
  };

  componentDidMount() {
    setInterval(this.imgSlideNext, 3000);
  }

  render() {
    const { imgIndex } = this.state;
    return (
      <div className="MainSlideImg">
        <Link className="mainSlideClick" to="/">
          <img
            className={
              imgIndex === this.props.id
                ? "mainSlideImgs active"
                : "mainSlideImgs"
            }
            src={this.props.img}
            alt="mainSlideImg"
          />
        </Link>
        <div className="mainSlideBtn">
          <ul>
            <li>
              <button
                className="mainBtn1st"
                type="button"
                onClick={this.imgSlidePrev}
              >
                <img src="./images/mainUpArrow.png" alt="mainUpArrow" />
              </button>
            </li>
            <li>
              <button
                className="mainBtn2nd"
                type="button"
                onClick={this.imgSlideNext}
              >
                <img src="./images/mainDownArrow.png" alt="mainDownArrow" />
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainSlideImg;
