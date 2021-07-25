import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./ListProductItem.scss";

class ListProductItem extends Component {
  render() {
    return (
      <div
        className="ListProductItem"
        onClick={() => this.props.history.push("/detail")}
      >
        <div className="listProduct">
          <div className="listProductImageBox">
            <Link to="/detail">
              <img src={this.props.image} alt={this.props.alt} />
            </Link>
          </div>
          <div className="listProductInfoBox">
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
export default withRouter(ListProductItem);
