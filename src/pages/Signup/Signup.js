import { Component } from "react";
import "./Signup.scss";

class Signup extends Component {
  render() {
    return (
      <div className="join">
        <div className="signStep">
          <h2>JOIN US</h2>
          <div>
            <span>약관동의</span>
            <span>정보입력</span>
            <span>가입완료</span>
          </div>
        </div>

        <div className="signForm">
          <h3>기본정보</h3>
          <p>표시는 반드시 입력하셔야 하는 항목입니다.</p>
        </div>
        <div className="tableWrap">
          <table>
            <tr>
              <th className="inputWidth">아이디</th>
              <td>
                <div className="inputBox">
                  <input />
                </div>
              </td>
            </tr>
            <tr>
              <th className="inputWidth">비밀번호</th>
              <td>
                <div className="inputBox">
                  <input />
                </div>
              </td>
            </tr>
            <tr>
              <th className="inputWidth">비밀번호 확인</th>
              <td>
                <div className="inputBox">
                  <input />
                </div>
              </td>
            </tr>
            <tr>
              <th className="inputWidth">이름</th>
              <td>
                <div className="inputBox">
                  <input />
                </div>
              </td>
            </tr>
            <tr>
              <th className="inputWidth">닉네임</th>
              <td>
                <div className="inputBox">
                  <input />
                </div>
              </td>
            </tr>
            <tr>
              <th className="inputWidth">이메일</th>
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
                    <label for="idSaveLabel">
                      정보/이벤트 메일 수신에 동의합니다.
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th className="inputPhoneNumber">휴대폰번호</th>
              <td>
                <div className="inputBoxPhoneNumber">
                  <input />
                  <div className="saveCheckBoxWrap">
                    <input
                      className="inputCheckbox"
                      id="idSaveLabel"
                      type="checkbox"
                    />
                    <label for="idSaveLabel">
                      정보/이벤트 메일 수신에 동의합니다.
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th className="inputWidth">주소</th>
              <td>
                <div className="inputBoxAddress">
                  <input readonly="readonly" />
                  <button>우편번호검색</button>
                </div>
              </td>
            </tr>
            <tr>
              <th className="inputWidth"></th>
              <td>
                <div className="inputBoxSubAddress">
                  <input readonly="readonly" />
                </div>
                <div className="inputBoxSubAddress">
                  <input />
                </div>
              </td>
            </tr>
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
