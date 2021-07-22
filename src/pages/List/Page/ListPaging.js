import React, { Component } from "react";

class ListPaging extends Component {
  render() {
    return (
      <div className="ListPaging">
        <nav>
          <ul className="ListPagination">
            <li>
              <span>1</span>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default ListPaging;
