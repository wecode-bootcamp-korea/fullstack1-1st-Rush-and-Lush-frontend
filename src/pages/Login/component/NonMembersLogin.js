import { Component } from "react";
import "./NonMembersLogin.scss";
import { FaUserCircle } from "react-icons/fa";
import { MdLock } from "react-icons/md";

class NonMembersLogin extends Component {
  render() {
    return (
      <div className="NonMembersLogin">
        <form className="loginForm">
          <div className="LoginInput">
            <span className="loginIconContainer">
              <FaUserCircle size="24" className="userIcon" />
              <input className="idInput" type="text" placeholder="주문자명" />
            </span>
            <div className="inputBoxSapce">
              <span className="loginIconContainer">
                <MdLock size="24" className="lockIcon" />
                <input
                  className="pwInput"
                  type="password"
                  placeholder="주문번호"
                />
              </span>
            </div>
          </div>
          <div className="loginButtonWrap">
            <button className="loginButton">로그인</button>
          </div>
          <p className="caution">
            주문번호와 비밀번호를 잊으신 경우, 고객센터로 문의하여 주시기
            바랍니다.
          </p>
        </form>
      </div>
    );
  }
}
export default NonMembersLogin;
