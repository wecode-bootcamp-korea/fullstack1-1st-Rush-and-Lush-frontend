import { Component } from "react";
import "./GridImg.scss";

class GridImg extends Component {
  render() {
    return (
      <div className="GridImg">
        <div className="imgLeft">
          <a href="/">
            <img src="./images/img_left_2.jpg" alt="left" />
          </a>
        </div>
        <div className="imgRightUp">
          <a href="/">
            <img src="./images/img_right_up_2.jpg" alt="right" />
          </a>
          <div className="imgRightBtm">
            <a href="/">
              <img src="./images/img_right_btm_3.jpg" alt="right_bottom" />
            </a>
            <a href="/">
              <img src="./images/img_right_btm_4.jpg" alt="right_bottom" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default GridImg;
