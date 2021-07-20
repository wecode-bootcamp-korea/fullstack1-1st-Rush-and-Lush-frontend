import { Component } from "react";
import MainSlideImg from "./MainSlideImg";
import ItemCard from "./ItemCard/ItemCard";
import SideSlide from "./SideSlide/SideSlide";
import "./MainSlide.scss";

class MainSlide extends Component {
  constructor() {
    super();
    this.state = {
      imgIndex: 1,
      mainSlides: [],
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
    fetch("http://localhost:3000/data/mainSlideData.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          mainSlides: data.mainSlideData,
        });
      });

    setInterval(this.imgSlideNext, 3000);
  }

  render() {
    return (
      <div className="MainSlide">
        <div className="mainSlideWrap">
          <div className="mainSlideImageWrap">
            {this.state.mainSlides.map((slide, index) => {
              return (
                <MainSlideImg
                  key={index}
                  id={slide.id}
                  img={slide.img}
                  imgIndex={this.state.imgIndex}
                />
              );
            })}
          </div>
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
          <SideSlide />
        </div>
        <div>
          <ItemCard />
        </div>
      </div>
    );
  }
}

export default MainSlide;
