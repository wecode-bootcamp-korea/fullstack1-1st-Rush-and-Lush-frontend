import { Component } from "react";
import Card from "./Card/Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./ItemCard.scss";

class ItemCard extends Component {
  constructor() {
    super();
    this.state = {
      list: 1,
      products: [],
    };
  }

  imgSlideLeft = () => {
    if (this.state.list > 1) {
      this.setState({
        list: 1,
      });
    } else {
      this.setState({
        list: this.state.list + 1,
      });
    }
  };

  imgSlideRight = () => {
    this.setState({
      list: 2,
    });
    if (this.state.list <= 1) {
      this.setState({
        list: 2,
      });
    } else {
      this.setState({
        list: this.state.list - 1,
      });
    }
  };

  componentDidMount() {
    fetch("http://localhost:3000/data/itemCardData.json")
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data.itemCardData,
        });
      });

    setInterval(this.imgSlideLeft, 5000);
  }

  render() {
    return (
      <div className="ItemCard">
        <div className="itemSlideContainer">
          <h2>매일 쓰고 싶은 솝</h2>
          <div
            className={
              this.state.list === 1
                ? "wholeItemSlideWrap first"
                : "wholeItemSlideWrap second"
            }
          >
            <div className="firstList">
              {this.state.products.map((product, index) => {
                return (
                  <Card
                    key={index}
                    img={product.img}
                    name={product.name}
                    desc={product.description}
                    price={product.price}
                  />
                );
              })}
            </div>
          </div>
          <div className="itemSlideBtn">
            <div>
              <button
                className="itemBtn1st"
                type="button"
                onClick={this.imgSlideLeft}
              >
                <IoIosArrowBack size="24" />
              </button>
            </div>
            <div>
              <button
                className="itemBtn2nd"
                type="button"
                onClick={this.imgSlideLeft}
              >
                <IoIosArrowForward size="24" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemCard;
