import { Component } from "react";
import "./MemberNav.scss";

class MemberNav extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { changeId } = this.props;
    const { currentId } = this.props;

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
                className={currentId === 1 ? "memberActive" : "nonmemberActive"}
                onClick={() => changeId(1)}
              >
                회원
              </button>
            </li>
            <li>
              <button
                type="button"
                className={currentId === 2 ? "memberActive" : "nonmemberActive"}
                onClick={() => changeId(2)}
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
