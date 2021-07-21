import React, { Component } from "react";
import "./Footer.scss";
import FooterUpperImage from "./FooterUpperImage";
import FooterSubWrap from "./FooterSubWrap";
import FooterSubWrapRight from "./FooterSubWrapRight";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <FooterUpperImage />
        <div className="footerWrap">
          <div className="footer">
            <FooterSubWrap />
            <FooterSubWrapRight />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
