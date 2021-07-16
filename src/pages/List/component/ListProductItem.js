import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ListProductItem.scss";
import ListTagButton from "./ListTagButton";

class ListProductItem extends Component {
  render() {
    return (
      <div className="ListProductItem">
        <div className="listProduct">
          <div className="listProductImageBox">
            <Link to="/detail">
              <img src={this.props.image} alt={this.props.alt} />
            </Link>
          </div>
          <div className="listProductInfoBox">
            <div className="listProductTagBtnBox">
              {this.props.tags &&
                this.props.tags.map(tag => (
                  <ListTagButton tagButton={tag}></ListTagButton>
                ))}
            </div>

            <div className="listProductNameBox">
              <Link to="/detail">
                <p className="listProductName">{this.props.name}</p>
                <p className="listProductSubName">{this.props.subName}</p>
              </Link>
            </div>
            <div className="listProductPrice">
              <p>
                <strong>₩ {this.props.price.toLocaleString()}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ListProductItem;
