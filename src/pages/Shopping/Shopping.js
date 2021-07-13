import { Component } from "react";
import "./Shopping.scss";

class Shopping extends Component {
  render() {
    return (
      <div>
        <div className="allContainer">
          <div className="shoppingCartContainer">
            <div className="shoppingCartHeader">
              <p className="shoppingCartTitle">SHOPPING CART</p>
              <div className="shoppingCartContents">
                <ul className="shoppingCartContentsList">
                  <li className="thisPage" title="현재 페이지">
                    Cart
                  </li>
                  <span>&gt;</span>
                  <li>Order</li>
                  <span>&gt;</span>
                  <li>Order confirmed</li>
                </ul>
              </div>
            </div>
            <div className="tableBox">
              <div className="tableTitle">
                <p>제품</p>
              </div>
              <table className="tableContents">
                <thead>
                  <tr>
                    <th className="th1">
                      <div>
                        <input type="checkbox" id="allCheck"></input>
                        <label for="allCheck"></label>
                      </div>
                    </th>
                    <th className="th2">제품 정보</th>
                    <th className="th3">수량</th>
                    <th className="th4">금액</th>
                    <th className="th5">복지혜택</th>
                    <th className="th6">합계금액</th>
                    <th className="th7">배송비</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="td1">
                      <input type="checkbox" id="check[]"></input>
                      <label for="check[]"></label>
                    </td>
                    <td className="td2">
                      <a>
                        <img></img>
                      </a>
                      <div>
                        <a>레몬 제스트</a>
                        <p>솝</p>
                      </div>
                    </td>
                    <td className="td3">
                      <div className="증가감소">
                        <button className="downBtn">-</button>
                        <input className="showNum" type="text"></input>
                        <button className="upBtn">+</button>
                      </div>
                    </td>
                    <td className="td4">₩28,000</td>
                    <td className="td5"></td>
                    <td className="td6">₩28,000</td>
                    <td className="td7" rowSpan="10">
                      <span>
                        ₩2,500
                        <br />
                        (택배)
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="가격박스">
              <p>
                <span>
                  <em>
                    총 <em> 1 </em>
                    개의 금액
                  </em>
                  ₩ <strong>10,000</strong>
                </span>
                <span>
                  + <em>배송비</em> ₩ <strong>2,500</strong>
                </span>
                <span>
                  = <em>총 주문금액</em>₩ <strong>12,500</strong>
                </span>
              </p>
            </div>
            <div className="버튼박스">
              <div className="박스1">
                <div className="삭제버튼">
                  <button className="deleteButton">삭제 하기</button>
                  <button className="wishButton">찜하기</button>
                </div>
                <div className="주문버튼">
                  <button className="keepGoButton">쇼핑 계속하기</button>
                  <button className="orderButton">주문하기</button>
                  <button className="Nbutton">
                    <em>N</em> Pay 구매
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Shopping;
