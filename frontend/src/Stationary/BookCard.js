import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BookCard.css";
import Loading from "../LoadingComponent";

class BookCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // const data = {this.props}

  // get all books
  getStaionaryItem = () => {
    const item = this.props.data.map((data) => {
      
    // console.log("total books for buyer...>>>>>", this.props.state[data._id]);
      return (
        <div class="card border-primary" id="bookcard">
          <div class="card-body">
            <div className="media">
            
              <img
                id="seller-book-image"
                class="ml-3 mt-2 mb-2 mr-3"
                src={data.image_link}
                alt="Generic placeholder image"
              />

              <div class="media-body mt-2 ml-2">
                <h5 class="card-title">{data.product_company}</h5>
                <p class="card-text">
                  {Object.keys(data.product_detail)[0]}:{" "}
                  <small>
                    {data.product_detail[Object.keys(data.product_detail)[0]]}
                  </small>
                </p>
                <p class="card-text">
                  Discount: <large>{data.discount}%</large>
                </p>
                <p class="card-text">
                  Price: <del>{data.price}</del> {((data.price)*(100-data.discount))/100} 
                </p>
              </div>
              <div className="rmCard" onClick={()=>this.props.subToCard(data._id)}>-</div><div className="cuCard">{this.props.state[data._id] ? this.props.state[data._id] :0 }</div><div  className="addCard" onClick={()=>this.props.addToCard(data._id)}>+</div>
            </div>
          </div>
        </div>
      );
    });
    return item;
  };

  render() {
    if (this.props.data[0] === "Load") {
      return <Loading />;
    } else {
      return (
        <div>
          {this.props.data.length > 0 ? (
            <div>{this.getStaionaryItem()}</div>
          ) : (
            <h4>No data found. . .</h4>
          )}
        </div>
      );
    }
  }
}

export default BookCard;
