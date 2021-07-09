import { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const FOOTER = {
  COMPANY_INFO: [
    "고객센터",
    "8282-1004",
    "wesh@wesh.com",
    "상담전화 13:00~16:00(평일)",
    "상담톡 10:00~16:00(평일)",
  ],
  CATEGORY: [
    "스카우트",
    "회사소개",
    "개인정보처리방침",
    "영상정보관리지침",
    "이용약관",
    "고객센터",
  ],
};

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="footer">
          <div className="logo">
            <ul className="footerCompanyInfo">
              <Link className="footerMainLogo" to="/main">
                WESH
              </Link>
              {FOOTER.COMPANY_INFO.map((el, index) => (
                <li className="companyInfo" key={index}>
                  {el}
                </li>
              ))}
            </ul>
          </div>
          <div className="category">
            <ul className="footerCategory">
              {FOOTER.CATEGORY.map((el, index) => (
                <li className="footerLink" key={index}>
                  <Link className="footerCategoryLink" to="/">
                    {el}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
