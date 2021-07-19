import { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";
import { FaTumblrSquare } from "react-icons/fa";

const CATEGORY = [
  "스카우트",
  "회사소개",
  "개인정보처리방침",
  "영상정보관리지침",
  "이용약관",
  "고객센터",
];

const FOOTER_ICONS = [
  <FaFacebookSquare />,
  <FaInstagramSquare />,
  <FaYoutubeSquare />,
  <FaPinterestSquare />,
  <FaTumblrSquare />,
];

const KEY_CODE = 13;

class Footer extends Component {
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
    if ((keyEvent.charCode || keyEvent.keyCode) === KEY_CODE) {
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
    const USER_VALIDATION = {
      isValidatedEmail: () =>
        inputEmail.includes("@") && inputEmail.length >= 8,
    };

    return (
      <footer className="Footer">
        <div className="iconWesh">
          <img
            src="http://img.lush.co.kr/images/core/footer-icons.svg"
            alt="러쉬 하단 이미지"
          ></img>
        </div>
        <div className="footerWrap">
          <div className="footer">
            <div className="subWrap">
              <div className="lushLogo">
                <Link className="footerMainLogo" to="/main">
                  WESH
                </Link>
              </div>
              <dl className="companyInfo1">
                <dt className="companyInfoContent">
                  고객 센터 <span>8282-1004</span>
                </dt>
                <dd className="lushEmail">wesh@wesh.com</dd>
                <dt className="companyInfoContent"></dt>
                상담전화 13:00~16:00 (평일) <br />
                상담톡 10:00~16:00 (평일)
              </dl>
              <dl className="companyInfo2">
                <dt className="companyInfoContent">
                  기업 선물 <span>080-1234-5678</span>
                </dt>
                <dd className="lushEmail">wesh@order.com</dd>
              </dl>
              <div className="iconWrap">
                {FOOTER_ICONS.map((icons, index) => (
                  <span className="icon" key={index}>
                    {icons}
                  </span>
                ))}
              </div>
            </div>
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
                    className={
                      USER_VALIDATION.isValidatedEmail()
                        ? "emailBtn active"
                        : "emailBtn "
                    }
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
                <address>
                  지현광역시 민기구 수호동 진근 아파트 1004동 2호
                </address>
                사업자등록번호 1004-8282 사업자정보확인 | 통신판매업 신고번호
                1234 | 개인정보책임자: 페퍼로니 카레 철수 식빵
                <div className="copyright">
                  COPYRIGHT ⓒ WE ARE WESH WE ARE WORLD WIDE BEST TEAM
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
