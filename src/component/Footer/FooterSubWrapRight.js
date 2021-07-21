import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CATEGORY } from "./data";

const ENTER_KEY_CODE = 13;

class FooterSubWrapRight extends Component {
  constructor() {
    super();
    this.state = {
      inputEmail: "",
      isFooterModalOn: false,
    };
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onKeyDown = keyEvent => {
    if ((keyEvent.charCode || keyEvent.keyCode) === ENTER_KEY_CODE) {
      keyEvent.preventDefault();
    }
  };

  subScribeByEmail = event => {
    const inputUserEmail = event.target.inputEmail.value;
    if (!inputUserEmail) {
      alert("이메일이 없네요? 입력 부탁드립니다 ✨");
      event.target.reset();
    } else if (inputUserEmail) {
      alert("현재 지원되지 않는 기능입니다. 조금만 기다려주세요! ⏰");
    }
  };

  render() {
    const { inputEmail } = this.state;
    const { handleInput, onKeyDown, subScribeByEmail } = this;

    const isValidatedEmail = () => {
      return inputEmail.includes("@") && inputEmail.length >= 8;
    };

    return (
      <div className="subWrapRight">
        <div className="footerCategory">
          <ul>
            {CATEGORY.map((category, index) => (
              <li className="footerLink" key={index}>
                <Link className="footerCategoryLink" to="/">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="newLetter">
          <form
            className="footerInput"
            onKeyDown={onKeyDown}
            onSubmit={subScribeByEmail}
          >
            <input
              type="email"
              id="inputEmail"
              name="inputEmail"
              className="emailInput"
              placeholder="이메일 주소를 입력해 주세요."
              onChange={handleInput}
            />
            <button
              type="submit"
              className={isValidatedEmail() ? "emailBtn active" : "emailBtn "}
            >
              구독하기
            </button>
          </form>
        </div>
        <p className="lushTextForCustom">
          매주 금요일 오후, 구독자님들을 위한 제품과 브랜드 이야기를
          전해드립니다. <br />
          WESH 에서는 여러분을 항시 대기 중! <span>미리보기</span>
        </p>
        <div className="companyAddressInfo">
          <address>지현광역시 민기구 수호동 진근 아파트 1004동 2호</address>
          사업자등록번호 1004-8282 사업자정보확인 | 통신판매업 신고번호 1234 |
          개인정보책임자: 페퍼로니 카레 철수 식빵
          <div className="copyright">
            COPYRIGHT ⓒ WE ARE WESH WE ARE WORLD WIDE BEST TEAM
          </div>
        </div>
      </div>
    );
  }
}

export default FooterSubWrapRight;
