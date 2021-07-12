import React, { Component } from "react";
import { Link } from "react-router-dom";
import LushProductsList from "./LushProductsList";
import "./LushProductsList.scss";

class LushProducts extends Component {
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
      <li className="LushProducts">
        <div className="toolTipCategory">
          <li className="tooltip">
            <Link className="navTitle" to="/list">
              제품
            </Link>
            <div className="tooltipWindow">
              {subNav.map((el, id) => (
                <LushProductsList
                  key={id}
                  title={el.title}
                  elements={el.elements}
                />
              ))}
            </div>
          </li>
        </div>
      </li>
    );
  }
}

export default LushProducts;
