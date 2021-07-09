import { Component } from "react";
import ItemCard from "./ItemCard/ItemCard";
import { BiCircle } from "react-icons/bi";
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
