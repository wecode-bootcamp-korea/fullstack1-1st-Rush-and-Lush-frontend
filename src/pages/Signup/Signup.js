import { Component } from "react";
import "./Signup.scss";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      idValue: "",
      pwValue: "",
      pwCheckValue: "",
      idBorderColorState: false,
      pwBorderColorState: false,
      pwCheckBorderColorState: false,
    };
  }

  handleIdInput = event => {
    console.log("아이디 값", event.target.value);
    this.setState({ idValue: event.target.value });
  };

  handlePwInput = event => {
    console.log("비번 값", event.target.value);
    this.setState({ pwValue: event.target.value });
  };

  handlePwCheckInput = event => {
    console.log("비번체크 값", event.target.value);
    this.setState({ pwCheckValue: event.target.value });
  };

  idBorderChangeColor = () => {
    this.state.idValue.includes("@") && this.state.idValue.includes(".com")
      ? this.setState({ idBorderColorState: true })
      : this.setState({ idBorderColorState: false });
  };

  pwBorderChangeColor = () => {
    this.state.pwValue.length >= 8
      ? this.setState({ pwBorderColorState: true })
      : this.setState({ pwBorderColorState: false });
  };

  pwCheckBorderChangeColor = () => {
    this.state.pwValue === this.state.pwCheckValue
      ? this.setState({ pwCheckBorderColorState: true })
      : this.setState({ pwCheckBorderColorState: false });
  };

  render() {
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
                      className={
                        this.state.idBorderColorState
                          ? "idActiveBox"
                          : "idInputBox"
                      }
                      type="text"
                      onChange={this.handleIdInput}
                      onKeyUp={this.idBorderChangeColor}
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
                      className={
                        this.state.pwBorderColorState
                          ? "pwActiveBox"
                          : "pwInputBox"
                      }
                      type="password"
                      onChange={this.handlePwInput}
                      onKeyUp={this.pwBorderChangeColor}
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
                  <div className="inputBox">
                    <input
                      className={
                        this.state.pwCheckBorderColorState
                          ? "pwCheckActiveBox"
                          : "pwInputBox"
                      }
                      type="password"
                      onChange={this.handlePwCheckInput}
                      onKeyUp={this.pwCheckBorderChangeColor}
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
                      <option>여러분</option>
                      <option>미안하고</option>
                      <option>고맙습니다.</option>
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
            <button>회원가입</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
