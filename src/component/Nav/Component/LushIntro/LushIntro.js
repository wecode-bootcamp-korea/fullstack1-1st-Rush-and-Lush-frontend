import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductList from "../LushProducts/LushProductsList";
import "../../Component/LushProducts/LushProductsList.scss";

class LushIntro extends Component {
  constructor() {
    super();
    this.state = {
      subNav: [],
    };
  }

  componentDidMount() {
    fetch("/data/productsList.json")
      .then(res => res.json())
      .then(res => this.setState({ subNav: res.LUSH_INTRO }));
  }

  render() {
    const { subNav } = this.state;
    return (
      <li className="tooltip">
        <Link className="navTitle" to="/">
          러쉬 소개
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

export default LushIntro;
