import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LushProductsList.scss";

class ProductList extends Component {
  render() {
    const { title, elements } = this.props;
    return (
      <ul className="productList">
        <li>
          <Link className="title" to="/">
            {title}
          </Link>
        </li>
        {elements.map(el => (
          <li>
            <Link className="elements" to={el.link}>
              {el.sub_title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default ProductList;
