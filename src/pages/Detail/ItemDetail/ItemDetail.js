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
              <p>허니 아이 워시드 더 키즈</p>
              <p>Honey I Washed The Kids</p>
            </div>
          </div>
          <div className="detailDescImgWrap">
            <div className="detailDescImg">
              <div className="firstImg">d</div>
              <div className="firstParagraph">
                <p>미리 써 본 후기</p>
                <p>
                  친구가 여행갈 때 가져온
                  <br />
                  '카마' 솔리드 퍼퓸을 사용해보고
                  <br />
                  넘 좋았습니다.
                  <br />
                  무게도 얼마 안나가는데
                  <br />
                  너무 비싼거 아니냐고 흑흑.
                  <br />
                  by. 민기
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
              <i>!</i> 홈페이지에서 '카마'를 검색하고 더욱 더 다양한 향기를
              즐겨보세요!
            </p>
          </div>
          <div className="thirdImg">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetail;
