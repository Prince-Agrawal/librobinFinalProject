import React, { Component } from "react";
import { Helmet } from "react-helmet";
import validator from "validator";
import baseURL from "../shared/baseURL";
import "./signup.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
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
  handelLogin = () => {
    if (this.validate()) {
      fetch(
        baseURL +
          `signin?email=${this.state.email}&password=${this.state.password}`
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
          console.log(response);
          this.setState({
            message: response.message,
          });
          if (response.message === "Login Success") {
            localStorage.setItem("user_id", response.user_id);
            localStorage.setItem("first_name", response.name);
          }
        })
        .catch((error) => {
          console.log("Contact us", error.message);
        });
    } else {
      this.setState({
        message: "Enter Valid Email",
      });
    }

    // this.props.handelRootStatus();
  };
  validate = () => {
    return validator.isEmail(this.state.email);
  };
  render() {
    if (this.state.message === "Login Success") {
      return <Redirect to="/home" />;
    }
    return (
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div class="page-content">
          <div class="form-v4-content">
            <form class="form-detail" id="myform">
              <h2>LOGIN FORM</h2>
              {this.state.message !== null && (
                <p className="alert">
                  <i class="fa fa-exclamation-circle"></i> {this.state.message}{" "}
                </p>
              )}
              <div class="form-group"></div>
              <div class="form-row">
                <label for="your_email">Your Email</label>
                <input
                  type="text"
                  name="email"
                  id="your_email"
                  class="input-text"
                  required
                  pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </div>
              <div class="form-group">
                <div class="form-row  ">
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
              </div>
              <div class="form-group">
                <div class="form-row  ">
                  <Link to="/forgot">Forgot password</Link>
                </div>
              </div>
              <div class="form-group">
                <div class="form-row  ">
                  <input
                    type="button"
                    name="register"
                    class="register"
                    value="Login"
                    onClick={this.handelLogin}
                  />
                </div>
              </div>

              <div class="form-row-last"></div>
            </form>
            <div class="form-left">
              <h2>Feature of Website: </h2>
              <ul className="loginInfo">
                <li class="listitemsign"> Easily Downloadable Ebooks</li>
                <li class="listitemsign">
                  You Can share your Ebooks With Others{" "}
                </li>
                <li class="listitemsign">
                  Sell Your Old Books At reasonable price
                </li>
                <li class="listitemsign"> Buy Old Books At reasonable price</li>
              </ul>
              <div class="form-left-last">
                <Link to="/signup">
                  <input
                    type="submit"
                    name="account"
                    class="account"
                    value="Sign Up"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
