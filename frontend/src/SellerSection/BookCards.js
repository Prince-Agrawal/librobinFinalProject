import React, { Component } from "react";
import { Link } from "react-router-dom";

class BookCards extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props.data)
    const { data } = this.props;
    return (
      <div className="card border-primary" id="seller-card" key={data._id}>
        <div className="card-body">
          <div className="media media-width">
            {data.image_name === "" ? (
              <img
                id="seller-book-image"
                class="ml-3 mt-2 mb-2 mr-3"
                src=""
                alt="Not Avaliable"
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
                <h5 className="card-title">{data.book_name}</h5>

                <p className="card-text">
                  Price: <small>{data.price_of_book}</small>
                </p>
              </Link>
            </div>
          </div>
          <div className="card-footer text-muted" id="seller-card-footer">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default BookCards;
