import { Component } from "react";
import "./List.scss";
import ListProductItem from "./component/ListProductItem";
import ListNavCategory from "./component/ListNavCategory";
import ListNavTitle from "./component/ListNavTitle";
import ListItemData from "./ListItemData";
import ListPageHeader from "./component/ListPageHeader";

class List extends Component {
  render() {
    return (
      <>
        <ListPageHeader />
        <div className="listPageContainer">
          <div className="listNav">
            <ListNavTitle />
            <ListNavCategory />
            <div className="listProductContainer">
              {ListItemData.map(ListItems => (
                <ListProductItem
                  key={ListItems.id}
                  image={ListItems.img}
                  name={ListItems.name}
                  subName={ListItems.subName}
                  price={ListItems.price}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default List;
