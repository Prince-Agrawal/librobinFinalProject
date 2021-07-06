import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Buyer.css";
import baseURL from "../shared/baseURL";
import BookCard from "./BookCard";
import Filter from "./Filter";
import MobileFilter from "./mobileFilter";
import Loading from "../LoadingComponent";
import AddShopModel from "./shop_model";
import Thanks from "../Greeting/thanks"

// import baseURL from '../shared/baseURL'

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileFilterOpen: false,
      total_books: ["Load"],
      isModalOpen: false,
      isShopBuySubmit: false
    };
    this.handelFilter = this.handelFilter.bind(this);
  }

  setNotSoldBooks = () => {
    fetch(baseURL + "buy")
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          total_books: response,
        });

        // console.log('sssssssssssssssssss' , this.state.total_books)
      })
      .catch((error) => {
        console.log("Book Detail :", error.message);
      });
  };

  handelFilter(values) {
    // console.log("dfgdfgdgfdgfdgzdzfhzdfh . ." , values)
    return fetch(baseURL + "filter", {
      method: "PUT",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) => {
        // console.log("sdsdsdsdsdvzxvdfdsdf ......." , response)
        this.setState({
          total_books: response,
          isMobileFilterOpen: false,
        });
        // console.log('buyer books>>>>>>>>>>..' , response)
      })
      .catch((error) => {
        console.log("Contact us", error.message);
      });
  }

  componentDidMount() {
    this.setNotSoldBooks();
  }

  handelMobileFilter = () => {
    this.setState({
      isMobileFilterOpen: !this.state.isMobileFilterOpen,
    });
  };

  toggleModal = ()=> {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handelShopSubmit = (details) => {
    console.log("fffddddddddddddddddddddddddddddddd");

    const data = {
      user_id: localStorage.getItem("user_id"),
      user_name: details.user_name,
      phone_no: details.phone_no,
      state: details.state,
      city: details.city,
      address: details.address,
      area: details.area,
      new_old: details.new_old,
      type_of_book: details.type_of_book,
      book_name: details.book_name,
      discription: details.discription,
    };
    return fetch(baseURL + "book_order", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            var error = new Error(
              "Error " + response.status + ": " + response.statusText
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => response.json())
      .then((response) => {
        console.log("buyer books>>>>>>>>>>..", response);
        this.setState({
          isShopBuySubmit: true
        })
      })
      .catch((error) => {
        console.log("Contact us", error.message);
      });
      
  };
  render() {
    if(this.state.isShopBuySubmit){
      return (
        <Thanks> Thanks for submitting your details . We have send you a confirmation mail on your Gmail.</Thanks>
      )
    }
    else{
    if (this.state.isMobileFilterOpen === false)
      return (
        <div>
          <Helmet>
            <title>Buy a Book</title>
          </Helmet>
          <div class="container">
            <div class="row">
              <div class="col-12 col-sm-8 content-settle">
                <div
                  class="filter-butto d-block d-sm-none"
                  onClick={() => {
                    this.props.handelFooterVisibility(false);
                  }}
                >
                  <Link>
                    <i
                      class="  iconfilter fa fa-filter"
                      aria-hidden="true"
                      onClick={this.handelMobileFilter}
                    >
                      Filter
                    </i>
                  </Link>
                </div>
                <BookCard data={this.state.total_books} />
              </div>

              <div class="d-none d-sm-block col-sm-4">
                <Filter handelFilter={this.handelFilter} />
              </div>
            </div>
          </div>
          <button class="shop-floating-btn" onClick={this.toggleModal}>
            Buy From Shop
          </button>
          <AddShopModel
            toggleModal={this.toggleModal}
            isModalOpen={this.state.isModalOpen}
            handelSubmit = {this.handelShopSubmit}
          />
        </div>
      );
    else
      return (
        <MobileFilter
          handelFilter={this.handelFilter}
          handelMobileFilter={this.handelMobileFilter}
        />
      );
  }
}
}

export default Buy;
