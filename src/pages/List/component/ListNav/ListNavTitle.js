import React, { Component } from "react";
import "./ListNavTitle.scss";

class ListNavTitle extends Component {
  render() {
    return (
      <div className="listNavTitle">
        <h2>솝</h2>
        <form>
          <select>
            <option value="">추천순</option>
            <option value="">낮은가격순</option>
            <option value="">높은가격순</option>
          </select>
        </form>
      </div>
    );
  }
}
export default ListNavTitle;
