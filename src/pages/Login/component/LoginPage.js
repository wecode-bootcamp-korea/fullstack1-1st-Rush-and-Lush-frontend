import { Component } from "react";
import "./LoginPage.scss";
import { FaUserCircle } from "react-icons/fa";
import { MdLock } from "react-icons/md";

class LoginPage extends Component {
  render() {
    return (
      <div className="Login">
        {/* {this.state.isMemberLogin ? <p>회원로그인</p> : <p>비회원로그인</p>} */}
        <div className="loginWrap">
          <form className="loginForm">
            <div className="LoginInput">
              <form className="loginForm">
                <span className="loginIconContainer">
                  <FaUserCircle size="24" className="userIcon" />
                  <input classname="idInput" type="text" placeholder="아이디" />
                </span>
                <div className="inputBoxSapce">
                  <span className="loginIconContainer">
                    <MdLock size="24" className="lockIcon" />
                    <input
                      classname="pwInput"
                      type="password"
                      placeholder="비밀번호"
                    />
                  </span>
                </div>
              </form>
            </div>
            <div className="saveCheckBoxWrap">
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
              <button type="button" className="singUp">
                <em>회원가입</em>
              </button>
              <div className="divider"></div>
              <button type="button" className="findId">
                <em>아이디 찾기</em>
              </button>
              <div className="divider"></div>
              <button type="button" className="findPw">
                <em>비밀번호 찾기</em>
              </button>
            </div>
            <a
              href
              onClick={() => alert("여러분 미안하고 고맙습니다..")}
              className="naverLogin"
            >
              <div className="logoWrap">
                <img
                  className="naverLogo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfSR-h7jsc9ADW5NBa-KbcW_Mb4VpR6nj2KzJDeIDC5N8Nruxq2dJUgYXkjI_wuPB9TA&usqp=CAU"
                  alt="웅디자인) 네이버 심벌 원클릭 무료 다운로드(AI, PNG)"
                />
              </div>
              네이버 아이디로 로그인
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
