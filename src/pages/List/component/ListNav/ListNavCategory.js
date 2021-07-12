import React, { Component } from "react";
import "./ListNavCategory.scss";
import ListNavCategoryListData from "./ListNavCategoryListData";
import ListNavCategoryList from "./ListNavCategoryList";

class ListNavCategory extends Component {
  render() {
    return (
      <>
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
      </>
    );
  }
}
export default ListNavCategory;
