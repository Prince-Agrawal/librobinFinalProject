import React, { Component } from "react";
import { Button } from "reactstrap";
import Loading from "../LoadingComponent";
import baseUrl from "../shared/baseURL";
import BookCard from "./BookCards";
// import "./sell.css";
import AddBookModel from "./model";

// books which are not sold

class Collection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      not_sold_books: ["Load"],
      isModalOpen: false,
      prevModData: null,
    };
    this.setNotSoldBooks = this.setNotSoldBooks.bind(this);
    this.getNotSoldBooks = this.getNotSoldBooks.bind(this);
    this.handelEdit = this.handelEdit.bind(this);
    this.handelDelete = this.handelDelete.bind(this);
    this.handelSoldStatus = this.handelSoldStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  // function to open post a book
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  //add book detail to db
  handleSubmit(bookDetailInfo) {
    // console.log("sdsdsdsdssd" , bookDetailInfo)
    let formData = new FormData();
    formData.append("myFile", bookDetailInfo.myFile);
    formData.append("book_id", this.state.prevModData._id);
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
    this.props.handelIsUpload(true);
    fetch(baseUrl + "update", {
      method: "PUT",
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
        console.log(response);
        this.props.handelIsUpload(false);
        alert("Book Edit Success");
        // localStorage.clear();
      })
      .catch((error) => {
        console.log("Book Detail :", error.message);
      });
    this.toggleModal();
    // event.preventDefault();
  }

  // function to edit details
  handelEdit(value) {
    fetch(baseUrl + "get_detail?book_id=" + `${value}`)
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
          prevModData: response[0],
        });
      })
      .catch((error) => {
        console.log("Book Detail :", error.message);
      });
  }

  // for transfer books from collection to sold
  handelSoldStatus(value) {
    alert("Confirm you want to change status ");
    const bookDetailInfo = {
      book_id: value,
      sold_status: "yes",
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
        console.log("success");
        this.setNotSoldBooks();
      })
      .catch((error) => {
        console.log("Book Detail :", error.message);
      });
  }

  // for delete a book
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
        console.log(response);
        this.setNotSoldBooks();
      })
      .catch((error) => {
        console.log("Book Detail :", error.message);
      });
  }

  // set sold books
  setNotSoldBooks = () => {
    fetch(baseUrl + "not_sold?user_id=" + `${localStorage.getItem("user_id")}`)
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
        this.setState(
          {
            not_sold_books: response,
          },
          () => {
            console.log(
              "not_sold_books >>>>>>>>>>>",
              this.state.not_sold_books
            );
          }
        );
      })
      .catch((error) => {
        console.log("Book Detail :", error.message);
      });
  };

  // get all books
  getNotSoldBooks = () => {
    let i = 0;
    const item = this.state.not_sold_books.map((data) => {
      i++;
      return (
        // <Link to="description">
        <BookCard data={data} key={i}>
          <Button
            className="btn btn-info btn-lg pl-4 pr-4 ml-4 seller-btn"
            onClick={() => {
              this.handelDelete(data._id);
            }}
          >
            <i className="fa fa-trash"></i>
          </Button>
          <Button
            className="btn btn-info btn-lg pl-4 pr-4 ml-4 seller-btn"
            onClick={() => {
              this.toggleModal();
              this.handelEdit(data._id);
            }}
          >
            <i className="fa fa-edit"></i>
          </Button>

          <Button
            onClick={() => this.handelSoldStatus(data._id)}
            className="btn btn-info btn-lg pl-4 pr-4 ml-4 seller-btn"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Transver to Sold Out"
          >
            <i class="fa fa-exchange"></i>
          </Button>
        </BookCard>
      );
    });
    return item;
  };

  componentDidMount() {
    this.setNotSoldBooks();
  }

  render() {
    if (this.state.not_sold_books[0] === "Load") {
      return <Loading />;
    } else {
      return (
        <div>
          {this.state.not_sold_books.length > 0 ? (
            <div>
              {this.getNotSoldBooks()}
              <AddBookModel
                toggleModal={this.toggleModal}
                isModalOpen={this.state.isModalOpen}
                handleSubmit={this.handleSubmit}
                data={this.state.prevModData}
              />
            </div>
          ) : (
            <h4>No data found. . .</h4>
          )}
        </div>
      );
    }
  }
}

export default Collection;
