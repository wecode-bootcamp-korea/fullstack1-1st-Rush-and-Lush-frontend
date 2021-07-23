import React, { Component } from "react";
import "./ListPageHeader.scss";

class ListPageHeader extends Component {
  render() {
    return (
      <div className="listPageHeader">
        <p className="listPageHeaderTxt">{this.props.title}</p>
        <p className="listPageHeaderTxt2">{this.props.desc}</p>
      </div>
    );
  }
}
export default ListPageHeader;
