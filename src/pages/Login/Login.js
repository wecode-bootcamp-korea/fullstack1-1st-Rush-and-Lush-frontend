import { Component } from "react";
import "./Login.scss";
import LoginComponet from "./component/LoginInput";
import NonMembers from "./component/NonMembers";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <div className="Login">
        <NonMembers text="확인" />
        <div className="loginWrap">
          <form className="loginForm">
            <LoginComponet />
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
              onClick={() => alert("여러분 미안하고 고맙습니다..")}
              className="naverLogin"
              href=""
            >
              <i>
                <img
                  className="naverLogo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtfSR-h7jsc9ADW5NBa-KbcW_Mb4VpR6nj2KzJDeIDC5N8Nruxq2dJUgYXkjI_wuPB9TA&usqp=CAU"
                  alt="웅디자인) 네이버 심벌 원클릭 무료 다운로드(AI, PNG)"
                />
              </i>
              네이버 아이디로 로그인
            </a>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
