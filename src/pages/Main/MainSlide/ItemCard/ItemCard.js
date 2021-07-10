import { Component } from "react";
import { BiCircle } from "react-icons/bi";
import "./ItemCard.scss";

class ItemCard extends Component {
  constructor() {
    super();
    this.state = {
      list: 1,
    };
  }

  imgSlideLeft = () => {
    if (this.state.list > 1) {
      this.setState({
        list: 1,
      });
    } else {
      this.setState({
        list: this.state.list + 1,
      });
    }
  };

  imgSlideRight = () => {
    this.setState({
      list: 2,
    });
    if (this.state.list <= 1) {
      this.setState({
        list: 2,
      });
    } else {
      this.setState({
        list: this.state.list - 1,
      });
    }
  };

  componentDidMount() {
    setInterval(this.imgSlideLeft, 5000);
  }

  render() {
    return (
      <div className="ItemCard">
        <div className="itemSlideContainer">
          <h2>나만 알고 싶은 향기</h2>
          <div
            className={
              this.state.list === 1
                ? "wholeItemSlideWrap first"
                : "wholeItemSlideWrap second"
            }
          >
            <div className="firstList">
              <div className="firstCard">
                <img src="./images/card.jpg" alt="서브1" />
                <p className="itemTitle">뷰티슬립</p>
                <p className="itemDesc">머이리 비싸 이거</p>
                <p className="itemPrice">￦ 20,000</p>
              </div>
              <div className="firstCard">
                <img src="./images/card.jpg" alt="서브2" />
                <p className="itemTitle">뷰티슬립</p>
                <p className="itemDesc">머이리 비싸 이거</p>
                <p className="itemPrice">￦ 20,000</p>
              </div>
              <div className="firstCard">
                <img src="./images/card.jpg" alt="서브3" />
                <p className="itemTitle">뷰티슬립</p>
                <p className="itemDesc">머이리 비싸 이거</p>
                <p className="itemPrice">￦ 20,000</p>
              </div>
            </div>
            <div className="secondList second">
              <div className="secondCard">
                <img src="./images/card_2.jpg" alt="서브1" />
                <p className="itemTitle">뷰티슬립</p>
                <p className="itemDesc">머이리 비싸 이거</p>
                <p className="itemPrice">￦ 20,000</p>
              </div>
              <div className="secondCard">
                <img src="./images/card_2.jpg" alt="서브2" />
                <p className="itemTitle">뷰티슬립</p>
                <p className="itemDesc">머이리 비싸 이거</p>
                <p className="itemPrice">￦ 20,000</p>
              </div>
              <div className="secondCard">
                <img src="./images/card_2.jpg" alt="서브3" />
                <p className="itemTitle">뷰티슬립</p>
                <p className="itemDesc">머이리 비싸 이거</p>
                <p className="itemPrice">￦ 20,000</p>
              </div>
            </div>
          </div>
          <div className="itemSlideBtn">
            <div>
              <button
                className="itemBtn1st"
                type="button"
                onClick={this.imgSlideLeft}
              >
                <BiCircle size="16" />
              </button>
            </div>
            <div>
              <button
                className="itemBtn2nd"
                type="button"
                onClick={this.imgSlideLeft}
              >
                <BiCircle size="16" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
