import { Component } from "react";
import "./Login.scss";
import MemberNav from "./component/MemberNav";
import LoginPage from "./component/LoginPage";
import NonMembersLogin from "./component/NonMembersLogin";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isMemberLogin: false,
      currentId: 1,
    };
  }

  // changeId = () => {
  //   const { isMemberLogin } = this.state;
  //   if (isMemberLogin === false) {
  //     this.setState({ isMemberLogin: true, currentId: 2 });
  //   } else {
  //     this.setState({ isMemberLogin: false, currentId: 1 });
  //   }
  // };

  render() {
    const { currentId } = this.state;
    return (
      <div>
        <MemberNav />
        {currentId === 1 && <LoginPage />}
        {currentId === 2 && <NonMembersLogin />}
      </div>
    );
  }
}
export default Login;
