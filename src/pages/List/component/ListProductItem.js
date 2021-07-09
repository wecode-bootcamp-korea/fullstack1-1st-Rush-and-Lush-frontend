import React, { Component } from "react";
import "./ListProductItem.scss";
import ListProductTagButton from "./ListProductTagButton";

class ListProductItem extends Component {
  render() {
    return (
      <>
        <div className="listProduct">
          <div className="listProductImageBox">
            <a href="/">
              <img src={this.props.img} />
            </a>
          </div>
          <div className="listProductInfoBox">
            <div className="listProductTagBtnBox">
              <ListProductTagButton />
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
