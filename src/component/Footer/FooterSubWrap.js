import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FOOTER_ICONS } from "./data";

class FooterSubWrap extends Component {
  render() {
    return (
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
    );
  }
}

export default FooterSubWrap;
