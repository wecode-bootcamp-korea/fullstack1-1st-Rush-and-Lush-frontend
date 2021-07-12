import { Component } from "react";
import DetailNav from "./DetailNav/DetailNav";
import Banner from "./Banner/Banner";
import Info from "./Info/Info";
import ItemTab from "./ItemTab/ItemTab";
import ItemDetail from "./ItemDetail/ItemDetail";
import ItemTab2 from "./ItemTab2/ItemTab2";
import "./Detail.scss";

class Detail extends Component {
  render() {
    return (
      <div className="Detail">
        <div className="itemInfo">
          <DetailNav />
          <div className="detailInfoWrap">
            <Banner />
            <Info />
          </div>
        </div>
        <ItemTab />
        <ItemDetail />
        <ItemTab2 />
      </div>
    );
  }
}
export default Detail;
