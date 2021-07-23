import { Component } from "react";
import "./MemberNav.scss";

class MemberNav extends Component {
  constructor() {
    super();
    this.state = {
      isMemberLogin: false,
    };
  }

  changeId = () => {
    if (this.state.isMemberLogin === false) {
      this.setState({ isMemberLogin: true });
    } else {
      this.setState({ isMemberLogin: false });
    }
  };

  render() {
    const { isMemberLogin } = this.state;
    return (
      <div className="MemberNav">
        <div className="loginTitle">
          <h2>로그인</h2>
        </div>
        <div className="selectMember">
          <ul className="ulSpace">
            <li>
              <button
                type="button"
                className={isMemberLogin ? "nonmemberActive" : "memberActive"}
                onClick={this.changeId}
              >
                회원
              </button>
            </li>
            <li>
              <button
                type="button"
                className={isMemberLogin ? "memberActive" : "nonmemberActive"}
                onClick={this.changeId}
              >
                비회원
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default MemberNav;
