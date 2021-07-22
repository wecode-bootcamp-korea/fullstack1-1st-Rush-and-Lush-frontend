import React, { Component } from "react";
import ListNavCategoryList from "./ListNavCategoryList";
import ListNavCategoryListData from "./ListNavCategoryListData";
import "./ListNavCategory.scss";

class ListNavCategory extends Component {
  render() {
    return (
      <div className="listNavCategoryBox">
        <ul className="listNavCategory">
          {ListNavCategoryListData.map(Category => (
            <ListNavCategoryList
              key={Category.id}
              name={Category.name}
              count={Category.count}
            />
          ))}
        </ul>
      </div>
    );
  }
}
export default ListNavCategory;
