import { Component } from "react";
import ItemCard from "./ItemCard/ItemCard";
// import { BiCircle } from "react-icons/bi";
import "./MainSlide.scss";
import SideSlide from "./SideSlide/SideSlide";

class MainSlide extends Component {
  constructor() {
    super();
    this.state = {
      img: 1,
    };
  }

  imgSlideLeft = () => {
    if (this.state.img > 2) {
      this.setState({
        img: 1,
      });
    } else {
      this.setState({
        img: this.state.img + 1,
      });
    }
  };

  imgSlideRight = () => {
    this.setState({
      img: 3,
    });
    if (this.state.img <= 1) {
      this.setState({
        img: 3,
      });
    } else {
      this.setState({
        img: this.state.img - 1,
      });
    }
  };

  componentDidMount() {
    // fetch("http://localhost:3000/mainSlideData.json", {
    //   method: "GET",
    // })
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       id: data.mainSlideData.img,
    //     });
    //   });

    setInterval(this.imgSlideLeft, 3000);
  }

  render() {
    return (
      <div className="MainSlide">
        <div className="mainSlideWrap">
          <div className="mainSlideImageWrap">
            <a className="mainSlideClick" href="/">
              <img
                className={
                  this.state.img === 1 ? "mainSlideImg active" : "mainSlideImg"
                }
                src={`./images/main_slide_4.jpg`}
                alt="비누"
              />
            </a>
            <a className="mainSlideClick" href="/">
              <img
                className={
                  this.state.img === 2 ? "mainSlideImg active" : "mainSlideImg"
                }
                src={`./images/main_slide_5.jpg`}
                alt="비누"
              />
            </a>
            <a className="mainSlideClick" href="/">
              <img
                className={
                  this.state.img === 3 ? "mainSlideImg active" : "mainSlideImg"
                }
                src={`./images/main_slide_6.jpg`}
                alt="비누"
              />
            </a>
          </div>
          <div className="mainSlideBtn">
            <ul>
              <li>
                <button
                  className="mainBtn1st"
                  type="button"
                  onClick={this.imgSlideRight}
                >
                  <img src="./images/mainUpArrow.png" alt="mainUpArrow" />
                </button>
              </li>
              <li>
                <button className="mainBtn2nd" type="button">
                  <img
                    src="./images/mainDownArrow.png"
                    alt="mainDownArrow"
                    onClick={this.imgSlideLeft}
                  />
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
