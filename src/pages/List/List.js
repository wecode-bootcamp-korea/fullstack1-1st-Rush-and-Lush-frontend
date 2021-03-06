import { Component } from "react";
import ListProductItem from "./component/ListProductItem";
import ListNavCategory from "./component/ListNav/ListNavCategory";
import ListNavTitle from "./component/ListNav/ListNavTitle";
import ListPageHeader from "./component/ListPageHeader";
import "./List.scss";

class List extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch(`http://172.30.1.9:8000/products${this.props.location.search}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data.products,
        });
      });
  }

  render() {
    return (
      <div className="List">
        <ListPageHeader />
        <div className="listPageContainer">
          <div className="listNav">
            <ListNavTitle />
            <ListNavCategory />
            <div className="listProductContainer">
              {this.state.products.map(listItems => (
                <ListProductItem
                  key={listItems.id}
                  image={listItems.image_url}
                  alt={listItems.name}
                  name={listItems.name}
                  subName={listItems.description}
                  price={listItems.price}
                />
              ))}
            </div>
            <div className="ListPaging">
              <nav>
                <ul className="ListPagination">
                  <li>
                    <span>1</span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default List;
