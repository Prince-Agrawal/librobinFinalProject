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
  getNotSoldBooks = () => {
    console.log('total books for buyer...>>>>>' , this.props.data)
    const item = this.props.data.map((data) => {
      return (
        <div class="card border-primary" id="bookcard">
          <div class="card-body">
            <div className="media">
              {data.image_name === "" ? (
                <img
                  id="seller-book-image"
                  class="ml-3 mt-2 mb-2 mr-3"
                  src=""
                  alt="N/A"
                />
              ) : (
                <img
                  id="seller-book-image"
                  class="ml-3 mt-2 mb-2 mr-3"
                  src={`https://drive.google.com/uc?export=view&id=${data.image_name}`}
                  alt="Generic placeholder image"
                />
              )}

              <div class="media-body mt-2 ml-2">
                <Link
                  to={{
                    pathname: "/description",
                    state: { detail: data },
                  }}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <h5 class="card-title">{data.book_name}</h5>
                  <p class="card-text">
                    Price <small>{data.price_of_book}</small>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return item;
  };

  render() {
    if(this.props.data[0]==="Load"){
      return(
        <Loading/>
      )
    }

    else{
      return (
        <div>
          {this.props.data.length > 0 ? (
            <div>{this.getNotSoldBooks()}</div>
          ) : (
            <h4>No data found. . .</h4>
          )}
        </div>
      );
    }
  }
}

export default BookCard;
