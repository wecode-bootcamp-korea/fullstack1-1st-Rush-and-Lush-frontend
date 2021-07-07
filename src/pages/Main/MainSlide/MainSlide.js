import { Component } from "react";
import ItemCard from "./ItemCard/ItemCard";
import { BiCircle } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "./MainSlide.scss";

class MainSlide extends Component {
  render() {
    return (
      <>
        <div className="mainSlideWrap">
          <a className="mainSlideClick" href="/">
            <img
              className="mainSlideImg"
              src="./images/main_slide.jpg"
              alt="비누"
            />
          </a>
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
      </>
    );
  }
}

export default MainSlide;
