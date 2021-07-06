import React, { Component } from "react";
import { Helmet } from "react-helmet";
import baseURL from "../shared/baseURL";

import { ToastContainer, toast } from "react-toastify";
import "./changePassword.css";
import { Redirect } from "react-router";
import Thanks from "../Greeting/thanks";

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      old_password: "",
      new_password: "",
      confirm_password: "",
      message: null,
      redirect: false,
    };
  }
  notify = (mess) => toast(mess);

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // console.log(target.name);
    this.setState({
      [name]: value,
    });
  };

  handelChangePassword = () => {
    if (this.validate(this.state.new_password)) {
      const signUpInfo = {
        user_id: localStorage.getItem("user_id"),
        old_password: this.state.old_password,
        new_password: this.state.new_password,
        confirm_password: this.state.confirm_password,
      };
      fetch(baseURL + "change_password", {
        method: "PUT",
        body: JSON.stringify(signUpInfo),
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
          if (response.message === "Password_Changed") {
            this.setState({
              redirect: true,
            });
          } else {
            this.setState(
              {
                message: response.message,
              },
              () => {
                this.notify(this.state.message);
              }
            );
          }
        })
        .catch((error) => {
          console.log("Contact us", error.message);
        });
    } else {
      this.notify(this.state.message);
    }

    // this.props.handelRootStatus();
  };

  validate(new_password) {
    if (new_password.length < 8) {
      this.setState({
        message: "Password is too short",
      });
      return false;
    }
    return true;
  }
  render() {
    if (localStorage.getItem("user_id")) {
      if (this.state.redirect === false)
        return (
          <div>
            <Helmet>
              <title>Change Password</title>
            </Helmet>
            <div class="container main">
              <ToastContainer />
              <form>
                <div class="row justify-content-center ">
                  <div class=" col-8 align-self-center">
                    <div class="per-row  justify-content-center">
                      <h3>Change Password</h3>
                    </div>
                    <div class="per-row ">
                      <input
                        type="password"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Type Your Old Password"
                        name="old_password"
                        value={this.state.old_password}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="per-row ">
                      <input
                        type="password"
                        class="border boder-primary"
                        id="exampleInputPassword1"
                        placeholder="Type Your new password"
                        name="new_password"
                        value={this.state.new_password}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="per-row ">
                      <input
                        type="password"
                        class="border boder-primary"
                        id="exampleInputPassword1"
                        placeholder="Retype Your new password"
                        name="confirm_password"
                        value={this.state.confirm_password}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div class="per-row">
                      <button
                        class="btn-primary btn-lg btn-block"
                        type="button"
                        onClick={this.handelChangePassword}
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
      else {
        return <Thanks>Your password is successfully Changed</Thanks>;
      }
    } else {
      return(
      <Redirect to="/signup" />
      )
    }
  }
}

export default ChangePassword;
