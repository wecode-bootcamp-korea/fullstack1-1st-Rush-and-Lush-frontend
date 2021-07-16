import React, { Component } from "react";
import { Link } from "react-router-dom";
import LushProductsList from "../LushProducts/LushProductsList";
import "../../Component/LushProducts/LushProductsList.scss";

// class LushIntro extends Component {
//   constructor() {
//     super();
//     this.state = {
//       subNav: [],
//     };
//   }

//   // componentDidMount() {
//   //   fetch("/data/productsList.json")
//   //     .then(res => res.json())
//   //     .then(res => this.setState({ subNav: res.LUSH_INTRO }));
//   // }

//   componentDidMount() {
//     fetch("http://192.168.0.5:8000/category?menu_id=2", {
//       method: "GET",
//     })
//       .then(res => res.json())
//       .then(res => {
//         console.log("서브네브인트로", res);
//         this.setState({ subNav: res.categories });
//       });
//   }

//   render() {
//     const { subNav } = this.state;

//     return (
//       <div className="LushIntro">
//         <div className="toolTipCategory">
//           <li className="tooltip">
//             <Link className="navTitle" to="/">
//               러쉬 소개
//             </Link>
//             <div className="tooltipWindow">
//               {subNav.map((el, id) => {
//                 console.log("카테고리네임", el.catagoryName);
//                 return (
//                   <LushProductsList
//                     key={id}
//                     catagoryName={el.catagoryName}
//                     subCategories={el.subCategories}
//                   />
//                 );
//               })}
//             </div>
//           </li>
//         </div>
//       </div>
//     );
//   }
// }
class LushIntro extends Component {
  constructor() {
    super();
    this.state = {
      subNav: [],
    };
  }

  componentDidMount() {
    fetch("/data/productsList.json")
      .then(res => res.json())
      .then(res => this.setState({ subNav: res.LUSH_INTRO }));
  }

  render() {
    const { subNav } = this.state;

    return (
      <div className="LushIntro">
        <div className="toolTipCategory">
          <li className="tooltip">
            <Link className="navTitle" to="/">
              러쉬 소개
            </Link>
            <div className="tooltipWindow">
              {subNav.map((el, id) => (
                <LushProductsList
                  key={id}
                  title={el.title}
                  elements={el.elements}
                />
              ))}
            </div>
          </li>
        </div>
      </div>
    );
  }
}

export default LushIntro;
