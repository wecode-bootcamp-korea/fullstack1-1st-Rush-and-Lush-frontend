import { Component } from "react";
import BtmSlideImg from "./BtmSlideImg";
import "./BtmSlide.scss";

class BtmSlide extends Component {
  constructor() {
    super();
    this.state = {
      imgId: 1,
      scrollTop: 0,
      btmSlides: [],
    };
  }

  fadeSlide = () => {
    const { imgId } = this.state;

    this.setState(imgId > 1 ? { imgId: 1 } : { imgId: imgId + 1 });
  };

  handleScroll = e => {
    const scrollTop = ("scroll", e.target.scrollingElement.scrollTop);
    this.setState({
      scrollTop,
    });
  };

  componentDidMount() {
    fetch("data/btmSlideData.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          btmSlides: data.btmSlideData,
        });
      });

    window.addEventListener("scroll", this.handleScroll);
    this.interval = setInterval(this.fadeSlide, 5000);
  }

  componentWillUnMount = () => {
    window.removeEventListener("scroll", this.handleScroll);
    clearInterval(this.interval);
  };

  render() {
    const { scrollTop, imgId } = this.state;
    const showImgScrollTop = 1330;
    return (
      <div
        className={
          scrollTop > showImgScrollTop ? "BtmSlide active" : "BtmSlide"
        }
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
                  imgId={imgId}
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
