import React, { Component } from "react";
import { Button } from "reactstrap";
import { Helmet } from "react-helmet";
import baseUrl from "../shared/baseURL";
import { Link } from "react-router-dom";
import "./sell.css";
import { Redirect } from "react-router";
import SoldOut from "./soldOut";
import Collection from "./collection";
import AddBookModel from "./model";
import Loading from "../LoadingComponent";

// var active="aative"
class Sell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionFlag: true,
      isModalOpen: false,
      isActiveAvalia: "active",
      isActiveSold: "",
      isUploading: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleCollection = this.toggleCollection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  toggleCollection(value) {
    this.setState({
      collectionFlag: value,
    });
    // console.log(!this.state.isModalOpen);
  }

  toggleActiveAvalia = () => {
    this.setState({
      isActiveAvalia: "active",
      isActiveSold: "",
    });
  };

  toggleActiveSold = () => {
    this.setState({
      isActiveAvalia: "",
      isActiveSold: "active",
    });
  };

  handleSubmit(bookDetailInfo) {
    let formData = new FormData();
    formData.append("myFile", bookDetailInfo.myFile);
    formData.append("user_id", localStorage.getItem("user_id"));
    formData.append("book_name", bookDetailInfo.book_name);
    formData.append("author_name", bookDetailInfo.author_name);
    formData.append("subjects", bookDetailInfo.subjects);
    formData.append("class", bookDetailInfo.class);
    formData.append("institution_name", bookDetailInfo.institution_name);
    formData.append("medium", bookDetailInfo.medium);
    formData.append("type_of_board", bookDetailInfo.type_of_board);
    formData.append("stream", bookDetailInfo.stream);
    formData.append("category_of_book", bookDetailInfo.category_of_book);
    formData.append("condition_of_book", bookDetailInfo.condition_of_book);
    formData.append("discription", bookDetailInfo.discription);
    formData.append("price_of_book", bookDetailInfo.price_of_book);

    alert("Please check your info once : " + JSON.stringify(bookDetailInfo));
    this.setState({ isUploading: true });
    fetch(baseUrl + "sell", {
      method: "POST",
      body: formData,

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
        // localStorage.setItem("user_id", response.user_id);
        this.setState({ isUploading: false });
        console.log(localStorage.getItem("user_id"));
        console.log("ssssssssssss", response);

        alert("Your Image is successfully Uploaded .");

        // localStorage.clear();
      })
      .catch((error) => {
        console.log("Book Detail :", error.message);
      });
    this.toggleModal();
    // event.preventDefault();
  }

  handelIsUpload = (val) => {
    this.setState({
      isUploading: val,
    });
  };

  render() {
    if (localStorage.getItem("user_id")) {
      return (
        <div>
          <Helmet>
            <title>Sell a Book</title>
          </Helmet>
          <header>
            <div className="conatiner">
              <div className="row sell-row-content">
                <div className="col-12 col-sm-6 sell-col-content">
                  <h2 className="seller-head">
                    Hii ! {localStorage.getItem("first_name")}
                  </h2>
                  <h3 className="seller-head">Welcome Back</h3>
                </div>
              </div>
            </div>
          </header>
          {this.state.isUploading ? (
            <Loading />
          ) : (
            <div>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" id="seller-nav-item">
                  <Link
                    className={"nav-link " + this.state.isActiveAvalia}
                    onClick={() => {
                      this.toggleCollection(true);
                      this.toggleActiveAvalia();
                    }}
                  >
                    Available Books
                  </Link>
                </li>
                <li className="nav-item" id="seller-nav-item">
                  <Link
                    className={"nav-link " + this.state.isActiveSold}
                    onClick={() => {
                      this.toggleCollection(false);
                      this.toggleActiveSold();
                    }}
                  >
                    Sold Out
                  </Link>
                </li>
              </ul>
              <div className="tab-content">
                {this.state.collectionFlag === true ? (
                  <Collection
                    toggleModal={this.toggleModal}
                    isModalOpen={this.state.isModalOpen}
                    handelIsUpload={this.handelIsUpload}
                  />
                ) : (
                  <SoldOut />
                )}
              </div>
              <Button
                className="material-icons  seller-floating-btn"
                onClick={this.toggleModal}
              >
                add
              </Button>
              <AddBookModel
                toggleModal={this.toggleModal}
                isModalOpen={this.state.isModalOpen}
                handleSubmit={this.handleSubmit}
                data={{}}
              />
            </div>
          )}
        </div>
      );
    } else {
      return <Redirect to="login" />;
    }
  }
}

export default Sell;
