import { Component } from "react";
import { Link } from "react-router-dom";

const USER_TOOLTIP = [
  { link: "/login", sub_title: "로그인" },
  { link: "/signup", sub_title: "회원가입" },
  { link: "/", sub_title: "스카우트" },
  { link: "/", sub_title: "고객센터" },
];

class UserToolTip extends Component {
  render() {
    return (
      <div className="UserToolTip">
        <div className="userToolTip">
          {USER_TOOLTIP.map(el => {
            return (
              <div key={el.id} className="userToolTipList">
                <Link className="usersLink" to={el.link}>
                  {el.sub_title}
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
