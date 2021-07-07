import { Component } from "react";
import { Link } from "react-router-dom";
import Product from "./Component/LushProducts/LushProducts";
import LushIntro from "./Component/LushIntro/LushIntro";
import "./Nav.scss";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsPersonFill } from "react-icons/bs";
import { RiCreativeCommonsZeroLine } from "react-icons/ri";

const CATEGORY = ["매장 안내", "스파", "이벤트"];

class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav">
          <div className="logo">
            <Link className="mainLogo" to="/main">
              WESH
            </Link>
          </div>
          <ul className="category">
            <Product />
            <LushIntro />
            {CATEGORY.map(category => (
              <li className="tooltip">
                <Link className="navTitle" to="/">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
          <div className="headerIcon">
            <ul>
              <li className="navIcon">
                <Link className="finder" to="/">
                  <IoMdSearch />
                </Link>
              </li>
              <li className="navIcon2">
                <Link className="shopping" to="/">
                  <HiOutlineShoppingBag />
                </Link>
                <span className="statusZero">
                  <RiCreativeCommonsZeroLine />
                </span>
              </li>
              <li className="navIcon3">
                <Link className="personal" to="/">
                  <BsPersonFill />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
