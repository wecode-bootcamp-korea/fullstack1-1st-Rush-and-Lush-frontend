import { Component } from "react";
import "./List.scss";
import ListProductItem from "./component/ListProductItem";
import ListNavCategory from "./component/ListNav/ListNavCategory";
import ListNavTitle from "./component/ListNav/ListNavTitle";
import ListProductItemData from "./component/ListProductItemData";
import ListPageHeader from "./component/ListPageHeader";

class List extends Component {
  render() {
    return (
      <div className="List">
        <ListPageHeader />
        <div className="listPageContainer">
          <div className="listNav">
            <ListNavTitle />
            <ListNavCategory />
            <div className="listProductContainer">
              {ListProductItemData.map(ListItems => (
                <ListProductItem
                  key={ListItems.id}
                  image={ListItems.img}
                  name={ListItems.name}
                  subName={ListItems.subName}
                  price={ListItems.price}
                  tagButton={ListItems.tagButton}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default List;
