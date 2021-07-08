import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LushProductsList.scss";

class LushProductsList extends Component {
  render() {
    const { title, elements } = this.props;
    return (
      <div className="LushProductsList">
        <ul className="productList">
          <li>
            <Link className="title" to="/">
              {title}
            </Link>
          </li>
          {elements.map(el => (
            <li key={el.id}>
              <Link className="elements" to="/">
                {el.sub_title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LushProductsList;
