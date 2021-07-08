import { Component } from "react";
import "./NonMembers.scss";
import { Link } from "react-router-dom";
import Login from "../Login";
import NonMembersLogin from "../NonMembersLogin";

class NonMembers extends Component {
  render() {
    return (
      <div className="NonMembers">
        <div className="title">
          <h2>로그인</h2>
        </div>
        <div className="selectMember">
          <ul className="ulSpace">
            <li>
              <a href="/" class="selectedMember">
                회원
              </a>
            </li>
            <li>
              <a href="/" class="selectedNonMember">
                비회원
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NonMembers;
