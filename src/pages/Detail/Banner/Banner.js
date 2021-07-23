import { Component } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Banner.scss";

class Banner extends Component {
  render() {
    return (
      <div className="Banner">
        <div className="imgBannerWrap">
          <div className="imgBanner">
            <img src="https://i.postimg.cc/zf2742n9/card-1.jpg" alt="배너" />
          </div>
          <div className="thumbnailWrap">
            <button>
              <IoIosArrowBack size="20" />
            </button>
            <div className="thumbnailList">
              <a href="/">
                <img
                  src="https://i.postimg.cc/zf2742n9/card-1.jpg"
                  alt="배너"
                />
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
