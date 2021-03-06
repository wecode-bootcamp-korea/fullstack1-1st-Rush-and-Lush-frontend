import { Component } from "react";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import "./DetailNav.scss";

class DetailNav extends Component {
  render() {
    return (
      <div className="DetailNav">
        <nav>
          <Link to="/main">
            <HiHome size="14" />
          </Link>
          <p>
            <IoIosArrowForward />
          </p>
          <select name="subCagory">
            <option value="베쓰">베쓰</option>
            <option value="샤워" selected="selected">
              샤워
            </option>
            <option value="보디">보디</option>
            <option value="페이스">페이스</option>
          </select>
          <p>
            <IoIosArrowForward />
          </p>
          <select name="product">
            <option value="솝">솝</option>
            <option value="샤워젤 젤리">샤워젤 젤리</option>
            <option value="보디컨디셔너">보디컨디셔너</option>
            <option value="샤워 밤">샤워 밤</option>
            <option value="샤워오일">샤워오일</option>
          </select>
        </nav>
      </div>
    );
  }
}

export default DetailNav;
