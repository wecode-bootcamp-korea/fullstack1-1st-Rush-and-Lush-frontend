import { Component } from "react";
import SideSlideImg from "./SideSlideImg";
import IndexIndicator from "./IndexIndicator";
import "./SideSlide.scss";

class SideSlide extends Component {
  constructor() {
    super();
    this.state = {
      imgIndex: 1,
      sideSlides: [],
    };
  }

  slideLeft = () => {
    const { imgIndex } = this.state;
    if (imgIndex > 1) {
      this.setState({
        imgIndex: 1,
      });
    } else {
      this.setState({
        imgIndex: imgIndex + 1,
      });
    }
  };

  slideRight = () => {
    const { imgIndex, sideSlides } = this.state;
    this.setState({
      imgIndex: sideSlides.length,
    });
    if (imgIndex <= 1) {
      this.setState({
        imgIndex: sideSlides.length,
      });
    } else {
      this.setState({
        imgIndex: imgIndex - 1,
      });
    }
  };

  componentDidMount() {
    fetch("data/sideSlideData.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          sideSlides: data.sideSlideData,
        });
      });
    this.interval = setInterval(this.slideLeft, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { imgIndex, sideSlides } = this.state;
    return (
      <div className="SideSlide">
        <div
          className={"sideImgWrap" + (imgIndex === 1 ? " first" : " second")}
        >
          {sideSlides.map((slide, index) => {
            return <SideSlideImg key={index} img={slide.img} />;
          })}
        </div>
        <IndexIndicator
          imgIndex={imgIndex}
          slideLeft={this.slideLeft}
          slideRight={this.slideRight}
        />
      </div>
    );
  }
}

export default SideSlide;
