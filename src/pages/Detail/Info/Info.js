import { Component } from "react";
import { IoShareOutline, IoHeartOutline } from "react-icons/io5";
import "./Info.scss";

class Info extends Component {
  constructor() {
    super();
    this.state = {
      qty: 1,
      price: 0,
    };
  }

  onClickHandler = () => {
    this.setState({ qty: this.state.qty + 1 });
  };

  onClickHandlerRemove = () => {
    this.setState({ qty: this.state.qty - 1 });
  };

  qtyMultiple = () => {
    this.setState({ price: this.props.price * this.state.qty });
  };

  render() {
    return (
      <div className="Info">
        <div className="detailInfo">
          <div className="itemHeader">
            <div>
              <h2 className="itemName">{this.props.name}</h2>
              <p className="hashtag">{this.props.description}</p>
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
                <dd>₩{this.props.price.toLocaleString()}</dd>
              </dl>
              <dl className="itemWeight">
                <dt>상품무게</dt>
                <dd>{this.props.weight}g</dd>
              </dl>
            </div>
            <div className="itemQuantity">
              <p>구매수량</p>
              <div className="count">
                <button onClick={this.onClickHandlerRemove}>-</button>
                <p>{this.state.qty}</p>
                <button onClick={this.onClickHandler}>+</button>
              </div>
              <p>₩{this.props.price.toLocaleString()}</p>
            </div>
            <div className="total">
              <dl className="totalItemPrice">
                <dt>총 제품 금액</dt>
                <dd>₩</dd>
                <dd>{this.props.price.toLocaleString()}</dd>
              </dl>
              <dl className="totalPrice">
                <dt>총 합계 금액</dt>
                <dd>₩</dd>
                <dd>{this.props.price.toLocaleString()}</dd>
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
