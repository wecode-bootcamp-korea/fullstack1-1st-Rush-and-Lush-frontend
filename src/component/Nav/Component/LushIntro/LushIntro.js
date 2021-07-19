import React, { Component } from "react";
import { Link } from "react-router-dom";
import LushProductsList from "../LushProducts/LushProductsList";
import "../../Component/LushProducts/LushProductsList.scss";
import { API, CATEGORY_PATH } from "../../../../utils/api";

class LushIntro extends Component {
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
    const introCategory = [];

    for (let category of subNav) {
      if (category.menuId === 2) {
        introCategory.push(category);
      }
    }

    return (
      <div className="LushIntro">
        <div className="toolTipCategory">
          <div className="tooltip">
            <Link className="navTitle" to="/">
              러쉬 소개
            </Link>
            <div className="tooltipWindow">
              {introCategory.map((category, id) => (
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

export default LushIntro;
