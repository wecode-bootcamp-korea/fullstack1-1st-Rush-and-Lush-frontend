import { Component } from "react";
import "./ItemTab2.scss";

class ItemTab2 extends Component {
  render() {
    return (
      <div className="ItemTab2">
        <div className="itemTab">
          <button>상품상세정보</button>
          <button>상품후기</button>
        </div>
      </div>
    );
  }
}

export default ItemTab2;
