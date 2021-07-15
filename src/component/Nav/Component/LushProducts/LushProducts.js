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

  // componentDidMount() {
  //   fetch("/data/productsList.json")
  //     .then(res => res.json())
  //     .then(res => this.setState({ subNav: res.PRODUCTS_DATA }));
  // }

  componentDidMount() {
    fetch("http://192.168.0.5:8000/category?menu_id=1", {
      method: "GET",
    })
      .then(res => res.json())
      .then(res => {
        console.log("서브네브인트로", res);
        this.setState(console.log("레스", res));
      });
  }

  render() {
    const { subNav } = this.state;

    return (
      <div className="LushProducts">
        <div className="toolTipCategory">
          <li className="tooltip">
            <Link className="navTitle" to="/list">
              제품
            </Link>
            <div className="tooltipWindow">
              {subNav.map((el, id) => {
                console.log("카테고리네임", el.catagoryName);
                return (
                  <LushProductsList
                    key={id}
                    catagoryName={el.catagoryName}
                    subCategories={el.subCategories}
                  />
                );
              })}
              {subNav.map((el, id) => {
                return (
                  <LushProductsList
                    key={id}
                    categoryName={el.catagoryName}
                    subCategories={el.subCategories}
                  />
                );
              })}
            </div>
          </li>
        </div>
      </div>
    );
  }
}

export default LushProducts;
