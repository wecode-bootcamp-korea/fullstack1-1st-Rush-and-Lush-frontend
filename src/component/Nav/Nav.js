import { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import Modal from "./Modal/Modal";
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
      modalVisible: false,
    };
  }

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  };

  render() {
    return (
      <nav className="Nav">
        <Modal
          toggleModal={this.toggleModal}
          modalVisible={this.state.modalVisible}
        />
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
          <li className="navIcon" onClick={this.toggleModal}>
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
