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
  constructor() {
    super();
    this.state = {
      subNav: [],
    };
  }

  componentDidMount() {
    fetch("http://192.168.0.5:8000/category", {
      method: "GET",
    })
      .then(res => res.json())
      .then(res => {
        console.log("서브네브프로덕트", res);
        this.setState({ subNav: res.categories });
      });
  }

  render() {
    return (
      <nav className="Nav">
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
            <IoMdSearch className="icon" />
          </li>
          <li className="navIcon2">
            <HiOutlineShoppingBag className="icon" />
          </li>
          <li className="navIcon3">
            <BsPersonFill className="icon" />
            <UserToolTip />
          </li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
