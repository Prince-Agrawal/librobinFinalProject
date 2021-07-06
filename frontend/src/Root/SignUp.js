import React, { Component } from "react";
import validator from "validator";
import { FormFeedback } from "reactstrap";
import { Helmet } from "react-helmet";
import baseURL from "../shared/baseURL";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import "./signup.css";
class SignUp extends Component {
  constructor(props) {
    super(props);
    console.log("construct run");
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      message: null,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // console.log(target.name);
    this.setState({
      [name]: value,
    });
  }

  validate(first_name, last_name, email, password) {
    if (first_name.length < 3) {
      this.setState({
        message: "first_name should be >=3 character",
      });
      return false;
    } else if (first_name.length > 15) {
      this.setState({
        message: "first_name should be <=15 character",
      });
      return false;
    }
    if (last_name.length < 3) {
      this.setState({
        message: "last_name should be >=3 character",
      });
      return false;
    } else if (last_name.length > 15) {
      this.setState({
        message: "last_name should be <=15 character",
      });
      return false;
    }
    // console.log("ddddddddddd" , validator.isEmail(email))
    if (!validator.isEmail(email)) {
      this.setState({
        message: "Enter valid email",
      });
      return false;
    }
    if (password.length < 8) {
      this.setState({
        message: "Password should me of minimum 8 character",
      });
      return false;
    }

    return true;
  }

  handelSignUp = () => {
    if (
      this.validate(
        this.state.first_name,
        this.state.last_name,
        this.state.email,
        this.state.password
      )
    ) {
      const signUpInfo = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
        confirm_password: this.state.confirm_password,
      };
      fetch(baseURL + "signup", {
        method: "POST",
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
          this.setState({
            message: response.message,
          });
          localStorage.setItem("user_id", response.user_id);
          localStorage.setItem("first_name", response.name);
        })
        .catch((error) => {
          console.log("Contact us", error.message);
        });
    }
    // this.props.handelRootStatus();
  };
  render() {
    if (this.state.message === "success") {
      return <Redirect to="/home" />;
    }
    return (
      <div>
        <Helmet>
          <title>Sign Up</title>
        </Helmet>
        <div class="page-content">
          <div class="form-v4-content">
            <div class="form-left">
              <h2>Feature of Site: </h2>
              <ul className="loginInfo">
					<li class="listitemsign"> Easily Downloadable Ebooks</li>
					<li class="listitemsign">You Can share your Ebooks With Others </li>
					<li class="listitemsign">Sell Your Old Books At reasonable price</li>
					<li class="listitemsign"> Buy Old Books At reasonable price</li>
				</ul>
              <div class="form-left-last">
                <Link to="/login">
                  <input
                    type="submit"
                    name="account"
                    class="account"
                    value="Login"
                  />
                </Link>
              </div>
            </div>
            <form class="form-detail" id="myform">
              <h2>REGISTER FORM</h2>
              {this.state.message !== null && (
                <p className="alert">
                  <i class="fa fa-exclamation-circle"></i> {this.state.message}{" "}
                </p>
              )}
              <div class="form-group">
                <div class="form-row form-row-1">
                  <label for="first_name">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    class="input-text"
                    value={this.state.first_name}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div class="form-row form-row-1">
                  <label for="last_name">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    class="input-text"
                    value={this.state.last_name}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              <div class="form-row">
                <label for="your_email">Your Email</label>
                <input
                  type="text"
                  name="email"
                  id="your_email"
                  class="input-text"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </div>
              <div class="form-group">
                <div class="form-row form-row-1 ">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    class="input-text"
                    required
                    value={this.state.password}
                    onChange={this.handleInputChange}
                  />
                </div>
                <div class="form-row form-row-1">
                  <label for="comfirm-password">Comfirm Password</label>
                  <input
                    type="password"
                    name="confirm_password"
                    id="comfirm_password"
                    class="input-text"
                    required
                    value={this.state.confirm_password}
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>
              {/*<div class="form-checkbox">
                <label class="container">
                  <p>
                    I agree to the
                    <a href="#" class="text">
                      Terms and Conditions
                    </a>
                  </p>
                  <input type="checkbox" name="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>*/}
              <div class="form-row-last">
                <input
                  type="button"
                  name="register"
                  class="register"
                  value="Register"
                  onClick={this.handelSignUp}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
