import { Component } from "react";
import { Link } from "react-router-dom";

const USER_TOOLTIP = [
  { link: "/login", subTitle: "로그인" },
  { link: "/signup", subTitle: "회원가입" },
  { link: "/", subTitle: "스카우트" },
  { link: "/", subTitle: "고객센터" },
];

class UserToolTip extends Component {
  render() {
    return (
      <div className="UserToolTip">
        <div className="userToolTip">
          {USER_TOOLTIP.map((el, id) => {
            return (
              <div key={id} className="userToolTipList">
                <Link className="usersLink" to={el.link}>
                  {el.subTitle}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UserToolTip;
