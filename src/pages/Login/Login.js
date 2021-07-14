import { Component } from "react";
import "./Login.scss";
import LoginPage from "./component/LoginPage";
import NonMembersLogin from "./NonMembersLogin";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
      memberLogin: true,
      noneMemberLogin: false,
    };
  }

  changeId1 = id => {
    this.setState({ currentId: id });
    if (this.state.memberLogin !== this.state.noneMemberLogin) {
      this.setState({ memberLogin: true, noneMemberLogin: false });
    } else {
      this.setState({ memberLogin: false, noneMemberLogin: true });
    }
  };

  changeId2 = id => {
    this.setState({ currentId: id });
    if (this.state.memberLogin === this.state.noneMemberLogin) {
      this.setState({ memberLogin: true, noneMemberLogin: false });
    } else {
      this.setState({ memberLogin: false, noneMemberLogin: true });
    }
  };

  render() {
    const { currentId, memberLogin, noneMemberLogin } = this.state;
    return (
      <div className="login">
        <div className="MembersTab">
          <div className="loginTitle">
            <h2>로그인</h2>
          </div>
          <div className="selectMember">
            <ul className="ulSpace">
              <li>
                <button
                  type="button"
                  className={memberLogin ? "memberActive" : "nonmemberActive"}
                  onClick={() => this.changeId1(1)}
                >
                  회원
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={
                    noneMemberLogin ? "memberActive" : "nonmemberActive"
                  }
                  onClick={() => this.changeId2(2)}
                >
                  비회원
                </button>
              </li>
            </ul>
          </div>
          <form className="loginForm">
            {currentId === 1 && <LoginPage />}
            {currentId === 2 && <NonMembersLogin />}
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
