import { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import LushProducts from "./Component/LushProducts/LushProducts";
import LushIntro from "./Component/LushIntro/LushIntro";
import UserToolTip from "./Component/UserToolTip/UserToolTip";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";

const CATEGORY = [
  { link: "/", subTitle: "매장 안내" },
  { link: "/", subTitle: "스파" },
  { link: "/", subTitle: "이벤트" },
];

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="nav">
          <Link className="mainLogo" to="/main">
            WESH
          </Link>
          <ul className="category">
            <LushProducts />
            <LushIntro />
            {CATEGORY.map((category, id) => {
              return (
                <li className="tooltip" key={id}>
                  <Link className="navTitle" to={category.link}>
                    {category.subTitle}
                  </Link>
                </li>
              );
            })}
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
