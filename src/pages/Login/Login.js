import { Component } from "react";
import "./Login.scss";
import LoginPage from "./component/LoginPage";
import NonMembersLogin from "./NonMembersLogin";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
      suho: true,
      suke: false,
    };
  }

  changeId1 = id => {
    this.setState({ currentId: id });
    if (this.state.suho !== this.state.suke) {
      this.setState({ suho: true, suke: false });
    } else {
      this.setState({ suho: false, suke: true });
    }
  };

  changeId2 = id => {
    this.setState({ currentId: id });
    if (this.state.suho === this.state.suke) {
      this.setState({ suho: true, suke: false });
    } else {
      this.setState({ suho: false, suke: true });
    }
  };

  render() {
    const { currentId, suho, suke } = this.state;
    return (
      <div>
        <div className="MembersTab">
          <div className="loginTitle">
            <h2>로그인</h2>
          </div>
          <div className="selectMember">
            <ul className="ulSpace">
              <li>
                <button
                  type="button"
                  className={suho ? "memberActive" : "nonmemberActive"}
                  onClick={() => this.changeId1(1)}
                >
                  회원
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className={suke ? "memberActive" : "nonmemberActive"}
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
