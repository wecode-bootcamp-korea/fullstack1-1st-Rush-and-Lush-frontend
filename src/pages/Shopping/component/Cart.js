import React, { Component } from "react";
import "./Cart.scss";

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      Number: 1,
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState({ Number: this.state.Number + 1 });
  }
  onClickHandlerRemove = () => {
    this.setState({ Number: this.state.Number - 1 });
  };

  render() {
    const { Number } = this.state;
    const { name, subname, price, img } = this.props;
    console.log("이거는", this.onClickHandler);
    return (
      <tbody>
        <tr>
          <td className="td1">
            <input type="checkbox" id="check[]"></input>
            <label for="check[]"></label>
          </td>
          <td className="td2">
            <a>
              <img src={img} alt={name}></img>
            </a>
            <div>
              <a>{name}</a>
              <p>{subname}</p>
            </div>
          </td>
          <td className="td3">
            <div className="증가감소">
              <button className="downBtn" onClick={this.onClickHandlerRemove}>
                -
              </button>
              <div className="showNum">{Number}</div>
              <button
                className="upBtn"
                type="button"
                onClick={this.onClickHandler}
              >
                +
              </button>
            </div>
          </td>
          <td className="td4">₩{price}</td>
          <td className="td5"></td>
          <td className="td6">₩{price}</td>
          <td className="td7" rowSpan="10">
            <span>
              ₩2,500
              <br />
              (택배)
            </span>
          </td>
        </tr>
      </tbody>
    );
  }
}

export default Cart;
