import { Component } from "react";
import "./ItemDetail.scss";

class ItemDetail extends Component {
  render() {
    return (
      <div className="ItemDetail">
        <div className="detailContainer">
          <div className="detailDescWrap">
            <div className="detailDesc">
              <p>솝</p>
              <p>허니 제스트</p>
              <p>Honey I Washed The Kids</p>
            </div>
          </div>
          <div className="detailDescImgWrap">
            <div className="detailDescImg">
              <div className="firstImg">
                <img
                  src="https://images.unsplash.com/photo-1555035900-54c17f3bc1eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80"
                  alt="디테일이미지_1"
                />
              </div>
              <div className="firstParagraph">
                <p>미리 써 본 후기</p>
                <p>
                  달콤한 향을 곁들인
                  <br />
                  '허니 제스트' 솝을 사용해보고
                  <br />
                  이제껏 써봤던 비누들과 차원이 다른
                  <br />
                  경험을 느껴보세요.
                  <br />
                  by. WESH
                </p>
              </div>
            </div>
          </div>
          <div className="secondParagraph">
            <p>
              섹시한 분위기에 우디향기를 살짝!
              <br />
              자연에서 얻은 신선한 원재료와
              <br />
              질 좋은 에센셜 오일이 듬뿍 담긴 솝(비누)입니다.
              <br />
              러쉬만의 특별한 향기로 당신의 매력을 어필해보세요.
              <br />
              오렌지와 파슬리는 건강한 피부에 도움을 주고 이색적인 잔 향기를
              납깁니다.
            </p>
            <p>
              <strong>TIP</strong>
              <i>!</i> 홈페이지에서 '허니 제스트'를 검색하고 더욱 더 다양한
              향기를 즐겨보세요!
            </p>
          </div>
          <button>SHOP NOW</button>
          <div className="thirdImg">
            <img
              src="https://images.unsplash.com/photo-1626080308407-16645977b12f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
              alt="디테일이미지_2"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetail;
