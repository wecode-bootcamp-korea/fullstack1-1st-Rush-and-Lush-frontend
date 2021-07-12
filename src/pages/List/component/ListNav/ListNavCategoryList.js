import React, { Component } from "react";
// import "./ListNavCategoryList.scss";

class ListNavCategoryList extends Component {
  render() {
    return (
      <>
        <li>
          <a href="/">
            {this.props.name}
            <em>({this.props.count})</em>
          </a>
        </li>
      </>
    );
  }
}
export default ListNavCategoryList;
