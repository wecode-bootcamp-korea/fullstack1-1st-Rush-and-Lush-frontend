import { Component } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./SideSlide.scss";

class SideSlide extends Component {
  constructor() {
    super();
    this.state = {
      img: 1,
    };
  }

  slideLeft = () => {
    if (this.state.img > 1) {
      this.setState({
        img: 1,
      });
    } else {
      this.setState({
        img: this.state.img + 1,
      });
    }
  };

  slideRight = () => {
    this.setState({
      list: 2,
    });
    if (this.state.list <= 1) {
      this.setState({
        list: 2,
      });
    } else {
      this.setState({
        list: this.state.list - 1,
      });
    }
  };

  componentDidMount() {
    setInterval(this.slideLeft, 4000);
  }

  render() {
    return (
      <div className="SideSlide">
        <div
          className={
            this.state.img === 1 ? "sideImgWrap first" : "sideImgWrap second"
          }
        >
          <a href="/">
            <img src="./images/side_slide_1.jpg" alt="사이드 슬라이드" />
          </a>
          <a href="/">
            <img src="./images/side_slide_2.jpg" alt="사이드 슬라이드" />
          </a>
        </div>
        <div className="sideSlideCount">
          <button className="bxPrev" type="button" onClick={this.slideLeft}>
            <IoIosArrowBack size="24" />
          </button>
          <div className="counter">
            <div className="sideSlideIdxPrev">{this.state.img}</div>
            <div className="part"> / </div>
            <div className="sideSlideIdxNext">2</div>
          </div>
          <button className="bxNext" type="button" onClick={this.slideRight}>
            <IoIosArrowForward size="24" />
          </button>
        </div>
      </div>
    );
  }
}

export default SideSlide;
