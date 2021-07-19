import React, { Component } from "react";
import { Link } from "react-router-dom";
import LushProductsList from "./LushProductsList";
import "./LushProductsList.scss";
import { API, CATEGORY_PATH } from "../../../../utils/api";

class LushProducts extends Component {
  constructor() {
    super();
    this.state = {
      subNav: [],
    };
  }

  componentDidMount() {
    fetch(`${API}${CATEGORY_PATH}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ subNav: res.categories });
      });
  }

  render() {
    const { subNav } = this.state;
    const productCategory = [];

    for (let category of subNav) {
      if (category.menuId === 1) {
        productCategory.push(category);
      }
    }

    return (
      <div className="LushProducts">
        <div className="toolTipCategory">
          <div className="tooltip">
            <Link className="navTitle" to="/list">
              제품
            </Link>
            <div className="tooltipWindow">
              {productCategory.map((category, id) => (
                <LushProductsList
                  key={id}
                  catagoryName={category.catagoryName}
                  subCategories={category.subCategories}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LushProducts;
