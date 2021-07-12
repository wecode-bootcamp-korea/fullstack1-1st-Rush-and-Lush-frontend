import { Component } from "react";
import { IoShareOutline, IoHeartOutline } from "react-icons/io5";
import "./Info.scss";

class Info extends Component {
  render() {
    return (
      <div className="Info">
        <div className="detailInfo">
          <div className="itemHeader">
            <div>
              <h2 className="itemName">레몬 제스트</h2>
              <p className="hashtag">#솝 #레몬껍질송송</p>
            </div>
            <div className="icon">
              <div>
                <IoShareOutline size="25" />
              </div>
              <div>
                <IoHeartOutline size="25" />
              </div>
            </div>
          </div>
          <div className="itemInfo">
            <div className="reviewLink">
              <a href="/">7</a>
              <p>개의 후기 보기</p>
            </div>
            <p className="goodToKnow">Good to Know</p>
            <div>
              <dl className="itemPrice">
                <dt>판매가</dt>
                <dd>₩9,000</dd>
              </dl>
              <dl className="itemWeight">
                <dt>상품무게</dt>
                <dd>100g</dd>
              </dl>
            </div>
            <div className="itemQuantity">
              <p>구매수량</p>
              <div className="count">
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
              <p>₩9,000</p>
            </div>
            <div className="total">
              <dl className="totalItemPrice">
                <dt>총 제품 금액</dt>
                <dd>₩</dd>
                <dd>9,000</dd>
              </dl>
              <dl className="totalPrice">
                <dt>총 합계 금액</dt>
                <dd>₩</dd>
                <dd>9,000</dd>
              </dl>
            </div>
            <div className="orderBtn">
              <button className="cart">장바구니</button>
              <button className="order">주문하기</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
