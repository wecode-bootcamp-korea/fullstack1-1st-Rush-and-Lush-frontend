import { Component } from "react";
import ItemCard from "./ItemCard/ItemCard";
import MainSlideImg from "./MainSlideImg";
import SideSlide from "./SideSlide/SideSlide";
import "./MainSlide.scss";

class MainSlide extends Component {
  constructor() {
    super();
    this.state = {
      mainSlides: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/mainSlideData.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          mainSlides: data.mainSlideData,
        });
      });
  }

  render() {
    return (
      <div className="MainSlide">
        <div className="mainSlideWrap">
          <div className="mainSlideImageWrap">
            {this.state.mainSlides.map(slide => {
              return <MainSlideImg id={slide.id} img={slide.img} />;
            })}
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
