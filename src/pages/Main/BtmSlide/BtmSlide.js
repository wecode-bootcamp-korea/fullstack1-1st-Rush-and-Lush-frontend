import { Component } from "react";
import "./BtmSlide.scss";

class BtmSlide extends Component {
  constructor() {
    super();
    this.state = {
      imgIndex: 1,
      scrollTop: 0,
    };
  }

  fadeSlide = () => {
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

  handleScroll = e => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.setState({
      scrollTop,
    });
    console.log(this.state.scrollTop);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    setInterval(this.fadeSlide, 5000);
  }

  componentWillUnMount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  render() {
    return (
      <div
        className={this.state.scrollTop > 1330 ? "BtmSlide active" : "BtmSlide"}
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
            <a
              className={
                this.state.imgIndex === 1 ? "btmSlide active" : "btmSlide"
              }
              href="/"
            >
              <img
                src="https://media0.giphy.com/media/jGd1iZ5LTgTI4Ba80O/giphy.gif?cid=ecf05e47jd65rv8l4f22g5s4htmp63mnlpgsay0k3lm5u3jl&rid=giphy.gif&ct=g"
                alt="마지막 슬라이드"
              />
            </a>
            <a
              className={
                this.state.imgIndex === 2 ? "btmSlide active" : "btmSlide"
              }
              href="/"
            >
              <img
                src="https://media2.giphy.com/media/EsnC3oNRj1Ej8jqSqF/giphy.gif?cid=ecf05e47me0rk58n80mcnvw8r1f7bjiyahhg3j0snclr8nyn&rid=giphy.gif&ct=g"
                alt="마지막 슬라이드"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default BtmSlide;
