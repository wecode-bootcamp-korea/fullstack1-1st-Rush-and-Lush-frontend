import { Component } from "react";
import DetailNav from "./DetailNav/DetailNav";
import Banner from "./Banner/Banner";
// import Info from "./Info/Info";
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
    fetch("itemInfoData.json")
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
            {/* {this.state.products.map(
              ({ img, name, price, weight, description }, index) => {
                return (
                  <Info
                    key={index}
                    img={img}
                    name={name}
                    price={price}
                    weight={weight}
                    description={description}
                  />
                );
              }
            )} */}
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
