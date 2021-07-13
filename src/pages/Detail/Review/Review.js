import { Component } from "react";
import { BsImages } from "react-icons/bs";
import "./Review.scss";

class Review extends Component {
  render() {
    return (
      <div className="Review">
        <div className="reviewContainer">
          <div className="reviewTitleBox">
            <div className="reviewTitle">
              <h2>Product Reviews</h2>
              <p>★★★★★</p>
            </div>
            <p className="reviewTitleDesc">
              나만의 꿀팁이나 제품을 사용하는 생생한 모습을 보여주세요!
            </p>
          </div>
          <div className="reviewEvaluateBox">
            <div className="reviewEvaluate">
              <div className="ratingContainer">
                <div className="ratingTitle">평가</div>
                <form className="starRatingBox">
                  <div class="rating">
                    <input type="radio" id="5stars" name="rating" value="5" />
                    <label for="5stars" class="star">
                      ★
                    </label>
                    <input type="radio" id="4stars" name="rating" value="4" />
                    <label for="4stars" class="star">
                      ★
                    </label>
                    <input type="radio" id="3stars" name="rating" value="3" />
                    <label for="3stars" class="star">
                      ★
                    </label>
                    <input type="radio" id="2stars" name="rating" value="2" />
                    <label for="2stars" class="star">
                      ★
                    </label>
                    <input type="radio" id="1star" name="rating" value="1" />
                    <label for="1star" class="star">
                      ★
                    </label>
                  </div>
                </form>
              </div>
              <div className="textAreaBox">
                <textarea
                  className="textArea"
                  name="review"
                  cols="50"
                  rows="10"
                  placeholder="여러분의 소중한 리뷰를 작성해주세요!"
                ></textarea>
              </div>
              <div className="attachBox">
                <div className="upLoad">
                  <label for="upLoadFile">
                    <BsImages size="30" />
                  </label>
                  <input type="file" id="upLoadFile" name="upLoad"></input>
                </div>
                <div className="reviewArttachButtonBox">
                  <button className="reviewArttachButton">후기작성</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
