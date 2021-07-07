import { Component } from "react";
import { Link } from "react-router-dom";
import Product from "./Component/LushProducts/Products";
import LushIntro from "./Component/LushIntro/Lushintro";
import "./Nav.scss";

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
          <div className="headerIcon"></div>
        </div>
      </nav>
    );
  }
}
export default Nav;
