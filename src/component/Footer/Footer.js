import { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const CATEGORY = [
  "스카우트",
  "회사소개",
  "개인정보처리방침",
  "영상정보관리지침",
  "이용약관",
  "고객센터",
];

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="footer">
          <div className="logo">
            <ul className="footerCategory">
              <Link className="footerMainLogo" to="/main">
                WESH
              </Link>
              {CATEGORY.map(el => (
                <li className="footerLink" key={el.id}>
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
