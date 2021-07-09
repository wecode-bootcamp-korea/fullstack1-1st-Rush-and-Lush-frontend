import { Component } from "react";
import BtmSlide from "./BtmSlide/BtmSlide";
import MainSlide from "./MainSlide/MainSlide";
import GridImg from "./GridImg/GridImg";

import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <MainSlide />
        <GridImg />
        <BtmSlide />
      </div>
    );
  }
}
export default Main;
