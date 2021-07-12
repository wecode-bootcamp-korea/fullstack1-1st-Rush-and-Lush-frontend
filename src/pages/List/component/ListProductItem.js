import React, { Component } from "react";
import "./ListProductItem.scss";
import ListProductTagButton from "../component/ListProductButton/ListTagBtnNew";
import ListTagBtnVegan from "../component/ListProductButton/ListTagBtnVegan";
import ListTagBtnSoldOut from "../component/ListProductButton/ListTagBtnSoldOut";

class ListProductItem extends Component {
  render() {
    return (
      <>
        <div className="listProduct">
          <div className="IconBox">
            <a className="wishListIcon" href="http://www.naver.com">
              {/* <p className="s11">11</p> */}
            </a>
          </div>
          <div className="listProductImageBox">
            <a href="/" target="_blank">
              <img src={this.props.img} alt="" />
            </a>
          </div>
          <div className="listProductInfoBox">
            <div className="listProductTagBtnBox">
              <ListProductTagButton />
              <ListTagBtnVegan />
              <ListTagBtnSoldOut />
            </div>
            <div className="listProductNameBox">
              <a href="/">
                <p className="listProductName">{this.props.name}</p>
                <p className="listProductSubName">{this.props.subName}</p>
              </a>
            </div>
            <div className="listProductPrice">
              <p>
                <strong>{this.props.price}</strong>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ListProductItem;
