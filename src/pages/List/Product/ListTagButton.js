import React, { Component } from "react";
import "./ListTagButton.scss";

class ListTagBtn extends Component {
  render() {
    return (
      <div className="ListTagBtn">
        <link to="/detail">
          <button className={`tagButton ${this.props.tagButton}`} type="button">
            {this.props.tagButton}
          </button>
        </link>
      </div>
    );
  }
}
export default ListTagBtn;
