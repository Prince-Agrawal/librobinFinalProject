import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ToastContainer, toast } from "react-toastify";
import "./Buyer.css";
import baseURL from "../shared/baseURL";
import BookCard from "./BookCard";
import Filter from "./Filter";
import MobileFilter from "./mobileFilter";
import Loading from "../LoadingComponent";
import AddShopModel from "./shop_model";
import Thanks from "../Greeting/thanks";
import "./stationary.css"

// import baseURL from '../shared/baseURL'

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileFilterOpen: false,
      total_items: ["Load"],
      isModalOpen: false,
      isShopBuySubmit: false,
    };
    this.handelFilter = this.handelFilter.bind(this);
  }

  notify = (data) => toast(data);
  setStationaryItems = () => {
    fetch(baseURL + "get_stationary")
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
          total_items: response,
        });

        for (const tempItem of response) {
          this.state[tempItem._id] = 0;
          // console.log("dddddddddddddddddddddd" , tempItem._id)
        }

        // console.log('sssssssssssssssssss' , this.state.total_items)
      })
      .catch((error) => {
        console.log("Book Detail :", error.message);
      });
  };

  addToCard = (idValue) => {
    this.state[idValue] = this.state[idValue] + 1;
    console.log("Addddddddddddddddddddd", this.state[idValue]);
  };

  subToCard = (idValue) => {
    if (this.state[idValue] > 0) {
      this.state[idValue] = this.state[idValue] - 1;
    }
    console.log("Addddddddddddddddddddd", this.state[idValue]);
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
          total_items: response,
          isMobileFilterOpen: false,
        });
        // console.log('buyer books>>>>>>>>>>..' , response)
      })
      .catch((error) => {
        console.log("Contact us", error.message);
      });
  }

  componentDidMount() {
    this.setStationaryItems();
  }

  handelMobileFilter = () => {
    this.setState({
      isMobileFilterOpen: !this.state.isMobileFilterOpen,
    });
  };

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };
  handelShopSubmit = (details) => {
    console.log("fffddddddddddddddddddddddddddddddd");

    const data = {
      user_name: details.user_name,
      email: details.email,
      phone_no: details.phone_no,
      area: details.area,
      new_old: details.new_old,
      type_of_book: details.type_of_book,
      book_name: details.book_name,
      discription: details.discription,
    };
    return fetch(baseURL + "shop_buy", {
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
        // console.log("buyer books>>>>>>>>>>..", response);
        this.setState({
          isShopBuySubmit: true,
        });
      })
      .catch((error) => {
        console.log("Contact us", error.message);
      });
  };

  allAddToCard = () => {
    // console.log("sssssssssssssssss" , this.state.total_items);
    let detailArr = [];
    for (const temp of this.state.total_items) {
      const temObj = {
        stat_id: temp._id,
        qua: this.state[temp._id],
      };
      detailArr.push(temObj);
    }

    const reqObj = {
      user_id: localStorage.getItem("user_id"),
      data: detailArr,
    };

    fetch(baseURL + "add_to_card", {
      method: "POST",
      body: JSON.stringify(reqObj),
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
        // this.setState({
        //   isShopBuySubmit: true
        // })
      })
      .catch((error) => {
        console.log("Contact us", error.message);
      });
    // console.log("xxxxxxxxxxxx", detailArr)
  };
  render() {
    if (this.state.isShopBuySubmit) {
      return (
        <Thanks>
          {" "}
          Thanks for submitting your details . We have send you a confirmation
          mail on your Gmail.
        </Thanks>
      );
    } else {
      if (this.state.isMobileFilterOpen === false)
        return (
          <div>
            <Helmet>
              <title>Buy a Stationary Item</title>
            </Helmet>
            <ToastContainer />
            <div class="container">
              <div class="row">
                <div class="col-12 col-sm-12 content-settle">
                  
                  <BookCard
                    data={this.state.total_items}
                    addToCard={this.addToCard}
                    subToCard={this.subToCard}
                    state={this.state}
                  />
                </div>

              </div>
              <div className="stationary_text"> If you are not able to find items in our above list then you can order directly <a href="https://wa.link/4t9h9n" target="_blank">Click Here</a></div> 
            </div>
            <button
              class="add-to-card-floating-btn"
              onClick={() => {
                if(localStorage.getItem("user_id")){
                this.allAddToCard();
                this.notify("Items Added to Card");
                }
                else{
                  this.notify("Please Login First")
                }
              }}
            >
              Add to Cart
            </button>
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
