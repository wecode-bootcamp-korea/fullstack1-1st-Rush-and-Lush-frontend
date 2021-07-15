import { Component } from "react";
import { IoSearch } from "react-icons/io5";
import "./Modal.scss";

class Modal extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     modalVisible: !this.props.modalVisible,
  //   };
  // }

  render() {
    return (
      <div className={this.props.modalVisible ? "hideModal" : "Modal"}>
        <h1>지금 많이 찾는 제품</h1>
        <form>
          <input type="text" placeholder="#위코드풀스택  #1기화이팅" />
          <div>
            <IoSearch color="#fff" size="30" />
          </div>
        </form>
        <div className="loginBg" onClick={this.props.showModal}></div>
      </div>
    );
  }
}

export default Modal;
