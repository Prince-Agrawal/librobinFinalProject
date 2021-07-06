import React, { Component } from "react";
import { Button } from "reactstrap";
import Loading from "../LoadingComponent";
import baseUrl from "../shared/baseURL";
import BookCard from "./BookCards";

// import "./sell.css";

// books which are not sold

class SoldOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sold_books: ["Load"],
    };
    this.setSoldBooks = this.setSoldBooks.bind(this);
    this.getSoldBooks = this.getSoldBooks.bind(this);
    this.handelDelete = this.handelDelete.bind(this);
  }

  handelSoldStatus(value) {
    alert("Confirm you want to change status ");
    // alert("Current State is: " + JSON.stringify(this.state));
    const bookDetailInfo = {
      book_id: value,
      sold_status: "no",
    };
    fetch(baseUrl + "update_sold_status", {
      method: "PUT",
      body: JSON.stringify(bookDetailInfo),
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
        // localStorage.setItem("user_id", response.user_id);
        // console.log(localStorage.getItem("user_id"));
        console.log("success");
        this.setSoldBooks();
        // localStorage.clear();
      })
      .catch((error) => {
        console.log("Book Detail :", error.message);
      });
  }

  handelDelete(value) {
    alert("Confirm you want to delete?");
    const book_id = {
      _id: value,
    };
    fetch(baseUrl + "delete", {
      method: "PUT",
      body: JSON.stringify(book_id),
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
        // localStorage.setItem("user_id", response.user_id);
        // console.log(localStorage.getItem("user_id"));
        console.log(response);
        this.setSoldBooks();
        // localStorage.clear();
      })
      .catch((error) => {
        console.log("Book Detail :", error.message);
      });
  }
  setSoldBooks = () => {
    // return (

    fetch(baseUrl + "sold?user_id=" + `${localStorage.getItem("user_id")}`)
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
        // console.log(response);
        this.setState({
          sold_books: response,
        } , () => {
          console.log(
            "sold_books >>>>>>>>>>>",
            this.state.sold_books
          );
        });
        // return response;
        // localStorage.clear();
      })
      .catch((error) => {
        console.log("Book Detail :", error.message);
      });

    // )

    // console.log(localStorage.getItem("user_id")) +`${localStorage.getItem("user_id")}`
  };

  getSoldBooks() {
    const item = this.state.sold_books.map((data) => {
      return (
        <BookCard data={data} handelDescription={this.handelDescription}>
          <Button
            className="btn btn-info btn-lg pl-4 pr-4 ml-4 seller-btn"
            onClick={() => {
              this.handelDelete(data._id);
            }}
          >
            <i className="fa fa-trash"></i>
          </Button>

          <Button
            onClick={() => this.handelSoldStatus(data._id)}
            className="btn btn-info btn-lg pl-4 pr-4 ml-4 seller-btn"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Transver to Available Books"
          >
            <i class="fa fa-exchange"></i>
          </Button>
        </BookCard>
      );
    });
    return item;
  }
  componentDidMount() {
    this.setSoldBooks();
  }
  render() {
    if (this.state.sold_books[0] === "Load") {
      return <Loading />;
    } else {
      return (
        <div>
          {this.state.sold_books.length > 0 ? (
            this.getSoldBooks()
          ) : (
            <h4>No data found. . .</h4>
          )}
        </div>
      );
    }
  }
}

export default SoldOut;
