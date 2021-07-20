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
    if (this.state.imgIndex > 1) {
      this.setState({
        imgIndex: 1,
      });
    } else {
      this.setState({
        imgIndex: this.state.imgIndex + 1,
      });
    }
  };

  slideRight = () => {
    this.setState({
      imgIndex: 2,
    });
    if (this.state.imgIndex <= 1) {
      this.setState({
        imgIndex: 2,
      });
    } else {
      this.setState({
        imgIndex: this.state.imgIndex - 1,
      });
    }
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/sideSlideData.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          sideSlides: data.sideSlideData,
        });
      });

    setInterval(this.slideLeft, 4000);
  }

  render() {
    const { imgIndex, sideSlides } = this.state;
    return (
      <div className="SideSlide">
        <div
          className={
            imgIndex === 1 ? "sideImgWrap first" : "sideImgWrap second"
          }
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
