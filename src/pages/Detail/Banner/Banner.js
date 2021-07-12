import { Component } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Banner.scss";

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <div className="imgBannerWrap">
          <div className="imgBanner" href="/">
            <img src="./images/card_1.jpg" alt="배너" />
          </div>
          <div className="thumbnailWrap">
            <button>
              <IoIosArrowBack size="20" />
            </button>
            <div className="thumbnailList">
              <a href="/">
                <img src="./images/card_1.jpg" alt="배너" />
              </a>
            </div>
            <button>
              <IoIosArrowForward size="20" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
