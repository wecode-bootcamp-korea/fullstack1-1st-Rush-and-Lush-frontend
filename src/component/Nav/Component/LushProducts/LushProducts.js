import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductList from "./LushProductsList";
import "./LushProducts.scss";

class Products extends Component {
  constructor() {
    super();
    this.state = {
      subNav: [],
    };
  }

  componentDidMount() {
    fetch("/data/productsList.json")
      .then(res => res.json())
      .then(res => this.setState({ subNav: res.PRODUCTS_DATA }));
  }

  render() {
    const { subNav } = this.state;
    return (
      <li className="tooltip">
        <Link className="navTitle" to="/list">
          제품
        </Link>
        <div className="tooltipWindow">
          {subNav.map((el, index) => (
            <ProductList key={index} title={el.title} elements={el.elements} />
          ))}
        </div>
      </li>
    );
  }
}

export default Products;
