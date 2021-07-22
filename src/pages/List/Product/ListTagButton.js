import React, { Component } from "react";
import "./ListTagButton.scss";

class ListTagBtn extends Component {
  render() {
    const newPage = () => {
      document.location.href = "/";
    };

    return (
      <button
        className={`tagButton ${this.props.tagButton}`}
        type="button"
        onClick={newPage}
      >
        {this.props.tagButton}
      </button>
    );
  }
}
export default ListTagBtn;
