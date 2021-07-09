import React, { Component } from "react";
import "./ListNavCategory.scss";

class ListNavCategory extends Component {
  render() {
    return (
      <>
        <div className="listNavCategoryBox">
          <ul className="listNavCategory">
            <li>
              <a href="/">전체 </a>
              <em>(47)</em>
            </li>
            <li>
              <a href="/">솝 </a>
              <em>(17)</em>
            </li>
            <li>
              <a href="/">샤워 젤 & 젤리 </a>
              <em>(13)</em>
            </li>
            <li>
              <a href="/">보디 컨디셔너 </a>
              <em>(4)</em>
            </li>
            <li>
              <a href="/">샤워 밤 </a>
              <em>(3)</em>
            </li>
            <li>
              <a href="/">샤워 오일 </a>
              <em>(1)</em>
            </li>
            <li>
              <a href="/">스크럽 & 버터 </a>
              <em>(7)</em>
            </li>
            <li>
              <a href="/">펀 </a>
              <em>(2)</em>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
export default ListNavCategory;
