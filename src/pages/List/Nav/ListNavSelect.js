import React, { Component } from "react";

class ListNavSelect extends Component {
  render() {
    return (
      <div className="ListNavSelect">
        <form>
          <select>
            <option value="">추천순</option>
            <option value="">낮은가격순</option>
            <option value="">높은가격순</option>
          </select>
        </form>
      </div>
    );
  }
}
export default ListNavSelect;
