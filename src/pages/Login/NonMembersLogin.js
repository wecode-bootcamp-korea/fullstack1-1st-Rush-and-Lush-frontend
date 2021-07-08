import { Component } from "react";
import "./Login.scss";
import "./NonMembersLogin.scss";
import LoginComponet from "./component/LoginInput";
import NonMembers from "./component/NonMembers";

class NonMembersLogin extends Component {
  render() {
    return (
      <div className="NonMembersLogin">
        <NonMembers />
        <div className="loginWrap">
          <form className="loginForm">
            <LoginComponet />
            <div className="loginButtonWrap">
              <button className="loginButton">로그인</button>
            </div>
            <p className="caution">
              주문번호와 비밀번호를 잊으신 경우, 고객센터로 문의하여 주시기
              바랍니다.
            </p>
          </form>
        </div>
      </div>
    );
  }
}
export default NonMembersLogin;
