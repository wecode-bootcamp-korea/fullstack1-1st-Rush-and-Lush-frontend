import { Component } from "react";
import "./Login.scss";
import { FaUserCircle } from "react-icons/fa";
import { MdLock } from "react-icons/md";
class Login extends Component {
  render() {
    return (
      <>
        <div className="content">
          <h2>로그인</h2>
        </div>
        <div className="selectMember">
          <ul className="ulSpace">
            <li>회원</li>
            <li>비회원</li>
          </ul>
        </div>
        <div className="loginWrap">
          <form className="loginForm">
            <span className="loginIconContainer">
              <FaUserCircle size="24" className="userIcon" />
              <input classname="idInput" type="text" placeholder="아이디" />
            </span>
            <div className="inputDistance">
              <span className="pwIconContainer">
                <MdLock size="24" className="lockIcon" />
                <input
                  classname="pwInput"
                  type="password"
                  placeholder="비밀번호"
                />
              </span>
            </div>
            <div className="saveCheckBox">
              <input
                className="inputCheckbox"
                id="idSaveLabel"
                type="checkbox"
              />
              <label for="idSaveLabel">아이디 저장</label>
            </div>
            <div className="loginButtonWrap">
              <button className="loginButton">로그인</button>
            </div>
            <div className="loginMenu">
              <button className="singUp">회원가입</button>
              <button className="findId">아이디 찾기</button>
              <button className="findPw">비밀번호 찾기</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
export default Login;
