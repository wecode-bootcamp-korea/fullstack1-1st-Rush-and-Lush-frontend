import { Component } from "react";
import "./Login.scss";
import MemberNav from "./component/MemberNav";
import LoginPage from "./component/LoginPage";
import NonMembersLogin from "./component/NonMembersLogin";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
    };
  }

  changeId = id => {
    this.setState({ currentId: id });
  };

  render() {
    const { currentId } = this.state;
    return (
      <div>
        <MemberNav changeId={this.changeId} currentId={this.state.currentId} />
        {currentId === 1 && <LoginPage />}
        {currentId === 2 && <NonMembersLogin />}
      </div>
    );
  }
}
export default Login;
