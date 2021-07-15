import { Component } from "react";
import { IoShareOutline, IoHeartOutline } from "react-icons/io5";
import "./Info.scss";

class Info extends Component {
  constructor() {
    super();
    this.state = {
      qty: 1,
    };
  }

  increaseQtyHandler = () => {
    this.setState({ qty: this.state.qty + 1 });
  };

  decreaseQtyHandler = () => {
    this.setState({ qty: this.state.qty - 1 });
  };

  render() {
    const { name, description, price, weight } = this.props;
    const { qty } = this.state;
    return (
      <div className="Info">
        <div className="detailInfo">
          <div className="itemHeader">
            <div>
              <h2 className="itemName">{name}</h2>
              <p className="hashtag">{description}</p>
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
                <dd>₩ {price.toLocaleString()}</dd>
              </dl>
              <dl className="itemWeight">
                <dt>상품무게</dt>
                <dd>{weight}g</dd>
              </dl>
            </div>
            <div className="itemQuantity">
              <p>구매수량</p>
              <div className="count">
                <button onClick={this.decreaseQtyHandler}>-</button>
                <p>{qty >= 1 ? qty : 1}</p>
                <button onClick={this.increaseQtyHandler}>+</button>
              </div>
              <p>₩{price.toLocaleString()}</p>
            </div>
            <div className="total">
              <dl className="totalItemPrice">
                <dt>총 제품 금액</dt>
                <dd>₩</dd>
                <dd>{(price * qty).toLocaleString()}</dd>
              </dl>
              <dl className="totalPrice">
                <dt>총 합계 금액</dt>
                <dd>₩</dd>
                <dd>
                  {(price * qty + 2500 > 30000
                    ? price * qty
                    : price * qty + 2500 <= 2500
                    ? 0
                    : price * qty + 2500
                  ).toLocaleString()}
                </dd>
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
