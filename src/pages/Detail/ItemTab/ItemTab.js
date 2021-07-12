import { Component } from "react";
import "./ItemTab.scss";

class itemTab extends Component {
  render() {
    return (
      <div className="ItemTab">
        <div className="itemTab">
          <button>상품상세정보</button>
          <button>상품후기</button>
        </div>
      </div>
    );
  }
}

export default itemTab;
