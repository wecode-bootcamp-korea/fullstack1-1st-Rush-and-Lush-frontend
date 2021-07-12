import React, { Component } from "react";
import "./ListTagBtnNew.scss";

class ListProductTagButton extends Component {
  render() {
    const newPage = () => {
      document.location.href = "http://www.lush.co.kr";
    };
    return (
      <>
        <button className="NewBtn" type="button" onClick={newPage}>
          NEW
        </button>
      </>
    );
  }
}
export default ListProductTagButton;
