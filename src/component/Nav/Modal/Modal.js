import { Component } from "react";
import { IoSearch } from "react-icons/io5";
import "./Modal.scss";

class Modal extends Component {
  render() {
    const { modalVisible, toggleModal } = this.props;

    return (
      <div className={modalVisible ? "Modal" : "hideModal"}>
        <h1 className="modalText">지금 많이 찾는 제품</h1>
        <form className="modalTextForm">
          <input
            className="modalTextInput"
            type="text"
            placeholder="#위코드풀스택  #1기화이팅"
          />
          <IoSearch className="icon" />
        </form>
        <div className="loginBg" onClick={toggleModal} />
      </div>
    );
  }
}

export default Modal;
