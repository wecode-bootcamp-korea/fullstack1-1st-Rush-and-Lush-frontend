import React, { Component } from "react";
import "./ListTagBtnSoldOut.scss";

class ListProductTagButtonVegan extends Component {
  render() {
    const newPage = () => {
      document.location.href = "http://www.lush.co.kr";
    };
    return (
      <>
        <button className="SoldOutBtn" type="button" onClick={newPage}>
          품절
        </button>
      </>
    );
  }
}
export default ListProductTagButtonVegan;
