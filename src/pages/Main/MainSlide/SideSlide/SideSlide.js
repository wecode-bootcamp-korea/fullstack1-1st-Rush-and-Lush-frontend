import { Component } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./SideSlide.scss";

class SideSlide extends Component {
  render() {
    return (
      <div className="SideSlide">
        <div className="sideSlid">
          <a href="/">
            <img src="./images/side_slide.jpg" alt="사이드 슬라이드" />
          </a>
        </div>
        <div className="sideSlideCount">
          <a className="bxPrev" href="/">
            <IoIosArrowBack size="24" />
          </a>
          <em className="sideSlideIdxPrev">1</em>
          <span> / </span>
          <span className="sideSlideIdxNext">6</span>
          <a className="bxNext" href="/">
            <IoIosArrowForward size="24" />
          </a>
        </div>
      </div>
    );
  }
}

export default SideSlide;
