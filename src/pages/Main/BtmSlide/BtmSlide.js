import { Component } from "react";
import BtmSlideImg from "./BtmSlideImg";
import "./BtmSlide.scss";

class BtmSlide extends Component {
  constructor() {
    super();
    this.state = {
      imgIndex: 1,
      scrollTop: 0,
      btmSlides: [],
    };
  }

  fadeSlide = () => {
    this.state.imgIndex > 1
      ? this.setState({ imgIndex: 1 })
      : this.setState({ imgIndex: this.state.imgIndex + 1 });
  };

  handleScroll = e => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.setState({
      scrollTop,
    });
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/btmSlideData.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          btmSlides: data.btmSlideData,
        });
      });

    window.addEventListener("scroll", this.handleScroll);
    setInterval(this.fadeSlide, 5000);
  }

  componentWillUnMount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    const { scrollTop, imgIndex } = this.state;
    return (
      <div
        className={scrollTop > 1330 ? "BtmSlide active" : "BtmSlide"}
        onScroll={this.handleScroll}
      >
        <dl>
          <dt>르네상스 솝 론칭</dt>
          <dd>
            향기, 음악, 단어 그리고 부드러운 손길은 마음과 영혼을 깨워줍니다.
          </dd>
        </dl>
        <div className="btmSlideContainer">
          <div className="btmSlideImg">
            {this.state.btmSlides.map((slide, index) => {
              return (
                <BtmSlideImg
                  key={index}
                  id={slide.id}
                  img={slide.img}
                  imgIndex={imgIndex}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default BtmSlide;
