import { Component } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

class IndexIndicator extends Component {
  render() {
    const { slideLeft, imgIndex, slideRight } = this.props;
    return (
      <div className="indexIndicator">
        <button className="sideSlideBtn" type="button" onClick={slideLeft}>
          <IoIosArrowBack size="24" />
        </button>
        <div className="counter">
          <div className="sideSlideIdxPrev">{imgIndex}</div>
          <div className="part"> / </div>
          <div className="sideSlideIdxNext">2</div>
        </div>
        <button className="sideSlideBtn" type="button" onClick={slideRight}>
          <IoIosArrowForward size="24" />
        </button>
      </div>
    );
  }
}

export default IndexIndicator;
