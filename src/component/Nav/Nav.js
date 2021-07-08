import { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import LushProducts from "./Component/LushProducts/LushProducts";
import LushIntro from "./Component/LushIntro/LushIntro";
import UserToolTip from "./Component/UserToolTip/UserToolTip";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { RiCreativeCommonsZeroLine } from "react-icons/ri";

const CATEGORY = ["매장 안내", "스파", "이벤트"];

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="nav">
          <div className="logo">
            <Link className="mainLogo" to="/main">
              WESH
            </Link>
          </div>
          <ul className="category">
            <LushProducts />
            <LushIntro />
            {CATEGORY.map((category, index) => (
              <li className="tooltip" key={index}>
                <Link className="navTitle" to="/">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="headerIcon">
            <li className="navIcon">
              <Link className="navLink" to="/">
                <IoMdSearch className="icon" />
              </Link>
            </li>
            <li className="navIcon2">
              <Link className="navLink" to="/">
                <HiOutlineShoppingBag className="icon" />
              </Link>
              <span className="statusZero">
                <RiCreativeCommonsZeroLine className="icon" />
              </span>
            </li>
            <li className="navIcon3">
              <Link className="navLink" to="/">
                <BsPersonFill className="icon" />
              </Link>
              <UserToolTip />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Nav;
