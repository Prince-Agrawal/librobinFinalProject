import React, { Component } from "react";
import baseURL from "../shared/baseURL";
import { Form, Input } from "reactstrap";
import "./profile.css";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import './forgot.css'
class ResendVarification extends Component {
  render() {
    return (
      <div>
        {" "}
        <div class="container main">
          <form>
            <div class="row row-contentforgot">
              <div class="col-12 col-sm-6">
                <h1>
                  {" "}
                  Resend Varification
                </h1>
              </div>
            </div>
            <div class="row row-contentforgot">
              <div class="col-12 col-sm-6 col-forg">
                <div class="per-row">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder=" Enter Your  email "
                  />
                </div>
                <div class="per-row">
                  <button class="btn-primary btn-lg btn-block">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ResendVarification;
