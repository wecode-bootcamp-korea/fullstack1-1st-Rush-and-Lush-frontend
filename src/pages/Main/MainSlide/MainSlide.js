import { Component } from "react";
import ItemCard from "./ItemCard/ItemCard";
import { BiCircle } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./MainSlide.scss";

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

  // imgSlideRight = () => {
  //   this.setState({
  //     img: 3,
  //   });
  //   if (this.state.img <= 1) {
  //     this.setState({
  //       img: 3,
  //     });
  //   } else {
  //     this.setState({
  //       img: this.state.img - 1,
  //     });
  //   }
  // };

  render() {
    return (
      <div className="MainSlide">
        <div className="mainSlideWrap">
          <div className="mainSlideImageWrap">
            <a className="mainSlideClick" href="/">
              <img
                className={
                  this.state.img === 1
                    ? "mainSlideImg firstImg active"
                    : "mainSlideImg firstImg"
                }
                src={`./images/main_slide_1.jpg`}
                alt="비누"
              />
            </a>
            <a className="mainSlideClick" href="/">
              <img
                className={
                  this.state.img === 2
                    ? "mainSlideImg secondImg active"
                    : "mainSlideImg secondImg"
                }
                src={`./images/main_slide_2.jpg`}
                alt="비누"
              />
            </a>
            <a className="mainSlideClick" href="/">
              <img
                className={
                  this.state.img === 3
                    ? "mainSlideImg thirdImg active"
                    : "mainSlideImg thirdImg"
                }
                src={`./images/main_slide_3.jpg`}
                alt="비누"
              />
            </a>
          </div>
          <div className="mainSlideBtn">
            <ul>
              <li>
                <button className="mainBtn1st">
                  <BiCircle size="16" />
                </button>
              </li>
              <li>
                <button className="mainBtn2nd">
                  <BiCircle size="16" />
                </button>
              </li>
              <li>
                <button className="mainBtn3rd">
                  <BiCircle size="16" />
                </button>
              </li>
            </ul>
          </div>
          <div className="sideSlideWrap">
            <div className="sideSlid">
              <a href="/">
                <img src="./images/side_slide.jpg" alt="사이드 슬라이드" />
              </a>
            </div>
            <div className="sideSlideCount">
              <a className="bxPrev" href="/">
                <IoIosArrowBack size="24" />
              </a>
              <em className="sideSlideIdxPrev">1</em>
              <span> / </span>
              <span className="sideSlideIdxNext">6</span>
              <a className="bxNext" href="/">
                <IoIosArrowForward size="24" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <ItemCard />
        </div>
      </div>
    );
  }
}

export default MainSlide;
