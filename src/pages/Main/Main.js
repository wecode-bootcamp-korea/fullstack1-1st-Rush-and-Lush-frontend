import { Component } from "react";
import MainSlide from "./MainSlide/MainSlide";
import { BiCircle } from "react-icons/bi";
import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <MainSlide />
        <div className="imgWrap">
          <div className="imgLeft">
            <a href="/">
              <img src="./images/img_left.jpg" alt="left" />
            </a>
          </div>
          <div className="imgRightUp">
            <a href="/">
              <img src="./images/img_right_up.jpg" alt="right" />
            </a>
            <div className="imgRightBtm">
              <a href="/">
                <img src="./images/img_right_btm_1.jpg" alt="right_bottom" />
              </a>
              <a href="/">
                <img src="./images/img_right_btm_2.jpg" alt="right_bottom" />
              </a>
            </div>
          </div>
        </div>
        <div className="btmSlideWrap">
          <dl>
            <dt>르네상스 스파 론칭</dt>
            <dd>
              향기, 음악, 단어 그리고 부드러운 손길은 마음과 영혼을 깨워줍니다.
            </dd>
          </dl>
          <span className="btmSlideContainer">
            <span className="btmSlideImg">
              <a className="btmSlide" href="/">
                <img src="./images/btm_slide.jpg" alt="마지막 슬라이드" />
              </a>
            </span>
            <span className="btmSlideBtn">
              <ul>
                <li>
                  <button className="btmBtn1st">
                    <BiCircle size="16" />
                  </button>
                </li>
                <li>
                  <button className="btmBtn2rd">
                    <BiCircle size="16" />
                  </button>
                </li>
              </ul>
            </span>
          </span>
        </div>
      </div>
    );
  }
}
export default Main;
