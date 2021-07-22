import { Component } from "react";
import MainSlideImg from "./MainSlideImg";
import SideSlide from "./SideSlide/SideSlide";
import MainSlideBtn from "./MainSlideBtn";
import ItemCard from "./ItemCard/ItemCard";
import "./MainSlide.scss";

class MainSlide extends Component {
  constructor() {
    super();
    this.state = {
      imgId: 1,
      mainSlides: [],
    };
  }

  imgSlideNext = () => {
    const { imgId, mainSlides } = this.state;

    this.setState(
      imgId > mainSlides.length - 1 ? { imgId: 1 } : { imgId: imgId + 1 }
    );
  };

  imgSlidePrev = () => {
    const { imgId, mainSlides } = this.state;

    this.setState({
      imgId: mainSlides.length,
    });

    this.setState(
      this.state.imgId <= 1
        ? { imgId: mainSlides.length }
        : { imgId: imgId - 1 }
    );
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
                  imgId={this.state.imgId}
                />
              );
            })}
          </div>
          <MainSlideBtn
            imgSlideNext={this.imgSlideNext}
            imgSlidePrev={this.imgSlidePrev}
          />
          <SideSlide />
        </div>
        <ItemCard />
      </div>
    );
  }
}

export default MainSlide;
