import React, { Component } from "react";

class ListNavCategoryList extends Component {
  render() {
    return (
      <div className="ListNavCategoryList">
        <li>
          <a href="/">
            {this.props.name}
            <em>({this.props.count})</em>
          </a>
        </li>
      </div>
    );
  }
}
export default ListNavCategoryList;
