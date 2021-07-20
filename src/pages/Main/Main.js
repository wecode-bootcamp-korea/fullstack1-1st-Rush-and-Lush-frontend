import { Component } from "react";
import MainSlide from "./MainSlide/MainSlide";
import MidEventGridImg from "./MidEventGridImg/MidEventGridImg";
import BtmSlide from "./BtmSlide/BtmSlide";

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
