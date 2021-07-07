import { Component } from "react";
import { BiCircle } from "react-icons/bi";
import "./ItemCard.scss";

class ItemCard extends Component {
  render() {
    return (
      <>
        <div className="allContainer">
          <div className="itemSlideContainer">
            <h2>나만 알고 싶은 향기</h2>
            <div className="itemSlideWrap">
              <div className="card">
                <img src="./images/card.jpg" alt="서브1" />
                <p className="itemTitle">뷰티슬립</p>
                <p className="itemDesc">머이리 비싸 이거</p>
                <p className="itemPrice">￦ 20,000</p>
              </div>
              <div className="card">
                <img src="./images/card.jpg" alt="서브2" />
                <p className="itemTitle">뷰티슬립</p>
                <p className="itemDesc">머이리 비싸 이거</p>
                <p className="itemPrice">￦ 20,000</p>
              </div>
              <div className="card">
                <img src="./images/card.jpg" alt="서브3" />
                <p className="itemTitle">뷰티슬립</p>
                <p className="itemDesc">머이리 비싸 이거</p>
                <p className="itemPrice">￦ 20,000</p>
              </div>
            </div>
            <div className="itemSlideBtn">
              <div>
                <button className="itemBtn1st">
                  <BiCircle size="16" />
                </button>
              </div>
              <div>
                <button className="itemBtn2nd">
                  <BiCircle size="16" />
                </button>
              </div>
              <div>
                <button className="itemBtn3rd">
                  <BiCircle size="16" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ItemCard;
