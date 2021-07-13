import React, { Component } from "react";
import "./ListProductItem.scss";
import ListTagButton from "./ListTagButton";

class ListProductItem extends Component {
  render() {
    console.log("이미지확인", this.props.img);
    return (
      <div className="ListProductItem">
        <div className="listProduct">
          <div className="listProductImageBox">
            <a href="/" target="_blank">
              <img src={this.props.image} alt={this.props.alt} />
            </a>
          </div>
          <div className="listProductInfoBox">
            <div className="listProductTagBtnBox">
              <ListTagButton tagButton={this.props.tagButton}></ListTagButton>
            </div>
            <div className="listProductNameBox">
              <a href="/">
                <p className="listProductName">{this.props.name}</p>
                <p className="listProductSubName">{this.props.subName}</p>
              </a>
            </div>
            <div className="listProductPrice">
              <p>
                <strong>₩ {this.props.price}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ListProductItem;
