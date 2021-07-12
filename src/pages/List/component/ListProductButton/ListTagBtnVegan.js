import React, { Component } from "react";
import "./ListTagBtnVegan.scss";

class ListProductTagButtonVegan extends Component {
  render() {
    const newPage = () => {
      document.location.href = "http://www.lush.co.kr";
    };
    return (
      <>
        <button className="BtnVegan" type="button" onClick={newPage}>
          VEGAN
        </button>
      </>
    );
  }
}
export default ListProductTagButtonVegan;
