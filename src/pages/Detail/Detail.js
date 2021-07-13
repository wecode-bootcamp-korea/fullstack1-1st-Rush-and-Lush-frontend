import { Component } from "react";
import DetailNav from "./DetailNav/DetailNav";
import Banner from "./Banner/Banner";
import Info from "./Info/Info";
import ItemTab from "./ItemTab/ItemTab";
import ItemDetail from "./ItemDetail/ItemDetail";
import ItemTab2 from "./ItemTab2/ItemTab2";
import Review from "./Review/Review";
import "./Detail.scss";

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/itemInfoData.json", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data.itemInfoData,
        });
      });
  }

  render() {
    return (
      <div className="Detail">
        <div className="itemInfo">
          <DetailNav />
          <div className="detailInfoWrap">
            <Banner />
            {this.state.products.map((product, index) => {
              return (
                <Info
                  key={index}
                  img={product.img}
                  name={product.name}
                  price={product.price}
                  weight={product.weight}
                  description={product.description}
                />
              );
            })}
          </div>
        </div>
        <ItemTab />
        <ItemDetail />
        <ItemTab2 />
        <Review />
      </div>
    );
  }
}
export default Detail;
