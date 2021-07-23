import React, { Component } from "react";
import ListNavSelect from "./ListNavSelect";
import "./ListNavTitle.scss";

class ListNavTitle extends Component {
  render() {
    return (
      <div className="listNavTitle">
        <h2>솝</h2>
        <ListNavSelect />
      </div>
    );
  }
}
export default ListNavTitle;
