import { Component } from "react";
import "./List.scss";

class List extends Component {
  render() {
    return (
      <>
        <div className="productHeader">
          <p className="subTxt">솝</p>
          <p className="subTxt2">향기를 머금은 거품으로 구석구석 꼼꼼하게</p>
        </div>
        <div className="producListContainer">
          <nav className="productNav">
            <div className="navInfo">
              <p>솝</p>
              <select>
                <option value="">판매인기순</option>
                <option value="">추천순</option>
                <option value="">높은가격순</option>
                <option value="">리뷰많은순</option>
                <option value="">낮은가격순</option>
                <option value="">신제품순</option>
              </select>
            </div>
            <div>
              <ul>
                <li>
                  <a href="">전체</a>
                  <em>(47)</em>
                </li>
                <li>
                  <a href="">솝</a>
                  <em>(17)</em>
                </li>
                <li>
                  <a href="">샤워 젤 & 젤리</a>
                  <em>(13)</em>
                </li>
                <li>
                  <a href="">보디 컨디셔너</a>
                  <em>(4)</em>
                </li>
                <li>
                  <a href="">샤워 밤</a>
                  <em>(3)</em>
                </li>
                <li>
                  <a href="">샤워 오일</a>
                  <em>(1)</em>
                </li>
                <li>
                  <a href="">스크럽 & 버터</a>
                  <em>(7)</em>
                </li>
                <li>
                  <a href="">펀</a>
                  <em>(2)</em>
                </li>
              </ul>
            </div>
          </nav>
          <div>
            <ul>
              <li>
                <div className="a1">
                  <div className="a2">
                    <div className="a3">
                      <a>
                        <span>
                          <img />
                        </span>
                      </a>
                    </div>
                    <div className="a4">
                      <div className="a5"></div>
                      <div className="a6"></div>
                      <div className="a7"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="1">
                  <div className="2">
                    <div className="3">
                      <a>
                        <span>
                          <img />
                        </span>
                      </a>
                    </div>
                    <div className="4">
                      <div className="5"></div>
                      <div className="6"></div>
                      <div className="7"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="1">
                  <div className="2">
                    <div className="3">
                      <a>
                        <span>
                          <img />
                        </span>
                      </a>
                    </div>
                    <div className="4">
                      <div className="5"></div>
                      <div className="6"></div>
                      <div className="7"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="1">
                  <div className="2">
                    <div className="3">
                      <a>
                        <span>
                          <img />
                        </span>
                      </a>
                    </div>
                    <div className="4">
                      <div className="5"></div>
                      <div className="6"></div>
                      <div className="7"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="1">
                  <div className="2">
                    <div className="3">
                      <a>
                        <span>
                          <img />
                        </span>
                      </a>
                    </div>
                    <div className="4">
                      <div className="5"></div>
                      <div className="6"></div>
                      <div className="7"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="1">
                  <div className="2">
                    <div className="3">
                      <a>
                        <span>
                          <img />
                        </span>
                      </a>
                    </div>
                    <div className="4">
                      <div className="5"></div>
                      <div className="6"></div>
                      <div className="7"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="1">
                  <div className="2">
                    <div className="3">
                      <a>
                        <span>
                          <img />
                        </span>
                      </a>
                    </div>
                    <div className="4">
                      <div className="5"></div>
                      <div className="6"></div>
                      <div className="7"></div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="1">
                  <div className="2">
                    <div className="3">
                      <a>
                        <span>
                          <img />
                        </span>
                      </a>
                    </div>
                    <div className="4">
                      <div className="5"></div>
                      <div className="6"></div>
                      <div className="7"></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <div>
              <p></p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default List;
