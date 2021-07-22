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
      productCategory: [],
      lushProducts: [],
    };
  }

  componentDidMount() {
    fetch(`${API}${CATEGORY_PATH}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ subNav: res.categories });

        const { subNav } = this.state;
        const { productCategory } = this.state;

        for (let category of subNav) {
          if (category.menuId === 1) {
            productCategory.push(category);
          }
        }

        const lushProducts = productCategory;
        this.setState({ lushProducts });
      });
  }

  render() {
    const { lushProducts } = this.state;

    return (
      <div className="LushProducts">
        <div className="toolTipCategory">
          <div className="tooltip">
            <Link className="navTitle" to="/list">
              제품
            </Link>
            <div className="tooltipWindow">
              {lushProducts.map((category, id) => (
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
