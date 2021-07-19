import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LushProductsList.scss";

class LushProductsList extends Component {
  render() {
    const { catagoryName, subCategories } = this.props;

    return (
      <div className="LushProductsList">
        <ul className="productList">
          <li>
            <Link className="title" to="/">
              {catagoryName}
            </Link>
          </li>
          {subCategories.map(category => (
            <li key={category.id}>
              <Link
                className="elements"
                to={`/list?subCategoryId=${category.id}`}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default LushProductsList;
