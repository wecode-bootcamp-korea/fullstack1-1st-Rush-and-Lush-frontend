import { Component } from "react";
import "./Detail.scss";

class Detail extends Component {
  render() {
    return (
      <div className="Detail">
        <nav>
          <a href="/">홈</a>
          <button>러쉬</button>
          <button>샤워</button>
          <button>솝</button>
        </nav>
        <div className="detailInfoWrap">
          <div className="imgBannerWrap">
            <a className="imgBanner" href="/">
              <img src="/" alt="배너" />
            </a>
            <div className="thumbnailWrap">
              <button>ㅇ</button>
              <div className="thumbnailList">
                <a href="/">
                  <img src="/" alt="배너" />
                </a>
              </div>
              <button>ㅇ</button>
            </div>
          </div>
          <div className="detailInfo">
            <div className="itemHeader">
              <h2 className="itemName">레몬 제스트</h2>
              <p className="hashtag">#솝 #레몬껍질송송</p>
            </div>
            <div className="itemInfo">
              <div className="reviewLink">
                <a href="/">7</a>
                <p>개의 후기 보기</p>
              </div>
              <p>Good to Know</p>
              <div className="itemPrice">
                <p>판매가</p>
                <p>14,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Detail;
