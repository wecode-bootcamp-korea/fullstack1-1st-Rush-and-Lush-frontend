import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LushProductsList.scss";

class LushProductsList extends Component {
  render() {
    // const { title, elements } = this.props;
    const { catagoryName, subCategories } = this.props;
    console.log("카테고리 이름", catagoryName);

    return (
      <div className="LushProductsList">
        <ul className="productList">
          <li>
            <Link className="title" to="/">
              {catagoryName}
            </Link>
          </li>
          {subCategories &&
            subCategories.map(el => (
              <li key={el.id}>
                <Link className="elements" to="/">
                  {el.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default LushProductsList;
