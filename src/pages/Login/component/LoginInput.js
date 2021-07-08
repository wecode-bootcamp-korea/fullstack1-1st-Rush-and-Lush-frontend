import { Component } from "react";
import "./LoginInput.scss";
import { FaUserCircle } from "react-icons/fa";
import { MdLock } from "react-icons/md";

class LoginInput extends Component {
  render() {
    return (
      <div className="LoginInput">
        <span className="loginIconContainer">
          <FaUserCircle size="24" className="userIcon" />
          <input classname="idInput" type="text" placeholder="아이디" />
        </span>
        <div className="inputDistance">
          <span className="pwIconContainer">
            <MdLock size="24" className="lockIcon" />
            <input classname="pwInput" type="password" placeholder="비밀번호" />
          </span>
        </div>
      </div>
    );
  }
}

export default LoginInput;
