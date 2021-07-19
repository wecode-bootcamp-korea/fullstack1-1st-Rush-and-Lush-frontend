import { Component } from "react";
import "./Signup.scss";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      idValue: "",
      pwValue: "",
      pwCheckValue: "",
    };
  }
  getIdValue = event => {
    console.log(event.target.value);
    this.setState({
      idValue: event.target.value,
    });
  };

  getPwValue = event => {
    console.log(event.target.value);
    this.setState({
      pwValue: event.target.value,
    });
  };

  getPwCheckValue = event => {
    console.log(event.target.value);
    this.setState({
      pwCheckValue: event.target.value,
    });
  };

  goToSignUp = event => {
    const { idValue, pwValue } = this.state;
    event.preventDefault();
    fetch("http://10.89.1.164:8000/users/signup", {
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
      .then(result => {
        if (result.message === "USER_CREATED_SUCCESSFULLY") {
          alert("회원가입 축하드립니다.");
          this.props.history.push("/main");
        }
      })
      .then(result => console.log("회원 가입 response: ", result))
      .catch(error => console.log(error));
  };

  render() {
    const { idValue, pwValue, pwCheckValue } = this.state;

    return (
      <div className="join">
        <div className="signStep">
          <h2>JOIN US</h2>
          <div className="step">
            <div className="textColorMargin">약관동의</div>
            <div className="angleBracket">&gt;</div>
            <div className="textMargin">정보입력</div>
            <div className="angleBracket">&gt;</div>
            <div className="textColorMargin">가입완료</div>
          </div>
        </div>
        <div className="signForm">
          <h3>기본정보</h3>
          <div className="requiredMarksWrap">
            <div className="requiredMarks" />
            표시는 반드시 입력하셔야 하는 항목입니다.
          </div>
        </div>
        <div className="singupFormWrap">
          <table>
            <tbody>
              <tr>
                <th className="inputWidth">
                  <div className="requiredMarks" />
                  아이디
                </th>
                <td>
                  <div className="inputBox">
                    <input
                      id="idValue"
                      onChange={this.getIdValue}
                      type="text"
                      className={
                        idValue.includes("@") ? "idActiveBox" : "idInputBox"
                      }
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th className="inputWidth">
                  <div className="requiredMarks" />
                  비밀번호
                </th>
                <td>
                  <div className="inputBox">
                    <input
                      id="pwValue"
                      onChange={this.getPwValue}
                      type="password"
                      className={
                        pwValue.length >= 8 ? "pwActiveBox" : "pwInputBox"
                      }
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th className="inputWidth">
                  <div className="requiredMarks" />
                  비밀번호 확인
                </th>
                <td>
                  {/* this.state.pwValue === this.state.pwCheckValue */}
                  <div className="inputBox">
                    <input
                      id="pwCheckValue"
                      onChange={this.getPwCheckValue}
                      type="password"
                      className={
                        pwCheckValue.length >= 8
                          ? "pwCheckActiveBox"
                          : "pwCheckInputBox"
                      }
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th className="inputWidth">
                  <div className="requiredMarks" />
                  이름
                </th>
                <td>
                  <div className="inputBox">
                    <input className="nameInputBox" />
                  </div>
                </td>
              </tr>
              <tr>
                <th className="noneRequiredMarks">닉네임</th>
                <td>
                  <div className="inputBox">
                    <input className="nickNameInputBox" />
                  </div>
                </td>
              </tr>
              <tr>
                <th className="inputWidth">
                  <div className="requiredMarks" />
                  이메일
                </th>
                <td>
                  <div className="inputBoxEmail">
                    <input />
                    <select>
                      <option>naver.com</option>
                      <option>gmail.com</option>
                      <option>hanmail.net</option>
                    </select>
                    <div className="saveCheckBoxWrap">
                      <input
                        className="inputCheckbox"
                        id="idSaveLabel"
                        type="checkbox"
                      />
                      <label htmlFor="idSaveLabel">
                        정보/이벤트 메일 수신에 동의합니다.
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="inputPhoneNumber">
                  <div className="requiredMarks" />
                  휴대폰번호
                </th>
                <td>
                  <div className="inputBoxPhoneNumber">
                    <input />
                    <div className="saveCheckBoxWrap">
                      <input
                        className="inputCheckbox"
                        id="idSaveLabel"
                        type="checkbox"
                      />
                      <label htmlFor="idSaveLabel">
                        정보/이벤트 메일 수신에 동의합니다.
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="noneRequiredMarks">주소</th>
                <td>
                  <div className="inputBoxAddress">
                    <input readOnly="readOnly" />
                    <button>우편번호검색</button>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="inputWidth"></th>
                <td>
                  <div className="inputBoxSubAddress">
                    <input readOnly="readOnly" />
                  </div>
                  <div className="inputBoxSubAddress">
                    <input />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="bottomBorderLine"></div>
          <div className="signButton">
            <button onClick={this.goToSignUp}>회원가입</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
