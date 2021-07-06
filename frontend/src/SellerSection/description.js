import React, { Component } from "react";
import ReadMoreAndLess from "react-read-more-less";
import { Media } from "reactstrap";
import baseUrl from "../shared/baseURL";
import "./description.css";
class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRead: false,
      mobNo: null,
      whatsappNo: null,
      location: null,
    };
  }

  handelReadMore() {
    // console.log('dfdfdfd')
    this.setState({
      isRead: !this.state.isRead,
    });
  }

  setContactData = () => {
    fetch(
      baseUrl +
        "user_data?user_id=" +
        `${this.props.location.state.detail.user_id}`
    )
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
        // console.log(">>>>>>>>>>>>>", response);
        this.setState({
          mobNo: response.message.contact_no,
          whatsappNo: response.message.whatsapp_no,
          location: response.message.location,
        });
      })
      .catch((error) => {
        console.log("Book Detail :", error.message);
      });
  };
  componentDidMount() {
    this.setContactData();
  }

  render() {
    // console.log('dfdsdsgsgsgsdgsgsgsd' , this.state.isRead)
    return (
      <div>
        <div class="container  border border-primary main">
          <div class="row row-header">
            <h3 class="header">Here is your book Details:</h3>
          </div>
          <div class="row row-mid">
            <div class="col-12 col-sm-6">
              <img
                class="imagef align-self-center mr-3 mt-5"
                src={`https://drive.google.com/uc?export=view&id=${this.props.location.state.detail.image_name}`}
              />
            </div>
            <div class="col-12 col-sm-6">
              <h4>{this.props.location.state.detail.book_name}</h4>
              <h3 class="badge badge-primary">
                Price:{" "}
                {this.props.location.state.detail.price_of_book === ""
                  ? "N/A."
                  : this.props.location.state.detail.price_of_book}
              </h3>
              <p>
                {" "}
                <strong>Class</strong>:{" "}
                {this.props.location.state.detail.class === ""
                  ? "N/A."
                  : this.props.location.state.detail.class}
              </p>
              <p>
                {" "}
                <strong>Stream</strong>:{" "}
                {this.props.location.state.detail.stream === ""
                  ? "N/A."
                  : this.props.location.state.detail.stream}
              </p>
              <p>
                {" "}
                <strong>College</strong>:{" "}
                {this.props.location.state.detail.institution_name === ""
                  ? "N/A."
                  : this.props.location.state.detail.institution_name}
              </p>
              <p>
                {" "}
                <strong>Medium</strong>:{" "}
                {this.props.location.state.detail.medium === ""
                  ? "N/A."
                  : this.props.location.state.detail.medium}
              </p>
              <p>
                {" "}
                <strong>Condition</strong>:{" "}
                {this.props.location.state.detail.condition_of_book === ""
                  ? "N/A."
                  : this.props.location.state.detail.condition_of_book}
              </p>
              <p>
                {" "}
                <strong>Author Name</strong>:{" "}
                {this.props.location.state.detail.author_name === ""
                  ? "N/A."
                  : this.props.location.state.detail.author_name}
              </p>
              <p>
                {" "}
                <strong>Subject</strong>:{" "}
                {this.props.location.state.detail.subjects === ""
                  ? "N/A."
                  : this.props.location.state.detail.subjects}
              </p>
              <p>
                {" "}
                <strong>Category</strong>:{" "}
                {this.props.location.state.detail.category_of_book === ""
                  ? "N/A."
                  : this.props.location.state.detail.category_of_book}
              </p>
              <strong>Description</strong>:{" "}
              <ReadMoreAndLess
                ref={this.ReadMore}
                className="read-more-content"
                charLimit={140}
                readMoreText="Read more"
                readLessText="Read less"
              >
                {this.props.location.state.detail.discription === ""
                  ? "N/A."
                  : this.props.location.state.detail.discription}
              </ReadMoreAndLess>
            </div>
          </div>

          <div class="row row-foot text-center">
            <div class="col-12 col-sm-4 col-foot">
              <h4 class="desc-head">
                {" "}
                <i class="fa fa-phone" aria-hidden="true"></i>
                <small>{this.state.mobNo}</small>
              </h4>
            </div>
            <div class="col-12 col-sm-4 col-foot ">
              <h4 class="desc-head">
                {" "}
                <i class="fa fa-whatsapp" aria-hidden="true"></i>
                <small>{this.state.whatsappNo}</small>
              </h4>
            </div>
            <div class="col-12 col-sm-4 col-foot">
              <h4 class="desc-head">
                {" "}
                <i class="fa fa-map" aria-hidden="true"></i>
                <small>{this.state.location}</small>
              </h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
