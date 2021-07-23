import { Component } from "react";
import "./LoginPage.scss";
import { FaUserCircle } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { Link } from "react-router-dom";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      idValue: "",
      pwValue: "",
    };
  }

  goToLogin = event => {
    const { idValue, pwValue } = this.state;
    if (this.state.idValue === "") {
      return alert("아이디를 입력하세요.");
    }
    if (!this.state.idValue.includes("@")) {
      alert("@를 포함한 아이디를 입력하세요.");
    } else if (this.state.pwValue === "") {
      alert("비밀번호를 입력하세요.");
    } else if (this.state.pwValue.length < 8)
      alert("비빌번호는 8자 이상 입력하세요.");

    event.preventDefault();
    fetch("http://10.89.0.248:8000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then(response => response.json())
      .then(result => result)
      .catch(error => error);
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { idValue, pwValue } = this.state;
    return (
      <div className="Login">
        <div className="loginForm">
          <div className="LoginInput">
            <span className="loginIconContainer">
              <FaUserCircle size="24" className="userIcon" />
              <input
                onChange={this.handleInput}
                className={idValue.includes("@") ? "idActive" : "idInput"}
                type="text"
                placeholder="아이디"
                name="idValue"
              />
            </span>
            <div className="inputBoxSapce" />
            <span className="loginIconContainer">
              <MdLock size="24" className="lockIcon" />
              <input
                onChange={this.handleInput}
                className={pwValue.length >= 8 ? "pwActive" : "pwInput"}
                type="password"
                placeholder="비밀번호"
                name="pwValue"
              />
            </span>
            <div className="saveCheckBoxWrap">
              <input
                className="inputCheckbox"
                id="idSaveLabel"
                type="checkbox"
              />
              <label className="idCheckBoxText" htmlFor="idSaveLabel">
                아이디 저장
              </label>
            </div>
            <div className="loginButtonWrap">
              <button
                onClick={this.goToLogin}
                type="button"
                className="loginButton"
              >
                로그인
              </button>
            </div>
          </div>
          <div className="loginMenu">
            <Link to="signup">
              <button type="button" className="singUp">
                <em>회원가입</em>
              </button>
            </Link>
            <div className="divider"></div>
            <button type="button" className="findId">
              <em>아이디 찾기</em>
            </button>
            <div className="divider"></div>
            <button type="button" className="findPw">
              <em>비밀번호 찾기</em>
            </button>
          </div>
          <button
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
          </button>
        </div>
      </div>
    );
  }
}

export default LoginPage;
