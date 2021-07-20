import { Component } from "react";
import BtmSlide from "./BtmSlide/BtmSlide";
import MainSlide from "./MainSlide/MainSlide";
import MidEventGridImg from "./MidEventGridImg/MidEventGridImg";

import "./Main.scss";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <MainSlide />
        <MidEventGridImg />
        <BtmSlide />
      </div>
    );
  }
}
export default Main;
