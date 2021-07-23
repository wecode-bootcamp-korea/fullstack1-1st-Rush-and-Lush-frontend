import { Component } from "react";
import "./Login.scss";
import MemberNav from "./component/MemberNav";
import LoginPage from "./component/LoginPage";
import NonMembersLogin from "./component/NonMembersLogin";

class Login extends Component {
  render() {
    return (
      <div>
        <MemberNav />
        <LoginPage />
        <NonMembersLogin />
      </div>
    );
  }
}
export default Login;
