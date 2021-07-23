import { Component } from "react";
import ListPageHeader from "./Header/ListPageHeader";
import ListNavTitle from "./Nav/ListNavTitle";
import ListNavCategory from "./Nav/ListNavCategory";
import ListProductItem from "./Product/ListProductItem";
import ListPaging from "./Page/ListPaging";
import "./List.scss";

class List extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      headerTxt: {
        title: "솝",
        desc: " 향기를 머금은 거품으로 구석구석 꼼꼼하게",
      },
    };
  }

  componentDidMount() {
    console.log(this.props.location.search);
    fetch(`http://10.89.1.179:8000/products`)
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
        <ListPageHeader
          title={this.state.headerTxt.title}
          desc={this.state.headerTxt.desc}
        />
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
                  tags={listItems.tags}
                />
              ))}
            </div>
            <ListPaging />
          </div>
        </div>
      </div>
    );
  }
}
export default List;
