import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import validator from "validator";
import { Helmet } from "react-helmet";
import baseURL from "../shared/baseURL";
import "./profile.css";
import "./forgot.css";

class Forgot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  handelForgot = () => {
    if (validator.isEmail(this.state.email)) {
      const em = {
        email: this.state.email,
      };
      // console.log('..............' , em)
      fetch(baseURL + "forgot", {
        method: "PUT",
        body: JSON.stringify(em),
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
        })
        .catch((error) => {
          console.log("Contact us", error.message);
        });
    } else {
      this.notify("Enter valid email");
    }
    // this.props.handelRootStatus();
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // console.log(value , "dddddddddddddddddddddddd ");
    this.setState({
      [name]: value,
    });
  };
  notify = (mess) => toast(mess);

  render() {
    return (
      <div>
        <Helmet>
          <title>Forgot Password</title>
        </Helmet>
        <ToastContainer />{" "}
        <div class="container main">
          <form>
            <div class="row justify-content-center ">
              <div class=" col-12 align-self-center">
                <div class="per-row  justify-content-center">
                  <h3>Forgot Password</h3>
                </div>
                <div class="per-row ">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    placeholder=" Enter Your  email "
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div class="per-row">
                  <button
                    class="btn-primary btn-lg btn-block"
                    onClick={this.handelForgot}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Forgot;
