import { Component } from "react";

class MainSlideBtn extends Component {
  render() {
    const { imgSlidePrev, imgSlideNext } = this.props;
    return (
      <div className="mainSlideBtn">
        <ul>
          <li>
            <button className="mainBtn1st" type="button" onClick={imgSlidePrev}>
              <img src="./images/mainUpArrow.png" alt="mainUpArrow" />
            </button>
          </li>
          <li>
            <button className="mainBtn2nd" type="button" onClick={imgSlideNext}>
              <img src="./images/mainDownArrow.png" alt="mainDownArrow" />
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default MainSlideBtn;
